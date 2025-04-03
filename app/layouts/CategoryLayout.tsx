import { Outlet } from "react-router";

import CategoryHeader from "./components/categoryHeader";
import FloatingButton from "./components/floatingButton";
import Footers from "./components/footers";

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[600px] w-full flex flex-col relative pb-[56px]">
        <CategoryHeader />
        <Outlet />
        <Footers />
        <FloatingButton />
      </div>
    </div>
  );
};

export default CategoryLayout;
