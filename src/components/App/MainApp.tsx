import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Login from '../Auth/Login';
import Content from './Content/Content';
import Tabs from './Tabs/Tabs';
import { tabs } from '../../data/tabs';
import { Tab } from '../../types/calendarTypes';

const MainApp = () => {
  const { currentUser, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>(tabs[1]);

  // TODO : cambiar per activar auth
  return currentUser ? (
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
  );
};
export default MainApp;
