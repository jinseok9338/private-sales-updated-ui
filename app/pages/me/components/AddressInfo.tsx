import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import Padding from "~/components/ui/padding";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { TypoSubtleSemibold } from "~/components/ui/typo/AnchorsSubtle";
import type { clientLoader } from "~/routes/(me).me._index";

const AddressInfo = () => {
  const { t } = useTranslation();
  const { meData } = useLoaderData<typeof clientLoader>();

  const { name, address, phoneNumber, zoneCode } = meData.data;
  const userDataMap = [
    {
      label: t("me.addressInfo.name"),
      value: name,
    },
    {
      label: t("me.addressInfo.zoneCode"),
      value: zoneCode,
    },
    {
      label: t("me.addressInfo.phoneNumber"),
      value: phoneNumber,
    },
    {
      label: t("me.addressInfo.address"),
      value: address,
    },
  ];

  return (
    <div className="px-4 py-3">
      <div className="flex flex-col py-4 pl-3 pr-4">
        <TypoSubtleSemibold>{t("me.addressInfo.title")}</TypoSubtleSemibold>
        <Padding height={16} />
        <div className="flex flex-col gap-2">
          {userDataMap.map((item) => (
            <div className="flex gap-2" key={item.label}>
              <div className="min-w-14 flex items-center">
                <TypoBody13 className="text-gray-600">{item.label}</TypoBody13>
              </div>
              <div className="flex items-center">
                <TypoBody13>{item.value}</TypoBody13>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
