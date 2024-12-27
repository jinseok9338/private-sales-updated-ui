import React from "react";
import type { Category } from "~/@types/category/category";

export type CategoriesContextType = {
  categories: Category[];
  selectedCategoryId: string | null;
  handleSelectCategory: (sno: number) => void;
};

const CategoriesContext = React.createContext<CategoriesContextType | null>(
  null
);

export const useCategoriesContext = () => {
  const context = React.useContext(CategoriesContext);
  if (!context) {
    throw new Error(
      "useCategoriesContext must be used within a CategoriesProvider"
    );
  }
  return context;
};

export default CategoriesContext;
