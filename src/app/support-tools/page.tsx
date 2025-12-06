'use client';

const tools = [
  { label: 'איתור נייד לפי עסקה', url: 'https://renuar.b-salesbook.com/Report/Index/343', color: 'bg-pink-200 hover:bg-pink-300 text-pink-900' },
  { label: 'איתור עסקה לפי נייד', url: 'https://renuar.b-salesbook.com/Report/Index/339', color: 'bg-blue-200 hover:bg-blue-300 text-blue-900' },
  { label: 'פריטים מטרידים בשער', url: 'https://renuar.b-salesbook.com/Report/Index/396', color: 'bg-green-200 hover:bg-green-300 text-green-900' },
  { label: 'מדרג טלפונים פיקטיביים', url: 'https://renuar.b-salesbook.com/Report/Index/315', color: 'bg-yellow-200 hover:bg-yellow-300 text-yellow-900' },
  { label: 'תמונות עדכון מבצעים בשבוע האחרון', url: 'https://renuar.b-salesbook.com/Report/Index/352', color: 'bg-purple-200 hover:bg-purple-300 text-purple-900' },
  { label: 'חבילות אינטרנט שלא נמסרו מעל 21 יום', url: 'https://renuar.b-salesbook.com/Report/Index/285', color: 'bg-teal-200 hover:bg-teal-300 text-teal-900' },
  { label: 'טופס פניות מחנויות', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdzksf3z44Xwsf1ZRxsKiCJrtjIl76_xQjP1v-enqSRQQ4EdA/viewform?pli=1', color: 'bg-indigo-200 hover:bg-indigo-300 text-indigo-900' },
];

export default function SupportToolsPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] w-full bg-glilot3">
      {/* Overlay לבן חצי שקוף */}
      <div className="absolute inset-0 bg-white bg-opacity-60 -z-10"></div>
      
      {/* כותרת */}
      <div className="flex justify-center mb-8 z-10">
        <div className="bg-white bg-opacity-80 rounded-xl px-8 py-3 shadow">
          <h1 className="text-6xl font-bold">
            <span className="text-black">כלי </span>
            <span className="text-black">תמיכה</span>
          </h1>
        </div>
      </div>
      
      {/* כפתורים */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 w-full max-w-5xl mx-auto z-10">
        {tools.map((tool: { label: string; url: string; color: string }, idx: number) => (
          <a
            key={idx}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-48 h-20 font-bold rounded-xl shadow transition text-lg flex items-center justify-center text-center cursor-pointer ${tool.color}`}
            style={{
              border: "1px solid #ddd",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
            }}
          >
            {tool.label}
          </a>
        ))}
      </div>

    </div>
  );
}
