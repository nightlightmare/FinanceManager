import { Localization, Locale } from 'types/localization';

/**
 * Возвращает функцию, которая получает из словаря перевод в соответсвии с текущей выбранной локализацией
 * @param localization - словарь с переводами на нужные локали
 * @param locale - выбранная локаль
 * @returns объект с функцией t(key) которая возвращает перевод строки key на выбранную локаль
 */
const getLocalization = (localization: Localization, locale: Locale) => {
  const t = (key:string): string => {
    if (locale) {
      if (!localization[locale][key]) {
      // eslint-disable-next-line no-console
        console.warn(`Translation '${key}' for locale '${locale}' not found.`);
      }

      return localization[locale][key] || key;
    }

    // eslint-disable-next-line no-console
    console.error(`Locale '${locale}' is undefined`);
    return '';
  };
  return { t };
};

export default getLocalization;
