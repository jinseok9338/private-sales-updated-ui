import { Outlet } from "react-router";
import PurchaseHistoryLayout from "~/layouts/PurchaseHistoryLayout";

const PurchaseHistory = () => {
  return (
    <PurchaseHistoryLayout>
      <Outlet />
    </PurchaseHistoryLayout>
  );
};

export default PurchaseHistory;
