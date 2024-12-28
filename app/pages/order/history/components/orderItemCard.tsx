import { useTranslation } from "react-i18next";
import type { OrderItem } from "~/@types/order/history";
import ParagraphS from "~/components/ui/typo/paragraph_s";

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
          <ParagraphS>
            {item.date} [{item.referenceNumber}]
          </ParagraphS>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-mono">{item.productCode}</div>
        <div className="text-xs text-muted-foreground">
          <ParagraphS>
            {t("order.item.productCode")} {item.productSku}
          </ParagraphS>
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
            <ParagraphS>
              {t("common.currency", { n: item.originalPrice.toLocaleString() })}
            </ParagraphS>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <ParagraphS className="text-muted-foreground">
              {t("order.item.size")}
            </ParagraphS>
            <ParagraphS>
              {t("order.item.quantity")} {item.quantity}
            </ParagraphS>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <ParagraphS className="text-muted-foreground">
              {t("order.item.originalPrice")}
            </ParagraphS>
            <ParagraphS>
              {t("common.currency", { n: item.originalPrice.toLocaleString() })}
            </ParagraphS>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <ParagraphS className="text-muted-foreground">
              {t("order.item.discountAmount")}
            </ParagraphS>
            <ParagraphS className="text-destructive">
              -
              {t("common.currency", {
                n: item.discountAmount.toLocaleString(),
              })}
            </ParagraphS>
          </div>
          <div className="grid grid-cols-2 font-bold">
            <ParagraphS>{t("order.item.finalPrice")}</ParagraphS>
            <ParagraphS>
              {t("common.currency", { n: item.finalPrice.toLocaleString() })}
            </ParagraphS>
          </div>
        </div>
      </div>
    </div>
  );
}
