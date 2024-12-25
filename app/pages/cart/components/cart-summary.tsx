import type { CartTotals } from "~/@types/cart/cart";
import { Button } from "~/components/ui/button";

interface CartSummaryProps {
  totals: CartTotals;
}

export function CartSummary({ totals }: CartSummaryProps) {
  return (
    <div className="border-t mt-6 pt-4 space-y-3">
      <div className="flex justify-between text-sm">
        <span>총 상품금액</span>
        <span>{totals.subtotal.toLocaleString()}원</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>상품할인</span>
        <span>0원</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>배송비</span>
        <span>
          {totals.shipping === 0
            ? "에이블리는 전 상품 무료배송"
            : `${totals.shipping.toLocaleString()}원`}
        </span>
      </div>
      <div className="flex justify-between font-bold pt-3 border-t">
        <span>총 {totals.total > 0 ? "2" : "0"}개 주문 금액</span>
        <span className="text-rose-500">{totals.total.toLocaleString()}원</span>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>예상 적립포인트</span>
        <span>{totals.points.toLocaleString()}원</span>
      </div>
      <Button
        className="w-full mt-4 bg-gray-200 text-gray-500"
        disabled={totals.total === 0}
      >
        주문하기
      </Button>
    </div>
  );
}
