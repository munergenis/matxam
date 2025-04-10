import { Tab } from '../../../types/calendarTypes';
import CalendarApp from './components/CalendarApp/CalendarApp';

interface Props {
  currentUser: string;
  activeTab: Tab;
  logout: () => void;
}
const Content = ({ currentUser, activeTab, logout }: Props) => {
  return (
    <div>
      <div
        className="avatar"
        onClick={logout}
      >
        Logout
      </div>
      <CalendarApp
        currentUser={currentUser}
        activeTab={activeTab}
      />
    </div>
  );
};
export default Content;
