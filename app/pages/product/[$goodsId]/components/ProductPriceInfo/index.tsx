import Padding from "~/components/ui/padding";
import { NameAndCode } from "./components/NameAndCode";
import { PriceDisplay } from "./components/PriceDisplay";
import { StockStatus } from "./components/StockStatus";

interface ProductPriceInfoProps {
  product: {
    name: string;
    code: string;
    price: number;
    discountPrice?: number;
    stock: number;
  };
}

export function ProductPriceInfo({ product }: ProductPriceInfoProps) {
  return (
    <div className="flex flex-col">
      {/* Product name and code section */}
      <NameAndCode name={product.name} code={product.code} />
      <Padding height={12} />
      {/* Price display section */}
      <PriceDisplay
        price={product.price}
        discountPrice={product.discountPrice}
      />
      <Padding height={8} />
      {/* Stock status badge */}
      <StockStatus stock={product.stock} />
    </div>
  );
}
