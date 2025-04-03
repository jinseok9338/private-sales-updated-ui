import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import TypoP_UI_Semibold from "~/components/ui/typo/AnchorsPUISemibold";
import useRecentSearch from "~/stores/useRecentSearch";

const SearchTitle = () => {
  const { t } = useTranslation();
  const { clearRecentSearch, recentSearch } = useRecentSearch();
  return (
    <div className="flex justify-between items-center p-4">
      <TypoP_UI_Semibold className="text-xl font-bold">
        {t("search.title.title")}
      </TypoP_UI_Semibold>
      <Button
        variant={"ghost"}
        size="sm"
        disabled={recentSearch.length === 0}
        onClick={clearRecentSearch}
      >
        <TypoBody13 className="text-gray-500">
          {t("search.title.clear")}
        </TypoBody13>
      </Button>
    </div>
  );
};

export default SearchTitle;
