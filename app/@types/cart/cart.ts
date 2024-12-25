export interface CartOption {
  name: string;
  value: string;
}

export interface CartItem {
  id: number;
  vendorName: string;
  productName: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  options: CartOption[];
  quantity: number;
  isSelected: boolean;
  isFreeShipping: boolean;
  todayDeal?: boolean;
}

export interface CartVendorGroup {
  vendorName: string;
  items: CartItem[];
}

export interface CartTotals {
  subtotal: number;
  shipping: number;
  points: number;
  total: number;
}
