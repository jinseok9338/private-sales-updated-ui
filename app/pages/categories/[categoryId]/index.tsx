import { useSearchParams } from "react-router";
import { CategoryTabs, type Tab } from "./components/category-tab";
import { FilterChips, type Filter } from "./components/filter-chips";
import AxiosClient from "~/api/axios";
import { HotDealProducts } from "./components/rankedProducts";
import { RecommendedProducts } from "./components/recommendedProducts";

export const tabs: Tab[] = [
  { id: "denim", name: "데님" },
  { id: "slacks", name: "슬랙스" },
  { id: "long-pants", name: "롱팬츠" },
  { id: "short-pants", name: "숏팬츠" },
];

export const filters: Filter[] = [
  { id: "brand", name: "브랜드", hasDropdown: false },
  { id: "recommended", name: "추천순", hasDropdown: true },
  { id: "price", name: "가격", hasDropdown: true },
  { id: "color", name: "색상", hasDropdown: true },
  { id: "category-age", name: "카/연령", hasDropdown: true },
];

const CategoryDetailPage = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") ?? "denim";
  const setActiveTab = (tab: string) => {
    searchParams.set("tab", tab);
  };
  return (
    <>
      <CategoryTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <FilterChips filters={filters} />
      <HotDealProducts />
      <RecommendedProducts />
    </>
  );
};

export default CategoryDetailPage;
