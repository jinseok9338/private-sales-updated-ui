import type { CartItem } from "../services/cartApi";
import CartItemInfo from "./cartItemInfo";
import CartItemPriceInfo from "./cartItemPriceInfo";

interface CartItemProps {
  item: CartItem;
}

export function ConfirmedItemComponent({ item }: CartItemProps) {
  const isSoldOut = item.stock === 0;

  return (
    <div className="px-4 py-3 border-b last:border-b-0 border-gray-5 00">
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
    </div>
  );
}
