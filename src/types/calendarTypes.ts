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
