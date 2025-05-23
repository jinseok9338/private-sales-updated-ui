import { Outlet } from "react-router";
import CartLayout from "~/layouts/CartLayout";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Index = () => {
  return (
    <CartLayout>
      <Outlet />
    </CartLayout>
  );
};

export default Index;
