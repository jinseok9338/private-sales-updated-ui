import { useCartContext } from "~/context/cart/cartContext";
import { CartSummary } from "./components/cart-summary";
import CartCard from "./components/cartCard";
import CartHeader from "./components/cartHeader";
import { EmptyCart } from "./components/emptyCart";

export default function CartPage() {
  const { cartItems, vendorGroups, totals } = useCartContext();
  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <CartHeader />

      {vendorGroups.map((group) => (
        <CartCard key={group.items[0].id} group={group} />
      ))}

      <CartSummary totals={totals} />
    </div>
  );
}
