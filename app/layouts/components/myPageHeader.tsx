import { useTranslation } from "react-i18next";
import TypoP_UI_Semibold from "~/components/ui/typo/AnchorsPUISemibold";
import MyPageHeaderIconContainer from "./myPageHeaderIconContainer";
const MyPageHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between py-3 px-4  items-center">
      <div className="flex items-center">
        <TypoP_UI_Semibold>{t("myPage.header")}</TypoP_UI_Semibold>
      </div>
      <MyPageHeaderIconContainer />
    </div>
  );
};

export default MyPageHeader;
