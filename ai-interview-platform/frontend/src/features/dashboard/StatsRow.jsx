const stats = [
  {
    label: "Total Interviews",
    value: "24",
    sub: "↑ 3 this week",
    subColor: "#16a34a",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
  },
  {
    label: "Avg Score",
    value: "72%",
    sub: "↑ 6% vs last week",
    subColor: "#16a34a",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
  },
  {
    label: "Day Streak",
    value: "7 🔥",
    sub: "Keep it going!",
    subColor: "#ea580c",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    iconBg: "#ffedd5",
    iconColor: "#ea580c",
  },
  {
    label: "Resume Score",
    value: "68/100",
    sub: "ATS compatible",
    subColor: "#7c3aed",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
  },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl p-4 flex items-start gap-3"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(22,163,74,0.1)",
            boxShadow: "0 2px 12px rgba(22,163,74,0.06)",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: s.iconBg }}
          >
            <svg className="w-5 h-5" fill="none" stroke={s.iconColor} strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium">{s.label}</p>
            <p className="text-xl font-bold text-gray-900 mt-0.5 leading-tight">{s.value}</p>
            <p className="text-xs mt-0.5 font-medium" style={{ color: s.subColor }}>{s.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}