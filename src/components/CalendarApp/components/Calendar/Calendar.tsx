import './Calendar.css';
import {
  DAYS_OF_WEEK,
  MONTHS_OF_YEAR,
} from '../../../../constants/calendarConstants';

interface Props {
  currentYear: number;
  currentMonth: number;
  firstDayOfMonth: number;
  daysInMonth: number;
  currentDate: Date;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleDayClick: (day: number) => void;
}
const Calendar = ({
  currentYear,
  currentMonth,
  firstDayOfMonth,
  daysInMonth,
  currentDate,
  handlePrevMonth,
  handleNextMonth,
  handleDayClick,
}: Props) => {
  return (
    <div className="calendar">
      <h1 className="heading">Calendar</h1>

      <div className="navigate-date">
        <h2 className="month">{MONTHS_OF_YEAR[currentMonth]},</h2>
        <h2 className="year">{currentYear}</h2>
        <div className="buttons">
          {/* TODO change for real icons */}
          <button onClick={handlePrevMonth}>&lt;</button>
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
          <span key={`empty-${i}`} />
        ))}
        {[...Array(daysInMonth).keys()].map((day) => (
          <span
            className={`${
              currentDate.getFullYear() === currentYear &&
              currentDate.getMonth() === currentMonth &&
              currentDate.getDate() === day + 1 &&
              'current-day'
            }`}
            key={day + 1}
            onClick={() => handleDayClick(day + 1)}
          >
            {day + 1}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
