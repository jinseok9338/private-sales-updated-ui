import { Outlet } from "react-router";

import GoodsHeader from "./components/GoodsHeader";
import FloatingButton from "./components/floatingButton";

const GoodsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div className="max-w-[600px] w-full flex flex-col relative pb-[56px]">
        <GoodsHeader />
        <Outlet />
        <FloatingButton />
      </div>
    </div>
  );
};

export default GoodsLayout;
