'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { useLogin } from './LoginContext';   // ← נוסף

function getDayOfWeekIsrael() {
  const jsDay = new Date().getDay(); // ראשון=0 ... שבת=6
  return jsDay === 0 ? 1 : jsDay + 1;
}

function getDayOfMonth() {
  return new Date().getDate();
}

export default function LoginPage() {
  const router = useRouter();
  const { login } = useLogin();            // ← מושך את login מהקונטקסט

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const correctUsername = String(getDayOfWeekIsrael());
  const correctPassword = String(getDayOfMonth());

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (username === correctUsername && password === correctPassword) {
      login();                // ← מסמן שהמשתמש מחובר
      setSuccess(true);

      setTimeout(() => {
        router.push('/company-policies');  // מעבר לעמוד נהלי חברה
      }, 500);
    } else {
      alert('שם משתמש או סיסמה לא נכונים');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 p-8 rounded-xl shadow-md flex flex-col gap-4 min-w-[300px]"
      >
        <h2 className="text-2xl font-bold text-center mb-4">התחברות</h2>
        <input
          type="text"
          placeholder="שם משתמש (דידי)"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="p-2 rounded border"
        />
        <input
          type="password"
          placeholder="סיסמה (אם)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-2 rounded border"
        />
        <button
          type="submit"
          className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-2 px-6 rounded-xl shadow"
        >
          התחבר
        </button>
        {success && (
          <div className="text-green-600 font-bold text-center mt-4">
            התחברת בהצלחה!
          </div>
        )}
      </form>
    </div>
  );
}
