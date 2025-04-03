import { useMutation } from "@tanstack/react-query";
import { purchaseConfirmedItems } from "../services/confirmedItemsCartApi";

const usePurchase = () => {
  return useMutation({
    mutationFn: purchaseConfirmedItems,
  });
};

export default usePurchase;
