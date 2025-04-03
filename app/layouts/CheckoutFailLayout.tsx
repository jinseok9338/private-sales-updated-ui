import { Outlet } from "react-router";

import { cn } from "~/lib/utils";
import CheckoutFailHeader from "./components/checkoutFailHeader";

const CheckoutFailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div
        className={cn("max-w-[600px] w-full flex flex-col relative pb-[56px]")}
      >
        <CheckoutFailHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default CheckoutFailLayout;
