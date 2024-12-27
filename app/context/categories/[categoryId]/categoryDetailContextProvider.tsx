import { categoryDetailContext } from "./categoryDetailContext";
import { useLoaderData, useSearchParams } from "react-router";
import type { Filter, Tab } from "~/@types/category/category";
import type { HotDealItem } from "~/@types/hotdeal/hotdeal";

export const tabs: Tab[] = [
  { id: "denim", name: "데님" },
  { id: "slacks", name: "슬랙스" },
  { id: "long-pants", name: "롱팬츠" },
  { id: "short-pants", name: "숏팬츠" },
];

export const filters: Filter[] = [
  { id: "brand", name: "브랜드", hasDropdown: false },
  { id: "recommended", name: "추천순", hasDropdown: true },
  { id: "price", name: "가격", hasDropdown: true },
  { id: "color", name: "색상", hasDropdown: true },
  { id: "category-age", name: "카/연령", hasDropdown: true },
];

export const CategoryDetailContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const productsData = useLoaderData();
  const ProductList = productsData.item_list;
  const products: HotDealItem[] = ProductList.map((v: any) => v.item);

  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") ?? "denim";
  const setActiveTab = (tab: string) => {
    searchParams.set("tab", tab);
  };

  return (
    <categoryDetailContext.Provider
      value={{
        tabs,
        filters,
        activeTab,
        setActiveTab,
        products,
      }}
    >
      {children}
    </categoryDetailContext.Provider>
  );
};
