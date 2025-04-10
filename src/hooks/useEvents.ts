import { Event, RangeEnum } from '@/types/calendarTypes';
import { useEffect, useMemo, useState } from 'react';

import { events } from '@/data/events';
import { isSameDay } from '@/utils/dates';

export const useEvents = (
  users: string[],
  currentUser: string,
  currentYear: number,
  currentMonth: number,
  selectedDate: Date,
  setSelectedDate: (date: Date) => void
) => {
  const userEvents = useMemo(
    () => events.filter((e) => users.some((u) => u === e.user)),
    [users]
  );

  const [showEventPopup, setShowEventPopup] = useState(false);
  // TODO GET request to backend (maybe using a useEffect)
  const [storedEvents, setStoredEvents] = useState<Event[]>(userEvents);
  const [eventRange, setEventRange] = useState(RangeEnum.Morning);
  const [eventTitle, setEventTitle] = useState('');
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  useEffect(() => {
    setStoredEvents(userEvents);
  }, [userEvents]);

  const closeEventPopup = () => {
    setShowEventPopup(false);
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(currentYear, currentMonth, day);

    setSelectedDate(clickedDate);
  };

  const handleCreateEvent = (range: RangeEnum) => {
    setShowEventPopup(true);
    setEventTitle('');
    setEventRange(range);
    setEditingEvent(null);
  };

  const handleSubmitEvent = () => {
    // TODO: when handling data with backend we don't have id when event is new
    const newEvent = {
      id: editingEvent ? editingEvent.id : crypto.randomUUID(),
      date: selectedDate,
      range: eventRange,
      title: eventTitle,
      user: currentUser,
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

  const dailyEvents = useMemo(() => {
    return storedEvents.filter((event) => isSameDay(event.date, selectedDate));
  }, [storedEvents, selectedDate]);

  const monthEvents = useMemo(() => {
    return storedEvents.filter(
      (event) => event.date.getMonth() === currentMonth
    );
  }, [storedEvents, currentMonth]);

  return {
    showEventPopup,
    eventRange,
    eventTitle,
    // TODO: replace storedEvents for dailyEvents
    storedEvents: dailyEvents,
    monthEvents,
    handleDayClick,
    setEventTitle,
    handleCreateEvent,
    handleSubmitEvent,
    closeEventPopup,
    handleSetEditingEvent,
    handleRemoveEvent,
  };
};
