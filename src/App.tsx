import Content from './components/App/Content/Content';
import Login from './components/Auth/Login/Login';
import { Tab } from './types/calendarTypes';
import Tabs from './components/App/Tabs/Tabs';
import { tabs } from './data/tabs';
import { useAuth } from './hooks/useAuth';
import { useState } from 'react';

const App = () => {
  const { currentUser, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>(tabs[1]);

  return (
    <div className="container">
      {currentUser ? (
        <div>
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Content
            currentUser={currentUser}
            activeTab={activeTab}
            logout={logout}
          />
        </div>
      ) : (
        <Login login={login} />
      )}
    </div>
  );
};
export default App;
