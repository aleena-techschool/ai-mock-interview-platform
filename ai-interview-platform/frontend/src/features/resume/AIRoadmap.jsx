const steps = [
  {
    week: "Week 1",
    task: "Master Redux Toolkit & Async Thunk",
    done: false,
    color: "#16a34a",
    bg: "#dcfce7",
  },
  {
    week: "Week 2",
    task: "Deep dive into Dart Streams & BLoC",
    done: false,
    color: "#2563eb",
    bg: "#dbeafe",
  },
  {
    week: "Week 3",
    task: "Firebase Auth flows & security rules",
    done: false,
    color: "#7c3aed",
    bg: "#ede9fe",
  },
  {
    week: "Week 4",
    task: "System Design fundamentals + mock",
    done: false,
    color: "#ea580c",
    bg: "#ffedd5",
  },
];

export default function AIRoadmap() {
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
        <div>
          <h2 className="text-sm font-semibold text-gray-800">AI Study Roadmap</h2>
          <p className="text-xs text-gray-400">Generated after your last interview</p>
        </div>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-lg"
          style={{ color: "#16a34a", background: "#dcfce7" }}
        >
          AI Generated
        </span>
      </div>

      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-3 items-start">
            {/* Timeline dot + line */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                style={{ background: s.color }}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 h-4 mt-1" style={{ background: `${s.color}30` }} />
              )}
            </div>
            <div
              className="flex-1 rounded-xl px-3 py-2.5 -mt-0.5"
              style={{ background: s.bg }}
            >
              <p className="text-xs font-semibold" style={{ color: s.color }}>{s.week}</p>
              <p className="text-xs text-gray-700 mt-0.5">{s.task}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}