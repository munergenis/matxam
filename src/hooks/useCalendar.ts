import { useState } from 'react';

export const useCalendar = () => {
  const currentDate = new Date();

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Getting total days in current month and adjusting first week day to monday
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const jsDay = new Date(currentYear, currentMonth, 1).getDay();
  const firstDayOfMonth = (jsDay + 6) % 7;

  // handling month navigation
  const handlePrevMonth = () => {
    setCurrentMonth((pMonth) => (pMonth === 0 ? 11 : pMonth - 1));
    setCurrentYear((pYear) => (currentMonth === 0 ? pYear - 1 : pYear));
  };
  const handleNextMonth = () => {
    setCurrentMonth((pMonth) => (pMonth === 11 ? 0 : pMonth + 1));
    setCurrentYear((pYear) => (currentMonth === 11 ? pYear + 1 : pYear));
  };

  return {
    currentYear,
    currentMonth,
    currentDate,
    selectedDate,
    daysInMonth,
    firstDayOfMonth,
    setSelectedDate,
    handlePrevMonth,
    handleNextMonth,
  };
};
