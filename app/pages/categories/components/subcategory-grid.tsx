import type { SubCategory } from "~/@types/category/category";

interface SubcategoryGridProps {
  subcategories: SubCategory[];
}

export function SubcategoryGrid({ subcategories }: SubcategoryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {subcategories.map((subcategory) => (
        <div key={subcategory.item.sno} className="flex flex-col items-center">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={subcategory.item.image}
              alt={subcategory.item.name}
              className="object-cover"
            />
          </div>
          <span className="mt-2 text-sm text-center">
            {subcategory.item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
