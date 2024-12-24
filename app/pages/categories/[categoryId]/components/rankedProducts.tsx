"use client";

import { ChevronRight } from "lucide-react";
import { Link, useLoaderData } from "react-router";
import type { HotDealItem } from "~/@types/hotdeal/hotdeal";

interface RankedProductsProps {
  //   products: HotDealItem[];
}

export function HotDealProducts({}: RankedProductsProps) {
  const productsData = useLoaderData();
  const ProductList = productsData.item_list;
  const products: HotDealItem[] = ProductList.map((v: any) => v.item);
  return (
    <div className="py-6">
      <div className="flex justify-between items-center px-4 mb-4">
        <h2 className="text-lg font-bold">실시간 롱팬츠 랭킹</h2>
        <Link to={'#'} className="text-blue-500 text-sm flex items-center">
          전체보기 <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4">
        {products.map((product) => (
          <div key={product.sno} className="flex-none w-[280px]">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                width={280}
                height={380}
                className="rounded-lg"
              />
              <div className="absolute top-2 left-2 bg-white rounded-lg px-2 py-1 text-sm font-bold">
                {product.ranking}
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-red-500 font-bold">
                  {product.discount_rate}%
                </span>
                <span className="font-bold text-lg">
                  {product.price.toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-gray-600">{product.market_name}</div>
              <div className="text-sm line-clamp-2">{product.name}</div>
              <div className="text-xs text-gray-500">
                {product.like.goods_sno.toLocaleString()}개 구매중
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
