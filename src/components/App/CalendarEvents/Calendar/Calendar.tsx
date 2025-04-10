import './Calendar.css';

import { DAYS_OF_WEEK, MONTHS_OF_YEAR } from '@/constants/calendarConstants';
import { Event, RangeEnum } from '@/types/calendarTypes';

import { isSameDay } from '@/utils/dates';

interface Props {
  calendarName: string;
  currentYear: number;
  currentMonth: number;
  firstDayOfMonth: number;
  daysInMonth: number;
  currentDate: Date;
  selectedDate: Date;
  monthEvents: Event[];
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleDayClick: (day: number) => void;
  resetCalendarPosition: () => void;
}
const Calendar = ({
  calendarName,
  currentYear,
  currentMonth,
  firstDayOfMonth,
  daysInMonth,
  currentDate,
  selectedDate,
  monthEvents,
  handlePrevMonth,
  handleNextMonth,
  handleDayClick,
  resetCalendarPosition,
}: Props) => {
  return (
    <div className="calendar">
      <h1 className="heading">Calendar {calendarName}</h1>

      <div className="navigate-date">
        <h2 className="month">{MONTHS_OF_YEAR[currentMonth]},</h2>
        <h2 className="year">{currentYear}</h2>
        <div className="buttons">
          {/* TODO change for real icons */}
          <button onClick={handlePrevMonth}>&lt;</button>
          <button onClick={resetCalendarPosition}>R</button>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
      </div>

      <div className="weekdays">
        {DAYS_OF_WEEK.map((day, i) => (
          <span key={i}>{day}</span>
        ))}
      </div>

      <div className="days">
        {[...Array(firstDayOfMonth).keys()].map((_, i) => (
          <div>
            <span key={`empty-${i}`} />
          </div>
        ))}
        {[...Array(daysInMonth).keys()].map((day) => (
          <div
            className={`${
              isSameDay(
                currentDate,
                new Date(currentYear, currentMonth, day + 1)
              ) && 'current-day'
            }`}
            key={day + 1}
            onClick={() => handleDayClick(day + 1)}
          >
            <span
              className={`${
                isSameDay(
                  currentDate,
                  new Date(currentYear, currentMonth, day + 1)
                ) && 'current-day'
              } ${
                isSameDay(
                  selectedDate,
                  new Date(currentYear, currentMonth, day + 1)
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
