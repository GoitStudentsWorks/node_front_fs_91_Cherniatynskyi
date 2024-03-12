import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from "i18next-http-backend";
import translationEN from "../src/utils/locales/en/translationEN.json"
import translationUK from "./utils/locales/uk/translationUK.json"

const resources = {
    en: {
      translation: translationEN
    },
    uk: {
      translation: translationUK
    }
  };

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        debug: true,
        fallbackLng: "en",
        lng: "en"
    })


export default i18n