import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json'
import cn from './cn.json'


i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translations: en
      },
      cn: {
        translations: cn
      },
    },
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false, 
    },
    ns: ["translations"],
    defaultNS: "translations"
  });


  export default i18n;
