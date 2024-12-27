export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 p-4">
      {/* Top Navigation Skeleton */}
      <div className="flex justify-between border-b border-gray-200">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-12 w-24 animate-pulse bg-gray-200 rounded"
          />
        ))}
      </div>

      {/* Filter Chips Skeleton */}
      <div className="flex gap-2 overflow-x-auto py-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-24 animate-pulse bg-gray-200 rounded-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Section Title Skeleton */}
      <div className="flex justify-between items-center">
        <div className="h-8 w-48 animate-pulse bg-gray-200 rounded" />
        <div className="h-6 w-24 animate-pulse bg-gray-200 rounded" />
      </div>

      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            {/* Product Image Skeleton */}
            <div className="aspect-[3/4] w-full animate-pulse bg-gray-200 rounded-lg" />

            {/* Price Skeleton */}
            <div className="flex gap-2 items-center">
              <div className="h-6 w-16 animate-pulse bg-gray-200 rounded" />
              <div className="h-6 w-24 animate-pulse bg-gray-200 rounded" />
            </div>

            {/* Title Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-20 animate-pulse bg-gray-200 rounded" />
              <div className="h-4 w-full animate-pulse bg-gray-200 rounded" />
            </div>

            {/* Purchase Count Skeleton */}
            <div className="h-4 w-32 animate-pulse bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      {/* Recommended Products Section Skeleton */}
      <div className="space-y-4">
        <div className="h-8 w-48 animate-pulse bg-gray-200 rounded" />
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="aspect-square w-full animate-pulse bg-gray-200 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
