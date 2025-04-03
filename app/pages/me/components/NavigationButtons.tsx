import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { TypoSubtle } from "~/components/ui/typo/AnchorsSubtle";
import RightArrow from "~/assets/icons/arrow-right-black.svg";
import { Link } from "react-router";

const NavigationButtons = () => {
  const { t } = useTranslation();
  const navigationMap = [
    {
      label: t("me.navigation.orderHistory"),
      path: "/me/purchase-history",
    },
    {
      label: t("me.navigation.changePassword"),
      path: "/me/change-password",
    },
  ];
  return (
    <div className="flex flex-col">
      {navigationMap.map((item) => (
        <Link to={item.path} key={item.label}>
          <Button
            variant="ghost"
            className="h-11 w-full flex justify-between pl-4 pr-2"
          >
            <TypoSubtle>{item.label}</TypoSubtle>
            <img src={RightArrow} alt="right-arrow" className="w-4 h-4" />
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default NavigationButtons;
