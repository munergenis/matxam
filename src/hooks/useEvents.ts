import { useState } from 'react';
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
  const [storedEvents, setStoredEvents] = useState<Event[]>(events);
  const [eventRange, setEventRange] = useState(RangeEnum.Morning);
  const [eventTitle, setEventTitle] = useState('');

  const closeEventPopup = () => {
    setShowEventPopup(false);
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();

    if (clickedDate >= today || isSameDay(clickedDate, today)) {
      setSelectedDate(clickedDate);
      setShowEventPopup(true);
      setEventTitle('');
      setEventRange(RangeEnum.Morning);
    }
  };

  const handleAddEvent = () => {
    // TODO: get id from backend
    const newEvent = {
      id: crypto.randomUUID(),
      date: selectedDate,
      range: eventRange,
      title: eventTitle,
    };
    setStoredEvents((pEvents) => [...pEvents, newEvent]);
    setEventTitle('');
    setEventRange(RangeEnum.Morning);
    setShowEventPopup(false);
  };

  return {
    showEventPopup,
    eventRange,
    eventTitle,
    storedEvents,
    handleDayClick,
    setEventRange,
    setEventTitle,
    handleAddEvent,
    closeEventPopup,
  };
};
