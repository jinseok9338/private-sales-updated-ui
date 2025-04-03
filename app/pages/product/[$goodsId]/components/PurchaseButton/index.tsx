import { useParams } from "react-router";
import { PurchaseButtonProvider } from "./context/PurchaseButtonContext";
import PurchaseButtonDrawer from "./Drawer";

const PurchaseButton = () => {
  const { goodsId } = useParams();

  return (
    <PurchaseButtonProvider goodsId={goodsId ?? ""}>
      <PurchaseButtonDrawer />
    </PurchaseButtonProvider>
  );
};

export default PurchaseButton;
