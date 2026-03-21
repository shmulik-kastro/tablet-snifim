'use client';
import { ReactNode, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useLogin } from './LoginContext';
import { usePathname, useRouter } from 'next/navigation';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { loggedIn, authReady } = useLogin();
  const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = pathname === '/';
  const isProtectedRoute = !isLoginPage;
  const showNavbar = loggedIn && !isLoginPage;

  useEffect(() => {
    if (!authReady) return;
    if (!loggedIn && isProtectedRoute) {
      router.replace('/');
    }
  }, [authReady, loggedIn, isProtectedRoute, router]);

  if (!authReady) {
    return null;
  }

  if (!loggedIn && isProtectedRoute) {
    return null;
  }

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
