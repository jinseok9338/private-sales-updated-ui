import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import DiorLogo from "./components/DiorLogo";
import IconsContainer from "./components/IconsContainer";
import SearchBar from "./components/searchBar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import GraphDrawer from "./components/GraphDrawer";

const Headers = () => {
  const { t } = useTranslation();
  return (
    <>
      <header className="flex flex-col w-full absolute top-0">
        <div className="flex  py-2 px-4 items-baseline bg-common-black justify-center gap-2">
          <TypoBody13 className="text-common-white">
            {t("main.header.cs")}
          </TypoBody13>
          <Link to="/notice">
            <TypoBody13 className="text-common-white underline">
              {t("main.header.seeDetail")}
            </TypoBody13>
          </Link>
        </div>
        <div className="h-[52px] bg-common-white w-full px-4 py-3">
          <div className="flex justify-between items-center">
            <DiorLogo />
            <div className="flex gap-4 items-center">
              <IconsContainer />
            </div>
          </div>
        </div>
        <SearchBar />
      </header>
      <GraphDrawer />
    </>
  );
};

export default Headers;
