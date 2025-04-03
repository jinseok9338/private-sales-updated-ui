import { useCategory } from "~/contexts/CategoryContext";
import { cn } from "~/lib/utils";

export function CategorySidebar() {
  const { allFirstCategory, activeCategory, setActiveCategory } = useCategory();

  const handleClick = (categoryId: number) => {
    setActiveCategory(categoryId);
    const targetElement = document.getElementById(`category-${categoryId}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside className="flex-shrink-0 bg-common-alternate h-full overflow-y-auto">
      <nav>
        {allFirstCategory.map((category) => (
          <button
            key={category.categoryId}
            onClick={() => handleClick(category.categoryId)}
            className={cn(
              "w-full flex justify-between text-left py-2 pl-4 pr-[27px] items-center",
              activeCategory === category.categoryId
                ? "bg-common-white text-body13"
                : "text-body13 text-gray-500"
            )}
          >
            {category.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
