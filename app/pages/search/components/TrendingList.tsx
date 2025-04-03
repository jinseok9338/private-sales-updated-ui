import { Link } from "react-router";
import CloseIcon from "~/assets/icons/close-black.svg";
import { TypoSubtle } from "~/components/ui/typo/AnchorsSubtle";
import useRecentSearch from "~/stores/useRecentSearch";

const RecentSearchList = () => {
  const { recentSearch, removeRecentSearch } = useRecentSearch();

  return (
    <>
      {recentSearch.map((search) => (
        <div
          className="flex items-center justify-between px-4 py-3"
          key={search.timestamp}
        >
          <Link to={`/search/result?q=${search.searchTerm}`}>
            <TypoSubtle>{search.searchTerm}</TypoSubtle>
          </Link>

          <button onClick={() => removeRecentSearch(search.searchTerm)}>
            <img src={CloseIcon} alt="close" className="w-4 h-4" />
          </button>
        </div>
      ))}
    </>
  );
};

export default RecentSearchList;
