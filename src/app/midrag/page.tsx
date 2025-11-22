'use client';

export default function MidragPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] w-full bg-glilot3">
      {/* Overlay לבן חצי שקוף */}
      <div className="absolute inset-0 bg-white bg-opacity-60 -z-10"></div>

      {/* כותרת */}
      <div className="flex justify-center mb-8 z-10">
        <div className="bg-white bg-opacity-80 rounded-xl px-8 py-3 shadow">
          <h1 className="text-5xl font-bold text-black">מדרג</h1>
        </div>
      </div>

      {/* כפתור דוחות מדרג ממורכז */}
      <div className="flex justify-center z-10">
        <a
          href="https://renuar.b-salesbook.com/default/index/25"
          target="_blank"
          rel="noopener noreferrer"
          className="w-48 h-20 font-bold rounded-xl shadow transition text-lg flex items-center justify-center text-center cursor-pointer bg-purple-200 hover:bg-purple-300 text-purple-900"
          style={{
            border: '1px solid #ddd',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          }}
        >
          דוחות מדרג
        </a>
      </div>
    </div>
  );
}
