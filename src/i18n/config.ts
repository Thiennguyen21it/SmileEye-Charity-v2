import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslations from "./locales/en.json";
import vnTranslations from "./locales/vn.json";
import jpTranslations from "./locales/jp.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  vn: {
    translation: vnTranslations,
  },
  jp: {
    translation: jpTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    // Enable proper async support
    react: {
      useSuspense: false, // Set to false to handle loading states manually
    },

    // Ensure language changes complete properly
    load: "languageOnly",
    cleanCode: true,

    // Add timeout for language loading
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18n;
