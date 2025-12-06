'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type LoginContextType = {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const ctx = useContext(LoginContext);
  if (!ctx) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return ctx;
}
