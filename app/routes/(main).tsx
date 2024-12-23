import type { Route } from "../+types/root";
import GlobalLayout from "~/layouts/global/GlobalLayout";
import { Outlet } from "react-router";
import AxiosClient from "~/api/axios";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader(args: Route.ClientLoaderArgs) {
  const res = await AxiosClient.get(`/mock/notification.json`);
  const notification = res.data;
  return notification as {
    title: string;
    startDate: string;
    endDate: string;
    available: boolean;
  };
}

const Index = () => {
  return (
    <GlobalLayout>
      <Outlet />
    </GlobalLayout>
  );
};

export default Index;
