import CartHeader from "./cartHeader";
import CartSkeleton from "./CartSkeleton";

const CartLoading = () => {
  return (
    <div className="w-full py-3" id="cart-page">
      {/* Header */}
      <CartHeader />
      <CartSkeleton />
      <CartSkeleton />
      <CartSkeleton />
      <CartSkeleton />
    </div>
  );
};

export default CartLoading;
