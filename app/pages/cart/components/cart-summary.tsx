import { useTranslation } from "react-i18next";
import type { CartTotals } from "~/@types/cart/cart";
import { Button } from "~/components/ui/button";
import ParagraphS from "~/components/ui/typo/paragraph_s";

interface CartSummaryProps {
  totals: CartTotals;
}

export function CartSummary({ totals }: CartSummaryProps) {
  const { t } = useTranslation();

  return (
    <div className="border-t mt-6 pt-4 space-y-3">
      <div className="flex justify-between text-sm">
        <ParagraphS>{t("cart.total.total")}</ParagraphS>
        <ParagraphS>
          {t("common.currency", { n: totals.subtotal.toLocaleString() })}
        </ParagraphS>
      </div>
      <div className="flex justify-between text-sm">
        <ParagraphS>{t("cart.discount")}</ParagraphS>
        <ParagraphS>{t("common.currency", { n: 0 })}</ParagraphS>
      </div>
      <div className="flex justify-between text-sm">
        <ParagraphS>{t("cart.delivery.fee")}</ParagraphS>
        <ParagraphS>
          {totals.shipping === 0
            ? t("cart.delivery.noFee")
            : t("common.currency", { n: totals.shipping.toLocaleString() })}
        </ParagraphS>
      </div>
      <div className="flex justify-between font-bold pt-3 border-t">
        <ParagraphS>
          {t("cart.total.totalProductsPrice", {
            n: totals.total > 0 ? "2" : "0",
          })}
        </ParagraphS>
        <ParagraphS className="text-rose-500">
          {t("common.currency", { n: totals.total.toLocaleString() })}
        </ParagraphS>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <ParagraphS>{t("cart.total.estimatedPoints")}</ParagraphS>
        <ParagraphS>
          {t("common.currency", { n: totals.points.toLocaleString() })}
        </ParagraphS>
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
