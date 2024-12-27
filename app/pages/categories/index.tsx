import { CategorySidebar } from "~/pages/categories/components/category-sidebar";
import { SubcategoryGrid } from "~/pages/categories/components/subcategory-grid";

const CategoryIndex = () => {
  return (
    <div className="flex h-[calc(100vh-60px)]">
      <CategorySidebar />
      <SubcategoryGrid />
    </div>
  );
};

export default CategoryIndex;
