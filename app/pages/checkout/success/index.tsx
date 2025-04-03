import { useTranslation } from "react-i18next";
import { Link, useLoaderData } from "react-router";
import type { clientLoader } from "~/routes/(checkout-success).checkout.success._index";
import SuccessLogoArea from "./successLogoArea";
import { Separator } from "~/components/ui/separator";
import { ConfirmedItemComponent } from "~/pages/cart/components/confirmed-item";
import { Button } from "~/components/ui/button";
import { TypoBody14Semibold } from "~/components/ui/typo/AnchorsBody14";

const CheckoutSuccess = () => {
  const { orderData } = useLoaderData<typeof clientLoader>();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <SuccessLogoArea />
      <Separator className="h-2" />
      <div className="flex flex-col">
        {orderData.map((item) => (
          <ConfirmedItemComponent key={item.id} item={item} />
        ))}
      </div>
      <div className="flex fixed bottom-0 left-0 right-0 px-4 py-3 gap-2 w-full max-w-[600px] mx-auto">
        <Link to="/" replace className="flex-1">
          <Button variant={"secondary"} className="w-full">
            <TypoBody14Semibold>
              {t("checkout.success.continueShopping")}
            </TypoBody14Semibold>
          </Button>
        </Link>
        <Link to="/me/purchase-history" replace className="flex-1">
          <Button variant={"default"} className="w-full">
            <TypoBody14Semibold>
              {t("checkout.success.checkoutHistory")}
            </TypoBody14Semibold>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
