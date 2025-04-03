import AcDrawer from "~/components/ui/new-drawer";
import {
  TypoBody13,
  TypoBody13Semibold,
} from "~/components/ui/typo/AnchorsBody13";
import { useSelectCategory } from "~/hooks/useSelectCategory";

const CategoryDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { handleSetFirstCategoryId, firstCategoryId, categoriesAll } =
    useSelectCategory();

  return (
    <AcDrawer zIndex={20} direction="top" isOpen={open} onClose={onClose}>
      <div className="flex flex-col gap-2 pt-[56px]">
        {categoriesAll.map((category) => (
          <button
            key={category.categoryId}
            className="flex items-center justify-center py-2"
            onClick={() => {
              handleSetFirstCategoryId(category.categoryId);
              onClose();
            }}
          >
            {category.categoryId.toString() === firstCategoryId?.toString() ? (
              <TypoBody13Semibold>{category.name}</TypoBody13Semibold>
            ) : (
              <TypoBody13 className="text-gray-600">{category.name}</TypoBody13>
            )}
          </button>
        ))}
      </div>
    </AcDrawer>
  );
};

export default CategoryDrawer;
