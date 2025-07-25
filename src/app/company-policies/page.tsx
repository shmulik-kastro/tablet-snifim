'use client';

const policies = [
  { label: 'חוברת בטיחות לסניפים', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638887788041277665.pdf', color: 'bg-pink-200 hover:bg-pink-300 text-pink-900' },
  { label: 'הקוד האתי', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637170421472956625.pdf', color: 'bg-blue-200 hover:bg-blue-300 text-blue-900' },
  { label: 'מניעת הטרדה מינית', url: 'https://renuar.b-salesbook.com/infocenter/index/3', color: 'bg-green-200 hover:bg-green-300 text-green-900' },
  { label: 'חוברת בטיחות', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F637170423593303574.pdf', color: 'bg-yellow-200 hover:bg-yellow-300 text-yellow-900' },
  // { label: 'פתיחת תעודות חוסר/עודף לאריזות שלמות', url: 'https://renuar.b-salesbook.com/ImageView/RenderLocalImage?imageUrl=%2FInfoCenter%2F638548418456129505.pdf', color: 'bg-purple-200 hover:bg-purple-300 text-purple-900' },
  { label: 'תדריך נגישות', url: 'https://renuar.b-salesbook.com/infocenter/index/3', color: 'bg-teal-200 hover:bg-teal-300 text-teal-900' },
];

export default function CompanyPoliciesPage() {
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
