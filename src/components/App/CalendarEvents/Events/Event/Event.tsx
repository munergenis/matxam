import './Event.css';

import { Event as EventType, RangeEnum } from '@/types/calendarTypes';

interface Props {
  event: EventType;
  handleSetEditingEvent: (event: EventType | null) => void;
  handleRemoveEvent: (eventId: string) => void;
}
const Event = ({ event, handleSetEditingEvent, handleRemoveEvent }: Props) => {
  let eventBackground;

  if (event.range === RangeEnum.Morning) {
    eventBackground = 'morning';
  } else if (event.range === RangeEnum.Afternoon) {
    eventBackground = 'afternoon';
  } else if (event.range === RangeEnum.Night) {
    eventBackground = 'night';
  } else {
    eventBackground = '';
  }

  return (
    <div className={`event ${eventBackground}`}>
      <div className="event-date-wrapper">
        <div className="event-range">{event.range}</div>
        <div className="event-range">{event.user}</div>
      </div>
      <div className="event-title">{event.title}</div>
      <div className="event-buttons">
        {/* TODO change for real icons */}
        <button onClick={() => handleSetEditingEvent(event)}>✏️</button>
        <button onClick={() => handleRemoveEvent(event.id)}>X</button>
      </div>
    </div>
  );
};
export default Event;
