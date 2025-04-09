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
  handleAddEvent: () => void;
  closeEventPopup: () => void;
}
const Events = ({
  showEventPopup,
  eventRange,
  eventTitle,
  storedEvents,
  selectedDate,
  setEventRange,
  setEventTitle,
  handleAddEvent,
  closeEventPopup,
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
          handleAddEvent={handleAddEvent}
          closeEventPopup={closeEventPopup}
        />
      )}

      {storedEvents.map((event) => (
        <Event
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
};
export default Events;
