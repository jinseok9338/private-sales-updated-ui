import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Loader2 } from "lucide-react";
import { useInfiniteRecommendations } from "~/hooks/react-query/useGetInfiniteRecommendation";
import { useTranslation } from "react-i18next";

import FeedbackLink from "~/components/ui/Link";

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
  const { t } = useTranslation();
  const recommendedTitle = t("categories.recommend.title");

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading || !data) {
    return (
      <div className="py-6">
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-6">
        <div className="text-center py-8 text-gray-500">
          {t("categories.error.not-found")}
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="grid grid-cols-2 gap-4 px-4">
        {data.pages.map((page) =>
          page.items.map((product) => (
            <FeedbackLink
              to={`/goods/${product.sno}`}
              key={product.sno}
              className="group"
            >
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
            </FeedbackLink>
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
