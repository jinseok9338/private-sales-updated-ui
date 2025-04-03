import { createContext, useContext, useState } from "react";
import { useGetProductDetail } from "../../../hooks/useGetProductDetail";

interface PurchaseButtonContextType {
  remainingPurchaseCount: number;
  totalPurchaseCount: number;
  options: {
    id: number;
    label: string;
    value: string;
    stock: number;
  }[];
  isLoading: boolean;
  selectedOptionId: number | null;
  selectedOption: {
    id: number;
    label: string;
    value: string;
    stock: number;
  } | null;
  handleSelectOption: (optionId?: number) => void;
  selectedQuantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  goodsPrice: number;
}

const PurchaseButtonContext = createContext<PurchaseButtonContextType>({
  remainingPurchaseCount: 0,
  totalPurchaseCount: 0,
  options: [],
  isLoading: false,
  selectedOptionId: null,
  selectedOption: null,

  handleSelectOption: () => {},
  selectedQuantity: 1,
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  goodsPrice: 0,
});

const PurchaseButtonProvider = ({
  children,
  goodsId,
}: {
  children: React.ReactNode;
  goodsId: string;
}) => {
  const { data, isLoading } = useGetProductDetail(goodsId);
  const goodsPrice = data?.price;
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const increaseQuantity = () => {
    // can not exceed the stock and 2
    if (
      selectedQuantity >= (data?.payLimit.remainingLimit ?? 0) ||
      selectedQuantity >= 2
    ) {
      return;
    }
    setSelectedQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (selectedQuantity <= 1) {
      return;
    }
    setSelectedQuantity((prev) => prev - 1);
  };
  const remainingPurchaseCount = data?.payLimit.remainingLimit ?? 0;
  const totalPurchaseCount = data?.payLimit.givenPayLimit ?? 0;
  const options = data?.sizeList.map((size) => ({
    id: size.itemId,
    label: size.size,
    value: size.size,
    stock: size.stock,
  }));
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);

  const handleSelectOption = (optionId?: number) => {
    if (!optionId) {
      setSelectedOptionId(null);
      return;
    }
    setSelectedOptionId(optionId);
  };
  const selectedOption = options?.find(
    (option) => option.id === selectedOptionId
  );

  return (
    <PurchaseButtonContext.Provider
      value={{
        remainingPurchaseCount,
        totalPurchaseCount,
        options: options ?? [],
        isLoading,
        selectedOptionId,
        selectedOption: selectedOption ?? null,
        handleSelectOption,
        selectedQuantity,
        increaseQuantity,
        decreaseQuantity,
        goodsPrice: goodsPrice ?? 0,
      }}
    >
      {children}
    </PurchaseButtonContext.Provider>
  );
};

const usePurchaseButton = () => {
  const context = useContext(PurchaseButtonContext);
  if (!context) {
    throw new Error(
      "usePurchaseButton must be used within a PurchaseButtonProvider"
    );
  }
  return context;
};

export { PurchaseButtonProvider, PurchaseButtonContext, usePurchaseButton };
