import {
  TypoBody13,
  TypoBody13Semibold,
} from "~/components/ui/typo/AnchorsBody13";

import CloseButtonIcon from "~/assets/icons/close-black.svg";
import useFormatPrice from "~/hooks/useFormatPrice";

const SelectedMainItem = ({
  selectedQuantity,
  increaseQuantity,
  decreaseQuantity,
  selectedOption,
  handleSelectOption,
  goodsPrice,
}: {
  selectedQuantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  selectedOption: { label: string; stock: number };
  handleSelectOption: () => void;
  goodsPrice: number;
}) => {
  const totalPrice = goodsPrice * selectedQuantity;
  const { formatPrice } = useFormatPrice();
  const formattedPrice = formatPrice(totalPrice);

  return (
    <div className="flex p-4 bg-common-alternate rounded-[4px] flex-col gap-3">
      <div className="flex justify-between w-full">
        <TypoBody13>{selectedOption?.label}</TypoBody13>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            handleSelectOption();
          }}
        >
          <img src={CloseButtonIcon} alt="close" className="w-4 h-4" />
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center border border-gray-200 rounded-md h-[30px]">
          <button
            className={`w-[30px] h-[30px] border-r border-gray-200 ${
              selectedQuantity <= 1
                ? "bg-common-alternate text-gray-400"
                : "text-common-black hover:bg-gray-50 bg-common-white"
            }`}
            onClick={decreaseQuantity}
            disabled={selectedQuantity <= 1}
          >
            -
          </button>
          <div className="px-3 py-[5px] flex-1 text-center text-detail-12 text-common-black bg-common-white">
            {selectedQuantity}
          </div>
          <button
            className={`w-[30px] h-[30px] border-l border-gray-200 ${
              selectedQuantity >= 2 ||
              selectedQuantity >= (selectedOption?.stock ?? 0)
                ? "bg-common-alternate text-gray-400"
                : "text-common-black hover:bg-gray-50 bg-common-white"
            }`}
            onClick={increaseQuantity}
            disabled={
              selectedQuantity >= 2 ||
              selectedQuantity >= (selectedOption?.stock ?? 0)
            }
          >
            +
          </button>
        </div>
        <TypoBody13Semibold className="text-right">
          {formattedPrice}
        </TypoBody13Semibold>
      </div>
    </div>
  );
};

export default SelectedMainItem;
