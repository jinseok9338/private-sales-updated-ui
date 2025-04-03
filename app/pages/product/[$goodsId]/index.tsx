import Padding from "~/components/ui/padding";
import { ProductCarousel } from "./components/produtctCarousel";

import { Separator } from "~/components/ui/separator";
import ProductDetailInfo from "./components/ProductInfo";
import { ProductPriceInfo } from "./components/ProductPriceInfo";
import PurchaseButton from "./components/PurchaseButton";
import PRODUCT_IMAGE1 from "~/assets/images/Product/1.webp";
import PRODUCT_IMAGE2 from "~/assets/images/Product/2.webp";
import PRODUCT_IMAGE3 from "~/assets/images/Product/3.jpeg";
import PRODUCT_IMAGE4 from "~/assets/images/Product/4.jpeg";
import PRODUCT_IMAGE5 from "~/assets/images/Product/5.webp";

const productImages = [
  PRODUCT_IMAGE1,
  PRODUCT_IMAGE2,
  PRODUCT_IMAGE3,
  PRODUCT_IMAGE4,
  PRODUCT_IMAGE5,
];

const productInfo = `디올 하우스의 아이코닉한 디자인을 부드러운 버전으로 재해석하여 새롭게 선보이는 새들 소프트백입니다. 카멜 컬러의 빈티지 스무스 송아지 가죽 소재로 제작되었으며 새들 플랩, D 스터럽 스트랩 및 자석 풀, 모든 데일리 소지품을 손쉽게 보관할 수 있는 수납공간이 특징입니다. 편안하고 균형감 있는 라이딩을 위해 등자의 높낮이를 조절할 수 있는 승마 안장에 착안한 미니어처 백으로, 숫자를 새긴 노치 디테일의 슬림한 스트랩이 있어 숄더백이나 크로스백으로 연출하기 좋습니다.
주요 소재: 송아지 가죽
염소 가죽 & 송아지 가죽 안감
D 스터럽 스트랩과 자석 풀
숄더 스트랩의 CD 시그니처
길이 조절 가능한 슬림 숄더 스트랩
더스트 백 포함
이탈리아 제조`;

export default function ProductDetailPage() {
  return (
    <div className="pb-7">
      <ProductCarousel images={productImages} />
      <Padding height={16} />
      <div className="px-4">
        <ProductPriceInfo
          product={{
            code: "M0465CBUW_M59M",
            name: "Designer Handbag",
            price: 4999,
            discountPrice: 3999,
            stock: 2,
          }}
        />
        <Padding height={24} />
        <Separator className="m-0" />
        <ProductDetailInfo productInfo={productInfo} />
      </div>
      <PurchaseButton />
    </div>
  );
}
