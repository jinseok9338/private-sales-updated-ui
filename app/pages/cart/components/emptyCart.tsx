import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { TypoSubtleSemibold } from "~/components/ui/typo/AnchorsSubtle";

export function EmptyCart({ content }: { content: string }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <TypoSubtleSemibold>{content}</TypoSubtleSemibold>
      <Link to="/" className="w-full px-4 py-3 fixed bottom-0 left-0 right-0">
        <Button className="w-full" variant="default">
          {t("cart.empty.seeMore")}
        </Button>
      </Link>
    </div>
  );
}
