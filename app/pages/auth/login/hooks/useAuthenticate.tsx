import { useMutation } from "@tanstack/react-query";
import { authenticateUser } from "~/pages/auth/login/services/api";

const useAuthenticate = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authenticateUser(email, password),
  });
};

export default useAuthenticate;
