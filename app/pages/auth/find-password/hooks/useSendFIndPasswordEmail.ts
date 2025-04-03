import { useMutation } from "@tanstack/react-query";
import sendFindPasswordEmail from "../services/api";

const useSendFindPasswordEmail = () => {
  return useMutation({
    mutationFn: sendFindPasswordEmail,
  });
};

export default useSendFindPasswordEmail;
