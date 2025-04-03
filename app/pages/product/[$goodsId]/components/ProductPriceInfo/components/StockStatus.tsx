import { useTranslation } from "react-i18next";
import { Badge } from "~/components/ui/badge";
import Padding from "~/components/ui/padding";

interface StockStatusProps {
  stock: number;
}

export function StockStatus({ stock }: StockStatusProps) {
  const { t } = useTranslation();

  const outOfStock = stock === 0;
  const soldOutImpending = stock < 3 && stock > 0;
  const soldoutBadge = outOfStock
    ? t("productCard.outOfStock")
    : soldOutImpending
    ? t("productCard.soldOutImpending")
    : "";

  if (!soldoutBadge) return null;

  return (
    <>
      <Badge variant="destructive">{soldoutBadge}</Badge>
      <Padding height={12} />
    </>
  );
}
