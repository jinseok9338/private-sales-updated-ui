import { Outlet } from "react-router";

import CategoryResultHeader from "./components/categoryResultHeader";
import CategoryTab from "./components/categoryResultHeader/components/CategoryTab";
import FloatingButton from "./components/floatingButton";
import Footers from "./components/footers";
import Terms from "./components/Terms";
import CategoryDrawer from "./components/categoryResultHeader/components/CategoryDrawer";
import { useState } from "react";
import CategoryThirdTab from "./components/categoryResultHeader/components/CategoryThirdTab";

const CategoryResultLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const toggleOpen = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <div className="flex justify-center min-h-page">
      <div className="max-w-[600px] w-full flex flex-col relative mb-[56px] pt-[56px]">
        <CategoryResultHeader isSelectOpen={open} toggleOpen={toggleOpen} />
        <CategoryTab />
        <CategoryThirdTab />
        <Outlet />
        <Terms />
        <Footers />
        <FloatingButton />
        <CategoryDrawer open={open} onClose={handleClose} />
      </div>
    </div>
  );
};

export default CategoryResultLayout;
