import { create } from 'zustand';

interface AuthState {
  currentUser: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  currentUser: null,
  login: (email, password) => {
    if (email.trim() !== '' && email.trim() === password.trim()) {
      set({ currentUser: email });
    }
  },
  logout: () => set({ currentUser: null }),
}));
