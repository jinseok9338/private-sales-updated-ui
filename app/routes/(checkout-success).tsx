import { Outlet } from "react-router";
import CheckoutSuccessLayout from "~/layouts/CheckoutSuccessLayout";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Index = () => {
  return (
    <CheckoutSuccessLayout>
      <Outlet />
    </CheckoutSuccessLayout>
  );
};

export default Index;
