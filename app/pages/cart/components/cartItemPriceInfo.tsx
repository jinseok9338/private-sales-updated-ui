import { useTranslation } from "react-i18next";
import { TypoDetail12Medium } from "~/components/ui/typo/AnchorsDetail12";
import useFormatPrice from "~/hooks/useFormatPrice";

const CartItemPriceInfo = ({
  salePrice,
  paymentPrice,
  additionalDiscount,
}: {
  salePrice: number;
  paymentPrice: number;
  additionalDiscount: number;
}) => {
  const { t } = useTranslation();
  const { formatPrice } = useFormatPrice();
  return (
    <div className="p-3 bg-gray-100 rounded-lg">
      <div className="flex justify-between">
        <TypoDetail12Medium className="text-gray-500">
          {t("cart.itemPriceInfo.salePrice")}
        </TypoDetail12Medium>
        <TypoDetail12Medium>{formatPrice(salePrice)}</TypoDetail12Medium>
      </div>
      <div className="flex justify-between">
        <TypoDetail12Medium className="text-gray-500">
          {t("cart.itemPriceInfo.paymentPrice")}
        </TypoDetail12Medium>
        <TypoDetail12Medium>{formatPrice(paymentPrice)}</TypoDetail12Medium>
      </div>
      <div className="flex justify-between">
        <TypoDetail12Medium className="text-gray-500">
          {t("cart.itemPriceInfo.additionalDiscount")}
        </TypoDetail12Medium>
        <TypoDetail12Medium>
          {formatPrice(additionalDiscount)}
        </TypoDetail12Medium>
      </div>
    </div>
  );
};

export default CartItemPriceInfo;
