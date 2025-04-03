import { useTranslation } from "react-i18next";
import type { DeliveryInfo } from "~/@types/order/history";
import { TypoBody14 } from "~/components/ui/typo/AnchorsBody14";

interface DeliveryInfoCardProps {
  info: DeliveryInfo;
}

export function DeliveryInfoCard({ info }: DeliveryInfoCardProps) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg border p-4">
      <TypoBody14 className="text-lg font-semibold">
        {t("delivery.info.deliveryPlaceInfo")}
      </TypoBody14>
      <div className="">
        <div className="grid grid-cols-2 gap-2">
          <TypoBody14 className="text-muted-foreground">
            {t("delivery.info.name")}
          </TypoBody14>
          <TypoBody14>{info.name}</TypoBody14>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <TypoBody14 className="text-muted-foreground">
            {t("delivery.info.postalCode")}
          </TypoBody14>
          <TypoBody14>{info.orderNumber}</TypoBody14>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <TypoBody14 className="text-muted-foreground">
            {t("delivery.info.phoneNumber")}
          </TypoBody14>
          <TypoBody14>{info.phone}</TypoBody14>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <TypoBody14 className="text-muted-foreground">
            {t("delivery.info.address")}
          </TypoBody14>
          <TypoBody14>{info.address}</TypoBody14>
        </div>
      </div>
    </div>
  );
}
