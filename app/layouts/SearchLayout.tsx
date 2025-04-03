import { Outlet } from "react-router";

import CategoryHeader from "./components/categoryHeader";
import FloatingButton from "./components/floatingButton";
import Footers from "./components/footers";
import SearchHeader from "./components/searchHeader";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div className="max-w-[600px] w-full flex flex-col relative pb-[56px]">
        <SearchHeader />
        <Outlet />
        <Footers />
      </div>
    </div>
  );
};

export default SearchLayout;
