import { useQueryState } from "nuqs";
import { ACTIVE_CART_TAB } from "~/constants/QueryStringKeys";
import { useGetCart } from "../hooks/useCarts";
import { useGetConfirmedItems } from "../hooks/useConfirmedItems";
import { CartItemComponent } from "./cart-item";
import { ConfirmedItemComponent } from "./confirmed-item";

interface CartContentProps {
  selectedItemsId: string[];
  onSelect: (itemId: string, checked: boolean) => void;
}

export default function CartContent({
  selectedItemsId,
  onSelect,
}: CartContentProps) {
  const [activeCartTab] = useQueryState(ACTIVE_CART_TAB.key, {
    defaultValue: ACTIVE_CART_TAB.defaultValue,
  });
  const { data: cartItems } = useGetCart();
  const { data: confirmedCartItems } = useGetConfirmedItems();
  if (activeCartTab === ACTIVE_CART_TAB.defaultValue) {
    return (
      <div className="py-3">
        {cartItems?.map((item) => (
          <CartItemComponent
            key={item.id}
            item={item}
            isSelected={selectedItemsId.includes(item.id)}
            onSelect={onSelect}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="py-3">
      {confirmedCartItems?.map((item) => (
        <ConfirmedItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}
