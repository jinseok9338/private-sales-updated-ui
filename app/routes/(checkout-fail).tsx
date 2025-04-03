import { Outlet } from "react-router";
import CheckoutFailLayout from "~/layouts/CheckoutFailLayout";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Index = () => {
  return (
    <CheckoutFailLayout>
      <Outlet />
    </CheckoutFailLayout>
  );
};

export default Index;
