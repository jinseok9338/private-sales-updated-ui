import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import type { HotDealItem } from "~/@types/hotdeal/hotdeal";
import FeedbackLink from "~/components/ui/Link";
import HeadingS from "~/components/ui/typo/heading_s";
import ParagraphS from "~/components/ui/typo/paragraph_s";

export function HotDealProducts() {
  const productsData = useLoaderData();
  const ProductList = productsData.item_list;
  const products: HotDealItem[] = ProductList.map((v: any) => v.item);

  const { t } = useTranslation();
  const title = "실시간 롱팬츠 랭킹";

  return (
    <div className="py-6">
      <div className="flex justify-between items-center px-4 mb-4">
        <HeadingS className="text-lg font-bold">{title}</HeadingS>
        <FeedbackLink
          to="/"
          className="text-blue-500 text-sm flex items-center"
        >
          {t("categories.header.seeAll")} <ChevronRight className="h-4 w-4" />
        </FeedbackLink>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4">
        {products.map((product) => (
          <FeedbackLink
            to={`/goods/${product.sno}`}
            key={product.sno}
            className="flex-none w-[280px]"
          >
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
                <ParagraphS className="text-red-500 font-bold">
                  {product.discount_rate}%
                </ParagraphS>
                <ParagraphS className="font-bold text-lg">
                  {product.price.toLocaleString()}
                </ParagraphS>
              </div>
              <div className="text-sm text-gray-600">{product.market_name}</div>
              <div className="text-sm line-clamp-2">{product.name}</div>
              <div className="text-xs text-gray-500">
                {t("categories.header.purchasing", {
                  n: product.like.goods_sno.toLocaleString(),
                })}
              </div>
            </div>
          </FeedbackLink>
        ))}
      </div>
    </div>
  );
}
