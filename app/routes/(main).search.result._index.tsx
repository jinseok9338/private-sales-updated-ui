import type { Route } from "./+types/(main).search.result._index";
import AxiosClient from "~/api/axios";

import SearchResultPage from "~/pages/search/result";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader() {
  const res = await AxiosClient.get("/mock/hotdeal.json");
  const result = res.data;
  return result;
}

const SearchResultPageIndex = () => {
  return <SearchResultPage />;
};

export default SearchResultPageIndex;
