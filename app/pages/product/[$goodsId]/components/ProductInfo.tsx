import TypoLead from "~/components/ui/typo/AnchorsLead";
import { PriceDetailInfo } from "./priceDetailInfo";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { useTranslation } from "react-i18next";
import { TypoDetail12 } from "~/components/ui/typo/AnchorsDetail12";

const ProductDetailInfo = ({ productInfo }: { productInfo: string }) => {
  const { t } = useTranslation();
  return (
    <div className="py-4 flex flex-col gap-3">
      <TypoBody13>{t("product.detailInfo.title")}</TypoBody13>
      <TypoDetail12 className="text-gray-500">{productInfo}</TypoDetail12>
    </div>
  );
};

export default ProductDetailInfo;
