import './CalendarApp.css';
import { useCalendar } from '../../hooks/useCalendar';
import { useEvents } from '../../hooks/useEvents';
import Calendar from './components/Calendar/Calendar';
import Events from './components/Events/Events';

const CalendarApp = () => {
  const {
    currentYear,
    currentMonth,
    currentDate,
    selectedDate,
    daysInMonth,
    firstDayOfMonth,
    setSelectedDate,
    handlePrevMonth,
    handleNextMonth,
  } = useCalendar();

  const {
    showEventPopup,
    eventRange,
    eventTitle,
    storedEvents,
    handleDayClick,
    setEventRange,
    setEventTitle,
    handleSubmitEvent,
    closeEventPopup,
    handleSetEditingEvent,
    handleRemoveEvent,
  } = useEvents(currentYear, currentMonth, selectedDate, setSelectedDate);

  return (
    <div className="calendar-app">
      <Calendar
        currentDate={currentDate}
        currentMonth={currentMonth}
        currentYear={currentYear}
        daysInMonth={daysInMonth}
        firstDayOfMonth={firstDayOfMonth}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleDayClick={handleDayClick}
      />
      <Events
        showEventPopup={showEventPopup}
        eventRange={eventRange}
        eventTitle={eventTitle}
        storedEvents={storedEvents}
        selectedDate={selectedDate}
        closeEventPopup={closeEventPopup}
        handleSubmitEvent={handleSubmitEvent}
        setEventRange={setEventRange}
        setEventTitle={setEventTitle}
        handleSetEditingEvent={handleSetEditingEvent}
        handleRemoveEvent={handleRemoveEvent}
      />
    </div>
  );
};
export default CalendarApp;
