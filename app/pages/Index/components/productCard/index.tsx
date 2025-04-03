import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Badge } from "~/components/ui/badge";
import Padding from "~/components/ui/padding";
import {
  TypoBody13,
  TypoBody13Semibold,
} from "~/components/ui/typo/AnchorsBody13";
import TypoLabelRegular from "~/components/ui/typo/AnchorsLabelRegular";
import useFormatPrice from "~/hooks/useFormatPrice";
import { cn } from "~/lib/utils";
import ImageArea from "./components/imageArea";

interface ProductCardProps {
  product: {
    image: string;
    name: string;
    code: string;
    price: number;
    discountPrice?: number;
    stock: number;
    id: number;
  };
  onClickCartIcon: (goodsId: string) => void;
}

const ProductCard = ({ product, onClickCartIcon }: ProductCardProps) => {
  const { t } = useTranslation();
  const { formatPrice } = useFormatPrice();
  const outOfStock = product.stock === 0;
  const SoldOutImpending = product.stock < 3 && product.stock > 0;
  const soldoutBadge = outOfStock
    ? t("productCard.outOfStock")
    : SoldOutImpending
    ? t("productCard.soldOutImpending")
    : "";
  //if no discountPrice then no discountRate
  const discountRate = product.discountPrice
    ? Math.round(
        ((product.price - product.discountPrice) / product.price) * 100
      ) + "%"
    : "";

  return (
    <Link
      to={`/product/${product.code}`}
      className={cn("w-full h-full", outOfStock ? "pointer-events-none" : "")}
    >
      <div className="flex flex-col">
        {/* iamge area */}
        <div>
          <ImageArea
            image={product.image}
            outOfStock={outOfStock}
            goodsId={product.id.toString()}
            onClickCartIcon={onClickCartIcon}
          />
        </div>
        {/* prductInfo */}
        <div className="flex flex-col pl-3 pr-2 pt-3 pb-6">
          {/* product name */}
          <TypoBody13 className="line-clamp-2 overflow-hidden text-ellipsis">
            {product.name}
          </TypoBody13>
          <Padding height={4} />
          <TypoLabelRegular className="line-clamp-2 overflow-hidden text-gray-500 text-ellipsis">
            {product.code}
          </TypoLabelRegular>
          <Padding height={6} />
          {/* product price and discount price */}
          <div className="flex items-center gap-[2px]">
            {discountRate && (
              <TypoBody13Semibold className="text-red-500">
                {discountRate}
              </TypoBody13Semibold>
            )}
            <TypoBody13Semibold>
              {formatPrice(product.price)}
            </TypoBody13Semibold>
          </div>
          {/* out of stock badge  */}
          <Padding height={8} />
          {soldoutBadge && (
            <>
              <Badge variant="destructive">{soldoutBadge}</Badge>
              <Padding height={12} />
            </>
          )}
          {/* remaining stock */}

          <TypoLabelRegular className="text-gray-500">
            {t("productCard.remainingStock", {
              n: product.stock,
            })}
          </TypoLabelRegular>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
