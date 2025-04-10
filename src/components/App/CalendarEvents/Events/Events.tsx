import './Events.css';

import { Event as EventType, RangeEnum } from '@/types/calendarTypes';
import { getFormattedDate, getWeekdayFromDate } from '@/utils/dates';

import Event from './Event/Event';
import EventPopup from './EventPopup/EventPopup';
import NewEventButton from './NewEventButton/NewEventButton';

interface Props {
  showEventPopup: boolean;
  eventRange: RangeEnum;
  eventTitle: string;
  storedEvents: EventType[];
  selectedDate: Date;
  setEventTitle: (title: string) => void;
  handleCreateEvent: (range: RangeEnum) => void;
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
  setEventTitle,
  handleCreateEvent,
  handleSubmitEvent,
  closeEventPopup,
  handleSetEditingEvent,
  handleRemoveEvent,
}: Props) => {
  const morningEvents = storedEvents.filter(
    (ev) => ev.range === RangeEnum.Morning
  );
  const afternoonEvents = storedEvents.filter(
    (ev) => ev.range === RangeEnum.Afternoon
  );
  const nightEvents = storedEvents.filter((ev) => ev.range === RangeEnum.Night);
  const weekday = getWeekdayFromDate(selectedDate);

  return (
    <div className="events">
      <div className="selected-date">{`${weekday.short} ${getFormattedDate(
        selectedDate
      )}`}</div>

      {showEventPopup && (
        <EventPopup
          eventRange={eventRange}
          eventTitle={eventTitle}
          selectedDate={selectedDate}
          setEventTitle={setEventTitle}
          handleSubmitEvent={handleSubmitEvent}
          closeEventPopup={closeEventPopup}
        />
      )}

      <div className="event-range-container">
        <h2>{RangeEnum.Morning}</h2>
        {morningEvents.length ? (
          morningEvents.map((event) => (
            <Event
              key={event.id}
              event={event}
              handleSetEditingEvent={handleSetEditingEvent}
              handleRemoveEvent={handleRemoveEvent}
            />
          ))
        ) : (
          <NewEventButton
            range={RangeEnum.Morning}
            handleCreateEvent={handleCreateEvent}
          />
        )}
      </div>
      <div className="event-range-container">
        <h2>{RangeEnum.Afternoon}</h2>
        {afternoonEvents.length ? (
          afternoonEvents.map((event) => (
            <Event
              key={event.id}
              event={event}
              handleSetEditingEvent={handleSetEditingEvent}
              handleRemoveEvent={handleRemoveEvent}
            />
          ))
        ) : (
          <NewEventButton
            range={RangeEnum.Afternoon}
            handleCreateEvent={handleCreateEvent}
          />
        )}
      </div>
      <div className="event-range-container">
        <h2>{RangeEnum.Night}</h2>
        {nightEvents.length ? (
          nightEvents.map((event) => (
            <Event
              key={event.id}
              event={event}
              handleSetEditingEvent={handleSetEditingEvent}
              handleRemoveEvent={handleRemoveEvent}
            />
          ))
        ) : (
          <NewEventButton
            range={RangeEnum.Night}
            handleCreateEvent={handleCreateEvent}
          />
        )}
      </div>
    </div>
  );
};
export default Events;
