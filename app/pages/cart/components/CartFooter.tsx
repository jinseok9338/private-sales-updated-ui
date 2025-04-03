import { Button } from "~/components/ui/button";
import { ACTIVE_CART_TAB } from "~/constants/QueryStringKeys";
import ConfirmCartItemModalButton from "./ConfirmCartItemModalButton";
import PurchaseButtonArea from "./PurchseButtonArea";
import { useTranslation } from "react-i18next";
import { useQueryState } from "nuqs";
import { useGetCart } from "../hooks/useCarts";

export default function CartFooter({
  selectedItemsId,
}: {
  selectedItemsId: string[];
}) {
  const { t } = useTranslation();
  const [activeCartTab] = useQueryState(ACTIVE_CART_TAB.key, {
    defaultValue: ACTIVE_CART_TAB.defaultValue,
  });
  const { data: cartItems } = useGetCart();
  const cartItemsId = cartItems?.map((item) => item.id);

  return (
    <div className="fixed bottom-0 max-w-[600px] w-full left-1/2 -translate-x-1/2 right-0 py-3 px-4 bg-common-white z-[50] flex justify-center">
      {activeCartTab === ACTIVE_CART_TAB.defaultValue ? (
        <ConfirmCartItemModalButton
          trigger={
            <Button
              variant="default"
              className="w-full max-w-[600px]"
              disabled={selectedItemsId.length === 0}
            >
              {t("cart.confirmModal.confirm")}
            </Button>
          }
          disabled={selectedItemsId.length === 0}
          itemIds={cartItemsId ?? []}
        />
      ) : (
        <PurchaseButtonArea />
      )}
    </div>
  );
}
