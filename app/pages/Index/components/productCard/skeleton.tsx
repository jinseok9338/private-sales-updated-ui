import { useQueryState } from "nuqs";
import { parseAsInteger } from "nuqs";
import { COLUMNS_COUNT } from "~/constants/QueryStringKeys";
import { cn } from "~/lib/utils";

const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse">
      {/* Image area skeleton */}
      <div className="w-full aspect-[199.33/239.20] bg-gray-200 relative">
        {/* Cart button skeleton */}
        <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-gray-300" />
      </div>

      {/* Product info skeleton */}
      <div className="flex flex-col pl-3 pr-2 pt-3 pb-6">
        {/* Product name skeleton - 2 lines */}
        <div className="space-y-2">
          <div className="h-[10px] bg-gray-200 rounded w-full" />
          <div className="h-[10px] bg-gray-200 rounded w-full" />
        </div>

        {/* Product code skeleton */}
        <div className="h-[10px] bg-gray-200 rounded w-full mt-4" />

        {/* Price skeleton */}
        <div className="flex items-center gap-[2px] mt-2">
          <div className="h-[10px] bg-gray-200 rounded w-[20%]" />
        </div>

        {/* Stock info skeleton */}
        <div className="h-[10px] bg-gray-200 rounded w-[80%] mt-2" />
      </div>
    </div>
  );
};

// Grid of skeletons for loading state
export const ProductCardSkeletonGrid = ({ count = 6 }: { count?: number }) => {
  const [columnsCount] = useQueryState(
    COLUMNS_COUNT.key,
    parseAsInteger.withDefault(COLUMNS_COUNT.defaultValue)
  );
  return (
    <div
      className={cn(
        "grid gap-[1px] w-full",
        columnsCount === 3 ? "grid-cols-3" : "grid-cols-2"
      )}
    >
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductCardSkeleton;
