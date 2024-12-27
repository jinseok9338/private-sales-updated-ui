import { useCategoriesContext } from "~/context/categories/categoriesContext";

export function CategorySidebar() {
  const { categories, selectedCategoryId, handleSelectCategory } =
    useCategoriesContext();
  return (
    <aside className="w-[126px] flex-shrink-0 border-r h-full overflow-y-auto">
      <nav className="py-4">
        {categories.map((category) => (
          <button
            key={category.item.sno}
            onClick={() => handleSelectCategory(category.item.sno)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
              Number(selectedCategoryId) === category.item.sno
                ? "bg-gray-100 font-medium"
                : ""
            }`}
          >
            {category.item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
