import { useQueryState } from "nuqs";
import { useTranslation } from "react-i18next";
import { TypoSubtleSemibold } from "~/components/ui/typo/AnchorsSubtle";
import { ACTIVE_CART_TAB } from "~/constants/QueryStringKeys";
import { useGetCart } from "../hooks/useCarts";
import { useGetConfirmedItems } from "../hooks/useConfirmedItems";
import { Tabs, TabsList, TabsTrigger } from "./cart-tab";

const CartHeader = () => {
  const { t } = useTranslation();
  const { data: cartItems } = useGetCart();
  const { data: confirmedCartItems } = useGetConfirmedItems();
  const totalItemsCount = cartItems?.length || 0;
  const confirmedItemsCount = confirmedCartItems?.length || 0;

  const [activeCartTab, setActiveCartTab] = useQueryState(ACTIVE_CART_TAB.key, {
    defaultValue: ACTIVE_CART_TAB.defaultValue,
  });

  return (
    <div className="space-y-4">
      <Tabs value={activeCartTab} onValueChange={setActiveCartTab}>
        <TabsList className="w-full flex items-center gap-[2px] px-4">
          <TabsTrigger value="cart" className="flex-1">
            <TypoSubtleSemibold>
              {t("cart.tabs.cart", {
                n: totalItemsCount,
              })}
            </TypoSubtleSemibold>
          </TabsTrigger>
          <TabsTrigger value="confirmed" className="flex-1">
            <TypoSubtleSemibold>
              {t("cart.tabs.confirmed", {
                n: confirmedItemsCount,
              })}
            </TypoSubtleSemibold>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CartHeader;
