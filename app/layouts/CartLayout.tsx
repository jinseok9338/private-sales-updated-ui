import { Outlet } from "react-router";

import { useQueryState } from "nuqs";
import {
  ACTIVE_CART_TAB,
  PURCHASE_DETAIL_DRAWER_OPEN,
} from "~/constants/QueryStringKeys";
import { cn } from "~/lib/utils";
import { useGetCart } from "~/pages/cart/hooks/useCarts";
import { useGetConfirmedItems } from "~/pages/cart/hooks/useConfirmedItems";
import CartHeader from "./components/cartHeader";
import FloatingButton from "./components/floatingButton";
import Terms from "./components/Terms";

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeTab] = useQueryState(ACTIVE_CART_TAB.key, {
    defaultValue: ACTIVE_CART_TAB.defaultValue,
  });
  const { data: cartItems } = useGetCart();
  const { data: confirmedCartItems } = useGetConfirmedItems();
  const isEmpty = cartItems?.length === 0;
  const isConfirmedEmpty = confirmedCartItems?.length === 0;
  const [purchaseDetailDrawerOpen] = useQueryState(
    PURCHASE_DETAIL_DRAWER_OPEN.key,
    {
      parse: (value: string) => value === "true",
      defaultValue: PURCHASE_DETAIL_DRAWER_OPEN.defaultValue,
    }
  );

  const isEmptyPage = () => {
    return (
      (activeTab === ACTIVE_CART_TAB.defaultValue && isEmpty) ||
      (activeTab === "confirmed" && isConfirmedEmpty)
    );
  };

  return (
    <div className="flex justify-center min-h-page">
      <div
        className={cn("max-w-[600px] w-full flex flex-col relative pb-[56px]", {
          "pb-[153px]": activeTab !== ACTIVE_CART_TAB.defaultValue,
        })}
      >
        <CartHeader />
        <Outlet />
        {!isEmptyPage() && <Terms />}
        {!purchaseDetailDrawerOpen && <FloatingButton />}
      </div>
    </div>
  );
};

export default CartLayout;
