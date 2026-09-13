'use client';

import { useEffect, useState } from 'react';
import { useLogin } from '@/app/LoginContext';

export default function GatesAppPage() {
  const { snifCode, authReady } = useLogin();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!authReady) return;

    if (!snifCode) {
      setError('לא נמצא קוד סניף. יש להתחבר מחדש למערכת.');
      return;
    }

    let cancelled = false;

    async function openGatesApp() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(
          `/api/gates-users?user=${encodeURIComponent(snifCode!)}`
        );
        const data = await res.json();

        if (cancelled) return;

        if (!res.ok) {
          setError(data.error || 'קוד סניף לא נמצא ברשימת השערים');
          setLoading(false);
          return;
        }

        window.location.href = data.link;
      } catch {
        if (!cancelled) {
          setError('שגיאה בחיבור לשרת');
          setLoading(false);
        }
      }
    }

    openGatesApp();

    return () => {
      cancelled = true;
    };
  }, [authReady, snifCode]);

  return (
    <div className="relative flex flex-col items-center w-full min-h-[60vh]">
      <div className="flex justify-center mb-8 z-10">
        <div className="bg-white bg-opacity-80 rounded-xl px-8 py-3 shadow">
          <h1 className="text-4xl sm:text-5xl font-bold text-black">אפליקציית שערים</h1>
        </div>
      </div>

      <div className="z-10 bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg max-w-md w-full text-center">
        {loading && !error && (
          <p className="text-lg text-gray-700">
            מעביר לאפליקציית השערים לסניף {snifCode}...
          </p>
        )}
        {error && (
          <p className="text-red-600 font-semibold text-lg">{error}</p>
        )}
      </div>
    </div>
  );
}
