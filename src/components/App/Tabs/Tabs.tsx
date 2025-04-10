import { Tab } from '../../../types/calendarTypes';

interface Props {
  tabs: Tab[];
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}
const Tabs = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          disabled={activeTab.id === tab.id}
          onClick={() => setActiveTab(tab)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};
export default Tabs;
