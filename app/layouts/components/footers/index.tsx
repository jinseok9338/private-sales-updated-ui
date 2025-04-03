import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import CategoryIcon from "~/assets/icons/category-gray.svg";
import CategoryIconActive from "~/assets/icons/category-black.svg";
import HomeIcon from "~/assets/icons/home-gray.svg";
import HomeIconActive from "~/assets/icons/home-black.svg";
import MeIcon from "~/assets/icons/profile-gray.svg";
import MeIconActive from "~/assets/icons/profile-black.svg";
import { TypoDetail12 } from "~/components/ui/typo/AnchorsDetail12";
import { cn } from "~/lib/utils";

const Footers = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { t } = useTranslation();

  const buttons = [
    {
      to: "/categories",
      icon:
        pathname === "/categories" ? (
          <img
            src={CategoryIconActive}
            alt="category"
            className="w-7 h-7 text-common-black"
          />
        ) : (
          <img
            src={CategoryIcon}
            alt="category"
            className="w-7 h-7 text-icon-gray2"
          />
        ),
      label: t("footer.path.categories"), // 카테고리
      isActive: pathname === "/categories",
    },
    {
      to: "/",
      icon:
        pathname === "/" ? (
          <img
            src={HomeIconActive}
            alt="home"
            className="w-7 h-7 text-common-black"
          />
        ) : (
          <img src={HomeIcon} alt="home" className="w-7 h-7 text-icon-gray2" />
        ),
      label: t("footer.path.home"),
      isActive: pathname === "/",
    },
    {
      to: "/me",
      icon:
        pathname === "/me" ? (
          <img
            src={MeIconActive}
            alt="me"
            className="w-7 h-7 text-common-black"
          />
        ) : (
          <img src={MeIcon} alt="me" className="w-7 h-7 text-icon-gray2" />
        ),
      label: t("footer.path.me"), //마이페이지
      isActive: pathname === "/me",
    },
  ];

  return (
    <footer className="fixed max-w-[600px] w-full bottom-0 bg-white border-t">
      <nav className="flex items-center justify-around h-[56px]">
        {buttons.map((button, index) => (
          <Link
            to={button.to}
            key={index}
            className="flex flex-1 flex-col items-center justify-center"
          >
            {button.icon}
            <TypoDetail12
              className={cn(
                "text-icon-gray2",
                button.isActive && "text-common-black"
              )}
            >
              {button.label}
            </TypoDetail12>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footers;
