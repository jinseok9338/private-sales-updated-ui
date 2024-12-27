import CartContextProvider from "~/context/cart/cartContextProvider";
import CartPage from "~/pages/cart";

const CartPageRoute = () => {
  return (
    <CartContextProvider>
      <CartPage />
    </CartContextProvider>
  );
};

export default CartPageRoute;
