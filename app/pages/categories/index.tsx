import { useState } from "react";
import { useLoaderData } from "react-router";
import { CategorySidebar } from "~/pages/categories/components/category-sidebar";
import { SubcategoryGrid } from "~/pages/categories/components/subcategory-grid";

const CategoryIndex = () => {
  const categoriesData = useLoaderData();
  const categories = categoriesData.itemList;
  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    categories[0]?.item.sno ?? null
  );

  const selectedCategoryData = categories.find(
    (category: any) => category.item.sno === selectedCategory
  );
  return (
    <div className="flex h-[calc(100vh-60px)]">
      <CategorySidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <main className="flex-1 overflow-y-auto">
        {selectedCategoryData && (
          <SubcategoryGrid
            subcategories={selectedCategoryData.item.subCategoryList}
          />
        )}
      </main>
    </div>
  );
};

export default CategoryIndex;
