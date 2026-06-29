const topics = [
  { label: "Redux Async Thunk", count: 3, color: "#dc2626", bg: "#fee2e2" },
  { label: "Stream in Dart", count: 2, color: "#ea580c", bg: "#ffedd5" },
  { label: "Firebase Auth", count: 2, color: "#d97706", bg: "#fef3c7" },
  { label: "BLoC Pattern", count: 1, color: "#7c3aed", bg: "#ede9fe" },
  { label: "System Design", count: 1, color: "#2563eb", bg: "#dbeafe" },
  { label: "REST vs GraphQL", count: 1, color: "#0891b2", bg: "#cffafe" },
];

export default function WeakTopics() {
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
        <h2 className="text-sm font-semibold text-gray-800">Weak Topics</h2>
        <span className="text-xs text-gray-400">AI flagged</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {topics.map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all hover:scale-105"
            style={{ background: t.bg, color: t.color }}
          >
            <span>{t.label}</span>
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
              style={{ background: t.color }}
            >
              {t.count}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-3">
        These topics appeared in your wrong/incomplete answers. Tap to start a targeted practice session.
      </p>
    </div>
  );
}