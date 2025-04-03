import MeIndexPage from "~/pages/me";
import { getMe } from "~/pages/me/services/api";
import type { Route } from "./+types/(me).me._index";

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const meData = await getMe();
  return {
    meData,
  };
}

const MeIndex = () => {
  return <MeIndexPage />;
};

export default MeIndex;
