import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import home_en from './translations/en/home.json';
import home_ar from './translations/ar/home.json';
import home_krd from './translations/krd/home.json';

const resources = {
  en: {
    home: home_en,
  },
  ar: {
    home: home_ar,
  },
  krd: {
    home: home_krd,
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
