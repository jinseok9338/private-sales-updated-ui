import { Outlet } from "react-router";
import { cn } from "~/lib/utils";
import CheckoutSuccessHeader from "./components/checkoutSuccessHeader";
import FloatingButton from "./components/floatingButton";

const CheckoutSuccessLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div
        className={cn("max-w-[600px] w-full flex flex-col relative pb-[56px]")}
      >
        <CheckoutSuccessHeader />
        <Outlet />
        <FloatingButton />
      </div>
    </div>
  );
};

export default CheckoutSuccessLayout;
