'use client';

import Link from 'next/link';

export default function customerservicePage() {
  const url = "https://api.whatsapp.com/send/?phone=972524117957&text&type=phone_number&app_absent=0";

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-glilot6">
  
      <h1 className="text-2xl font-bold mb-6">.</h1>
      <p className="mb-6 text-gray-600">
                  .<br />
                  .
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-200 hover:bg-pink-300 text-pink-900 font-bold py-3 px-8 rounded-xl shadow transition text-lg mb-6"

      >
        לוואטסאפ לשירות לקוחות לחץ כאן
      </a>
      <Link
        href="/"
        className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-xl transition"
      >
        חזור לדף הראשי
      </Link>
    </div>
  );
}
