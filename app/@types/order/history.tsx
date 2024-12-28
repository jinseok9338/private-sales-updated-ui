export interface DeliveryInfo {
  name: string;
  orderNumber: string;
  phone: string;
  address: string;
}

export interface OrderItem {
  id: string;
  date: string;
  referenceNumber: string;
  productCode: string;
  productSku: string;
  image: string;
  originalPrice: number;
  discountAmount: number;
  finalPrice: number;
  quantity: number;
}
