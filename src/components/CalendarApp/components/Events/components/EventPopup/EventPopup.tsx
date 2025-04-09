import './EventPopup.css';
import { RangeEnum } from '../../../../../../types/calendarTypes';
import { MONTHS_OF_YEAR } from '../../../../../../constants/calendarConstants';

interface Props {
  eventRange: RangeEnum;
  eventTitle: string;
  selectedDate: Date;
  setEventTitle: (title: string) => void;
  handleSubmitEvent: () => void;
  closeEventPopup: () => void;
}
const EventPopup = ({
  eventRange,
  eventTitle,
  selectedDate,
  setEventTitle,
  handleSubmitEvent,
  closeEventPopup,
}: Props) => {
  return (
    <div className="event-popup">
      <div className="event-popup-date">{`${
        MONTHS_OF_YEAR[selectedDate.getMonth()]
      } ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`}</div>

      <div className="range-input">
        <div className="event-popup-range">Range</div>
        <div className="range">{eventRange}</div>
        {/* <select
          className="range"
          name="range"
          value={eventRange}
          onChange={(e) => setEventRange(e.target.value as RangeEnum)}
        >
          <option value={RangeEnum.Morning}>{RangeEnum.Morning}</option>
          <option value={RangeEnum.Afternoon}>{RangeEnum.Afternoon}</option>
          <option value={RangeEnum.Night}>{RangeEnum.Night}</option>
        </select> */}
      </div>

      <input
        className="title"
        name="title"
        type="text"
        placeholder="Enter a title"
        required
        maxLength={60}
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />

      <button
        className="event-popup-btn"
        onClick={handleSubmitEvent}
      >
        Add event
      </button>
      {/* TODO change for real icons */}
      <button
        className="close-event-popup"
        onClick={closeEventPopup}
      >
        X
      </button>
    </div>
  );
};
export default EventPopup;
