import { useTranslation } from "react-i18next";
import type { DeliveryInfo } from "~/@types/order/history";
import HeadingS from "~/components/ui/typo/heading_s";
import LabelM from "~/components/ui/typo/label_m";
import ParagraphS from "~/components/ui/typo/paragraph_s";

interface DeliveryInfoCardProps {
  info: DeliveryInfo;
}

export function DeliveryInfoCard({ info }: DeliveryInfoCardProps) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg border p-4">
      <LabelM className="text-lg font-semibold">
        {t("delivery.info.deliveryPlaceInfo")}
      </LabelM>
      <div className="">
        <div className="grid grid-cols-2 gap-2">
          <ParagraphS className="text-muted-foreground">
            {t("delivery.info.name")}
          </ParagraphS>
          <ParagraphS>{info.name}</ParagraphS>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <ParagraphS className="text-muted-foreground">
            {t("delivery.info.postalCode")}
          </ParagraphS>
          <ParagraphS>{info.orderNumber}</ParagraphS>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <ParagraphS className="text-muted-foreground">
            {t("delivery.info.phoneNumber")}
          </ParagraphS>
          <ParagraphS>{info.phone}</ParagraphS>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <ParagraphS className="text-muted-foreground">
            {t("delivery.info.address")}
          </ParagraphS>
          <ParagraphS>{info.address}</ParagraphS>
        </div>
      </div>
    </div>
  );
}
