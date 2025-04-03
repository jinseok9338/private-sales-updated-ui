import { useMutation } from "@tanstack/react-query";
import { logoutMe } from "~/pages/me/services/api";

const useLogout = () => {
  return useMutation({
    mutationFn: () => logoutMe(),
  });
};

export default useLogout;
