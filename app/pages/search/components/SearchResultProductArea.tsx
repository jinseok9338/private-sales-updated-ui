"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import {
  parseAsBoolean,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import InfiniteScroll from "react-infinite-scroller";
import {
  COLUMNS_COUNT,
  MAIN_PRODUCT_GOODS_ID,
  SEARCH_INPUT_VALUE,
  SHOW_IN_STOCK_ONLY,
} from "~/constants/QueryStringKeys";
import { cn } from "~/lib/utils";
import { getSearchResultProductList } from "../services/api";
import ProductCard from "~/pages/Index/components/productCard";
import { ProductCardSkeletonGrid } from "~/pages/Index/components/productCard/skeleton";

const Scroller = InfiniteScroll as any;

interface Product {
  id: number;
  code: string;
  name: string;
  price: number;
  discountPrice?: number;
  stock: number;
  image: string;
}

const ProductsArea = () => {
  const [columnsCount] = useQueryState(
    COLUMNS_COUNT.key,
    parseAsInteger.withDefault(COLUMNS_COUNT.defaultValue)
  );

  const [mainProductGoodsId, setMainProductGoodsId] = useQueryState(
    MAIN_PRODUCT_GOODS_ID.key,
    parseAsString.withDefault(MAIN_PRODUCT_GOODS_ID.defaultValue)
  );
  const [searchQuery, setSearchQuery] = useQueryState(
    SEARCH_INPUT_VALUE.key,
    parseAsString.withDefault(SEARCH_INPUT_VALUE.defaultValue)
  );
  const [showInStockOnly, setShowInStockOnly] = useQueryState(
    SHOW_IN_STOCK_ONLY.key,
    parseAsBoolean.withDefault(SHOW_IN_STOCK_ONLY.defaultValue)
  );

  const handleMainProductGoodsId = (goodsId: string) => {
    setMainProductGoodsId(goodsId);
  };

  const { data, fetchNextPage, hasNextPage, isPending } = useInfiniteQuery({
    queryKey: ["products", "list"],
    queryFn: ({ pageParam = 1 }) =>
      getSearchResultProductList({
        page: pageParam,
        take: 10,
        query: searchQuery,
        showOnlyInStock: showInStockOnly,
      }),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
    initialPageParam: 1,
  });

  const products =
    data?.pages.reduce((acc, page) => {
      return [...acc, ...page.items];
    }, [] as Product[]) ?? [];

  if (isPending) {
    return <ProductCardSkeletonGrid count={columnsCount * 2} />;
  }

  return (
    <Scroller
      className="w-full"
      pageStart={0}
      loadMore={async () => await fetchNextPage()}
      hasMore={hasNextPage}
      loader={
        <div key={0} className="flex justify-center py-4">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      }
    >
      <div
        className={cn(
          "grid gap-[1px]",
          columnsCount === 3 ? "grid-cols-3" : "grid-cols-2"
        )}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClickCartIcon={handleMainProductGoodsId}
          />
        ))}
      </div>
    </Scroller>
  );
};

export default ProductsArea;
