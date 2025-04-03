import { useQuery } from "@tanstack/react-query";
import { getQuota } from "../services/api";

export const QUOTA_QUERY_KEY = "quota";

const useGetQuota = () => {
  return useQuery({ queryKey: [QUOTA_QUERY_KEY], queryFn: getQuota });
};

export default useGetQuota;
