import { Home, Menu, Search, User } from "lucide-react";
import { useLocation, Link } from "react-router";

const Footers = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const buttons = [
    {
      to: "/",
      icon: (
        <Home size={24} className={pathname === "/" ? "text-red-500" : ""} />
      ),
      label: "홈",
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
      label: "전체보기",
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
      label: "검색",
      isActive: pathname === "/search",
    },
    {
      to: "/me",
      icon: (
        <User size={24} className={pathname === "/me" ? "text-red-500" : ""} />
      ),
      label: "마이페이지",
      isActive: pathname === "/me",
    },
  ];

  return (
    <footer className="fixed max-w-[600px] w-full bottom-0 bg-white border-t">
      <nav className="flex items-center justify-around h-[60px]">
        {buttons.map((button, index) => (
          <Link
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
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footers;
