import { create } from "zustand";

export type RecentSearch = {
  searchTerm: string;
  timestamp: number;
};

type RecentSearchStore = {
  recentSearch: RecentSearch[];
  addRecentSearch: (searchTerm: string) => void;
  removeRecentSearch: (searchTerm: string) => void;
  clearRecentSearch: () => void;
  initializeFromLocalStorage: () => void;
};

// Initialize from localStorage
const getInitialState = (): RecentSearch[] => {
  if (typeof window === "undefined") return [];

  const storedSearches = localStorage.getItem("recentSearch");
  return storedSearches ? JSON.parse(storedSearches) : [];
};

const useRecentSearch = create<RecentSearchStore>((set) => ({
  recentSearch: getInitialState(),

  initializeFromLocalStorage: () => {
    const storedSearches = localStorage.getItem("recentSearch");
    if (storedSearches) {
      set({ recentSearch: JSON.parse(storedSearches) });
    }
  },

  addRecentSearch: (searchTerm: string) => {
    set((state) => {
      const updatedRecentSearch = state.recentSearch.filter(
        (search) => search.searchTerm !== searchTerm
      );
      const newSearch = { searchTerm, timestamp: Date.now() };
      updatedRecentSearch.push(newSearch);

      localStorage.setItem("recentSearch", JSON.stringify(updatedRecentSearch));
      return { recentSearch: updatedRecentSearch };
    });
  },

  removeRecentSearch: (searchTerm: string) => {
    set((state) => {
      const updatedRecentSearch = state.recentSearch.filter(
        (search) => search.searchTerm !== searchTerm
      );

      localStorage.setItem("recentSearch", JSON.stringify(updatedRecentSearch));
      return { recentSearch: updatedRecentSearch };
    });
  },

  clearRecentSearch: () => {
    localStorage.setItem("recentSearch", JSON.stringify([]));
    set({ recentSearch: [] });
  },
}));

export default useRecentSearch;
