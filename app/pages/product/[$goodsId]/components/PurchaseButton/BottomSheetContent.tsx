import { useState } from "react";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { cn } from "~/lib/utils";
import { useTranslation } from "react-i18next";
import { TypoSubtle } from "~/components/ui/typo/AnchorsSubtle";
import { usePurchaseButton } from "./context/PurchaseButtonContext";
import SelectedItem from "./selectedItem";
import Padding from "~/components/ui/padding";

const BottomSheetContent = () => {
  const { t } = useTranslation();
  const { options, selectedOption, handleSelectOption } = usePurchaseButton();
  const [isAccordionOpen, setIsAccordionOpen] = useState<string | undefined>(
    undefined
  );
  const handleToggleAccordion = (value?: string) => {
    if (!value) {
      setIsAccordionOpen(undefined);
      return;
    }
    setIsAccordionOpen(value);
  };

  return (
    <div className="p-4">
      <Accordion
        type="single"
        collapsible
        className="border rounded-md overflow-hidden"
        onValueChange={handleToggleAccordion}
        value={isAccordionOpen ?? ""}
      >
        <AccordionItem value="open" className="border-0">
          <AccordionTrigger
            className="flex items-center h-9 px-4 hover:no-underline focus:no-underline"
            onClick={(e) => {
              handleSelectOption();
            }}
          >
            <TypoSubtle className={cn(!selectedOption && "text-gray-500")}>
              {selectedOption?.label ??
                t("product.purchaseButton.selectOption")}
            </TypoSubtle>
          </AccordionTrigger>
          <AccordionContent className="px-0 py-0">
            <div className="border-t">
              {options.map((option) => {
                const isSoldOut = option.stock <= 0;
                return (
                  <div
                    key={option.id}
                    className={cn(
                      "px-3 h-9 flex items-center justify-between",
                      isSoldOut
                        ? "bg-common-alternate text-gray-400 cursor-not-allowed"
                        : "cursor-pointer hover:bg-gray-50",
                      option.id === selectedOption?.id &&
                        !isSoldOut &&
                        "bg-gray-100"
                    )}
                    onClick={() => {
                      handleSelectOption(option.id);
                      setIsAccordionOpen(undefined);
                    }}
                  >
                    <TypoSubtle>{option.label}</TypoSubtle>
                    {isSoldOut ? (
                      <span className="text-sm text-gra y-400">
                        {t("product.options.soldOut", "품절")}
                      </span>
                    ) : (
                      option.id === selectedOption?.id && (
                        <Check className="h-4 w-4 text-gray-700" />
                      )
                    )}
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {selectedOption && (
        <>
          <Padding height={16} />
          <SelectedItem />
        </>
      )}
    </div>
  );
};

export default BottomSheetContent;
