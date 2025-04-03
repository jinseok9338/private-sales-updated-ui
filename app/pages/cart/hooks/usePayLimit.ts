import { useQuery } from "@tanstack/react-query";
import { getPayLimit } from "../services/cartApi";

export const PayLimitKey = "payLimit";
const usePayLimit = () => {
  return useQuery({
    queryKey: [PayLimitKey],
    queryFn: () => getPayLimit(),
  });
};

export default usePayLimit;
