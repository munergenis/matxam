import { useState } from 'react';
import './CalendarApp.css';

const CalendarApp = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentDate = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const jsDay = new Date(currentYear, currentMonth, 1).getDay();
  const firstDayOfMonth = (jsDay + 6) % 7;

  const handlePrevMonth = () => {
    setCurrentMonth((pMonth) => (pMonth === 0 ? 11 : pMonth - 1));
    setCurrentYear((pYear) => (currentMonth === 0 ? pYear - 1 : pYear));
  };
  const handleNextMonth = () => {
    setCurrentMonth((pMonth) => (pMonth === 11 ? 0 : pMonth + 1));
    setCurrentYear((pYear) => (currentMonth === 11 ? pYear + 1 : pYear));
  };

  return (
    <div className="calendar-app">
      <div className="calendar">
        <h1 className="heading">Calendar</h1>

        <div className="navigate-date">
          <h2 className="month">{monthOfYear[currentMonth]},</h2>
          <h2 className="year">{currentYear}</h2>
          <div className="buttons">
            {/* TODO change for real icons */}
            <button onClick={handlePrevMonth}>&lt;</button>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
        </div>

        <div className="weekdays">
          {daysOfWeek.map((day, i) => (
            <span key={i}>{day}</span>
          ))}
        </div>

        <div className="days">
          {[...Array(firstDayOfMonth).keys()].map((_, i) => (
            <span key={`empty-${i}`} />
          ))}
          {[...Array(daysInMonth).keys()].map((day) => (
            <span
              key={day + 1}
              className={`${
                currentDate.getFullYear() === currentYear &&
                currentDate.getMonth() === currentMonth &&
                currentDate.getDate() === day + 1 &&
                'current-day'
              }`}
            >
              {day + 1}
            </span>
          ))}
        </div>
      </div>

      <div className="events">
        <div className="event-popup">
          <div className="range-input">
            <div className="event-popup-range">Range</div>
            <select
              className="range"
              name="range"
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="night">Night</option>
            </select>
          </div>

          <input
            className="title"
            name="title"
            type="text"
            placeholder="Enter a title"
            maxLength={60}
          />

          <button className="event-popup-btn">Add event</button>
          {/* TODO change for real icons */}
          <button className="close-event-popup">X</button>
        </div>

        <div className="event">
          <div className="event-date-wrapper">
            <div className="event-date">May 15, 2025</div>
            <div className="event-range">Afternoon</div>
          </div>
          <div className="event-title">Descent campaign</div>
          <div className="event-buttons">
            {/* TODO change for real icons */}
            <button>✏️</button>
            <button>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalendarApp;
