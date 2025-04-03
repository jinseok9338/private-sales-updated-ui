import { useLocation, useNavigate } from "react-router";
import ArrowLeftIcon from "~/assets/icons/arrow-left-black.svg";
import SearchInputWithIcon from "../categoryHeader/searchInputWithIcon";

import CartIconBlack from "./CartIcon";
const SearchHeader = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const location = useLocation();
  const isItSearchPage = location.pathname === "/search";

  return (
    <div className="flex justify-between bg-common-white py-2 px-4 gap-2 items-center">
      <button
        onClick={handleBack}
        className="flex items-center cursor-pointer relative"
      >
        <img src={ArrowLeftIcon} alt="arrow-left" className="w-6 h-6" />
      </button>
      <SearchInputWithIcon />
      {!isItSearchPage && <CartIconBlack />}
    </div>
  );
};

export default SearchHeader;
