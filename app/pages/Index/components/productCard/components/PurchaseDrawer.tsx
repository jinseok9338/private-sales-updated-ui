import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import AcDrawer from "~/components/ui/new-drawer";
import { MAIN_PRODUCT_GOODS_ID } from "~/constants/QueryStringKeys";
import useGetProductDetail from "~/pages/Index/hooks/useGetProductDetail";
import ContentLoadingFooter from "./ContentLoadingFooter";
import DrawerContentLoading from "./DrawerContentLoading";
import MainBottomSheetFooter from "./MainBottomSheetFooter";
import BottomSheetMainContent from "./PurchaseDrawerContent";

const PurchaseMainButtonDrawer = () => {
  const [goodsId, setGoodsId] = useQueryState(MAIN_PRODUCT_GOODS_ID.key);
  const { data, isLoading } = useGetProductDetail(goodsId ?? "");
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

  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);

  const handleSelectOption = (optionId?: number) => {
    if (!optionId) {
      setSelectedOptionId(null);
      return;
    }
    setSelectedOptionId(optionId);
  };

  const options = data?.sizeList.map((size) => ({
    id: size.itemId,
    label: size.size,
    value: size.size,
    stock: size.stock,
  }));

  const selectedOption = options?.find(
    (option) => option.id === selectedOptionId
  );

  useEffect(() => {
    setSelectedQuantity(1);
    setSelectedOptionId(null);
  }, [goodsId]);

  return (
    <AcDrawer
      isOpen={!!goodsId}
      onClose={() => setGoodsId("")}
      footer={
        isLoading ? (
          <ContentLoadingFooter />
        ) : (
          <MainBottomSheetFooter
            handleClose={() => setGoodsId("")}
            remainingPurchaseCount={data?.payLimit.remainingLimit ?? 0}
            totalPurchaseCount={data?.payLimit.givenPayLimit ?? 0}
            selectedOption={selectedOption}
          />
        )
      }
    >
      {isLoading ? (
        <DrawerContentLoading />
      ) : (
        <BottomSheetMainContent
          handleSelectOption={handleSelectOption}
          selectedOption={selectedOption}
          options={options ?? []}
          goodsPrice={goodsPrice ?? 0}
          selectedQuantity={selectedQuantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}
    </AcDrawer>
  );
};

export default PurchaseMainButtonDrawer;
