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
      className="flex items-center cursor-pointer relative w-6 h-6 min-w-[24px] min-h-[24px]"
    >
      <img
        src={CartIcon}
        alt="cart"
        className="w-6 h-6 min-w-[24px] min-h-[24px]"
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
