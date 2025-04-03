import type { CartItem } from "~/pages/cart/services/cartApi";

interface PurchaseHistory {
  item: CartItem;
  date: string; // YYYY-MM-DD
  orderNumber: string;
}

const getPurchaseHistory = async (): Promise<PurchaseHistory[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const mockPurchaseHistory: PurchaseHistory[] = [
    {
      item: {
        id: "1",
        price: 29900,
        quantity: 2,
        imageUrl: "https://picsum.photos/id/231/200/300",
        option: "black",
        productCode: "1234567890",
        name: "Premium Cotton T-Shirt",
        stock: 10,
      },
      date: "2024-03-27",
      orderNumber: "ORDER-2024-001",
    },
    {
      item: {
        id: "2",
        name: "Slim Fit Jeans",
        price: 59900,
        quantity: 1,
        imageUrl: "https://picsum.photos/id/342/200/300",
        option: "32",
        productCode: "1234567890",
        stock: 10,
      },
      date: "2024-03-25",
      orderNumber: "ORDER-2024-002",
    },
    {
      item: {
        id: "3",
        name: "Running Shoes",
        price: 89900,
        quantity: 1,
        imageUrl: "https://picsum.photos/id/103/200/300",
        option: "260",
        productCode: "1234567890",
        stock: 10,
      },
      date: "2024-03-20",
      orderNumber: "ORDER-2024-003",
    },
    {
      item: {
        id: "4",
        name: "Leather Wallet",
        price: 39900,
        quantity: 1,
        imageUrl: "https://picsum.photos/id/250/200/300",
        option: "Brown",
        productCode: "1234567890",
        stock: 10,
      },
      date: "2024-03-15",
      orderNumber: "ORDER-2024-004",
    },
    {
      item: {
        id: "5",
        name: "Wireless Earbuds",
        price: 129900,
        quantity: 1,
        imageUrl: "https://picsum.photos/id/175/200/300",
        option: "White",
        productCode: "1234567890",
        stock: 10,
      },
      date: "2024-03-10",
      orderNumber: "ORDER-2024-005",
    },
  ];

  return mockPurchaseHistory;
};

export default getPurchaseHistory;
