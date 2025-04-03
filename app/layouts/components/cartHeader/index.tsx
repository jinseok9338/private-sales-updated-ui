import { useNavigate } from "react-router";

import BackIcon from "~/assets/icons/arrow-left-black.svg";
import HomeIcon from "~/assets/icons/home-black.svg";
import TypoP_UI_Semibold from "~/components/ui/typo/AnchorsPUISemibold";
import { useTranslation } from "react-i18next";
const CartHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between py-3 px-4 gap-2 items-center">
      <div className="flex items-center">
        <button
          className="flex items-center cursor-pointer relative"
          onClick={() => navigate(-1)}
        >
          <img src={BackIcon} alt="back" className="w-7 h-7" />
        </button>
        <TypoP_UI_Semibold>{t("cart.cart.cart")}</TypoP_UI_Semibold>
      </div>
      <button
        className="flex items-center cursor-pointer relative"
        onClick={handleHome}
      >
        <img src={HomeIcon} alt="home" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CartHeader;
