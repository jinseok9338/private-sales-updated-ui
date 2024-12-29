import LabelS from "~/components/ui/typo/label_s";
import { PriceDetailInfo } from "./priceDetailInfo";

const ProductInfo = () => {
  return (
    <div className="space-y-2">
      <LabelS className="text-lg">
        [기모추가🔥/숏,롱/S-XL✨] 워크 빈티지 사이드 핀턱 워싱 와이드 데님팬츠 -
        5color
      </LabelS>

      <PriceDetailInfo
        originalPrice={42000}
        discountPercent={36}
        memberDiscountPercent={40}
      />
    </div>
  );
};

export default ProductInfo;
