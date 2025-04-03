import { Checkbox } from "~/components/ui/checkbox";
import DeleteCartItemModalButton from "./DeleteCartItemModalButton";
import XIcon from "~/assets/icons/close-black.svg";

const CartItemDeleteArea = ({
  isSoldOut,
  isSelected,
  onSelect,
  itemId,
}: {
  isSoldOut: boolean;
  isSelected: boolean;
  onSelect: (itemId: string, checked: boolean) => void;
  itemId: string;
}) => {
  return (
    <div className="flex items-center justify-between pt-1">
      <Checkbox
        checked={isSelected}
        onCheckedChange={(checked) => onSelect(itemId, checked as boolean)}
        disabled={isSoldOut}
      />
      <DeleteCartItemModalButton
        itemIds={[itemId]}
        trigger={
          <div className="flex items-center justify-center w-6 h-6">
            <img src={XIcon} alt="close" className="w-4 h-4" />
          </div>
        }
      />
    </div>
  );
};

export default CartItemDeleteArea;
