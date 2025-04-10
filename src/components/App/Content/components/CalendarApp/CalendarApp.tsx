import './CalendarApp.css';
import { useCalendar } from '../../../../../hooks/useCalendar';
import { useEvents } from '../../../../../hooks/useEvents';
import Calendar from './components/Calendar/Calendar';
import Events from './components/Events/Events';
import { Tab } from '../../../../../types/calendarTypes';

interface Props {
  currentUser: string;
  activeTab: Tab;
}
const CalendarApp = ({ activeTab, currentUser }: Props) => {
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
    resetCalendarPosition,
  } = useCalendar();

  const {
    showEventPopup,
    eventRange,
    eventTitle,
    storedEvents,
    monthEvents,
    handleDayClick,
    setEventTitle,
    handleCreateEvent,
    handleSubmitEvent,
    closeEventPopup,
    handleSetEditingEvent,
    handleRemoveEvent,
  } = useEvents(
    activeTab.users,
    currentUser,
    currentYear,
    currentMonth,
    selectedDate,
    setSelectedDate
  );

  return (
    <div className="calendar-app">
      <Calendar
        calendarName={activeTab.name}
        currentDate={currentDate}
        currentMonth={currentMonth}
        currentYear={currentYear}
        daysInMonth={daysInMonth}
        firstDayOfMonth={firstDayOfMonth}
        selectedDate={selectedDate}
        monthEvents={monthEvents}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleDayClick={handleDayClick}
        resetCalendarPosition={resetCalendarPosition}
      />
      <Events
        showEventPopup={showEventPopup}
        eventRange={eventRange}
        eventTitle={eventTitle}
        storedEvents={storedEvents}
        selectedDate={selectedDate}
        closeEventPopup={closeEventPopup}
        handleCreateEvent={handleCreateEvent}
        handleSubmitEvent={handleSubmitEvent}
        setEventTitle={setEventTitle}
        handleSetEditingEvent={handleSetEditingEvent}
        handleRemoveEvent={handleRemoveEvent}
      />
    </div>
  );
};
export default CalendarApp;
