import { useQuery } from "@tanstack/react-query";
import getPurchaseHistory from "../services/api";

export const GET_PURCHASE_HISTORY_QUERY_KEY = "purchase-history";

const useGetPurchaseHistory = () => {
  return useQuery({
    queryKey: [GET_PURCHASE_HISTORY_QUERY_KEY],
    queryFn: getPurchaseHistory,
  });
};

export default useGetPurchaseHistory;
