import type { Category } from "~/@types/category/category";
import ParagraphS from "~/components/ui/typo/paragraph_s";
import { useCategoriesContext } from "~/context/categories/categoriesContext";

export function SubcategoryGrid() {
  const { categories, selectedCategoryId } = useCategoriesContext();
  const selectedCategoryData = categories.find(
    (category: Category) => category.item.sno === Number(selectedCategoryId)
  );
  const subcategories = selectedCategoryData?.item.subCategoryList ?? [];
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {subcategories.map((subcategory) => (
          <div
            key={subcategory.item.sno}
            className="flex flex-col items-center"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={subcategory.item.image}
                alt={subcategory.item.name}
                className="object-cover"
              />
            </div>
            <ParagraphS className="mt-2 text-sm text-center">
              {subcategory.item.name}
            </ParagraphS>
          </div>
        ))}
      </div>
    </main>
  );
}
