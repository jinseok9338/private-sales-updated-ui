import { useTranslation } from "react-i18next";
import type { CartVendorGroup } from "~/@types/cart/cart";
import { CartItemComponent } from "./cart-item";

const CartCard = ({ group }: { group: CartVendorGroup }) => {
  const { t } = useTranslation();
  return (
    <div key={group.vendorName} className="mb-8">
      <h2 className="font-bold mb-4">
        {group.vendorName} {t("cart.delivery.product")}
      </h2>
      <div className="border rounded-lg">
        {group.items.map((item) => (
          <CartItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartCard;
