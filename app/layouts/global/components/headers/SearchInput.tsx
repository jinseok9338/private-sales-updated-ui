import { Search } from "lucide-react";
import { Link } from "react-router";

const SearchInput = () => {
  return (
    <div className="flex-1 relative">
      <Link to="/search">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={20} />
        </div>
      </Link>
      <Link to="/search">
        <input
          type="text"
          placeholder="하나만 사도 무료배송"
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white"
        />
      </Link>
    </div>
  );
};

export default SearchInput;
