import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../services/api";

export const GET_ME_QUERY_KEY = "me";
const useGetMe = () => {
  return useQuery({
    queryKey: [GET_ME_QUERY_KEY],
    queryFn: () => {
      return getMe();
    },
  });
};

export default useGetMe;
