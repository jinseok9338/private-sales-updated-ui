import { Outlet } from "react-router";
import { cn } from "~/lib/utils";
import PurchaseHistoryHeader from "./components/purchaseHistoryHeader";

const PurchaseHistoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div
        className={cn("max-w-[600px] w-full flex flex-col relative pb-[56px]")}
      >
        <PurchaseHistoryHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default PurchaseHistoryLayout;
