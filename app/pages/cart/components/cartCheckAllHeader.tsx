import { useQueryState } from "nuqs";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { TypoDetail12Medium } from "~/components/ui/typo/AnchorsDetail12";
import { ACTIVE_CART_TAB } from "~/constants/QueryStringKeys";
import { CART_QUERY_KEY, useClearCart, useGetCart } from "../hooks/useCarts";
import { toast } from "sonner";
import { queryClient } from "~/api/react-query";
import DeleteCartItemModalButton from "./DeleteCartItemModalButton";

const CartCheckAllArea = ({
  selectedItemsId,
  handleSelectAll,
}: {
  selectedItemsId: string[];
  handleSelectAll: (checked: boolean) => void;
}) => {
  const { t } = useTranslation();
  const [activeCartTab] = useQueryState(ACTIVE_CART_TAB.key, {
    defaultValue: ACTIVE_CART_TAB.defaultValue,
  });
  const { data: cartItems } = useGetCart();
  const { mutateAsync: clearCart } = useClearCart();

  const handleClearCart = async () => {
    try {
      await clearCart();
      toast.success(t("cart.header.clearCartSuccess"));
      queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY],
      });
    } catch (error) {
      toast.error(t("cart.header.clearCartError"));
      console.error(error);
    }
  };

  const totalItemsCount = cartItems?.length;
  const selectedItemsCount = selectedItemsId.length;
  const hasSoldOutItems = cartItems?.some((item) => item.stock === 0);
  const numberOfSoldOutItems = cartItems?.filter(
    (item) => item.stock === 0
  ).length;
  return (
    <>
      {activeCartTab === ACTIVE_CART_TAB.defaultValue && (
        <div className="flex justify-between items-center h-13  py-3 px-4">
          <div className="flex items-center gap-[6px] justify-between">
            <Checkbox
              id="select-all"
              checked={
                selectedItemsCount > 0 && selectedItemsCount === totalItemsCount
              }
              onCheckedChange={handleSelectAll}
            />
            <label htmlFor="select-all" className="text-body13-semibold">
              {t("cart.header.selectAll")}
            </label>
          </div>
          <DeleteCartItemModalButton
            itemIds={selectedItemsId}
            trigger={
              <Button
                variant="outline"
                size="xs"
                disabled={selectedItemsCount === 0}
              >
                <TypoDetail12Medium>
                  {t("cart.header.deleteSelected")}
                </TypoDetail12Medium>
              </Button>
            }
          />
        </div>
      )}

      {hasSoldOutItems && activeCartTab === ACTIVE_CART_TAB.defaultValue && (
        <>
          <div className="bg-common-alternate py-3 px-4 flex items-center justify-between">
            <TypoBody13>
              {t("cart.header.soldOutItemsNotice", {
                n: numberOfSoldOutItems,
              })}
            </TypoBody13>

            <Button
              variant="outline"
              size="xs"
              className="bg-common-alternate"
              onClick={handleClearCart}
            >
              <TypoDetail12Medium>
                {t("cart.header.soldOutItemDelete")}
              </TypoDetail12Medium>
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default CartCheckAllArea;
