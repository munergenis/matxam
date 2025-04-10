import CalendarApp from './components/App/CalendarEvents/CalendarApp';
import Login from '@/components/Auth/Login/Login';
import LogoutButton from '@/components/Auth/Logout/LogoutButton';
import { Tab } from '@/types/calendarTypes';
import Tabs from './components/App/Tabs/Tabs';
import { tabs } from '@/data/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

const App = () => {
  const { currentUser, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>(tabs[1]);

  return (
    <div className="container">
      {currentUser ? (
        <div>
          <LogoutButton logout={logout} />
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <CalendarApp
            currentUser={currentUser}
            activeTab={activeTab}
          />
        </div>
      ) : (
        <Login login={login} />
      )}
    </div>
  );
};
export default App;
