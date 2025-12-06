'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LoginContextType = {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

const STORAGE_KEY = 'tablet-snifim-logged-in';

export function LoginProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);

  // טעינת מצב ההתחברות מהדפדפן כשאפליקציה עולה
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const login = () => {
    setLoggedIn(true);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'true');
    }
  };

  const logout = () => {
    setLoggedIn(false);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

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
