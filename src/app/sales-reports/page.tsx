'use client';

const reports = [
  { label: 'מדרג חנויות', url: 'https://renuar.b-salesbook.com/Report/Index/254', color: 'bg-pink-200 hover:bg-pink-300 text-pink-900' },
  { label: 'יחס המרה', url: 'https://renuar.b-salesbook.com/Report/Index/367', color: 'bg-blue-200 hover:bg-blue-300 text-blue-900' },
  { label: 'פריון', url: 'https://renuar.b-salesbook.com/Report/Index/378', color: 'bg-green-200 hover:bg-green-300 text-green-900' },
  { label: 'טופ 10 חנותי', url: 'https://renuar.b-salesbook.com/Report/Index/131', color: 'bg-yellow-200 hover:bg-yellow-300 text-yellow-900' },
  { label: 'טופ 10 רשתי', url: 'https://renuar.b-salesbook.com/Report/Index/133', color: 'bg-purple-200 hover:bg-purple-300 text-purple-900' },
  { label: 'השלמות אמצע יום', url: 'https://renuar.b-salesbook.com/Report/Index/216', color: 'bg-teal-200 hover:bg-teal-300 text-teal-900' },
  { label: 'סוגי פריטים חזקים', url: 'https://renuar.b-salesbook.com/Report/Index/207', color: 'bg-orange-200 hover:bg-orange-300 text-orange-900' },
  { label: 'מכתבי איסוף', url: 'https://renuar.b-salesbook.com/Report/Index/260', color: 'bg-lime-200 hover:bg-lime-300 text-lime-900' },
];

export default function SalesReportsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-glilot3">
      {/* Overlay חום */}
      <div className="absolute inset-0 bg-brown bg-opacity-50"></div>
      {/* <h1 className="text-2xl font-bold mb-8">דוחות מכירה</h1> */}
      <div className="flex justify-center mb-8">
        <div className="bg-white bg-opacity-80 rounded-xl px-8 py-3 shadow">
          <h1 className="text-6xl font-bold">
            <span className="text-black">דוחות</span> <span className="text-black">מכירה</span>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {reports.map((report, idx) => (
          <a
            key={idx}
            href={report.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold py-4 px-2 rounded-xl shadow transition text-lg flex items-center justify-center text-center ${report.color}`}
            style={{
              border: "1px solid #ddd",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
            }}
          >
            {report.label}
          </a>
        ))}
      </div>
    </div>
  );
}
