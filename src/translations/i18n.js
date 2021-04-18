import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_NO } from "./no/translations";
import { TRANSLATIONS_EN } from "./en/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    returnEmptyString: false,
    interpolation: {
      escapeValue: false // not needed for react
    },
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      },
      no: {
        translation: TRANSLATIONS_NO
      } // add other translations here
    }
  });

i18n.changeLanguage('en');