import { ChevronDown } from "lucide-react";
import { useCategoryDetailContext } from "~/context/categories/[categoryId]/categoryDetailContext";

export function FilterChips() {
  const { filters } = useCategoryDetailContext();
  return (
    <div className="flex gap-2 overflow-x-auto py-4 px-4">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className="flex items-center gap-1 px-4 py-2 rounded-full border text-sm whitespace-nowrap hover:bg-gray-50"
        >
          {filter.name}
          {filter.hasDropdown && <ChevronDown className="h-4 w-4" />}
        </button>
      ))}
    </div>
  );
}
