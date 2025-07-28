'use client';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import { useLogin } from './LoginContext';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { loggedIn } = useLogin();
  return (
    <>
      {loggedIn && <Navbar />}
      <main className={loggedIn ? 'max-w-7xl mx-auto px-4 py-4 pt-16' : ''}>
        {children}
      </main>
    </>
  );
}
