import { TypoDetail12 } from "~/components/ui/typo/AnchorsDetail12";
import RightArrow from "~/assets/icons/arrow-right-black.svg";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const SizeGuideArea = () => {
  const { t } = useTranslation();

  return (
    <Link to="https://doc.clickup.com/9018115667/p/h/8crb1jk-10298/7470940b622f389">
      <div className="w-full flex justify-center h-[60px] py-2 px-4 cursor-pointer">
        <div className="bg-common-white w-full border border-common-black rounded-[4px] p-3 flex justify-between">
          <TypoDetail12 className="text-common-black">
            {t("size-guide.header.title")}
          </TypoDetail12>
          <img src={RightArrow} alt="right-arrow" className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default SizeGuideArea;
