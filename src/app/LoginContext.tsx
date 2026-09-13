'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LoginContextType = {
  loggedIn: boolean;
  authReady: boolean;
  snifCode: string | null;
  login: (snifCode: string) => void;
  logout: () => void;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

const STORAGE_KEY = 'tablet-snifim-logged-in';
const SNIF_STORAGE_KEY = 'tablet-snifim-snif-code';

export function LoginProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [snifCode, setSnifCode] = useState<string | null>(null);

  // טעינת מצב ההתחברות מהדפדפן כשאפליקציה עולה
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const storedSnif = window.localStorage.getItem(SNIF_STORAGE_KEY);
    if (stored === 'true') {
      setLoggedIn(true);
    }
    if (storedSnif) {
      setSnifCode(storedSnif);
    }
    setAuthReady(true);
  }, []);

  const login = (code: string) => {
    setLoggedIn(true);
    setSnifCode(code);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'true');
      window.localStorage.setItem(SNIF_STORAGE_KEY, code);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setSnifCode(null);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(SNIF_STORAGE_KEY);
    }
  };

  return (
    <LoginContext.Provider value={{ loggedIn, authReady, snifCode, login, logout }}>
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
