import React from "react";
import { createContext } from "react";
import type { Filter, Tab } from "~/@types/category/category";
import type { HotDealItem } from "~/@types/hotdeal/hotdeal";

export type CategoryDetailContextType = {
  tabs: Tab[];
  filters: Filter[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  products: HotDealItem[];
};

export const categoryDetailContext =
  createContext<CategoryDetailContextType | null>(null);

export const useCategoryDetailContext = () => {
  const context = React.useContext(categoryDetailContext);
  if (!context) {
    throw new Error(
      "useCategoryDetailContext must be used within a categoryDetailContextProvider"
    );
  }
  return context;
};
