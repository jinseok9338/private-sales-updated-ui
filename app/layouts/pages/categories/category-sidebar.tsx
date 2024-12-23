"use client";

import type { Category } from "~/@types/category/category";

interface CategorySidebarProps {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (sno: number) => void;
}

export function CategorySidebar({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategorySidebarProps) {
  return (
    <aside className="w-[126px] flex-shrink-0 border-r h-full overflow-y-auto">
      <nav className="py-4">
        {categories.map((category) => (
          <button
            key={category.item.sno}
            onClick={() => onSelectCategory(category.item.sno)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
              selectedCategory === category.item.sno
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
