import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useTranslation } from "react-i18next";
import ColumsThree from "~/assets/icons/ThreeColums.svg";
import ColumsTwo from "~/assets/icons/TwoColums.svg";
import { Checkbox } from "~/components/ui/checkbox";
import { TypoSubtleSemibold } from "~/components/ui/typo/AnchorsSubtle";
import { COLUMNS_COUNT, SHOW_IN_STOCK_ONLY } from "~/constants/QueryStringKeys";

const MainSettingArea = () => {
  const { t } = useTranslation();
  const [showInStockOnly, setShowInStockOnly] = useQueryState(
    SHOW_IN_STOCK_ONLY.key,
    parseAsBoolean.withDefault(SHOW_IN_STOCK_ONLY.defaultValue)
  );

  const [columnsCount, setColumnsCount] = useQueryState(
    COLUMNS_COUNT.key,
    parseAsInteger.withDefault(COLUMNS_COUNT.defaultValue)
  );

  const toggleColumnsCount = () => {
    setColumnsCount(columnsCount === 2 ? 3 : 2);
  };

  return (
    <div className="w-full flex justify-between items-center px-4 py-3">
      {/* toggle */}
      <div className="flex items-center gap-2">
        <Checkbox
          checked={showInStockOnly}
          onCheckedChange={(checked) => setShowInStockOnly(checked === true)}
        />
        <TypoSubtleSemibold>
          {t("main-setting.toggle.title")}
        </TypoSubtleSemibold>
      </div>
      {/* 사이즈 및 colums 개수 설정 */}
      <div className="flex h-5 items-center gap-3">
        <div
          className="flex items-center justify-center min-w-[18px] h-[18px] cursor-pointer"
          onClick={toggleColumnsCount}
        >
          <img
            src={columnsCount === 2 ? ColumsTwo : ColumsThree}
            alt="colums-icon"
            className="w-[18px] h-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSettingArea;
