import React from "react";
import type { CartItem, CartVendorGroup } from "~/@types/cart/cart";

export type CartContextType = {
  cartItems: CartItem[];
  totals: {
    subtotal: number;
    shipping: number;
    points: number;
    total: number;
  };
  handleSelectAll: (checked: boolean) => void;
  handleSelectItem: (id: number, selected: boolean) => void;
  handleQuantityChange: (id: number, quantity: number) => void;
  handleRemoveItem: (id: number) => void;
  vendorGroups: CartVendorGroup[];
  selectedCount: number;
};

export const CartContext = React.createContext<CartContextType | null>(null);

export const useCartContext = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
