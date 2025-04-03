import type { DeliveryInfo, OrderItem } from "~/@types/order/history";
import { DeliveryInfoCard } from "./components/deliveryCard";
import { OrderItemCard } from "./components/orderItemCard";
import Padding from "~/components/ui/padding";
import TypoH3 from "~/components/ui/typo/AnchorsH3";

// Example data - replace with your actual data fetching logic
const deliveryInfo: DeliveryInfo = {
  name: "서진석",
  orderNumber: "10134",
  phone: "01034213305",
  address: "경기 김포시 고촌읍 김포대로 55-12 123",
};

const orderItems: OrderItem[] = [
  {
    id: "1",
    date: "2024-12-18",
    referenceNumber: "IYL20241218B0022",
    productCode: "W:P.W93 E308.111",
    productSku: "PRINT:150728:B7339",
    image:
      "https://d3ha2047wt6x28.cloudfront.net/IqjBh9e-EkI/pr:GOODS_THUMB/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzJlZTQ3YWJiNDc1YmIyMjZlOWMwYjg0OTFiZmI3NDQ2LnBuZw",
    originalPrice: 1250000,
    discountAmount: 1125000,
    finalPrice: 125000,
    quantity: 1,
  },
  {
    id: "2",
    date: "2024-12-18",
    referenceNumber: "IYL20241218B0023",
    productCode: "W:P.W93 VM302.244",
    productSku: "150751:B7448",
    image:
      "https://d3ha2047wt6x28.cloudfront.net/-vqskS-qX44/pr:GOODS_THUMB/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzL2EyOWVlYjAwMzdhNzVmZGY4ZDZkMmZjZmJiODIyMmU5LmdpZg",
    originalPrice: 2350000,
    discountAmount: 2115000,
    finalPrice: 235000,
    quantity: 1,
  },
];

export default function OrderHistoryPage() {
  return (
    <div className="">
      <Padding height={10} />
      <TypoH3 className="text-2xl font-bold mb-6">나의 구매내역</TypoH3>

      <DeliveryInfoCard info={deliveryInfo} />
      <Padding height={10} />
      <div className="space-y-4">
        {orderItems.map((item) => (
          <OrderItemCard key={item.id} item={item} />
        ))}
      </div>
      <Padding height={30} />
    </div>
  );
}
