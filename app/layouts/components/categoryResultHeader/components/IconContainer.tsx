import CartIcon from "~/assets/icons/bag-black.svg";

import { Link } from "react-router";
import SearchIcon from "~/assets/icons/search-black.svg";
import TypoLabelMedium from "~/components/ui/typo/AnchorsLabelMedium";
import { useGetCart } from "~/pages/cart/hooks/useCarts";

const IconContainer = () => {
  const { data: cartItems } = useGetCart();
  const cartItemsCount = cartItems?.length || 0;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center cursor-pointer relative">
        <img src={SearchIcon} alt="search" className="w-6 h-6" />
      </div>
      <div className="flex items-center cursor-pointer relative">
        <img src={CartIcon} alt="cart" className="w-6 h-6" />
        {cartItemsCount > 0 && (
          <Link
            to="/cart"
            className="absolute top-0 -right-[2px]  bg-red-400 text-white rounded-full w-4 h-4 flex items-center justify-center"
          >
            <TypoLabelMedium>{cartItemsCount}</TypoLabelMedium>
          </Link>
        )}
      </div>
    </div>
  );
};

export default IconContainer;
