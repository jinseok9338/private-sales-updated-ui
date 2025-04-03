import { useQueryState } from "nuqs";
import { PURCHASE_DETAIL_DRAWER_OPEN } from "~/constants/QueryStringKeys";
import PurchaseDetailContent from "./content";
import AcDrawer from "~/components/ui/new-drawer";

const PurchaseDetailDrawer = () => {
  const [purchaseDetailDrawerOpen, setPurchaseDetailDrawerOpen] = useQueryState(
    PURCHASE_DETAIL_DRAWER_OPEN.key,
    {
      parse: (value: string) => value === "true",
      defaultValue: PURCHASE_DETAIL_DRAWER_OPEN.defaultValue,
    }
  );

  return (
    <AcDrawer
      zIndex={49}
      isOpen={purchaseDetailDrawerOpen}
      onClose={() => {
        setPurchaseDetailDrawerOpen(false);
      }}
    >
      <PurchaseDetailContent
        onClose={() => {
          setPurchaseDetailDrawerOpen(false);
        }}
      />
    </AcDrawer>
  );
};

export default PurchaseDetailDrawer;
