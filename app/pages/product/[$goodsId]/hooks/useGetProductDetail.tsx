import { useQuery } from "@tanstack/react-query";

export interface ProductDetailType {
  productRefColor: string;
  productDesc: string;
  basicDiscount: number;
  price: number;
  description: string;
  images: Image[];
  sizeList: SizeList[];
  payLimit: PayLimit;
}

export interface Image {
  oriFileName: string;
  fileName: string;
  filePath: string;
}

export interface PayLimit {
  remainingLimit: number;
  givenPayLimit: number;
}

export interface SizeList {
  itemId: number;
  size: string;
  stock: number;
}

export const useGetProductDetail = (goodsId: string) => {
  return useQuery({
    queryKey: ["productDetail", goodsId],
    queryFn: () => getProductDetail(goodsId),
    enabled: !!goodsId,
  });
};

const getProductDetail = async (
  goodsId: string
): Promise<ProductDetailType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        productRefColor: "00U27WUSHC100",
        productDesc: "SHOES",
        basicDiscount: 70,
        price: 500000,
        description:
          "Fitted silhouette\nLong sleeves\nBack length: 61.5 cm / 24 inches (size S)\n[COM : 80 % Polyester;20 % Elastane]",
        images: [
          {
            oriFileName: "LADY SHOES 4.jpg",
            fileName: "LADY SHOES 4.jpg",
            filePath: "https://demo.privatesales.co.kr/images/",
          },
          {
            oriFileName: "LADY SHOES 5.jpg",
            fileName: "LADY SHOES 5.jpg",
            filePath: "https://demo.privatesales.co.kr/images/",
          },
          {
            oriFileName: "LADY SHOES 6.jpg",
            fileName: "LADY SHOES 6.jpg",
            filePath: "https://demo.privatesales.co.kr/images/",
          },
        ],
        sizeList: [
          {
            itemId: 107,
            size: "T7",
            stock: 5,
          },
          {
            itemId: 108,
            size: "T8",
            stock: 5,
          },
          {
            itemId: 109,
            size: "T9",
            stock: 5,
          },
          {
            itemId: 110,
            size: "T10",
            stock: 0,
          },
        ],
        payLimit: {
          remainingLimit: 5,
          givenPayLimit: 5,
        },
      });
    }, 1000);
  });
};
