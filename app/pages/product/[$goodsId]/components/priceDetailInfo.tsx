import { TypoBody14 } from "~/components/ui/typo/AnchorsBody14";

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
        <TypoBody14 className="text-rose-500 font-bold">
          {discountPercent}%
        </TypoBody14>
        <TypoBody14 className="text-2xl font-bold">
          {discountedPrice.toLocaleString()}원
        </TypoBody14>
        <TypoBody14 className="text-muted-foreground line-through">
          {originalPrice.toLocaleString()}원
        </TypoBody14>
      </div>

      <div className="bg-muted/30 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <TypoBody14 className="font-medium">회원님</TypoBody14>
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
