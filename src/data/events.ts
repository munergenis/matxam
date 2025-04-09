import { Event, RangeEnum } from '../types/calendarTypes';

export const events: Event[] = [
  {
    id: crypto.randomUUID(),
    date: new Date(2025, 3, 9, 23, 59, 59),
    range: RangeEnum.Afternoon,
    title: 'Descent campaign',
  },
  {
    id: crypto.randomUUID(),
    date: new Date(2025, 3, 10, 23, 59, 59),
    range: RangeEnum.Morning,
    title: 'Descent campaign 10',
  },
  {
    id: crypto.randomUUID(),
    date: new Date(2025, 3, 11, 23, 59, 59),
    range: RangeEnum.Night,
    title: 'Descent campaign 11',
  },
  {
    id: crypto.randomUUID(),
    date: new Date(2025, 3, 12, 23, 59, 59),
    range: RangeEnum.Afternoon,
    title: 'Descent campaign 12',
  },
];
