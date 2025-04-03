import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { useLoaderData } from "react-router";
import type { clientLoader } from "~/routes/(categoryResult).tsx";

export interface Category {
  categoryId: number;
  name: string;
  parentId: number | null;
  subCategoryList?: Category[];
  image?: string;
}

interface CategoryContextType {
  categoriesAll: Category[];
  allFirstCategory: {
    categoryId: number;
    name: string;
    parentId: null;
  }[];
  selectedFirstCategory: Category | undefined;
  activeCategory: number | null;
  setActiveCategory: (categoryId: number) => void;
  allSecondAndThirdCategory: {
    categoryId: number;
    name: string;
    parentId: number;
    subCategoryList: {
      categoryId: number;
      name: string;
      parentId: number;
      image: string;
    }[];
  }[];
}

const CategoryContext = createContext<CategoryContextType | null>(null);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const categoriesData = useLoaderData<typeof clientLoader>();
  if (!categoriesData) {
    throw new Error(
      "No categories data found. Please check the clientLoader is used in the router"
    );
  }

  const categoriesAll = categoriesData.itemList;
  const [activeCategory, setActiveCategory] = useState<number | null>(
    categoriesAll[0]?.categoryId ?? null
  );

  const allFirstCategory = categoriesAll.map((category) => ({
    categoryId: category.categoryId,
    name: category.name,
    parentId: null,
  }));

  const selectedFirstCategory = categoriesAll.find(
    (category) => category.categoryId === activeCategory
  );

  const allSecondAndThirdCategory = categoriesAll.flatMap(
    (category) =>
      category.subCategoryList?.map((secondCategory) => ({
        categoryId: secondCategory.categoryId,
        name: secondCategory.name,
        parentId: secondCategory.parentId ?? 0,
        subCategoryList:
          secondCategory.subCategoryList?.map((thirdCategory) => ({
            categoryId: thirdCategory.categoryId,
            name: thirdCategory.name,
            parentId: thirdCategory.parentId ?? 0,
            image: thirdCategory.image,
          })) ?? [],
      })) ?? []
  );

  const value: CategoryContextType = {
    categoriesAll,
    allFirstCategory,
    selectedFirstCategory,
    allSecondAndThirdCategory,
    activeCategory,
    setActiveCategory,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
