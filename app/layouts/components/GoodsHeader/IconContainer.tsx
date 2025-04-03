import CartIcon from "~/assets/icons/bag-black.svg";

import { Link, useNavigate } from "react-router";
import SearchIcon from "~/assets/icons/search-black.svg";
import TypoLabelMedium from "~/components/ui/typo/AnchorsLabelMedium";

import HomeIcon from "~/assets/icons/home-black.svg";
import { useGetCart } from "~/pages/cart/hooks/useCarts";

const GoodsHeaderIconContainer = () => {
  const { data: cartItems } = useGetCart();
  const cartItemsCount = cartItems?.length || 0;
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleSearch = () => {
    navigate("/search");
  };
  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="flex items-center cursor-pointer relative"
        onClick={handleHome}
      >
        <img src={HomeIcon} alt="home" className="w-6 h-6" />
      </button>
      <button
        className="flex items-center cursor-pointer relative"
        onClick={handleSearch}
      >
        <img src={SearchIcon} alt="search" className="w-6 h-6" />
      </button>
      <button
        className="flex items-center cursor-pointer relative"
        onClick={handleCart}
      >
        <img src={CartIcon} alt="cart" className="w-6 h-6" />
        {cartItemsCount > 0 && (
          <Link
            to="/cart"
            className="absolute top-0 -right-[2px]  bg-red-400 text-white rounded-full w-4 h-4 flex items-center justify-center"
          >
            <TypoLabelMedium>{cartItemsCount}</TypoLabelMedium>
          </Link>
        )}
      </button>
    </div>
  );
};

export default GoodsHeaderIconContainer;
