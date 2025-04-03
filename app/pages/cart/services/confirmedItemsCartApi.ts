interface ConfirmedItem {
  id: string;
  name: string;
  imageUrl: string;
  productCode: string;
  price: number;
  quantity: number;
  stock: number;
  option: string;
}

// Temporary confirmed items storage
let confirmedItems: ConfirmedItem[] = [
  {
    id: "c1",
    name: "Confirmed Product 1",
    price: 99.99,
    quantity: 2,
    imageUrl: "https://picsum.photos/id/216/200/300",
    productCode: "1234567890",
    stock: 10,
    option: "Red Hot Chilly Pepper",
  },
  {
    id: "c2",
    name: "Confirmed Product 2",
    price: 159.99,
    quantity: 1,
    imageUrl: "https://picsum.photos/id/237/200/300",
    productCode: "1234567890",
    stock: 10,
    option: "Cool Ranch",
  },
  {
    id: "c3",
    name: "Confirmed Product 3",
    price: 79.99,
    quantity: 3,
    imageUrl: "https://picsum.photos/id/227/200/300",
    productCode: "1234567890",
    stock: 10,
    option: "Sour Cream and Onion",
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getConfirmedItems = async (): Promise<ConfirmedItem[]> => {
  await delay(500);
  return [...confirmedItems];
};

const removeConfirmedItem = async (
  itemId: string
): Promise<ConfirmedItem[]> => {
  await delay(300);
  confirmedItems = confirmedItems.filter((item) => item.id !== itemId);
  return [...confirmedItems];
};

const addConfirmedItem = async (
  itemIds: string[]
): Promise<ConfirmedItem[]> => {
  await delay(300);
  const existingItemIndex = confirmedItems.findIndex((confirmedItem) =>
    itemIds.includes(confirmedItem.id)
  );

  if (existingItemIndex !== -1) {
    confirmedItems[existingItemIndex].quantity += itemIds.length;
  } else {
    confirmedItems.push({
      id: itemIds[0],
      name: "Confirmed Product 1",
      price: 99.99,
      quantity: itemIds.length,
      imageUrl: "https://picsum.photos/id/206/200/300",
      productCode: "1234567890",
      stock: 10,
      option: "Red Hot Chilly Pepper",
    });
  }

  return [...confirmedItems];
};

const clearConfirmedItems = async (): Promise<void> => {
  await delay(300);
  confirmedItems = [];
};

const purchaseConfirmedItems = async (purchasedItems: {
  itemId: string;
  quantity: number;
}): Promise<boolean> => {
  await delay(300);
  confirmedItems = confirmedItems.filter(
    (item) => item.id !== purchasedItems.itemId
  );
  return true;
};

export {
  getConfirmedItems,
  removeConfirmedItem,
  addConfirmedItem,
  clearConfirmedItems,
  type ConfirmedItem,
  purchaseConfirmedItems,
};
