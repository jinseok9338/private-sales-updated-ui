import Padding from "~/components/ui/padding";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { TypoSubtleMedium } from "~/components/ui/typo/AnchorsSubtle";
import CartItemInfo from "~/pages/cart/components/cartItemInfo";
import CartItemPriceInfo from "~/pages/cart/components/cartItemPriceInfo";
import type { CartItem } from "~/pages/cart/services/cartApi";

interface CartItemProps {
  item: CartItem;
  date: string; // YYYY-MM-DD
  orderNumber: string;
}

export function PurchasedItemComponent({
  item,
  date,
  orderNumber,
}: CartItemProps) {
  const isSoldOut = item.stock === 0;

  return (
    <div className="border-b last:border-b-0 border-common-line flex flex-col">
      <Padding height={20} />
      <TypoSubtleMedium>{date}</TypoSubtleMedium>
      <Padding height={4} />
      <TypoBody13 className="text-gray-600">{orderNumber}</TypoBody13>
      <Padding height={8} />
      <div className="flex gap-3 flex-col">
        <CartItemInfo
          name={item.name}
          imageUrl={item.imageUrl}
          productCode={item.productCode}
          price={item.price}
          quantity={item.quantity}
          option={item.option}
          isSoldOut={isSoldOut}
        />
        <CartItemPriceInfo
          salePrice={item.price}
          paymentPrice={item.price}
          additionalDiscount={0}
        />
      </div>
      <Padding height={12} />
    </div>
  );
}
