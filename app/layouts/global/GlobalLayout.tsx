import { Outlet } from "react-router";
import UILayout from "./components";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UILayout>
      <Outlet />
    </UILayout>
  );
};

export default GlobalLayout;
