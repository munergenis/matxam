import './Event.css';
import { MONTHS_OF_YEAR } from '../../../../../../constants/calendarConstants';
import { Event as EventType } from '../../../../../../types/calendarTypes';

interface Props {
  event: EventType;
}
const Event = ({ event }: Props) => {
  return (
    <div className="event">
      <div className="event-date-wrapper">
        <div className="event-date">
          {`${MONTHS_OF_YEAR[event.date.getMonth()]} ${event.date.getDate()},
          ${event.date.getFullYear()}`}
        </div>
        <div className="event-range">{event.range}</div>
      </div>
      <div className="event-title">{event.title}</div>
      <div className="event-buttons">
        {/* TODO change for real icons */}
        <button>✏️</button>
        <button>X</button>
      </div>
    </div>
  );
};
export default Event;
