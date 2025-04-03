import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { TypoSubtle } from "~/components/ui/typo/AnchorsSubtle";

const ChangeLanguageButtons = () => {
  const { i18n } = useTranslation();
  const handleClickLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const currentLanguage = i18n.language === "ko" ? "언어" : "Language";
  const koreanLanguage = i18n.language === "ko" ? "한국어" : "Korean";
  const englishLanguage = i18n.language === "ko" ? "영어" : "English";

  return (
    <div className="flex p-4 justify-between">
      <div className="flex items-center">
        <TypoSubtle>{currentLanguage}</TypoSubtle>
      </div>
      <div className="flex gap-2">
        <button
          className="h-7 w-fit flex p-0 m-0 items-center"
          onClick={() => handleClickLanguage("ko")}
        >
          <TypoSubtle>{koreanLanguage}</TypoSubtle>
        </button>
        <Separator orientation="vertical" className="h-3" />
        <button
          className="h-7 w-fit flex pl-0 pr-0 m-0 items-center"
          onClick={() => handleClickLanguage("en")}
        >
          <TypoSubtle>{englishLanguage}</TypoSubtle>
        </button>
      </div>
    </div>
  );
};

export default ChangeLanguageButtons;
