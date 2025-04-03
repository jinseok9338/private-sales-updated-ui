import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import SearchIcon from "~/assets/icons/search-black.svg";
import XIcon from "~/assets/icons/closesquare-gray.svg";
import { Input } from "~/components/ui/input";
import { useEffect, useRef, useState } from "react";
import useRecentSearch from "~/stores/useRecentSearch";

type SearchFormValues = {
  searchQuery: string;
};

const SearchInputWithIcon = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hasText, setHasText] = useState(false);
  const pathname = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, watch, setValue } = useForm<SearchFormValues>(
    {
      defaultValues: {
        searchQuery: "",
      },
    }
  );

  // Focus input on first render
  useEffect(() => {
    if (inputRef.current && !pathname.pathname.includes("/search")) {
      inputRef.current.focus();
    }
  }, []);

  const { addRecentSearch } = useRecentSearch();
  const excludePaths = ["/search", "/search/result"];

  const searchQuery = watch("searchQuery");

  useEffect(() => {
    setHasText(!!searchQuery);
  }, [searchQuery]);

  const onSubmit = (data: SearchFormValues) => {
    const searchTerm = data.searchQuery.trim();
    if (searchTerm) {
      navigate(`/search/result?q=${searchTerm}`);
      addRecentSearch(searchTerm);
      // blur the input
      inputRef.current?.blur();
      return;
    }
  };

  const handleClear = () => {
    setValue("searchQuery", "");
    setHasText(false);
    // Focus the input after clearing
    inputRef.current?.focus();
  };

  const handleOnFocus = () => {
    if (!excludePaths.includes(pathname.pathname)) {
      navigate("/search");
    }
  };

  // Combine the ref from react-hook-form with our custom ref
  const { ref, ...registerProps } = register("searchQuery");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex-1">
      <Input
        onClick={handleOnFocus}
        {...registerProps}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        readOnly={!excludePaths.includes(pathname.pathname)}
        placeholder={t("category.header.search")}
        className={`w-full border border-common-line h-9 rounded focus:outline-none focus:ring-0 focus:border focus:border-common-line focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-common-line active:border-common-line ${
          hasText ? "pr-16" : "pr-10"
        }`}
      />
      {hasText && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute inset-y-0 right-10 flex items-center bg-transparent border-none"
          aria-label="Clear search"
        >
          <img src={XIcon} alt="clear" className="w-4 h-4" />
        </button>
      )}
      <button
        type="submit"
        className="absolute inset-y-0 right-4 flex items-center bg-transparent border-none"
      >
        <img src={SearchIcon} alt="search" className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchInputWithIcon;
