import { Link } from "react-router";
import SearchInput from "./searchInput";

const SearchBar = () => {
  return (
    <Link to="/search">
      <div className="flex items-center bg-common-white justify-center h-[60px] w-full px-4 py-3">
        <SearchInput />
      </div>
    </Link>
  );
};

export default SearchBar;
