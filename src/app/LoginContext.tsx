'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LoginContextType = {
  loggedIn: boolean;
  login: () => void;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);

  // עם טעינת העמוד: בדוק אם המשתמש כבר מחובר (localStorage)
  useEffect(() => {
    const loggedInFromStorage = localStorage.getItem('loggedIn');
    if (loggedInFromStorage === 'true') {
      setLoggedIn(true);
    }
  }, []);

  // בכל שינוי התחברות: עדכן ב-localStorage
  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn ? 'true' : 'false');
  }, [loggedIn]);

  const login = () => setLoggedIn(true);

  return (
    <LoginContext.Provider value={{ loggedIn, login }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) throw new Error('useLogin must be used within a LoginProvider');
  return context;
}
