import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import {
  TypoBody13,
  TypoBody13Semibold,
} from "~/components/ui/typo/AnchorsBody13";
import { TypoDetail12 } from "~/components/ui/typo/AnchorsDetail12";
import useFormatPrice from "~/hooks/useFormatPrice";
import {
  CONFIRMED_ITEMS_QUERY_KEY,
  useGetConfirmedItems,
} from "../hooks/useConfirmedItems";
import usePayLimit from "../hooks/usePayLimit";

import { PURCHASE_DETAIL_DRAWER_OPEN } from "~/constants/QueryStringKeys";
import { useQueryState } from "nuqs";
import ArrowUp from "~/assets/icons/arrow-up-black.svg";
import ArrowDown from "~/assets/icons/arrow-down-black.svg";
import usePurchase from "../hooks/usePurchase";
import { queryClient } from "~/api/react-query";
import { CART_QUERY_KEY } from "../hooks/useCarts";
import { useNavigate } from "react-router";

const PurchaseButtonArea = () => {
  const { t } = useTranslation();
  const { data: confirmedItems } = useGetConfirmedItems();
  const { formatPrice } = useFormatPrice();
  const { mutateAsync: purchaseConfirmedItems } = usePurchase();
  const totalPrice = confirmedItems?.reduce((acc, item) => acc + item.price, 0);
  const totalQuantity = confirmedItems?.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const [purchaseDetailDrawerOpen, setPurchaseDetailDrawerOpen] = useQueryState(
    PURCHASE_DETAIL_DRAWER_OPEN.key,
    {
      parse: (value: string) => value === "true",
      defaultValue: PURCHASE_DETAIL_DRAWER_OPEN.defaultValue,
    }
  );

  const { data: payLimit } = usePayLimit();
  const formattedTotalPrice = formatPrice(totalPrice ?? 0);
  const navigate = useNavigate();

  const handlePurchase = async () => {
    try {
      const res = await purchaseConfirmedItems({
        itemId: confirmedItems?.[0].id ?? "",
        quantity: totalQuantity ?? 0,
      });
      setPurchaseDetailDrawerOpen(false);
      queryClient.invalidateQueries({
        queryKey: [CONFIRMED_ITEMS_QUERY_KEY],
      });
      queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY],
      });

      if (res) {
        navigate(`/checkout/success?orderId=${"1234567890"}`);
        return;
      }
      navigate("/checkout/fail");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Total number and see detail */}
      <div className="flex items-center justify-between">
        <TypoBody13Semibold>
          {t("cart.purchaseButtonArea.totalNumber", {
            n: totalQuantity,
          })}
        </TypoBody13Semibold>
        <Button
          variant="ghost"
          size="xs"
          className="p-0 flex items-center gap-1"
          onClick={() => {
            setPurchaseDetailDrawerOpen(!purchaseDetailDrawerOpen);
          }}
        >
          <TypoBody13Semibold>
            {t("cart.purchaseButtonArea.detail")}
          </TypoBody13Semibold>
          <img
            src={purchaseDetailDrawerOpen ? ArrowDown : ArrowUp}
            alt="arrow"
            className="w-4 h-4"
          />
        </Button>
      </div>
      <Separator />
      {/* remaining pay limit */}
      <div className="flex w-full items-center justify-between">
        <TypoBody13>
          {t("product.purchaseButton.remainingPurchaseCount")}
        </TypoBody13>
        <div className="flex items-center gap-1">
          <TypoBody13>{`${payLimit?.remainingLimit}`}</TypoBody13>
          <TypoDetail12 className="text-gray-500">
            {` / ${payLimit?.givenPayLimit}`}
          </TypoDetail12>
        </div>
      </div>

      {/* purchase button */}
      <div className="flex w-full items-center justify-between">
        <Button
          variant="default"
          className="w-full"
          onClick={handlePurchase}
          disabled={totalQuantity === 0}
        >
          <TypoBody13Semibold>
            {t("cart.purchaseButtonArea.purchaseButton", {
              priceString: formattedTotalPrice,
            })}
          </TypoBody13Semibold>
        </Button>
      </div>
    </div>
  );
};

export default PurchaseButtonArea;
