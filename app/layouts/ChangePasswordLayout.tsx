import { Outlet } from "react-router";
import { cn } from "~/lib/utils";
import ChangePasswordHeader from "./components/changePasswordHeader";

const PurchaseHistoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div
        className={cn("max-w-[600px] w-full flex flex-col relative pb-[56px]")}
      >
        <ChangePasswordHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default PurchaseHistoryLayout;
