import { Link } from "react-router";
import CartIcon from "~/assets/icons/bag-black.svg";
import TypoLabelMedium from "~/components/ui/typo/AnchorsLabelMedium";
import { useGetCart } from "~/pages/cart/hooks/useCarts";

const CartIconBlack = () => {
  const { data: cartItems } = useGetCart();
  const cartItemCount = cartItems?.length || 0;

  return (
    <Link
      to="/cart"
      className="flex items-center cursor-pointer relative w-7 h-7 min-w-[28px] min-h-[28px] flex-shrink-0"
    >
      <img
        src={CartIcon}
        alt="cart"
        className="w-7 h-7 min-w-[28px] min-h-[28px] flex-shrink-0"
      />
      {cartItemCount > 0 && (
        <div className="absolute top-0 -right-[2px]  bg-red-400 text-white rounded-full w-4 h-4 flex items-center justify-center">
          <TypoLabelMedium>{cartItemCount}</TypoLabelMedium>
        </div>
      )}
    </Link>
  );
};

export default CartIconBlack;
