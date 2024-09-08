import { Locale } from 'common/types';
import i18n from 'i18next';

export const changeLanguage = async (locale: Locale) => {
  await i18n.changeLanguage(locale);
};
