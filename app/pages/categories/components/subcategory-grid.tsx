import { useCategory } from "~/contexts/CategoryContext";
import { _compact } from "~/lib/utils";
import SubCategoryGridContainer from "./SubCategoryGrid/container";

export function SubcategoryGrid() {
  const { allSecondAndThirdCategory } = useCategory();
  const flatCategory = allSecondAndThirdCategory.flatMap(
    (category) => category
  );

  return (
    <main className="flex-1 h-full overflow-y-auto">
      <div className="pb-[450px]">
        {flatCategory.map((category) => (
          <SubCategoryGridContainer
            key={category?.categoryId ?? ""}
            secondCategory={category}
            thirdCategory={category.subCategoryList ?? []}
          />
        ))}
      </div>
    </main>
  );
}

export default SubcategoryGrid;
