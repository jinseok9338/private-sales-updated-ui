import { useQueryState } from "nuqs";
import { useState } from "react";
import { useLoaderData } from "react-router";
import {
  FIRST_CATEGORY_ID,
  SECOND_CATEGORY_ID,
  THIRD_CATEGORY_ID,
} from "~/constants/QueryStringKeys";
import type { Category } from "~/contexts/CategoryContext";
import type { clientLoader } from "~/routes/(categoryResult)";

interface SubCategory extends Category {
  parentId: number;
  subCategoryList: ThirdCategory[];
}

interface ThirdCategory extends Category {
  image: string;
}

export function useSelectCategory() {
  const categoriesAllResponse = useLoaderData<typeof clientLoader>();
  const categoriesAll = categoriesAllResponse.itemList;

  const [firstCategoryId, setFirstCategoryId] = useQueryState(
    FIRST_CATEGORY_ID.key
  );

  const handleSetFirstCategoryId = (categoryId: number) => {
    setFirstCategoryId(categoryId.toString());
  };

  const [secondCategoryId, setSecondCategoryId] = useQueryState(
    SECOND_CATEGORY_ID.key
  );

  const [thirdCategoryId, setThirdCategoryId] = useQueryState(
    THIRD_CATEGORY_ID.key
  );

  const selectedFirstCategory = categoriesAll.find(
    (category) => category.categoryId === Number(firstCategoryId)
  );

  const allSecondAndThirdCategory = categoriesAll
    .map((category) =>
      category.subCategoryList?.map(
        (subCategory): SubCategory => ({
          categoryId: subCategory.categoryId,
          name: subCategory.name,
          parentId: category.categoryId,
          subCategoryList: (subCategory.subCategoryList ?? []).map(
            (thirdCategory): ThirdCategory => ({
              categoryId: thirdCategory.categoryId,
              name: thirdCategory.name,
              image: thirdCategory.image ?? "",
              parentId: subCategory.categoryId,
            })
          ),
        })
      )
    )
    .filter((item): item is NonNullable<typeof item> => item !== undefined)
    .flat();

  const selectedSecondCategory = selectedFirstCategory?.subCategoryList?.find(
    (category) => category.categoryId === Number(secondCategoryId)
  );

  const selectedThirdCategories = selectedSecondCategory?.subCategoryList ?? [];

  const handleSelectSecondCategory = (categoryId: number) => {
    setSecondCategoryId(categoryId.toString());
    const newSelectedCategory = selectedFirstCategory?.subCategoryList?.find(
      (category) => category.categoryId === categoryId
    );
    setThirdCategoryId(
      newSelectedCategory?.subCategoryList?.[0]?.categoryId.toString() ?? null
    );
  };

  const handleSelectThirdCategory = (categoryId: number) => {
    setThirdCategoryId(categoryId.toString());
  };

  return {
    secondCategoryId,
    firstCategoryId,
    thirdCategoryId,
    selectedSecondCategory,
    selectedThirdCategories,
    allSecondAndThirdCategory,
    handleSelectSecondCategory,
    handleSelectThirdCategory,
    handleSetFirstCategoryId,
    selectedFirstCategory,
    categoriesAll,
  };
}
