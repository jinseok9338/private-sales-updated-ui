import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./translation.en.json";
import translationKo from "./translation.ko.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationKo,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "ko",
    interpolation: { escapeValue: true },
    returnObjects: true,
    returnEmptyString: true,
    returnNull: true,
  });

export const currentLanguage = () => i18n.language.split("-")[0];

export default i18n;
