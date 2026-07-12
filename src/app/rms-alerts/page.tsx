'use client';

import { useState } from 'react';

const RMS_OVERVIEW_URL = 'https://system.rmsnext.com/overview';

export default function RmsAlertsPage() {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-full min-h-[60vh] bg-glilot5">
      <div className="absolute inset-0 bg-white bg-opacity-60 -z-10" />

      <div className="flex justify-center mb-8 z-10">
        <div className="bg-white bg-opacity-80 rounded-xl px-8 py-3 shadow">
          <h1 className="text-4xl sm:text-5xl font-bold text-black">התראות RMS</h1>
        </div>
      </div>

      {!showIframe ? (
        <button
          type="button"
          onClick={() => setShowIframe(true)}
          className="z-10 bg-blue-200 hover:bg-blue-300 text-blue-900 font-bold py-4 px-8 rounded-xl shadow transition text-lg"
        >
          לחץ למעבר למערכת התראות RMS
        </button>
      ) : (
        <div className="z-10 flex flex-col w-full max-w-6xl px-2">
          <button
            type="button"
            onClick={() => setShowIframe(false)}
            className="self-start mb-3 text-lg font-semibold text-blue-800 hover:underline"
          >
            ← חזרה
          </button>
          <iframe
            src={RMS_OVERVIEW_URL}
            title="מערכת התראות RMS"
            className="w-full min-h-[75vh] rounded-lg border border-gray-300 bg-white shadow"
          />
        </div>
      )}
    </div>
  );
}
