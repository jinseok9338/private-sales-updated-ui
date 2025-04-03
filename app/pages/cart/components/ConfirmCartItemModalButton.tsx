import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { queryClient } from "~/api/react-query";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { TypoSubtleSemibold } from "~/components/ui/typo/AnchorsSubtle";
import { TypoBody14 } from "~/components/ui/typo/AnchorsBody14";
import { CART_QUERY_KEY } from "../hooks/useCarts";
import {
  CONFIRMED_ITEMS_QUERY_KEY,
  useAddConfirmedItem,
} from "../hooks/useConfirmedItems";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { ACTIVE_CART_TAB } from "~/constants/QueryStringKeys";
import { useQueryState } from "nuqs";

interface ConfirmCartItemModalButtonProps {
  itemIds: string[];
  trigger?: React.ReactNode;
  disabled?: boolean;
}

const ConfirmCartItemModalButton = ({
  itemIds,
  trigger,
  disabled,
}: ConfirmCartItemModalButtonProps) => {
  const { mutateAsync: confirmCartItem } = useAddConfirmedItem();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCartTab, setActiveCartTab] = useQueryState(ACTIVE_CART_TAB.key, {
    defaultValue: ACTIVE_CART_TAB.defaultValue,
  });

  const handleConfirmCartItem = async () => {
    try {
      await confirmCartItem(itemIds);
      toast.success(t("cart.confirmModal.success"));
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: [CART_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [CONFIRMED_ITEMS_QUERY_KEY] });
      setActiveCartTab("confirmed");
    } catch (error) {
      console.error(error);
      toast.error(t("cart.confirmModal.error"));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger disabled={disabled} asChild>
        {trigger || (
          <Button variant="outline" size="sm" disabled={disabled}>
            {t("cart.confirmModal.confirm")}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        hideCloseButton
        className="px-4 py-5 rounded-md max-w-[calc(100%-64px)]"
        style={{ zIndex: 51 }}
      >
        <DialogHeader className="text-center">
          <DialogTitle>
            <TypoSubtleSemibold>
              {t("cart.confirmModal.title")}
            </TypoSubtleSemibold>
          </DialogTitle>
          <DialogDescription asChild>
            <TypoBody13 className="text-gray-600">
              {t("cart.confirmModal.description")}
            </TypoBody13>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-1 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 h-9 border-common-black"
            onClick={() => setIsOpen(false)}
          >
            {t("cart.confirmModal.cancel")}
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1 h-9 bg-common-black text-white"
            onClick={handleConfirmCartItem}
          >
            {t("cart.confirmModal.confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
      {isOpen && (
        <div
          className="fixed bottom-0 left-0 right-0 h-[76px] bg-white/10"
          style={{ zIndex: 49 }}
        />
      )}
    </Dialog>
  );
};

export default ConfirmCartItemModalButton;
