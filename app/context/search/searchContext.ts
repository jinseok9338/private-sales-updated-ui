import React from "react";
import type { AgeGroup, SearchPageData } from "~/@types/search/search";

export type ISearchContext = {
  selectedAge: AgeGroup;
  searchTrendsData: SearchPageData;
  ageGroups: AgeGroup[];
  handleSelectAge: (age: AgeGroup) => void;
};

export const SearchContext = React.createContext<ISearchContext | null>(null);

export const useSearchContext = () => {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
