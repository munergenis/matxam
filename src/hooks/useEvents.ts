import { useMemo, useState } from 'react';
import { Event, RangeEnum } from '../types/calendarTypes';
import { events } from '../data/events';
import { isSameDay } from '../utils/dates';

export const useEvents = (
  currentYear: number,
  currentMonth: number,
  selectedDate: Date,
  setSelectedDate: (date: Date) => void
) => {
  const [showEventPopup, setShowEventPopup] = useState(false);
  // TODO GET request to backend (maybe using a useEffect)
  const [storedEvents, setStoredEvents] = useState<Event[]>(events);
  const [eventRange, setEventRange] = useState(RangeEnum.Morning);
  const [eventTitle, setEventTitle] = useState('');
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const closeEventPopup = () => {
    setShowEventPopup(false);
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();

    if (clickedDate >= today || isSameDay(clickedDate, today)) {
      setSelectedDate(clickedDate);
      /**
       *
       *
       *
       *
       *
       *
       *
       *
       * TODO: usar esto en boton new Event
       *
       *
       *
       *
       *
       *
       *
       *
       *
       *
       *
       */
      // setShowEventPopup(true);
      // setEventTitle('');
      // setEventRange(RangeEnum.Morning);
      // setEditingEvent(null);
    }
  };

  const handleSubmitEvent = () => {
    // TODO: when handling data with backend we don't have id when event is new
    const newEvent = {
      id: editingEvent ? editingEvent.id : crypto.randomUUID(),
      date: selectedDate,
      range: eventRange,
      title: eventTitle,
    };

    if (editingEvent) {
      // TODO PATCH request to backend
      setStoredEvents((pEvents) =>
        pEvents.map((ev) => (ev.id === newEvent.id ? newEvent : ev))
      );
    } else {
      // TODO POST request to backend
      setStoredEvents((pEvents) => [...pEvents, newEvent]);
    }

    setEventTitle('');
    setEventRange(RangeEnum.Morning);
    setShowEventPopup(false);
  };

  const handleSetEditingEvent = (event: Event | null) => {
    if (event) {
      setEditingEvent(event);
      setShowEventPopup(true);
      setEventRange(event.range);
      setEventTitle(event.title);
      setSelectedDate(event.date);
    } else {
      setEditingEvent(null);
      setShowEventPopup(false);
      setEventRange(RangeEnum.Morning);
      setEventTitle('');
      setSelectedDate(new Date());
    }
  };

  const handleRemoveEvent = (eventId: string) => {
    // TODO DELETE request to backend
    setStoredEvents((pEvents) => pEvents.filter((e) => e.id !== eventId));
  };

  const filteredEvents = useMemo(() => {
    const orderMap: Record<RangeEnum, number> = {
      [RangeEnum.Morning]: 0,
      [RangeEnum.Afternoon]: 1,
      [RangeEnum.Night]: 2,
    };

    return storedEvents
      .filter((event) => isSameDay(event.date, selectedDate))
      .sort((a, b) => orderMap[a.range] - orderMap[b.range]);
  }, [storedEvents, selectedDate]);

  return {
    showEventPopup,
    eventRange,
    eventTitle,
    storedEvents: filteredEvents,
    handleDayClick,
    setEventRange,
    setEventTitle,
    handleSubmitEvent,
    closeEventPopup,
    handleSetEditingEvent,
    handleRemoveEvent,
  };
};
