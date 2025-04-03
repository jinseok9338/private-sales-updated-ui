import { useTranslation } from "react-i18next";
import { useGetConfirmedItems } from "../../hooks/useConfirmedItems";
import useFormatPrice from "~/hooks/useFormatPrice";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";

const PriceInfo = () => {
  const { t } = useTranslation();
  const { data: confirmedItems } = useGetConfirmedItems();
  const { formatPrice } = useFormatPrice();

  const totalPrice =
    confirmedItems?.reduce((acc, item) => acc + item.price, 0) ?? 0;
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="flex justify-between py-1">
        <TypoBody13>{t("cart.itemPriceInfo.salePrice")}</TypoBody13>
        <TypoBody13>{formatPrice(totalPrice)}</TypoBody13>
      </div>
      <div className="flex justify-between py-1">
        <TypoBody13>{t("cart.itemPriceInfo.paymentPrice")}</TypoBody13>
        <TypoBody13>{formatPrice(totalPrice)}</TypoBody13>
      </div>
      <div className="flex justify-between py-1">
        <TypoBody13>{t("cart.itemPriceInfo.additionalDiscount")}</TypoBody13>
        <TypoBody13>{formatPrice(totalPrice)}</TypoBody13>
      </div>
    </div>
  );
};

export default PriceInfo;
