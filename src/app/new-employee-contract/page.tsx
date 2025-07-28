'use client';
import { useState } from 'react';

export default function BarcodeScanPage() {
  const [showIframe, setShowIframe] = useState(false);

  const url = "https://renuar-lp.pages.dev/A9f3Kz1qW8bT/index.htm";

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-glilot4">
      <h1 className="text-4xl font-bold mb-6">.</h1>
      {!showIframe ? (
        <>
          <p className="mb-8 text-gray-600">
            .<br />
             :
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setShowIframe(true)}
              //className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-lg"
              className="bg-green-200 hover:bg-green-300 text-green-900 font-bold py-3 px-8 rounded-xl shadow transition text-lg mb-6"

            >
              חוזה העסקה לעובד חדש 
            </button>

          </div>
        </>
      ) : (
        <div className="w-full max-w-4xl h-[70vh] mt-4">
          <iframe
            src={url}
            allow="camera"
            className="w-full h-full rounded-2xl border"
            style={{ background: "#fff" }}
            title="מדריך סריקת ברקוד"
          />
        </div>
      )}
    </div> 
  );
}
