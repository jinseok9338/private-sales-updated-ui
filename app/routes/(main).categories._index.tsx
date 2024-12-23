import { useState } from "react";
import { useLoaderData } from "react-router";
import type { Category } from "~/@types/category/category";
import { CategorySidebar } from "~/layouts/pages/categories/category-sidebar";
import { SubcategoryGrid } from "~/layouts/pages/categories/subcategory-grid";

export async function clientLoader() {
  const res = await fetch("/mock/category.json");
  return res.json();
}

export default function CategoryPage() {
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
}
