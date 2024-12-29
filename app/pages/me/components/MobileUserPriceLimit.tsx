import { useTranslation } from "react-i18next";

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
      <span className="text-[14px] font-[600] leading-5">
        {t("header.limit.limit")}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-[400] leading-[14px] text-[#727272]">
          {t("header.limit.total")}
        </span>
        <span className="text-center text-[14px] font-[600] leading-5">
          {availablePrice.toLocaleString()}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-[400] leading-[14px] text-[#727272]">
          {t("header.limit.used")}
        </span>
        <span className="text-center text-[14px] font-[600] leading-5 text-[#E83A2E]">
          {usedPrice.toLocaleString()}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-[400] leading-[14px] text-[#727272]">
          {t("header.limit.remaining")}
        </span>
        <span className="text-center text-[14px] font-[600] leading-5">
          {remainingPrice.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default MobileUserPriceLimit;

//styleName: Caption/10 Regular;
