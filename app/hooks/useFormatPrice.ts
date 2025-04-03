import { useTranslation } from "react-i18next";

const useFormatPrice = () => {
  const { i18n } = useTranslation();
  const formatPrice = (price: number) => {
    if (i18n.language === "ko") {
      return price.toLocaleString() + "원";
    } else {
      return "₩" + price.toLocaleString();
    }
  };
  return { formatPrice };
};

export default useFormatPrice;
