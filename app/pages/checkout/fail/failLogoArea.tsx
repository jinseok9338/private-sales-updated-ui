import { useQueryState } from "nuqs";
import { useTranslation } from "react-i18next";
import logo from "~/assets/icons/checkout-fail.svg";
import Padding from "~/components/ui/padding";
import { Separator } from "~/components/ui/separator";
import {
  TypoBody13,
  TypoBody13Semibold,
} from "~/components/ui/typo/AnchorsBody13";
import TypoLarge from "~/components/ui/typo/AnchorsLarge";
import { CHECKOUT_FAIL_REASON_MESSAGE } from "~/constants/QueryStringKeys";

const FailLogoArea = () => {
  const { t } = useTranslation();
  const [reasonMessage] = useQueryState(CHECKOUT_FAIL_REASON_MESSAGE.key);
  const reasonMessageText = reasonMessage
    ? reasonMessage
    : t("checkout.fail.failLogoAreaOrderDescription");
  return (
    <div className="flex items-center flex-col justify-center py-10 px-4">
      <img src={logo} alt="logo" className="w-8 h-8" />
      <Padding height={8} />
      <TypoLarge className="whitespace-pre-line text-center">
        {t("checkout.fail.failLogoAreaTitle")}
      </TypoLarge>
      <Padding height={8} />
      <TypoBody13 className="whitespace-pre-line text-center">
        {t("checkout.fail.failLogoAreaOrderDescription")}
      </TypoBody13>
      <Padding height={16} />
      <Separator className="h-[1px]" />
      <Padding height={16} />
      <TypoBody13Semibold className="text-red-500">
        {t("checkout.fail.failReasonTitle")}
      </TypoBody13Semibold>
      <Padding height={8} />
      <TypoBody13 className="text-red-500 whitespace-pre-line text-center">
        {reasonMessageText}
      </TypoBody13>
    </div>
  );
};

export default FailLogoArea;
