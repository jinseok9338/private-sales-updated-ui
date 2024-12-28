import type { DeliveryInfo } from "~/@types/order/history";

interface DeliveryInfoCardProps {
  info: DeliveryInfo;
}

export function DeliveryInfoCard({ info }: DeliveryInfoCardProps) {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h2 className="text-lg font-semibold">배송지 정보</h2>
      <div className="">
        <div className="grid grid-cols-2 gap-2">
          <span className="text-muted-foreground">이름</span>
          <span>{info.name}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="text-muted-foreground">우편번호</span>
          <span>{info.orderNumber}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="text-muted-foreground">연락처</span>
          <span>{info.phone}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="text-muted-foreground">주소</span>
          <span>{info.address}</span>
        </div>
      </div>
    </div>
  );
}
