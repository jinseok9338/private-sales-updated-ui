import { useNavigate } from "react-router";

import { useTranslation } from "react-i18next";
import BackIcon from "~/assets/icons/arrow-left-black.svg";
import TypoP_UI_Semibold from "~/components/ui/typo/AnchorsPUISemibold";
const CheckoutSuccessHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex justify-between py-3 px-4 gap-2 items-center">
      <div className="flex items-center">
        <button
          className="flex items-center cursor-pointer relative"
          onClick={() => navigate(-1)}
        >
          <img src={BackIcon} alt="back" className="w-7 h-7" />
        </button>
        <TypoP_UI_Semibold>{t("checkout.success.header")}</TypoP_UI_Semibold>
      </div>
    </div>
  );
};

export default CheckoutSuccessHeader;
