import ArrowUp from "~/assets/icons/arrow-up-black.svg";
import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { ACTIVE_CART_TAB } from "~/constants/QueryStringKeys";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab] = useQueryState(ACTIVE_CART_TAB.key, {
    defaultValue: ACTIVE_CART_TAB.defaultValue,
  });

  const isItConfirmed = activeTab === "confirmed";

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsVisible(window.scrollY > 100);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className="fixed rounded-full border border-[#DFDFDF] w-10 h-10 bg-white right-4 flex justify-center items-center cursor-pointer"
      onClick={handleClick}
      style={{
        display: isVisible ? "block" : "none",
        bottom: isItConfirmed ? "161px" : "72px",
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <img src={ArrowUp} alt="arrow-up" width={24} height={24} />
      </div>
    </div>
  );
};

export default FloatingButton;
