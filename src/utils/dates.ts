import { MONTHS_OF_YEAR } from '@/constants/calendarConstants';

export const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const getFormattedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = MONTHS_OF_YEAR[date.getMonth()];
  const day = date.getDate();
  return `${day} ${month} ${year}`;
};
