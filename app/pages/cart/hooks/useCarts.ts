import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addCartItem,
  clearCart,
  getCart,
  removeCartItem,
  type CartItem,
} from "../services/cartApi";

export const CART_QUERY_KEY = "cartItems";

export const useGetCart = () => {
  return useQuery({
    queryKey: [CART_QUERY_KEY],
    queryFn: () => getCart(),
  });
};

export const useRemoveCartItem = () => {
  return useMutation({
    mutationFn: (itemIds: string[]) => removeCartItem(itemIds),
  });
};

export const useAddCartItem = () => {
  return useMutation({
    mutationFn: (item: CartItem) => addCartItem(item),
  });
};

export const useClearCart = () => {
  return useMutation({
    mutationFn: () => clearCart(),
  });
};
