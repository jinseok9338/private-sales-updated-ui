import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Loader2 } from "lucide-react";
import { useInfiniteRecommendations } from "~/hooks/react-query/useGetInfiniteRecommendation";

export function RecommendedProducts() {
  const { ref, inView } = useInView();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteRecommendations();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading || !data) {
    return (
      <div className="py-6">
        <h2 className="text-lg font-bold px-4 mb-4">회원님을 위한 추천 상품</h2>
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-6">
        <h2 className="text-lg font-bold px-4 mb-4">회원님을 위한 추천 상품</h2>
        <div className="text-center py-8 text-gray-500">
          상품을 불러오는 중 오류가 발생했습니다.
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h2 className="text-lg font-bold px-4 mb-4">회원님을 위한 추천 상품</h2>
      <div className="grid grid-cols-2 gap-4 px-4">
        {data.pages.map((page) =>
          page.items.map((product) => (
            <div key={product.sno} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-2">
                <div className="font-bold">
                  {product.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">
                  {product.market_name}
                </div>
                <div className="text-sm line-clamp-2">{product.name}</div>
              </div>
            </div>
          ))
        )}
      </div>
      {(hasNextPage || isFetchingNextPage) && (
        <div ref={ref} className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      )}
    </div>
  );
}
