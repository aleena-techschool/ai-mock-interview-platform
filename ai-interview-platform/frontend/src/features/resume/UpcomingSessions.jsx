import { useNavigate } from "react-router-dom";

const sessions = [
  {
    role: "Python Developer",
    time: "Today, 4:00 PM",
    mode: "Text + Voice",
    dot: "#16a34a",
    tag: "Today",
    tagColor: "#16a34a",
    tagBg: "#dcfce7",
  },
  {
    role: "System Design Round",
    time: "Tomorrow, 10:00 AM",
    mode: "Text",
    dot: "#2563eb",
    tag: "Tomorrow",
    tagColor: "#1d4ed8",
    tagBg: "#dbeafe",
  },
  {
    role: "Coding Round · JS",
    time: "Thu, 3:00 PM",
    mode: "Monaco Editor",
    dot: "#ea580c",
    tag: "Thu",
    tagColor: "#b45309",
    tagBg: "#fef3c7",
  },
];

export default function UpcomingSessions() {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-2xl p-5 flex flex-col"
      style={{
        background: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(22,163,74,0.1)",
        boxShadow: "0 2px 12px rgba(22,163,74,0.06)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-800">Upcoming Sessions</h2>
        <span className="text-xs text-gray-400">{sessions.length} scheduled</span>
      </div>

      <div className="space-y-3 flex-1">
        {sessions.map((s) => (
          <div
            key={s.role}
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{ border: "1px solid rgba(22,163,74,0.08)", background: "#f8fffe" }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ background: s.dot, boxShadow: `0 0 6px ${s.dot}60` }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">{s.role}</p>
              <p className="text-xs text-gray-400">{s.time} · {s.mode}</p>
            </div>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-lg flex-shrink-0"
              style={{ color: s.tagColor, background: s.tagBg }}
            >
              {s.tag}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate("/start-interview")}
        className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
        style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
      >
        + Start new interview
      </button>
    </div>
  );
}