import { useTranslation } from "react-i18next";
import { useLoaderData, useNavigate } from "react-router";
import i18n from "~/lang/i18n";
import MeInfo from "./components/MeInfo";
import type { clientLoader } from "~/routes/(me).me._index";
import { Separator } from "~/components/ui/separator";
import AddressInfo from "./components/AddressInfo";
import NavigationButtons from "./components/NavigationButtons";
import ChangeLanguageButtons from "./components/ChangeLanguageButtons";

const MeIndexPage = () => {
  const navigate = useNavigate();

  const { meData } = useLoaderData<typeof clientLoader>();

  return (
    <>
      <MeInfo />
      <AddressInfo />
      <Separator className="h-2" />
      <NavigationButtons />
      <Separator className="h-2" />
      <ChangeLanguageButtons />
    </>
  );
};

export default MeIndexPage;
