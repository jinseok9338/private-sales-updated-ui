import { Separator } from "~/components/ui/separator";
import PurchaseHistoryAddressInfo from "./components/PurchaseHistoryAddressInfo";
import useGetPurchaseHistory from "./hooks/useGetPurchaseHistoy";
import { PurchasedItemComponent } from "./components/PurchasedItem";
import OrderListSkeleton from "./components/loadingSkeleton";
const PurchaseHistoryIndexPage = () => {
  const { data: purchaseHistory, isLoading } = useGetPurchaseHistory();

  if (isLoading) {
    return <OrderListSkeleton />;
  }

  return (
    <div className="flex flex-col">
      <Separator className="h-2" />
      <PurchaseHistoryAddressInfo />
      <Separator className="h-2" />
      <div className="flex flex-col px-4 ">
        {purchaseHistory?.map((item) => (
          <PurchasedItemComponent
            key={item.item.id}
            item={item.item}
            date={item.date}
            orderNumber={item.orderNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default PurchaseHistoryIndexPage;
