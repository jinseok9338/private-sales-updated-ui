import mainImage1 from "~/assets/images/mianProductImage1.png";
import mainImage2 from "~/assets/images/mainProductImage2.png";
import mainImage3 from "~/assets/images/mainProductImage3.png";
import mainImage4 from "~/assets/images/mainProductImage4.png";
import mainImage5 from "~/assets/images/mainProductIamge5.png";
import mainImage6 from "~/assets/images/mainProductImage6.png";
import mainImage7 from "~/assets/images/mainProductImage7.png";
import mainImage8 from "~/assets/images/mainProductImage8.png";
import mainImage9 from "~/assets/images/mainProductImage9.png";
import mainImage10 from "~/assets/images/mainProductImage10.png";

const QUOTA_DATA = [
  {
    category: "W_SHOES",
    quota: 0,
  },
  {
    category: "M_SHOES",
    quota: 0,
  },
  {
    category: "W_RTW",
    quota: 3,
  },
  {
    category: "M_RTW",
    quota: 0,
  },
  {
    category: "FJTP",
    quota: 0,
  },
  {
    category: "W_BAGS",
    quota: 1,
  },
  {
    category: "M_BAGS",
    quota: 0,
  },
  {
    category: "W_SLG",
    quota: 1,
  },
  {
    category: "M_SLG",
    quota: 0,
  },
  {
    category: "MAISON",
    quota: 5,
  },
  {
    category: "ACC",
    quota: 5,
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const getQuota = async () => {
  await delay(200);
  return QUOTA_DATA;
};

const PRODUCT_DETAIL_DATA = {
  productRefColor: "00H27DWGEC099",
  productDesc: "SHOES",
  basicDiscount: 70,
  price: 500000,
  description:
    "Fitted silhouette\nLong sleeves\nBack length: 61.5 cm / 24 inches (size S)\n[COM : 80 % Polyester;20 % Elastane]",
  images: [
    {
      oriFileName: "LADY SHOES 1.jpg",
      fileName: "LADY SHOES 1.jpg",
      filePath: "https://demo.privatesales.co.kr/images/",
    },
    {
      oriFileName: "LADY SHOES 2.jpg",
      fileName: "LADY SHOES 2.jpg",
      filePath: "https://demo.privatesales.co.kr/images/",
    },
    {
      oriFileName: "LADY SHOES 3.png",
      fileName: "LADY SHOES 3.png",
      filePath: "https://demo.privatesales.co.kr/images/",
    },
  ],
  sizeList: [
    {
      itemId: 126,
      size: "T8",
      stock: 4,
    },
  ],
  payLimit: {
    remainingLimit: 5,
    givenPayLimit: 5,
  },
};

export const getProdutDetail = async (goodsId: string) => {
  await delay(500);
  return PRODUCT_DETAIL_DATA;
};

// Type definition for product
interface Product {
  id: number;
  code: string;
  name: string;
  price: number;
  discountPrice?: number;
  stock: number;
  image: string;
}

// Base template products
const baseProducts = [
  {
    code: "BAG001",
    name: "Premium Leather Tote Bag",
    price: 1299,
    discountPrice: 999,
    stock: 15,
    image: mainImage1,
  },
  // ... other product templates (without id)
] as const;

// Function to generate unique products
const generateProducts = (count: number): Product[] => {
  const images = [
    mainImage1,
    mainImage2,
    mainImage3,
    mainImage4,
    mainImage5,
    mainImage6,
    mainImage7,
    mainImage8,
    mainImage9,
    mainImage10,
  ];

  return Array.from({ length: count }, (_, index) => {
    const baseProduct = baseProducts[index % baseProducts.length];
    const imageIndex = index % images.length;

    return {
      ...baseProduct,
      id: index + 1, // Ensures unique ID
      code: `BAG${String(index + 1).padStart(3, "0")}`,
      image: images[imageIndex],
      // Add some variety to prices and stock
      price: baseProduct.price + (index % 5) * 100,
      stock: Math.max(0, 20 - (index % 25)),
      discountPrice: index % 3 === 0 ? undefined : baseProduct.price * 0.8,
    };
  });
};

interface PaginationParams {
  page?: number;
  take?: number;
}

interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
}

// Mock database
const TOTAL_PRODUCTS = 200;
const allProducts = generateProducts(TOTAL_PRODUCTS);

export const getProductList = async ({
  page = 1,
  take = 100,
}: PaginationParams = {}): Promise<PaginatedResponse<Product>> => {
  await delay(1000); // Simulate network delay

  const startIndex = (page - 1) * take;
  const endIndex = Math.min(startIndex + take, TOTAL_PRODUCTS);

  const items = allProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(TOTAL_PRODUCTS / take);

  return {
    items,
    total: TOTAL_PRODUCTS,
    page,
    totalPages,
    hasMore: page < totalPages,
  };
};
