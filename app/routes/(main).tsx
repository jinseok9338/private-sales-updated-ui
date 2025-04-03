import MainLayout from "~/layouts/MainLayout";
import type { Route } from "../+types/root";

import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Index = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default Index;
