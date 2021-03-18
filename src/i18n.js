import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translation_en from "./translations/en/translation.json"
import translation_ar from "./translations/ar/translation.json"
import translation_krd from "./translations/krd/translation.json"

const resources = {
  en: {
    translation: translation_en,
  },
  ar: {
    translation: translation_ar,
  },
  krd: {
    translation: translation_krd,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
