import ProductInfo from "./components/ProductInfo";
import { ProductCarousel } from "./components/produtctCarousel";
import PurchaseButton from "./components/PurchaseButton";
import { SellerInfo } from "./components/sellerInfo";

const productImages = [
  "https://d3ha2047wt6x28.cloudfront.net/r4WchAOYpxk/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjQwNjA0XzE3MTc0Mzc1NDM2MTMxNzVtLmpwZw",
  "https://d3ha2047wt6x28.cloudfront.net/iC5oHJ-1kcM/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjQwNjA0XzE3MTc0Mzc1ODg3NzIwMTdtLmpwZw",
  "https://d3ha2047wt6x28.cloudfront.net/E-rRDuA1qfA/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjQwNjA0XzE3MTc0Mzc1OTA2NjAxOTltLmpwZw",
];

export default function ProductDetailPage() {
  return (
    <div className="pb-24">
      <ProductCarousel images={productImages} />

      <div className="px-4 space-y-6">
        <SellerInfo
          name="슈가파우더"
          image="https://d3ha2047wt6x28.cloudfront.net/MNN_e6X2TxQ/pr:MARKET_PROFILE_THUMB/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2JyYW5kX2NhdGVnb3J5L21hcmtldF9wcm9maWxlXzE3MzM2NTg4NTMyMDQ1MzkuanBn"
          tags={["#실플베이직", "#러블리·마켓 만족도 93%"]}
          views="158.8만"
        />
        <ProductInfo />
        <PurchaseButton />
      </div>
    </div>
  );
}
