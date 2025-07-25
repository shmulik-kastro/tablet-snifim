'use client';
import { useState } from 'react';

export default function BarcodeScanPage() {
  const [showIframe, setShowIframe] = useState(false);

  const url = "https://renuar-blox.pb-digital.co.il/%d7%94%d7%93%d7%a8%d7%9b%d7%94/";

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-glilot5">
      <h1 className="text-3xl font-bold mb-6">.</h1>
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
              className="bg-yellow-200 hover:bg-yellow-300 text-yellow-900 font-bold py-3 px-8 rounded-xl shadow transition text-lg mb-6"


            >
              סרוק ברקוד פריט לקבלת מלאי בחנות
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
