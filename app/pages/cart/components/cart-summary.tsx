import { useTranslation } from "react-i18next";
import type { CartTotals } from "~/@types/cart/cart";
import { Button } from "~/components/ui/button";

interface CartSummaryProps {
  totals: CartTotals;
}

export function CartSummary({ totals }: CartSummaryProps) {
  const { t } = useTranslation();

  return (
    <div className="border-t mt-6 pt-4 space-y-3">
      <div className="flex justify-between text-sm">
        <span>{t("cart.total.total")}</span>
        <span>
          {t("common.currency", { n: totals.subtotal.toLocaleString() })}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span>{t("cart.discount")}</span>
        <span>{t("common.currency", { n: 0 })}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>{t("cart.delivery.fee")}</span>
        <span>
          {totals.shipping === 0
            ? t("cart.delivery.noFee")
            : t("common.currency", { n: totals.shipping.toLocaleString() })}
        </span>
      </div>
      <div className="flex justify-between font-bold pt-3 border-t">
        <span>
          {t("cart.total.totalProductsPrice", {
            n: totals.total > 0 ? "2" : "0",
          })}
        </span>
        <span className="text-rose-500">
          {t("common.currency", { n: totals.total.toLocaleString() })}
        </span>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{t("cart.total.estimatedPoints")}</span>
        <span>
          {t("common.currency", { n: totals.points.toLocaleString() })}
        </span>
      </div>
      <Button
        className="w-full mt-4 bg-gray-200 text-gray-500"
        disabled={totals.total === 0}
      >
        {t("cart.button.order")}
      </Button>
    </div>
  );
}
