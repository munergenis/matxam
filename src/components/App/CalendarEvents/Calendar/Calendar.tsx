import './Calendar.css';

import { DAYS_OF_WEEK, MONTHS_OF_YEAR } from '@/constants/calendarConstants';
import { Event, RangeEnum } from '@/types/calendarTypes';
import { getMondayBasedDaysOfWeek, isSameDay } from '@/utils/dates';

import { useCalendarEventsStore } from '@/store/calendarEventsStore';

interface Props {
  calendarName: string;
  monthEvents: Event[];
}
const Calendar = ({ calendarName, monthEvents }: Props) => {
  const weekStartsOnMonday = useCalendarEventsStore.use.weekStartsOnMonday();
  const calendarCurrentYear = useCalendarEventsStore.use.calendarCurrentYear();
  const calendarCurrentMonth =
    useCalendarEventsStore.use.calendarCurrentMonth();
  const firstWeekdayIndexOfMonth =
    useCalendarEventsStore.use.firstWeekdayIndexOfMonth();
  const numberOfDaysInMonth = useCalendarEventsStore.use.numberOfDaysInMonth();
  const selectedDate = useCalendarEventsStore.use.selectedDate();
  const toggleWeekStartsOnMonday =
    useCalendarEventsStore.use.toggleWeekStartsOnMonday();
  const prevMonth = useCalendarEventsStore.use.prevMonth();
  const nextMonth = useCalendarEventsStore.use.nextMonth();
  const resetCalendar = useCalendarEventsStore.use.resetCalendar();
  const selectDate = useCalendarEventsStore.use.selectDate();

  const daysOfWeek = weekStartsOnMonday
    ? getMondayBasedDaysOfWeek()
    : DAYS_OF_WEEK;

  return (
    <div className="calendar">
      <h1 className="heading">Calendar {calendarName}</h1>

      <div className="navigate-date">
        <h2 className="month">{MONTHS_OF_YEAR[calendarCurrentMonth]},</h2>
        <h2 className="year">{calendarCurrentYear}</h2>
        <div className="buttons">
          {/* TODO change for real icons */}
          <button onClick={toggleWeekStartsOnMonday}>
            {weekStartsOnMonday ? 'M' : 'S'}
          </button>
          <button onClick={prevMonth}>&lt;</button>
          <button onClick={resetCalendar}>R</button>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      </div>

      <div className="weekdays">
        {daysOfWeek.map((day, i) => (
          <span key={i}>{day.short}</span>
        ))}
      </div>

      <div className="days">
        {[...Array(firstWeekdayIndexOfMonth).keys()].map((_, i) => (
          <div key={`empty-${i}`}></div>
        ))}
        {[...Array(numberOfDaysInMonth).keys()].map((day) => (
          <div
            className={`${
              isSameDay(
                new Date(),
                new Date(calendarCurrentYear, calendarCurrentMonth, day + 1)
              ) && 'current-day'
            } ${
              isSameDay(
                selectedDate,
                new Date(calendarCurrentYear, calendarCurrentMonth, day + 1)
              ) && 'selected-day'
            }`}
            key={day + 1}
            onClick={() => selectDate(day + 1)}
          >
            <span
              className={`${
                isSameDay(
                  selectedDate,
                  new Date(calendarCurrentYear, calendarCurrentMonth, day + 1)
                ) && 'selected-day'
              }`}
            >
              {day + 1}
            </span>
            <div
              className={`${
                monthEvents.find(
                  (e) =>
                    e.date.getDate() === day + 1 &&
                    e.range === RangeEnum.Morning
                ) && 'morning'
              } day-range`}
            ></div>
            <div
              className={`${
                monthEvents.find(
                  (e) =>
                    e.date.getDate() === day + 1 &&
                    e.range === RangeEnum.Afternoon
                ) && 'afternoon'
              } day-range`}
            ></div>
            <div
              className={`${
                monthEvents.find(
                  (e) =>
                    e.date.getDate() === day + 1 && e.range === RangeEnum.Night
                ) && 'night'
              } day-range`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
