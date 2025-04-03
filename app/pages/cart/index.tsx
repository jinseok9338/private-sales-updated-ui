import { useQueryState } from "nuqs";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ACTIVE_CART_TAB } from "~/constants/QueryStringKeys";
import CartHeader from "./components/cartHeader";
import { EmptyCart } from "./components/emptyCart";
import { useGetCart } from "./hooks/useCarts";

import CartCheckAllArea from "./components/cartCheckAllHeader";
import CartContent from "./components/CartContent";
import CartFooter from "./components/CartFooter";
import PurchaseDetailDrawer from "./components/PurchaseDetailDrawer";
import { useGetConfirmedItems } from "./hooks/useConfirmedItems";
import CartSkeleton from "./components/CartSkeleton";
import CartLoading from "./components/Loading";

export default function CartPage() {
  // State management
  const [selectedItemsId, setSelectedItemsId] = useState<string[]>([]);
  const [activeCartTab] = useQueryState(ACTIVE_CART_TAB.key, {
    defaultValue: ACTIVE_CART_TAB.defaultValue,
  });

  // Data fetching
  const { data: cartItems, isLoading: isCartLoading } = useGetCart();
  const { data: confirmedCartItems, isLoading: isConfirmedCartLoading } =
    useGetConfirmedItems();
  const { t } = useTranslation();

  // Derived state
  const isEmpty = cartItems?.length === 0;
  const isConfirmedEmpty = confirmedCartItems?.length === 0;
  const cartItemsId = cartItems?.map((item) => item.id);

  // Event handlers
  const handleSelectAll = (checked: boolean) => {
    setSelectedItemsId(checked ? cartItemsId ?? [] : []);
  };

  const handleCheckedItem = (itemId: string, checked: boolean) => {
    setSelectedItemsId((prev) =>
      checked ? [...prev, itemId] : prev.filter((id) => id !== itemId)
    );
  };

  // Empty state handling
  const isEmptyState =
    (activeCartTab === ACTIVE_CART_TAB.defaultValue && isEmpty) ||
    (activeCartTab === "confirmed" && isConfirmedEmpty);

  const emptyMessage =
    activeCartTab === ACTIVE_CART_TAB.defaultValue
      ? t("cart.cart.empty")
      : t("cart.confirmed.empty");

  if (activeCartTab === ACTIVE_CART_TAB.defaultValue && isCartLoading) {
    return <CartLoading />;
  }

  if (activeCartTab === "confirmed" && isConfirmedCartLoading) {
    return <CartLoading />;
  }

  return (
    <div className="w-full py-3" id="cart-page">
      {/* Header */}
      <CartHeader />
      {isEmptyState ? (
        <EmptyCart content={emptyMessage} />
      ) : (
        <>
          <CartCheckAllArea
            selectedItemsId={selectedItemsId}
            handleSelectAll={handleSelectAll}
          />
          <CartContent
            selectedItemsId={selectedItemsId}
            onSelect={handleCheckedItem}
          />
          <CartFooter selectedItemsId={selectedItemsId} />
          <PurchaseDetailDrawer />
        </>
      )}
    </div>
  );
}
