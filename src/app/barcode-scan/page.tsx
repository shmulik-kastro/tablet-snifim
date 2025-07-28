'use client';

import { useRouter } from 'next/navigation';

export default function BarcodeScanPage() {
  const router = useRouter();

  // כתובת האתר החיצוני לסריקת הברקוד:
  const externalUrl = 'https://renuar-blox.pb-digital.co.il/הדרכה/';

  const handleClick = () => {
    // מעבר מלא לדף החיצוני (לא חלון חדש)
    window.location.href = externalUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full bg-gray-100">
      <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-8 text-blue-800">סריקת ברקוד</h1>
        <button
          onClick={handleClick}
          className="bg-green-200 hover:bg-green-300 text-green-900 font-bold py-4 px-8 rounded-xl shadow transition text-lg mb-6"
        >
          לסריקת ברקוד לחץ כאן
        </button>
        <p className="text-gray-600 mt-4">
          בלחיצה תועבר ישירות למסך הסריקה החיצוני.
        </p>
      </div>
    </div>
  );
}
