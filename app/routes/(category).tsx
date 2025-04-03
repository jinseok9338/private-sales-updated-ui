import { Outlet } from "react-router";
import CategoryLayout from "~/layouts/CategoryLayout";
import { CategoryProvider } from "~/contexts/CategoryContext";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Index = () => {
  return (
    <CategoryLayout>
      <Outlet />
    </CategoryLayout>
  );
};

export default Index;
