import {
  getFirstWeekdayIndexOfMonth,
  getNumberOfDaysInMonth,
  getWeekdayFromDate,
} from '@/utils/dates';

import { Weekday } from '@/types/calendarTypes';
import { create } from 'zustand';
import { createSelectors } from './utils';

interface CalendarEventsState {
  // Calendar states
  weekStartsOnMonday: boolean;
  today: Date;
  calendarCurrentYear: number;
  calendarCurrentMonth: number;
  selectedDate: Date;
  selectedWeekday: Weekday;
  numberOfDaysInMonth: number;
  firstWeekdayIndexOfMonth: number;

  // Calendar actions
  toggleWeekStartsOnMonday: () => void;
  selectDate: (day: number) => void;
  prevMonth: () => void;
  nextMonth: () => void;
  resetCalendar: () => void;
}

const useCalendarEventsStoreBase = create<CalendarEventsState>()((set) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const selectedWeekday = getWeekdayFromDate(today, false);
  const numberOfDaysInMonth = getNumberOfDaysInMonth(currentYear, currentMonth);
  const firstWeekdayIndexOfMonth = getFirstWeekdayIndexOfMonth(
    currentYear,
    currentMonth,
    false
  );

  return {
    // TODO: set or get from localstorage or backend (this and previous false statements referring to weekstartsonmonday)
    weekStartsOnMonday: false,
    today,
    calendarCurrentYear: currentYear,
    calendarCurrentMonth: currentMonth,
    selectedDate: today,
    selectedWeekday,
    numberOfDaysInMonth,
    firstWeekdayIndexOfMonth,

    toggleWeekStartsOnMonday: () =>
      set((state) => ({
        weekStartsOnMonday: !state.weekStartsOnMonday,
        firstWeekdayIndexOfMonth: getFirstWeekdayIndexOfMonth(
          state.calendarCurrentYear,
          state.calendarCurrentMonth,
          !state.weekStartsOnMonday
        ),
      })),
    selectDate: (day) =>
      set((state) => ({
        selectedDate: new Date(
          state.calendarCurrentYear,
          state.calendarCurrentMonth,
          day
        ),
      })),
    prevMonth: () =>
      set((state) => {
        const newMonth =
          state.calendarCurrentMonth === 0
            ? 11
            : state.calendarCurrentMonth - 1;
        const newYear =
          state.calendarCurrentMonth === 0
            ? state.calendarCurrentYear - 1
            : state.calendarCurrentYear;
        return {
          calendarCurrentMonth: newMonth,
          calendarCurrentYear: newYear,
          numberOfDaysInMonth: getNumberOfDaysInMonth(newYear, newMonth),
          firstWeekdayIndexOfMonth: getFirstWeekdayIndexOfMonth(
            newYear,
            newMonth
          ),
        };
      }),
    nextMonth: () =>
      set((state) => {
        const newMonth =
          state.calendarCurrentMonth === 11
            ? 0
            : state.calendarCurrentMonth + 1;
        const newYear =
          state.calendarCurrentMonth === 11
            ? state.calendarCurrentYear + 1
            : state.calendarCurrentYear;
        return {
          calendarCurrentMonth: newMonth,
          calendarCurrentYear: newYear,
          numberOfDaysInMonth: getNumberOfDaysInMonth(newYear, newMonth),
          firstWeekdayIndexOfMonth: getFirstWeekdayIndexOfMonth(
            newYear,
            newMonth
          ),
        };
      }),
    resetCalendar: () =>
      set((state) => ({
        calendarCurrentMonth: currentMonth,
        calendarCurrentYear: currentYear,
        numberOfDaysInMonth: getNumberOfDaysInMonth(currentYear, currentMonth),
        firstWeekdayIndexOfMonth: getFirstWeekdayIndexOfMonth(
          currentYear,
          currentMonth,
          state.weekStartsOnMonday
        ),
      })),
  };
});

export const useCalendarEventsStore = createSelectors(
  useCalendarEventsStoreBase
);
