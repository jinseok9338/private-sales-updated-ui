import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import FeedbackLink from "~/components/ui/Link";

const SearchInput = () => {
  const { t } = useTranslation();
  const placeholder = t("header.search.placeholder");

  return (
    <div className="flex-1 relative">
      <FeedbackLink to="/search">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={20} />
        </div>
      </FeedbackLink>
      <FeedbackLink to="/search">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white"
        />
      </FeedbackLink>
    </div>
  );
};

export default SearchInput;
