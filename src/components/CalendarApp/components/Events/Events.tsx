import './Events.css';
import { Event as EventType, RangeEnum } from '../../../../types/calendarTypes';
import EventPopup from './components/EventPopup/EventPopup';
import Event from './components/Event/Event';

interface Props {
  showEventPopup: boolean;
  eventRange: RangeEnum;
  eventTitle: string;
  storedEvents: EventType[];
  selectedDate: Date;
  setEventRange: (range: RangeEnum) => void;
  setEventTitle: (title: string) => void;
  handleSubmitEvent: () => void;
  closeEventPopup: () => void;
  handleSetEditingEvent: (event: EventType | null) => void;
  handleRemoveEvent: (eventId: string) => void;
}
const Events = ({
  showEventPopup,
  eventRange,
  eventTitle,
  storedEvents,
  selectedDate,
  setEventRange,
  setEventTitle,
  handleSubmitEvent,
  closeEventPopup,
  handleSetEditingEvent,
  handleRemoveEvent,
}: Props) => {
  return (
    <div className="events">
      {showEventPopup && (
        <EventPopup
          eventRange={eventRange}
          eventTitle={eventTitle}
          selectedDate={selectedDate}
          setEventRange={setEventRange}
          setEventTitle={setEventTitle}
          handleSubmitEvent={handleSubmitEvent}
          closeEventPopup={closeEventPopup}
        />
      )}

      {storedEvents.map((event) => (
        <Event
          key={event.id}
          event={event}
          handleSetEditingEvent={handleSetEditingEvent}
          handleRemoveEvent={handleRemoveEvent}
        />
      ))}
    </div>
  );
};
export default Events;
