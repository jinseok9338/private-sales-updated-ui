import { useTranslation } from "react-i18next";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "sonner";
import { queryClient } from "~/api/react-query";
import { Button } from "~/components/ui/button";
import {
  TypoDetail12,
  TypoDetail12Medium,
} from "~/components/ui/typo/AnchorsDetail12";
import TypoSmall from "~/components/ui/typo/AnchorsSmall";
import type { clientLoader } from "~/routes/(me).me._index";
import useUser from "~/stores/useUser";
import Avatar from "react-avatar";
import useLogout from "../hooks/useLogout";
import { randomColor } from "~/lib/utils";

const MeInfo = () => {
  const { meData } = useLoaderData<typeof clientLoader>();
  const { email, name, profileImage } = meData.data;
  const { mutateAsync: logoutUser } = useLogout();
  const { logout } = useUser();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClickLogout = async () => {
    try {
      // await logoutUser();
      logout();
      toast.success(t("me.logoutSuccess"));
      navigate("/login");
      queryClient.invalidateQueries();
    } catch (error) {
      toast.error(t("me.logoutError"));
    }
  };
  return (
    <div className="flex p-4 justify-between">
      <div className="flex gap-3">
        <Avatar color={randomColor()} name={name} size="32" round={true} />
        <div className="flex flex-col gap-[2px]">
          <TypoSmall>{name}</TypoSmall>
          <TypoDetail12 className="text-gray-600">{email}</TypoDetail12>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="outline" size="xs" onClick={handleClickLogout}>
          <TypoDetail12Medium className="text-gray-600">
            {t("myPage.logoutButton")}
          </TypoDetail12Medium>
        </Button>
      </div>
    </div>
  );
};

export default MeInfo;
