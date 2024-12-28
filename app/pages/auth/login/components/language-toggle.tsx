import React from "react";
import { useTranslation } from "react-i18next";
import { I18N_LANG_KO, I18N_LANG_EN } from "~/lang/i18n";
import { cn } from "~/lib/utils";

const LanguageButton = ({
  className,
}: IClassName): React.JSX.Element | null => {
  const { i18n } = useTranslation();

  const langOnClick = () => {
    i18n.changeLanguage(
      i18n.language === I18N_LANG_KO ? I18N_LANG_EN : I18N_LANG_KO
    );
    console.log(i18n.language, i18n.options);
  };

  return (
    <button
      type={"button"}
      data-content-before={I18N_LANG_KO.toUpperCase()}
      data-content-after={I18N_LANG_EN.toUpperCase()}
      onClick={langOnClick}
      className={cn(
        `mr-2 grid h-6 w-[66px] grid-flow-col items-stretch justify-stretch gap-0.5 
        rounded-full bg-background-secondary p-0.5 text-[10px] text-text-secondary before:flex 
        before:items-center before:justify-center before:rounded-full 
        before:content-[attr(data-content-before)] after:flex 
        after:items-center after:justify-center after:rounded-full 
        after:content-[attr(data-content-after)] md:mr-0`,
        i18n.language === I18N_LANG_KO
          ? " before:bg-white before:font-semibold"
          : " after:bg-white after:font-semibold",
        className
      )}
    ></button>
  );
};

export default LanguageButton;
