import { DAYS_OF_WEEK, MONTHS_OF_YEAR } from '@/constants/calendarConstants';

import { Weekday } from '@/types/calendarTypes';

/* ======================================================
    COMPARISON FUNCTIONS
   ====================================================== */
/**
 * Checks if two dates represent the same calendar day.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns True if both dates have the same year, month, and day; otherwise, false.
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/* ======================================================
    FORMAT FUNCTIONS
   ====================================================== */
/**
 * Returns a formatted date string in the format "day Month year".
 *
 * @param date - The date to format.
 * @returns A string representation of the date.
 */
export const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = MONTHS_OF_YEAR[date.getMonth()];
  const day = date.getDate();
  return `${day} ${month} ${year}`;
};

/* ======================================================
    DAYS CALCULATION FUNCTIONS
   ====================================================== */
/**
 * Returns the total number of days in the given month.
 *
 * @param year - The year.
 * @param month - The month (0-indexed).
 * @returns The number of days in the month.
 */
export const getNumberOfDaysInMonth = (year: number, month: number): number =>
  new Date(year, month + 1, 0).getDate();

/**
 * Returns the index of the weekday for the first day of the month.
 * If `weekStartsOnMonday` is true, the index is re-based so that Monday is 0.
 *
 * @param year - The year.
 * @param month - The month (0-indexed).
 * @param weekStartsOnMonday - Whether the week starts on Monday. Defaults to false.
 * @returns The re-indexed weekday of the first day of the month.
 *
 * @example
  // May 1, 2025 is Thursday => index is 4 (Thursday in Sunday-based week)
  // if weekStartsOnMonday is true => index is 3 (Thursday in a Monday-based week).
 * getFirstWeekdayIndexOfMonth(2025, 4, true);
 */
export const getFirstWeekdayIndexOfMonth = (
  year: number,
  month: number,
  weekStartsOnMonday: boolean = false
): number => {
  const jsDay = new Date(year, month, 1).getDay(); // 0 = Sunday, 6 = Saturday
  if (weekStartsOnMonday) {
    // Re-index: Monday (1) → 0, ... , Sunday (0) → 6
    // example on sunday: (0 + 6) % 7 = 6 % 7 = 6, index is 6 (Sunday in a Monday-based week).
    return (jsDay + 6) % 7;
  }
  return jsDay;
};

/**
 * Returns the DAYS_OF_WEEK array rotated so that Monday becomes the first element.
 *
 * @returns The array of weekday objects starting with Monday.
 *
 * @example
 * // Assuming DAYS_OF_WEEK is:
 * // [
 * //   { long: 'Sunday', short: 'Sun' },
 * //   { long: 'Monday', short: 'Mon' },
 * //   { long: 'Tuesday', short: 'Tue' },
 * //   { long: 'Wednesday', short: 'Wed' },
 * //   { long: 'Thursday', short: 'Thu' },
 * //   { long: 'Friday', short: 'Fri' },
 * //   { long: 'Saturday', short: 'Sat' }
 * // ]
 * // The function will return:
 * // [
 * //   { long: 'Monday', short: 'Mon' },
 * //   { long: 'Tuesday', short: 'Tue' },
 * //   { long: 'Wednesday', short: 'Wed' },
 * //   { long: 'Thursday', short: 'Thu' },
 * //   { long: 'Friday', short: 'Fri' },
 * //   { long: 'Saturday', short: 'Sat' },
 * //   { long: 'Sunday', short: 'Sun' }
 * // ]
 */
export const getMondayBasedDaysOfWeek = (): Weekday[] => {
  return [...DAYS_OF_WEEK.slice(1), DAYS_OF_WEEK[0]];
};

/**
 * Returns the weekday object corresponding to the given date.
 * Uses Date.getDay() (0 = Sunday). If weekStartsOnMonday is true,
 * the index is mapped so that Monday is at position 0.
 *
 * @param date - The date from which to derive the weekday.
 * @param weekStartsOnMonday - Whether the week starts on Monday. Defaults to false.
 * @returns The weekday object with long and short names.
 *
 * @example
 * // With the default week (Sunday-first):
 * // For a date where getDay() returns 0, getWeekdayFromDate(date) returns { long: 'Sunday', short: 'Sun' }.
 *
 * @example
 * // With week starting on Monday:
 * // For a date where getDay() returns 1 (Monday in JS),
 * // (1 + 6) % 7 = 0, so getWeekdayFromDate(date, true) returns { long: 'Monday', short: 'Mon' }.
 */
export const getWeekdayFromDate = (
  date: Date,
  weekStartsOnMonday: boolean = false
): Weekday => {
  const dayIndex = date.getDay();
  if (weekStartsOnMonday) {
    // Rotate the array so that it starts with Monday.
    // The rotated index is calculated as (dayIndex + 6) % 7.
    return getMondayBasedDaysOfWeek()[(dayIndex + 6) % 7];
  }
  return DAYS_OF_WEEK[dayIndex];
};
