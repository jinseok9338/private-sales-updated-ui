import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import {
  TypoBody13,
  TypoBody13Semibold,
} from "~/components/ui/typo/AnchorsBody13";

const Terms = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3 pt-8 px-4 pb-[56px] bg-common-white">
      <div className="flex gap-3">
        <TypoBody13Semibold className="underline">
          <Link to="/terms?type=privacy">{t("bottom.terms.privacy")}</Link>
        </TypoBody13Semibold>
        <TypoBody13 className="text-gray-600">·</TypoBody13>
        <TypoBody13>
          <Link to="/terms?type=terms">{t("bottom.terms.terms")}</Link>
        </TypoBody13>
      </div>
      <div className="flex gap-1">
        <TypoBody13>{t("bottom.terms.email")}</TypoBody13>

        <Link
          to="mailto:customer@anchors-biz.com"
          className="flex items-center"
        >
          <TypoBody13 className="underline">
            {t("bottom.terms.anchors-email")}
          </TypoBody13>
        </Link>
      </div>
      <p className="text-gray-600 font-pretendard text-[13px] font-normal leading-[150%] uppercase">
        © Anchors All rights reserved
      </p>
    </div>
  );
};

export default Terms;
