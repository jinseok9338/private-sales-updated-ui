import { Link } from "react-router";
import CartIcon from "~/assets/icons/bag-black.svg";
import TypoLabelMedium from "~/components/ui/typo/AnchorsLabelMedium";
import { useGetCart } from "~/pages/cart/hooks/useCarts";
import SearchInputWithIcon from "./searchInputWithIcon";

const CategoryHeader = () => {
  const { data: cartItems } = useGetCart();
  const cartItemsCount = cartItems?.length || 0;

  return (
    <div className="flex bg-common-alternate py-2 px-4 gap-2 items-center">
      <SearchInputWithIcon />
      <Link to="/cart" className="flex items-center w-7 h-7 relative">
        <img src={CartIcon} alt="cart" className="min-w-7 min-h-7" />
        {cartItemsCount > 0 && (
          <div className="absolute top-0 -right-[2px]  bg-red-400 text-white rounded-full w-4 h-4 flex items-center justify-center">
            <TypoLabelMedium>{cartItemsCount}</TypoLabelMedium>
          </div>
        )}
      </Link>
    </div>
  );
};

export default CategoryHeader;
