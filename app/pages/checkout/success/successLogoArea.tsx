import { useTranslation } from "react-i18next";
import logo from "~/assets/icons/checkout-success.svg";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import TypoLarge from "~/components/ui/typo/AnchorsLarge";

const SuccessLogoArea = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center flex-col justify-center gap-2 py-10 px-4">
      <img src={logo} alt="logo" className="w-8 h-8" />
      <TypoLarge className="whitespace-pre-line text-center">
        {t("checkout.success.successLogoAreaTitle")}
      </TypoLarge>
      <TypoBody13>
        {t("checkout.success.successLogoAreaOrderDescription")}
      </TypoBody13>
    </div>
  );
};

export default SuccessLogoArea;
