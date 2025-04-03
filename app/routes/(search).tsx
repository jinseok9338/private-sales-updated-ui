import { Outlet } from "react-router";
import SearchLayout from "~/layouts/SearchLayout";
import type { Route } from "./+types/(search)";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const SearchPageLayout = () => {
  return (
    <SearchLayout>
      <Outlet />
    </SearchLayout>
  );
};

export default SearchPageLayout;
