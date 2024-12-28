import type { OrderItem } from "~/@types/order/history";

interface OrderItemCardProps {
  item: OrderItem;
}

export function OrderItemCard({ item }: OrderItemCardProps) {
  return (
    <div className="bg-white rounded-lg border p-4 space-y-4">
      <div className="flex justify-between items-start">
        <div className="font-medium">주문일자[주문번호]</div>
        <div className="text-sm text-muted-foreground">
          {item.date} [{item.referenceNumber}]
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-mono">{item.productCode}</div>
        <div className="text-xs text-muted-foreground">
          상품코드 {item.productSku}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-24 h-24 relative">
          <img
            src={item.image}
            alt="Product"
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="text-xl font-bold">
            ₩{item.originalPrice.toLocaleString()}
          </div>
          <div className="grid grid-cols-2 text-sm">
            <span className="text-muted-foreground">사이즈</span>
            <span>수량 {item.quantity}</span>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <span className="text-muted-foreground">구매가</span>
            <span>₩{item.originalPrice.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <span className="text-muted-foreground">할인금액</span>
            <span className="text-destructive">
              -₩{item.discountAmount.toLocaleString()}
            </span>
          </div>
          <div className="grid grid-cols-2 font-bold">
            <span>최종 구매가</span>
            <span>₩{item.finalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
