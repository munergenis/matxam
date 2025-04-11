import './CalendarApp.css';

import Calendar from './Calendar/Calendar';
import Events from './Events/Events';
import { Tab } from '@/types/calendarTypes';
import { useCalendarEventsStore } from '@/store/calendarEventsStore';
import { useEvents } from '@/hooks/useEvents';

interface Props {
  currentUser: string;
  activeTab: Tab;
}
const CalendarApp = ({ activeTab, currentUser }: Props) => {
  const calendarCurrentMonth =
    useCalendarEventsStore.use.calendarCurrentMonth();
  const selectedDate = useCalendarEventsStore.use.selectedDate();

  const {
    showEventPopup,
    eventRange,
    eventTitle,
    storedEvents,
    monthEvents,
    setEventTitle,
    handleCreateEvent,
    handleSubmitEvent,
    closeEventPopup,
    handleSetEditingEvent,
    handleRemoveEvent,
  } = useEvents(
    activeTab.users,
    currentUser,
    calendarCurrentMonth,
    selectedDate
  );

  return (
    <div className="calendar-app">
      <Calendar
        calendarName={activeTab.name}
        monthEvents={monthEvents}
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
