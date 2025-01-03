import HeadingS from "~/components/ui/typo/heading_s";
import type { Route } from "../+types/root";
import IndexPage from "~/pages/Index";
import AxiosClient from "~/api/axios";

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

const Index = () => {
  return <IndexPage />;
};

export default Index;
