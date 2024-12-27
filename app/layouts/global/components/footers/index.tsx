import { Home, Menu, Search, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router";
import FeedbackLink from "~/components/ui/Link";

const Footers = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { t } = useTranslation();

  const buttons = [
    {
      to: "/",
      icon: (
        <Home size={24} className={pathname === "/" ? "text-red-500" : ""} />
      ),
      label: t("footer.path.home"),
      isActive: pathname === "/",
    },
    {
      to: "/categories",
      icon: (
        <Menu
          size={24}
          className={pathname === "/categories" ? "text-red-500" : ""}
        />
      ),
      label: t("footer.path.categories"), // 전체보기
      isActive: pathname === "/categories",
    },
    {
      to: "/search",
      icon: (
        <Search
          size={24}
          className={pathname === "/search" ? "text-red-500" : ""}
        />
      ),
      label: t("footer.path.search"),
      isActive: pathname === "/search",
    },
    {
      to: "/me",
      icon: (
        <User size={24} className={pathname === "/me" ? "text-red-500" : ""} />
      ),
      label: t("footer.path.me"), //마이페이지
      isActive: pathname === "/me",
    },
  ];

  return (
    <footer className="fixed max-w-[600px] w-full bottom-0 bg-white border-t">
      <nav className="flex items-center justify-around h-[60px]">
        {buttons.map((button, index) => (
          <FeedbackLink
            to={button.to}
            key={index}
            className="flex flex-col items-center justify-center gap-1"
          >
            {button.icon}
            <span
              className={button.isActive ? "text-red-500 text-xs" : "text-xs"}
            >
              {button.label}
            </span>
          </FeedbackLink>
        ))}
      </nav>
    </footer>
  );
};

export default Footers;
