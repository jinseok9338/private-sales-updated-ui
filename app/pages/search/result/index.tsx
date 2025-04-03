import SettingArea from "~/pages/Index/components/SettingArea";
import { useQueryState } from "nuqs";
import { useTranslation } from "react-i18next";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { TypoSubtleSemibold } from "~/components/ui/typo/AnchorsSubtle";
import { SEARCH_INPUT_VALUE } from "~/constants/QueryStringKeys";
import ProductsArea, {
  type Product,
} from "~/pages/Index/components/productsArea";
import PurchaseMainButtonDrawer from "~/pages/Index/components/productCard/components/PurchaseDrawer";
import { getProductList } from "~/pages/Index/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const SearchResultPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useQueryState(SEARCH_INPUT_VALUE.key, {
    defaultValue: SEARCH_INPUT_VALUE.defaultValue,
  });

  const { data, isPending } = useInfiniteQuery({
    queryKey: ["products", "list"],
    queryFn: ({ pageParam = 1 }) =>
      getProductList({ page: pageParam, take: 10 }),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
    initialPageParam: 1,
  });

  const products =
    data?.pages.reduce((acc, page) => {
      return [...acc, ...page.items];
    }, [] as Product[]) ?? [];

  if (products.length === 0 && !isPending) {
    return (
      <div className="px-4 flex flex-col justify-center items-center min-h-[calc(100vh-124px)] gap-2">
        <TypoSubtleSemibold>
          {t("search.result.noResult", { q: searchQuery })}
        </TypoSubtleSemibold>
        <TypoBody13 className="text-gray-600">
          {t("search.result.searchDifferent")}
        </TypoBody13>
      </div>
    );
  }
  return (
    <>
      <SettingArea />
      <ProductsArea />
      <PurchaseMainButtonDrawer />
    </>
  );
};

export default SearchResultPage;
