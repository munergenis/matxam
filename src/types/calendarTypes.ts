export enum RangeEnum {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Night = 'Night',
}

export type Event = {
  id: string;
  date: Date;
  range: RangeEnum;
  title: string;
  user: string;
};

export type Tab = {
  id: string;
  name: string;
  users: string[];
};

export interface Weekday {
  long: string;
  short: string;
}

// export interface CalendarInfo {
//   currentYear: number;
//   currentMonth: number;
//   currentDay: number;
//   currentWeekday: Weekday;
//   numberOfDaysInMonth: number;
//   firstWeekdayIndexOfMonth: number;
// }
