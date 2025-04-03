import { useMutation } from "@tanstack/react-query";
import changePassword from "../services/api";

const useChangePassword = () => {
  return useMutation({ mutationFn: changePassword });
};

export default useChangePassword;
