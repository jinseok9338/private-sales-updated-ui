import { useTranslation } from "react-i18next";
import ParagraphS from "~/components/ui/typo/paragraph_s";

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
      <ParagraphS className="text-[14px] font-[600] leading-5">
        {t("header.limit.limit")}
      </ParagraphS>
      <div className="flex items-center gap-2">
        <ParagraphS className="text-[10px] font-[400] leading-[14px] text-[#727272]">
          {t("header.limit.total")}
        </ParagraphS>
        <ParagraphS className="text-center text-[14px] font-[600] leading-5">
          {availablePrice.toLocaleString()}
        </ParagraphS>
      </div>
      <div className="flex items-center gap-2">
        <ParagraphS className="text-[10px] font-[400] leading-[14px] text-[#727272]">
          {t("header.limit.used")}
        </ParagraphS>
        <ParagraphS className="text-center text-[14px] font-[600] leading-5 text-[#E83A2E]">
          {usedPrice.toLocaleString()}
        </ParagraphS>
      </div>
      <div className="flex items-center gap-2">
        <ParagraphS className="text-[10px] font-[400] leading-[14px] text-[#727272]">
          {t("header.limit.remaining")}
        </ParagraphS>
        <ParagraphS className="text-center text-[14px] font-[600] leading-5">
          {remainingPrice.toLocaleString()}
        </ParagraphS>
      </div>
    </div>
  );
};

export default MobileUserPriceLimit;

//styleName: Caption/10 Regular;
