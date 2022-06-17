/**
 * Преобразует дату в строку формата DD.MM.YYYY
 * @param date - дата
 * @returns - строка в формате DD.MM.YYYY
 */
const formatDateToNews = (date:Date):string => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) { month = `0${month}`; }
  if (day.length < 2) { day = `0${day}`; }

  return [day, month, year].join('.');
};

export default formatDateToNews;
