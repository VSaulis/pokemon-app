import { Locale } from 'common/types';
import i18n from 'i18next';
import { ResourceLanguage } from 'i18next/typescript/options';
import { initReactI18next } from 'react-i18next';

import { defaultLocale } from './constants';
import enDictionary from './dictionaries/en.json';
import ltDictionary from './dictionaries/lt.json';

const resources: Record<Locale, ResourceLanguage> = {
  en: enDictionary,
  lt: ltDictionary,
};

export const setupTranslations = () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: defaultLocale,
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v3',
  });
};
