import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { DrawerFooter } from "~/components/ui/drawer";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { TypoDetail12 } from "~/components/ui/typo/AnchorsDetail12";
import { usePurchaseButton } from "./context/PurchaseButtonContext";

const BottomSheetFooter = ({ handleClose }: { handleClose: () => void }) => {
  const { t } = useTranslation();
  const { remainingPurchaseCount, totalPurchaseCount, selectedOption } =
    usePurchaseButton();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    toast.message(
      <div className="bg-white w-full flex items-center justify-between">
        <TypoDetail12>
          {t("product.purchaseButton.addToCartSuccess")}
        </TypoDetail12>
        <div
          onClick={() => {
            navigate("/cart");
            toast.dismiss();
          }}
        >
          <TypoBody13 className="underline">
            {t("product.purchaseButton.goToCart")}
          </TypoBody13>
        </div>
      </div>,
      {
        style: {
          bottom: "44px",
        },
      }
    );
    handleClose();
  };
  return (
    <DrawerFooter className="border-t px-4 py-3 flex flex-col gap-4">
      <div className="flex justify-between">
        <TypoDetail12 className="text-gray-500">
          {t("product.purchaseButton.remainingPurchaseCount")}
        </TypoDetail12>
        <div className="flex items-center gap-1">
          <TypoBody13>{`${remainingPurchaseCount}`}</TypoBody13>
          <TypoDetail12 className="text-gray-500">
            {` / ${totalPurchaseCount}`}
          </TypoDetail12>
        </div>
      </div>
      <Button
        className="w-full h-11"
        onClick={handleAddToCart}
        disabled={remainingPurchaseCount <= 0 || !selectedOption}
      >
        {t("product.purchaseButton.putInCart")}
      </Button>
    </DrawerFooter>
  );
};

export default BottomSheetFooter;
