import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import CopyIcon from "~/assets/icons/copy-gray.svg";
import Padding from "~/components/ui/padding";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { TypoP_UI } from "~/components/ui/typo/AnchorsPUI";

interface NameAndCodeProps {
  name: string;
  code: string;
}

export function NameAndCode({ name, code }: NameAndCodeProps) {
  const { t } = useTranslation();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success(t("product.sellerInfo.copy-success"), {
        position: "bottom-center",
        style: {
          bottom: "44px",
        },
      });
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        toast.success(t("product.sellerInfo.copy-success"), {
          position: "bottom-center",
          style: {
            bottom: "44px",
          },
        });
      } catch (err) {
        toast.error(t("common.error"));
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <>
      <TypoP_UI className="line-clamp-2 overflow-hidden text-ellipsis">
        {name}
      </TypoP_UI>
      <Padding height={8} />
      <div className="flex items-center gap-[2px]">
        <TypoBody13 className="line-clamp-2 overflow-hidden text-gray-500 text-ellipsis">
          {code}
        </TypoBody13>
        <div className="cursor-pointer" onClick={handleCopy}>
          <img src={CopyIcon} alt="copy" width={16} height={16} />
        </div>
      </div>
    </>
  );
}
