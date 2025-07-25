'use client';

const policies = [
  { label: 'ביטול זיכוי', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637170408016517043.JPG', color: 'bg-pink-200 hover:bg-pink-300 text-pink-900' },
  { label: 'טעינת כרטיס מתנה', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638615764457758241.pdf', color: 'bg-blue-200 hover:bg-blue-300 text-blue-900' },
  { label: 'שימוש בקשקאש', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638683854489325107.pdf', color: 'bg-green-200 hover:bg-green-300 text-green-900' },
  { label: 'ביטול רכישת גיפטכארד', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637170414242631659.pdf', color: 'bg-yellow-200 hover:bg-yellow-300 text-yellow-900' },
  { label: 'דיווח נוכחות לפי מותג', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637170415386009709.pdf', color: 'bg-purple-200 hover:bg-purple-300 text-purple-900' },
  { label: 'מחיקת אמצעי תשלום', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637170442993034669.pdf', color: 'bg-teal-200 hover:bg-teal-300 text-teal-900' },
  { label: 'מה זה EMV', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637350947391014177.pdf', color: 'bg-orange-200 hover:bg-orange-300 text-orange-900' },
  { label: 'שימוש ב-Apple pay', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637573703313203281.pdf', color: 'bg-lime-200 hover:bg-lime-300 text-lime-900' },
  { label: 'פתיחת מחלקה משותפת', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637999797362355695.pdf', color: 'bg-rose-200 hover:bg-rose-300 text-rose-900' },
  { label: 'נוהל סטייליסטים', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638003194807401363.pdf', color: 'bg-sky-200 hover:bg-sky-300 text-sky-900' },
  { label: 'חישוב עמלות למוכרנים', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638106821379975010.pdf', color: 'bg-fuchsia-200 hover:bg-fuchsia-300 text-fuchsia-900' },
  { label: 'פתיחת תעודות חוסר/עודף לאריזות שלמות', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638548418456129505.pdf', color: 'bg-purple-200 hover:bg-purple-300 text-purple-900' },

];

export default function CashPoliciesPage() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-glilot2">
      {/* Overlay חום */}
      <div className="absolute inset-0 bg-brown bg-opacity-50"></div>
          {/* כפתור נהלי קופה */}
      <div className="flex justify-center mb-8">
        <div className="bg-white bg-opacity-80 rounded-xl px-8 py-3 shadow">
          <h1 className="text-6xl font-bold">
            <span className="text-black">נהלי</span> <span className="text-black">קופה</span>
          </h1>
        </div>
      </div>
        {/* התוכן הלבן עם כל הכפתורים */}
      <div className="relative z-10 bg-blue bg-opacity-90 rounded-2xl p-8 shadow-lg max-w-4xl w-full text-center">
        {/* <h1 className="text-3xl font-bold mb-8">    נהלי קופות          </h1> */ }
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">

        {policies.map((policy, idx) => (
          <a
            key={idx}
            href={policy.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold py-4 px-2 rounded-xl shadow transition text-lg flex items-center justify-center text-center ${policy.color}`}
            style={{
              border: "1px solid #ddd",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
            }}
          >
            {policy.label}
          </a>
        ))}
      </div>
      </div>
    </div>
  );
}