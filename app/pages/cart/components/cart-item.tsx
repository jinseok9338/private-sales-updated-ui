import { X } from "lucide-react";
import type { CartItem } from "~/@types/cart/cart";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import LabelS from "~/components/ui/typo/label_s";
import ParagraphS from "~/components/ui/typo/paragraph_s";
import { useCartContext } from "~/context/cart/cartContext";

interface CartItemProps {
  item: CartItem;
}

export function CartItemComponent({ item }: CartItemProps) {
  const { handleSelectItem, handleQuantityChange, handleRemoveItem } =
    useCartContext();
  return (
    <div className="py-4 px-4 border-b last:border-b-0">
      <div className="flex gap-4">
        <Checkbox
          checked={item.isSelected}
          onCheckedChange={(checked) =>
            handleSelectItem(item.id, checked as boolean)
          }
        />
        <div className="flex-1">
          <div className="flex gap-4">
            <img
              src={item.imageUrl}
              alt={item.productName}
              width={100}
              height={100}
              className="rounded-md"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <ParagraphS className="text-sm text-gray-600">
                  {item.vendorName}
                </ParagraphS>
                <button onClick={() => handleRemoveItem(item.id)}>
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              <LabelS className="font-medium mt-1 line-clamp-2">
                {item.productName}
              </LabelS>
              <div className="mt-2">
                <ParagraphS className="text-lg font-bold">
                  {item.discountedPrice.toLocaleString()}원
                </ParagraphS>
                {item.originalPrice > item.discountedPrice && (
                  <ParagraphS className="text-sm text-gray-400 line-through ml-2">
                    {item.originalPrice.toLocaleString()}원
                  </ParagraphS>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            {item.options.map((option, index) => (
              <div key={index} className="text-sm text-gray-600">
                {option.name} / {option.value}
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <Select
              value={item.quantity.toString()}
              onValueChange={(value) =>
                handleQuantityChange(item.id, parseInt(value))
              }
            >
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
