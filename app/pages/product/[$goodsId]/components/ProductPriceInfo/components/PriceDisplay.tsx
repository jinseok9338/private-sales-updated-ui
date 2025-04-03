import { useTranslation } from "react-i18next";
import InfoIcon from "~/assets/icons/info-gray-notfilled.svg";
import Padding from "~/components/ui/padding";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import TypoLarge from "~/components/ui/typo/AnchorsLarge";
import useFormatPrice from "~/hooks/useFormatPrice";

interface PriceDisplayProps {
  price: number;
  discountPrice?: number;
}

export function PriceDisplay({ price, discountPrice }: PriceDisplayProps) {
  const { t } = useTranslation();
  const { formatPrice } = useFormatPrice();

  const discountRate = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100) + "%"
    : "";

  return (
    <>
      <TypoBody13 className="text-gray-500 line-through">
        {formatPrice(price)}
      </TypoBody13>
      <Padding height={4} />
      <div className="flex items-center gap-1">
        {discountRate && (
          <TypoLarge className="text-red-500">{discountRate}</TypoLarge>
        )}
        <TypoLarge>{formatPrice(price)}</TypoLarge>
        <div>
          <Popover modal>
            <PopoverTrigger asChild>
              <div className="cursor-pointer">
                <img src={InfoIcon} alt="info" width={16} height={16} />
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="py-2 px-3 w-[288px] !border !border-gray-200  shadow-none rounded-md"
              align="start"
              alignOffset={-100}
              sideOffset={8}
            >
              <TypoBody13>{t("productCard.sellerInfo.priceInfo")}</TypoBody13>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
}
