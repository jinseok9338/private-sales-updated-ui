import { CategoryTabs } from "./components/category-tab";
import { FilterChips } from "./components/filter-chips";
import { HotDealProducts } from "./components/rankedProducts";
import { RecommendedProducts } from "./components/recommendedProducts";

const CategoryDetailPage = () => {
  return (
    <>
      <CategoryTabs />
      <FilterChips />
      <HotDealProducts />
      <RecommendedProducts />
    </>
  );
};

export default CategoryDetailPage;
