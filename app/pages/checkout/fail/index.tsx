import { Link } from "react-router";
import FailLogoArea from "./failLogoArea";
import { Button } from "~/components/ui/button";
import { TypoBody14Semibold } from "~/components/ui/typo/AnchorsBody14";
import { useTranslation } from "react-i18next";

const CheckoutFail = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <FailLogoArea />
      <div className="flex fixed bottom-0 left-0 right-0 px-4 py-3 gap-2 w-full max-w-[600px] mx-auto">
        <Link to="/cart" replace className="flex-1">
          <Button variant={"default"} className="w-full">
            <TypoBody14Semibold>
              {t("checkout.fail.goToCart")}
            </TypoBody14Semibold>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutFail;
