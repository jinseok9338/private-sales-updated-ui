import IndexPage from "~/pages/Index";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DIOR Family Sale 2025" },
    { name: "description", content: "DIOR Family Sale 2025" },
  ];
}

const Index = () => {
  return <IndexPage />;
};

export default Index;
