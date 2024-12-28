import { useTranslation } from "react-i18next";
import HeadingS from "~/components/ui/typo/heading_s";
import ParagraphS from "~/components/ui/typo/paragraph_s";
import { useSearchContext } from "~/context/search/searchContext";

const SearchTitle = () => {
  const { t } = useTranslation();
  const { searchTrendsData } = useSearchContext();
  return (
    <div className="flex justify-between items-center mb-4">
      <HeadingS className="text-xl font-bold">
        {t("search.header.title")}
      </HeadingS>
      <ParagraphS className="text-sm text-gray-500">
        {searchTrendsData.lastUpdated}
      </ParagraphS>
    </div>
  );
};

export default SearchTitle;
