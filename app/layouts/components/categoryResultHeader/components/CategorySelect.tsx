import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import BackIcon from "~/assets/icons/arrow-left-black.svg";
import { Select, SelectTrigger, SelectValue } from "~/components/ui/select";
import TypoP_UI_Semibold from "~/components/ui/typo/AnchorsPUISemibold";
import { useSelectCategory } from "~/hooks/useSelectCategory";

const CategorySelect = ({
  isSelectOpen,
  toggleOpen,
}: {
  isSelectOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
}) => {
  const { t } = useTranslation();
  const {
    selectedFirstCategory,
    secondCategoryId,

    handleSetFirstCategoryId,
  } = useSelectCategory();
  const navigate = useNavigate();
  return (
    <div className="flex items-center min-w-[115px] gap-[6px]">
      <button
        className="flex items-center cursor-pointer min-w-7 min-h-7 relative"
        onClick={() => navigate(-1)}
      >
        <img src={BackIcon} alt="back" className="w-7 h-7" />
      </button>
      <Select
        open={isSelectOpen}
        value={secondCategoryId?.toString()}
        onOpenChange={toggleOpen}
        onValueChange={(value) => handleSetFirstCategoryId(Number(value))}
      >
        <SelectTrigger
          className="border-none h-6"
          onClick={() => toggleOpen(!isSelectOpen)}
        >
          <SelectValue placeholder={t("category.select.select-category")}>
            <TypoP_UI_Semibold>{selectedFirstCategory?.name}</TypoP_UI_Semibold>
          </SelectValue>
        </SelectTrigger>
      </Select>
    </div>
  );
};

export default CategorySelect;
