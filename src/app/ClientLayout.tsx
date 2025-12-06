'use client';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import { useLogin } from './LoginContext';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { loggedIn } = useLogin();
  const pathname = usePathname();

  const isLoginPage = pathname === '/';
  const showNavbar = loggedIn && !isLoginPage;

  return (
    <>
      {showNavbar && (
        <nav className="w-full bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <Navbar />
          </div>
        </nav>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </>
  );
}
