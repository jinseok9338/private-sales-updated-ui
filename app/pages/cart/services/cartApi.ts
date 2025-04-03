interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  productCode: string;
  price: number;
  quantity: number;
  stock: number;
  option: string;
}

interface PayLimit {
  remainingLimit: number;
  givenPayLimit: number;
}

// Temporary cart storage
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

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getCart = async (): Promise<CartItem[]> => {
  await delay(500);
  return [...tempCart]; // Return copy to prevent direct mutations
};

const removeCartItem = async (itemIds: string[]): Promise<CartItem[]> => {
  await delay(300);
  tempCart = tempCart.filter((item) => !itemIds.includes(item.id));
  return [...tempCart];
};

const addCartItem = async (item: CartItem): Promise<CartItem[]> => {
  await delay(300);
  const existingItemIndex = tempCart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    tempCart[existingItemIndex].quantity += item.quantity;
  } else {
    tempCart.push(item);
  }

  return [...tempCart];
};

const clearCart = async (): Promise<void> => {
  await delay(300);
  tempCart = [];
};

const getPayLimit = async (): Promise<PayLimit> => {
  await delay(300);
  return {
    remainingLimit: 5,
    givenPayLimit: 5,
  };
};

export {
  getCart,
  removeCartItem,
  addCartItem,
  clearCart,
  type CartItem,
  type PayLimit,
  getPayLimit,
};
