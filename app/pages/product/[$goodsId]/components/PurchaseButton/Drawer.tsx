import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { usePurchaseButton } from "./context/PurchaseButtonContext";
import BottomSheetContent from "./BottomSheetContent";
import BottomSheetFooter from "./BottomSheetFooter";
import { useState } from "react";
import AcDrawer from "~/components/ui/new-drawer";

const PurchaseButtonDrawer = () => {
  const { t } = useTranslation();
  const { isLoading } = usePurchaseButton();
  const [isOpen, setIsOpen] = useState(false);

  const trigger = (
    <div className="fixed bottom-0 px-4 py-3 max-w-[600px] w-full h-[68px] bg-white border-t">
      <Button
        disabled={isLoading}
        className="w-full h-11"
        onClick={() => setIsOpen(true)}
      >
        {t("product.purchaseButton.putInCart")}
      </Button>
    </div>
  );

  return (
    <AcDrawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={trigger}
      footer={<BottomSheetFooter handleClose={() => setIsOpen(false)} />}
    >
      <BottomSheetContent />
    </AcDrawer>
  );
};

export default PurchaseButtonDrawer;
