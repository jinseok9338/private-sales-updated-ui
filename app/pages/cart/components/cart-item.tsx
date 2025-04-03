import type { CartItem } from "../services/cartApi";
import CartItemDeleteArea from "./cartItemDeleteArea";
import CartItemInfo from "./cartItemInfo";
import CartItemPriceInfo from "./cartItemPriceInfo";
import ConfirmCartItemModalButton from "./ConfirmCartItemModalButton";

interface CartItemProps {
  item: CartItem;
  isSelected: boolean;
  onSelect: (itemId: string, checked: boolean) => void;
}

export function CartItemComponent({
  item,
  isSelected,
  onSelect,
}: CartItemProps) {
  const isSoldOut = item.stock === 0;

  return (
    <div className="px-4 py-3 border-b last:border-b-0 border-gray-5 00">
      <div className="flex gap-3 flex-col">
        <CartItemDeleteArea
          isSoldOut={isSoldOut}
          isSelected={isSelected}
          onSelect={onSelect}
          itemId={item.id}
        />
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
        <ConfirmCartItemModalButton disabled={isSoldOut} itemIds={[item.id]} />
      </div>
    </div>
  );
}
