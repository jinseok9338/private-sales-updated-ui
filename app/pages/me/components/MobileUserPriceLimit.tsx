import { useTranslation } from "react-i18next";
import { TypoBody14 } from "~/components/ui/typo/AnchorsBody14";

const MobileUserPriceLimit = ({
  availablePrice,
  usedPrice,
  remainingPrice,
}: {
  availablePrice: number;
  usedPrice: number;
  remainingPrice: number;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 bg-[#FAFAFA] p-5">
      <TypoBody14 className="text-[14px] font-[600] leading-5">
        {t("header.limit.limit")}
      </TypoBody14>
      <div className="flex items-center gap-2">
        <TypoBody14 className="text-[10px] font-[400] leading-[14px] text-[#727272]">
          {t("header.limit.total")}
        </TypoBody14>
        <TypoBody14 className="text-center text-[14px] font-[600] leading-5">
          {availablePrice.toLocaleString()}
        </TypoBody14>
      </div>
      <div className="flex items-center gap-2">
        <TypoBody14 className="text-[10px] font-[400] leading-[14px] text-[#727272]">
          {t("header.limit.used")}
        </TypoBody14>
        <TypoBody14 className="text-center text-[14px] font-[600] leading-5 text-[#E83A2E]">
          {usedPrice.toLocaleString()}
        </TypoBody14>
      </div>
      <div className="flex items-center gap-2">
        <TypoBody14 className="text-[10px] font-[400] leading-[14px] text-[#727272]">
          {t("header.limit.remaining")}
        </TypoBody14>
        <TypoBody14 className="text-center text-[14px] font-[600] leading-5">
          {remainingPrice.toLocaleString()}
        </TypoBody14>
      </div>
    </div>
  );
};

export default MobileUserPriceLimit;

//styleName: Caption/10 Regular;
