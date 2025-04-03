import { Skeleton } from "~/components/ui/skeleton";
import { Separator } from "~/components/ui/separator";

const DeliveryInfoSkeleton = () => {
  return (
    <div className="px-4 py-3">
      <div className="flex flex-col py-4 pl-3 pr-4">
        <Skeleton className="h-5 w-24" /> {/* Title */}
        <div style={{ height: "16px" }} />
        <div className="flex flex-col gap-2">
          {/* Name */}
          <div className="flex gap-2">
            <div className="min-w-14 flex items-center">
              <Skeleton className="h-4 w-8" />
            </div>
            <div className="flex items-center">
              <Skeleton className="h-4 w-20" />
            </div>
          </div>

          {/* Postal code */}
          <div className="flex gap-2">
            <div className="min-w-14 flex items-center">
              <Skeleton className="h-4 w-14" />
            </div>
            <div className="flex items-center">
              <Skeleton className="h-4 w-16" />
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-2">
            <div className="min-w-14 flex items-center">
              <Skeleton className="h-4 w-12" />
            </div>
            <div className="flex items-center">
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-2">
            <div className="min-w-14 flex items-center">
              <Skeleton className="h-4 w-8" />
            </div>
            <div className="flex items-center">
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderItemSkeleton = () => {
  return (
    <div className="border-b last:border-b-0 border-common-line flex flex-col">
      <div style={{ height: "20px" }} />
      <Skeleton className="h-4 w-24" /> {/* Date */}
      <div style={{ height: "4px" }} />
      <Skeleton className="h-4 w-32" /> {/* Order number */}
      <div style={{ height: "8px" }} />
      <div className="flex gap-3 flex-col">
        <div className="flex gap-3">
          {/* Product image skeleton */}
          <Skeleton className="w-[76px] h-[86px] rounded-md flex-shrink-0" />

          {/* Product details */}
          <div className="flex flex-col gap-[2px]">
            <Skeleton className="h-4 w-[200px]" /> {/* Product name */}
            <div className="flex gap-[2px] items-center mt-1">
              <Skeleton className="h-4 w-[100px]" /> {/* Product code */}
              <Skeleton className="w-4 h-4 ml-1" /> {/* Copy icon */}
            </div>
            <Skeleton className="h-4 w-[80px] mt-1" /> {/* Option */}
            <Skeleton className="h-4 w-[60px] mt-1" /> {/* Price */}
          </div>
        </div>

        {/* Price info box */}
        <div className="p-3 bg-gray-100 rounded-lg">
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
      <div style={{ height: "12px" }} />
    </div>
  );
};

const OrderDetailSkeleton = () => {
  return (
    <div className="flex flex-col">
      <Separator className="h-2" />
      <DeliveryInfoSkeleton />
      <Separator className="h-2" />
      <div className="flex flex-col px-4">
        {[1, 2, 3].map((index) => (
          <OrderItemSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default OrderDetailSkeleton;
