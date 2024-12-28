import HeadingS from "~/components/ui/typo/heading_s";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App from Index" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Index = () => {
  return <HeadingS>Index</HeadingS>;
};

export default Index;
