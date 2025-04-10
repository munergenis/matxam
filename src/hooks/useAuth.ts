import { useState } from 'react';

export const useAuth = () => {
  // TODO: toggle to activate/deactivate auth on dev env
  const [currentUser, setCurrentUser] = useState<string | null>('asdf');
  // const [currentUser, setCurrentUser] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    if (password === email) {
      setCurrentUser(email);
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return { currentUser, login, logout };
};
