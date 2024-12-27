import { Button } from "~/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export function EmptyCart() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-24 h-24 mb-6">
        <ShoppingCart className="w-24 h-24 text-gray-400 opacity-20" />
      </div>
      <h2 className="text-xl font-medium mb-2">{t("cart.empty.noProduct")}</h2>
      <p className="text-gray-500 mb-8">{t("cart.empty.addProduct")}</p>
      <Link to="/">
        <Button className="w-full max-w-md bg-rose-400 hover:bg-rose-500">
          {t("cart.empty.seeMore")}
        </Button>
      </Link>
    </div>
  );
}
