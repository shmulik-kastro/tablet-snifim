'use client';

import { useState } from 'react';

const policies = [
  { label: 'חוברת בטיחות לסניפים', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638887788041277665.pdf', color: 'bg-pink-200 hover:bg-pink-300 text-pink-900' },
  { label: 'הקוד האתי', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637170421472956625.pdf', color: 'bg-blue-200 hover:bg-blue-300 text-blue-900' },
  { label: 'מניעת הטרדה מינית', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638900757766805046.pdf', color: 'bg-green-200 hover:bg-green-300 text-green-900' },
  { label: 'חוברת בטיחות', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637170423593303574.pdf', color: 'bg-yellow-200 hover:bg-yellow-300 text-yellow-900' },
  { label: 'תדריך נגישות', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638900759615567045.pdf', color: 'bg-teal-200 hover:bg-teal-300 text-teal-900' },
];

type SelectedPolicy = (typeof policies)[number];

export default function CompanyPoliciesPage() {
  const [selectedPolicy, setSelectedPolicy] = useState<SelectedPolicy | null>(null);

  if (selectedPolicy) {
    return (
      <div className="relative min-h-[80vh] flex flex-col items-center bg-glilot">
        <div className="relative z-10 w-full max-w-5xl px-4 py-6">
          <button
            type="button"
            onClick={() => setSelectedPolicy(null)}
            className="mb-4 bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-6 rounded-xl shadow transition"
          >
            ← חזרה לנהלי חברה
          </button>
          <div className="w-full h-[75vh]">
            <iframe
              src={selectedPolicy.url}
              className="w-full h-full rounded-2xl border bg-white shadow-lg"
              title={selectedPolicy.label}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-glilot">
      {/* Overlay כהה מעל הרקע */}
      <div className="absolute inset-0 bg-brown bg-opacity-0"></div>

      {/* התוכן הלבן עם כל הכפתורים */}
      <div className="relative z-10 bg-blue bg-opacity-90 rounded-2xl p-8 shadow-lg max-w-4xl w-full text-center">
      {/* נהלי חברה */}
      <div className="flex justify-center mb-8">
        <div className="bg-white bg-opacity-80 rounded-xl px-8 py-3 shadow">
          <h1 className="text-6xl font-bold">
            <span className="text-black">נהלי</span> <span className="text-black">חברה</span>
          </h1>
        </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {policies.map((policy, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedPolicy(policy)}
              className={`font-bold py-4 px-2 rounded-xl shadow transition text-lg flex items-center justify-center text-center ${policy.color}`}
              style={{
                border: "1px solid #ddd",
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
              }}
            >
              {policy.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
