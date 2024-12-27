import { useTranslation } from "react-i18next";
import { Checkbox } from "~/components/ui/checkbox";
import { useCartContext } from "~/context/cart/cartContext";

const CartHeader = () => {
  const { cartItems, selectedCount, handleSelectAll } = useCartContext();
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={selectedCount === cartItems.length}
          onCheckedChange={(checked) => handleSelectAll(checked as boolean)}
        />
        <span className="text-sm">
          {t("cart.selectall")}({selectedCount}/{cartItems.length})
        </span>
      </div>
      <button className="text-sm text-gray-500">{t("cart.select")}</button>
    </div>
  );
};

export default CartHeader;
