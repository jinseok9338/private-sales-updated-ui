import { Button } from "~/components/ui/button";
import { useSelectCategory } from "~/hooks/useSelectCategory";
import { cn } from "~/lib/utils";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { TypoBody13Semibold } from "~/components/ui/typo/AnchorsBody13";

const CategoryThirdTab = () => {
  const { selectedSecondCategory, thirdCategoryId, handleSelectThirdCategory } =
    useSelectCategory();

  const showAllButton =
    selectedSecondCategory?.subCategoryList &&
    selectedSecondCategory.subCategoryList.length > 1;

  return (
    <div className="w-full flex items-center h-14 pl-4 overflow-x-auto scrollbar-hide">
      <div className="flex gap-1 min-w-max">
        {showAllButton && (
          <Button
            variant="outline"
            onClick={() => handleSelectThirdCategory(0)}
            className={cn(
              "min-w-fit h-9",
              !thirdCategoryId ? "border-black" : "border-gray-200"
            )}
          >
            {thirdCategoryId ? (
              <TypoBody13 className="text-gray-500">ALL</TypoBody13>
            ) : (
              <TypoBody13Semibold className="text-common-black">
                ALL
              </TypoBody13Semibold>
            )}
          </Button>
        )}
        {selectedSecondCategory?.subCategoryList?.map((category) => (
          <Button
            key={category.categoryId}
            variant="outline"
            onClick={() => handleSelectThirdCategory(category.categoryId)}
            className={cn(
              "min-w-fit h-9",
              thirdCategoryId === category.categoryId.toString()
                ? "border-black"
                : "border-gray-200"
            )}
          >
            {thirdCategoryId === category.categoryId.toString() ? (
              <TypoBody13Semibold>{category.name}</TypoBody13Semibold>
            ) : (
              <TypoBody13 className="text-gray-500">{category.name}</TypoBody13>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryThirdTab;
