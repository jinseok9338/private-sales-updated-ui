import { useTranslation } from "react-i18next";
import CloseIcon from "~/assets/icons/close-black.svg";
import { TypoBody13Semibold } from "~/components/ui/typo/AnchorsBody13";
import TypoP_UI_Semibold from "~/components/ui/typo/AnchorsPUISemibold";
import useFormatPrice from "~/hooks/useFormatPrice";
import { useGetConfirmedItems } from "../../hooks/useConfirmedItems";
import PriceInfo from "./priceInfo";

const PurchaseDetailContent = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation();
  const { data: confirmedItems } = useGetConfirmedItems();
  const { formatPrice } = useFormatPrice();
  const totalPrice =
    confirmedItems?.reduce((acc, item) => acc + item.price, 0) ?? 0;

  return (
    <>
      <div className="px-4 flex flex-col gap-4 pb-4 mb-[153px]">
        <div className="flex justify-between">
          <TypoP_UI_Semibold>
            {t("cart.purchaseDetailDrawer.title")}
          </TypoP_UI_Semibold>
          <button className="p-0" onClick={onClose}>
            <img src={CloseIcon} alt="close" className="w-6 h-6" />
          </button>
        </div>
        <PriceInfo />
        <div className="flex justify-between">
          <TypoBody13Semibold>
            {t("cart.purchaseDetailDrawer.totalAmount")}
          </TypoBody13Semibold>
          <TypoBody13Semibold className="text-red-400">
            {formatPrice(totalPrice)}
          </TypoBody13Semibold>
        </div>
      </div>

      {/* <Separator /> */}
      {/* <div className="flex flex-col gap-3 px-4 py-3"> */}
      {/* Total number and see detail */}
      {/* <div className="flex items-center justify-between">
          <TypoBody13Semibold>
            {t("cart.purchaseButtonArea.totalNumber", {
              n: totalQuantity,
            })}
          </TypoBody13Semibold>
        </div> */}
      {/* <Separator /> */}
      {/* remaining pay limit */}
      {/* <div className="flex w-full items-center justify-between">
          <TypoBody13>
            {t("product.purchaseButton.remainingPurchaseCount")}
          </TypoBody13>
          <div className="flex items-center gap-1">
            <TypoBody13>{`${payLimit?.remainingLimit}`}</TypoBody13>
            <TypoDetail12 className="text-gray-500">
              {` / ${payLimit?.givenPayLimit}`}
            </TypoDetail12>
          </div>
        </div> */}

      {/* purchase button */}
      {/* <div className="flex w-full items-center justify-between">
          <Button variant="default" className="w-full">
            <TypoBody13Semibold>
              {t("cart.purchaseButtonArea.purchaseButton", {
                priceString: formattedTotalPrice,
              })}
            </TypoBody13Semibold>
          </Button>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default PurchaseDetailContent;
