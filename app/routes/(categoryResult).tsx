import { Outlet } from "react-router";
import CategoryResultLayout from "~/layouts/CategoryResultLayout";
import type { Route } from "../+types/root";
import type { CategoryResponse } from "./(category).categories._index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader() {
  const res = await fetch("/mock/category.json");
  return res.json() as Promise<CategoryResponse>;
}

const Index = () => {
  return (
    <CategoryResultLayout>
      <Outlet />
    </CategoryResultLayout>
  );
};

export default Index;
