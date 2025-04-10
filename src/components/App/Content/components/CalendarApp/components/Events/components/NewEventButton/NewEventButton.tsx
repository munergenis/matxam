import { RangeEnum } from '../../../../../../../../../types/calendarTypes';
import './NewEventButton.css';

interface Props {
  range: RangeEnum;
  handleCreateEvent: (range: RangeEnum) => void;
}
const NewEventButton = ({ range, handleCreateEvent }: Props) => {
  return (
    <button
      className="new-event-button"
      onClick={() => handleCreateEvent(range)}
    >
      Add new event
    </button>
  );
};
export default NewEventButton;
