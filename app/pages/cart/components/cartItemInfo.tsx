import { useTranslation } from "react-i18next";
import {
  TypoBody13,
  TypoBody13Semibold,
} from "~/components/ui/typo/AnchorsBody13";
import { TypoBody14 } from "~/components/ui/typo/AnchorsBody14";
import { TypoDetail12Medium } from "~/components/ui/typo/AnchorsDetail12";
import TypoLabelMedium from "~/components/ui/typo/AnchorsLabelMedium";
import { cn } from "~/lib/utils";
import CopyIcon from "~/assets/icons/copy-gray.svg";
import { toast } from "sonner";
import useFormatPrice from "~/hooks/useFormatPrice";
import CartItemPriceInfo from "./cartItemPriceInfo";

interface CartItemInfoProps {
  name: string;
  imageUrl: string;
  productCode: string;
  price: number;
  quantity: number;
  isSoldOut?: boolean;
  option: string;
}

const CartItemInfo = ({
  name,
  imageUrl,
  productCode,
  price,
  quantity,
  option,
  isSoldOut = false,
}: CartItemInfoProps) => {
  const { t } = useTranslation();
  const { formatPrice } = useFormatPrice();
  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success(t("product.sellerInfo.copy-success"), {
        position: "bottom-center",
      });
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        toast.success(t("product.sellerInfo.copy-success"), {
          position: "bottom-center",
        });
      } catch (err) {
        toast.error(t("common.error"));
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="flex gap-3">
      {/* Product Image */}
      <div className="relative w-[76px] bg-common-alternate h-[86px] flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className={cn(
            "w-full h-full object-cover rounded-md",
            isSoldOut && "opacity-50"
          )}
        />
        {isSoldOut && (
          <div className="absolute bg-gray-600 px-1 bottom-0 left-0 flex items-center justify-center">
            <TypoLabelMedium className="text-common-white">
              {t("cartItemInfo.image.soldOut")}
            </TypoLabelMedium>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-[2px]">
        {/* Product Name and Code */}
        <TypoBody13 className="line-clamp-2">{name}</TypoBody13>
        <div className="flex gap-[2px] items-center ">
          <TypoBody13 className="text-gray-500">{productCode}</TypoBody13>
          <div
            className="cursor-pointer"
            onClick={() => handleCopy(productCode)}
          >
            <img src={CopyIcon} alt="copy" className="w-4 h-4" />
          </div>
        </div>
        <TypoBody13 className="text-gray-600">
          {option} / {t("common.numberOf", { n: quantity })}
        </TypoBody13>
        {/* isSoldOut text-gray-400 if not text-common-black */}
        <TypoBody13Semibold
          className={cn(isSoldOut ? "text-gray-400" : "text-common-black")}
        >
          {formatPrice(price)}
        </TypoBody13Semibold>
      </div>
    </div>
  );
};

export default CartItemInfo;
