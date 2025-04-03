import { Skeleton } from "~/components/ui/skeleton";

const CartItemSkeleton = () => {
  return (
    <div className="">
      <div className="px-4 py-3 border-b last:border-b-0 border-gray-500">
        <div className="flex gap-3 flex-col">
          {/* Checkbox and Delete Area */}
          <div className="flex items-center justify-between pt-1">
            <Skeleton className="size-4 rounded-[2px]" />
            <Skeleton className="w-6 h-6" />
          </div>

          {/* Product Info Area */}
          <div className="flex gap-3">
            {/* Product Image */}
            <Skeleton className="w-[76px] h-[86px] rounded-md flex-shrink-0" />

            {/* Product Details */}
            <div className="flex flex-col gap-[2px]">
              <Skeleton className="h-[18px] w-[200px]" />
              <div className="flex gap-[2px] items-center mt-1">
                <Skeleton className="h-[16px] w-[100px]" />
                <Skeleton className="w-4 h-4 ml-1" />
              </div>
              <Skeleton className="h-[16px] w-[150px] mt-1" />
              <Skeleton className="h-[16px] w-[80px] mt-1" />
            </div>
          </div>

          {/* Price Info Box */}
          <div className="pt-3 bg-gray-100 rounded-lg">
            <div className="flex justify-between mb-2">
              <Skeleton className="h-3 w-[60px]" />
              <Skeleton className="h-3 w-[80px]" />
            </div>
            <div className="flex justify-between mb-2">
              <Skeleton className="h-3 w-[60px]" />
              <Skeleton className="h-3 w-[80px]" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-3 w-[60px]" />
              <Skeleton className="h-3 w-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemSkeleton;
