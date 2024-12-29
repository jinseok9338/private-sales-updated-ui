interface PriceInfoProps {
  originalPrice: number;
  discountPercent: number;
  memberDiscountPercent: number;
}

export function PriceDetailInfo({
  originalPrice,
  discountPercent,
  memberDiscountPercent,
}: PriceInfoProps) {
  const discountedPrice = originalPrice * (1 - discountPercent / 100);
  const memberPrice = originalPrice * (1 - memberDiscountPercent / 100);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-rose-500 font-bold">{discountPercent}%</span>
        <span className="text-2xl font-bold">
          {discountedPrice.toLocaleString()}원
        </span>
        <span className="text-muted-foreground line-through">
          {originalPrice.toLocaleString()}원
        </span>
      </div>

      <div className="bg-muted/30 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-medium">회원님</span>
          <div className="text-right">
            <div className="text-rose-500 font-bold">
              {memberDiscountPercent}% {memberPrice.toLocaleString()}원
            </div>
            <div className="text-sm text-muted-foreground">예상 구매가</div>
          </div>
        </div>
      </div>
    </div>
  );
}
