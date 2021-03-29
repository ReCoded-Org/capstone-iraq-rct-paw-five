import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from "./translations/en/translation.json"
import translationAr from "./translations/ar/translation.json"
import translationKrd from "./translations/krd/translation.json"

const language = ['en','kr','ar']

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
  kr: {
    translation: translationKrd,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: 'en',
    whitelist:language,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
