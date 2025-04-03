import type { CartItem } from "~/pages/cart/services/cartApi";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getOrderData = async (orderId: string): Promise<CartItem[]> => {
  await delay(500);
  let tempCart: CartItem[] = [
    {
      id: "1",
      name: "Sample Product 1",
      price: 29.99,
      quantity: 1,
      stock: 10,
      imageUrl: "https://picsum.photos/200/300",
      productCode: "1234567890",
      option: "Red Hot Chilly Pepper",
    },
    {
      id: "2",
      name: "Sample Product 2",
      price: 49.99,
      quantity: 2,
      stock: 0,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      productCode: "1234567890",
      option: "Cool Ranch",
    },
  ];

  return tempCart;
};
