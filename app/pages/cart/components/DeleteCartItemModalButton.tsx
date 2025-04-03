import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { queryClient } from "~/api/react-query";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import TypoH3 from "~/components/ui/typo/AnchorsH3";
import { CART_QUERY_KEY, useRemoveCartItem } from "../hooks/useCarts";
import { TypoSubtleSemibold } from "~/components/ui/typo/AnchorsSubtle";

interface DeleteCartItemModalButtonProps {
  itemIds: string[];
  trigger?: React.ReactNode;
}

const DeleteCartItemModalButton = ({
  itemIds,
  trigger,
}: DeleteCartItemModalButtonProps) => {
  const { mutateAsync: removeCartItem } = useRemoveCartItem();

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteCartItem = async () => {
    try {
      await removeCartItem(itemIds);
      toast.success(t("cart.deleteItemSuccess"));
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: [CART_QUERY_KEY] });
    } catch (error) {
      console.error(error);
      toast.error(t("cart.deleteItemError"));
    }
  };

  return (
    <Dialog modal open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="sm">
            {t("cart.delete")}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        hideCloseButton
        className="px-4 py-5 rounded-md max-w-[calc(100%-64px)]"
      >
        <DialogHeader>
          <DialogTitle className="mb-2 text-subtle-semibold" asChild>
            <TypoSubtleSemibold>
              {t("cart.deleteModal.title", { n: itemIds.length })}
            </TypoSubtleSemibold>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex gap-1">
          <Button
            variant="outline"
            className="flex-1 h-9 border-common-black"
            onClick={() => setIsOpen(false)}
          >
            {t("common.cancel")}
          </Button>
          <Button
            variant="default"
            className="flex-1 h-9"
            onClick={handleDeleteCartItem}
          >
            {t("common.delete")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCartItemModalButton;
