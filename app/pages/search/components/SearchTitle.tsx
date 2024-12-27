import { useTranslation } from "react-i18next";
import { useSearchContext } from "~/context/search/searchContext";

const SearchTitle = () => {
  const { t } = useTranslation();
  const { searchTrendsData } = useSearchContext();
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-bold">{t("search.header.title")}</h1>
      <span className="text-sm text-gray-500">
        {searchTrendsData.lastUpdated}
      </span>
    </div>
  );
};

export default SearchTitle;
