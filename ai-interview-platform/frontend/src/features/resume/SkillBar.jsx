const skills = [
  { label: "Technical Depth", pct: 74, color: "#16a34a" },
  { label: "Communication", pct: 68, color: "#2563eb" },
  { label: "Problem Solving", pct: 80, color: "#7c3aed" },
  { label: "Confidence", pct: 55, color: "#ea580c" },
  { label: "Grammar", pct: 82, color: "#0891b2" },
];

export default function SkillBars() {
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
        <h2 className="text-sm font-semibold text-gray-800">Skill Performance</h2>
        <span className="text-xs text-gray-400">last 5 interviews</span>
      </div>

      <div className="space-y-3.5">
        {skills.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-600">{s.label}</span>
              <span className="text-xs font-semibold" style={{ color: s.color }}>{s.pct}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: "#f0fdf4" }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${s.pct}%`, background: s.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}