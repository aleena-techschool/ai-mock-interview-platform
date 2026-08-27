const interviews = [
  {
    role: "Flutter Developer",
    date: "Yesterday · 35 min",
    score: 78,
    tag: "Good",
    tagColor: "#16a34a",
    tagBg: "#dcfce7",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    role: "MERN Stack",
    date: "2 days ago · 42 min",
    score: 65,
    tag: "Average",
    tagColor: "#b45309",
    tagBg: "#fef3c7",
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  },
  {
    role: "HR Round",
    date: "4 days ago · 28 min",
    score: 84,
    tag: "Excellent",
    tagColor: "#7c3aed",
    tagBg: "#ede9fe",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

function ScoreCircle({ score }) {
  const color = score >= 80 ? "#16a34a" : score >= 65 ? "#ea580c" : "#dc2626";
  const r = 16;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r={r} fill="none" stroke="#f0fdf4" strokeWidth="3" />
      <circle
        cx="20" cy="20" r={r} fill="none"
        stroke={color} strokeWidth="3"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 20 20)"
      />
      <text x="20" y="24" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>{score}%</text>
    </svg>
  );
}

export default function RecentInterviews() {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(22,163,74,0.1)",
        boxShadow: "0 2px 12px rgba(22,163,74,0.06)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-800">Recent Interviews</h2>
        <button className="text-xs text-green-600 font-medium hover:text-green-800 transition-colors">
          View all →
        </button>
      </div>

      <div className="space-y-3">
        {interviews.map((iv) => (
          <div
            key={iv.role}
            className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all hover:scale-[1.01]"
            style={{ background: "#f8fffe", border: "1px solid rgba(22,163,74,0.08)" }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: iv.iconBg }}
            >
              <svg className="w-4 h-4" fill="none" stroke={iv.iconColor} strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={iv.icon} />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">{iv.role}</p>
              <p className="text-xs text-gray-400">{iv.date}</p>
            </div>

            <ScoreCircle score={iv.score} />

            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-lg flex-shrink-0"
              style={{ color: iv.tagColor, background: iv.tagBg }}
            >
              {iv.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}