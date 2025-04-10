import { useState } from 'react';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

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
