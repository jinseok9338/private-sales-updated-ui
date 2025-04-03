import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getConfirmedItems,
  removeConfirmedItem,
  addConfirmedItem,
  clearConfirmedItems,
  type ConfirmedItem,
} from "../services/confirmedItemsCartApi";

export const CONFIRMED_ITEMS_QUERY_KEY = "confirmedItems";

export const useGetConfirmedItems = () => {
  return useQuery({
    queryKey: [CONFIRMED_ITEMS_QUERY_KEY],
    queryFn: () => getConfirmedItems(),
  });
};

export const useRemoveConfirmedItem = () => {
  return useMutation({
    mutationFn: (itemId: string) => removeConfirmedItem(itemId),
  });
};

export const useAddConfirmedItem = () => {
  return useMutation({
    mutationFn: (itemIds: string[]) => addConfirmedItem(itemIds),
  });
};

export const useClearConfirmedItems = () => {
  return useMutation({
    mutationFn: () => clearConfirmedItems(),
  });
};
