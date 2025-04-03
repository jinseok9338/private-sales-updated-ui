import { useTranslation } from "react-i18next";
import type { OrderItem } from "~/@types/order/history";
import { TypoBody14 } from "~/components/ui/typo/AnchorsBody14";

interface OrderItemCardProps {
  item: OrderItem;
}

export function OrderItemCard({ item }: OrderItemCardProps) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg border p-4 space-y-4">
      <div className="flex justify-between items-start">
        <div className="font-medium">{t("order.item.orderPlaceDate")}</div>
        <div className="text-sm text-muted-foreground">
          <TypoBody14>
            {item.date} [{item.referenceNumber}]
          </TypoBody14>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-mono">{item.productCode}</div>
        <div className="text-xs text-muted-foreground">
          <TypoBody14>
            {t("order.item.productCode")} {item.productSku}
          </TypoBody14>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-24 h-24 relative">
          <img
            src={item.image}
            alt="Product"
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="text-xl font-bold">
            <TypoBody14>
              {t("common.currency", {
                n: item.originalPrice.toLocaleString(),
              })}
            </TypoBody14>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <TypoBody14 className="text-muted-foreground">
              {t("order.item.size")}
            </TypoBody14>
            <TypoBody14>
              {t("order.item.quantity")} {item.quantity}
            </TypoBody14>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <TypoBody14 className="text-muted-foreground">
              {t("order.item.originalPrice")}
            </TypoBody14>
            <TypoBody14>
              {t("common.currency", { n: item.originalPrice.toLocaleString() })}
            </TypoBody14>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <TypoBody14 className="text-muted-foreground">
              {t("order.item.discountAmount")}
            </TypoBody14>
            <TypoBody14 className="text-destructive">
              -
              {t("common.currency", {
                n: item.discountAmount.toLocaleString(),
              })}
            </TypoBody14>
          </div>
          <div className="grid grid-cols-2 font-bold">
            <TypoBody14>{t("order.item.finalPrice")}</TypoBody14>
            <TypoBody14>
              {t("common.currency", { n: item.finalPrice.toLocaleString() })}
            </TypoBody14>
          </div>
        </div>
      </div>
    </div>
  );
}
