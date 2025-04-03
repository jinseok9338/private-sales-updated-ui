import { create } from "zustand";

interface ConfirmedItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ConfirmedItemStore {
  confirmedItems: ConfirmedItem[];
  addItem: (item: ConfirmedItem) => void;
  removeItem: (itemId: string) => void;
}

const useConfirmedItemStore = create<ConfirmedItemStore>((set) => ({
  confirmedItems: [],
  addItem: (item) =>
    set((state) => ({ confirmedItems: [...state.confirmedItems, item] })),
  removeItem: (itemId) =>
    set((state) => ({
      confirmedItems: state.confirmedItems.filter((item) => item.id !== itemId),
    })),
}));

export default useConfirmedItemStore;
