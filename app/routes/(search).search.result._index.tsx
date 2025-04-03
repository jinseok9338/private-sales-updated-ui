import type { Route } from "./+types/(search).search.result._index";

import SearchResultPage from "~/pages/search/result";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const SearchResultPageIndex = () => {
  return <SearchResultPage />;
};

export default SearchResultPageIndex;
