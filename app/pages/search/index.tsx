import SearchFileter from "./components/SearchFileter";
import SearchTitle from "./components/SearchTitle";
import TrendingList from "./components/TrendingList";

const SearchIndex = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="p-4">
        <SearchTitle />
        <SearchFileter />
        <TrendingList />
      </div>
    </div>
  );
};

export default SearchIndex;
