import { useNavigate } from "react-router-dom";
import { difficultyConfig, modeIcons } from "../../mock/interviewData";

function ModeIcon({ mode }) {
  const d = modeIcons[mode] || modeIcons["Text"];
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function TypeBadge({ type }) {
  const map = {
    Technical:       { color: "#2563eb", bg: "#dbeafe" },
    Behavioral:      { color: "#0891b2", bg: "#cffafe" },
    "System Design": { color: "#7c3aed", bg: "#ede9fe" },
    Coding:          { color: "#ea580c", bg: "#ffedd5" },
  };
  const style = map[type] || map.Technical;
  return (
    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg"
      style={{ color: style.color, background: style.bg }}>
      {type}
    </span>
  );
}

export default function InterviewCard({ interview }) {
  const navigate = useNavigate();
  const diff = difficultyConfig[interview.difficulty];
  const isScheduled = interview.status === "scheduled";

  const dateObj = new Date(interview.scheduledDate);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
  const dateLabel = isSameDay(dateObj, today)
    ? "Today"
    : isSameDay(dateObj, tomorrow)
    ? "Tomorrow"
    : dateObj.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });

  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      style={{
        background: isScheduled
          ? "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)"
          : "rgba(255,255,255,0.9)",
        border: isScheduled
          ? "1.5px solid rgba(22,163,74,0.25)"
          : "1px solid rgba(22,163,74,0.1)",
        boxShadow: isScheduled
          ? "0 4px 20px rgba(22,163,74,0.1)"
          : "0 2px 12px rgba(22,163,74,0.06)",
      }}
    >
      {/* Top row: role + difficulty badge */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-bold text-gray-900 truncate">{interview.role}</h3>
            {isScheduled && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "#dcfce7", color: "#15803d" }}>
                ● Scheduled
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <TypeBadge type={interview.type} />
          </div>
        </div>
        {/* Difficulty — trainer set */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center rounded-xl px-3 py-1.5 min-w-[70px]"
          style={{ background: diff.bg, border: `1.5px solid ${diff.border}` }}>
          <span className="text-[9px] font-medium text-gray-500 uppercase tracking-wide leading-none">Level</span>
          <span className="text-xs font-bold leading-tight mt-0.5" style={{ color: diff.color }}>{diff.label}</span>
        </div>
      </div>

      {/* Trainer row — only on scheduled */}
      {isScheduled && interview.assignedBy && (
        <div className="flex items-center gap-2 -mt-1">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
            style={{ background: interview.trainerColor || "#16a34a" }}
          >
            {interview.trainerAvatar}
          </div>
          <div>
            <p className="text-[11px] text-gray-400 leading-none">Scheduled by</p>
            <p className="text-xs font-semibold text-gray-700">{interview.assignedBy}</p>
          </div>
        </div>
      )}

      {/* Meta: date, time, duration, mode */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">{dateLabel}</span>
          <span className="text-gray-400">· {interview.scheduledTime}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {interview.duration} min
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <ModeIcon mode={interview.mode} />
          {interview.mode}
        </div>
      </div>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5">
        {interview.topics.map((t) => (
          <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-lg"
            style={{ background: "#f0fdf4", color: "#166534", border: "1px solid rgba(22,163,74,0.15)" }}>
            {t}
          </span>
        ))}
      </div>

      {/* Trainer note */}
      {isScheduled && interview.trainerNote && (
        <div className="flex gap-2 p-2.5 rounded-xl"
          style={{ background: "#fffbeb", border: "1px solid rgba(245,158,11,0.2)" }}>
          <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[11px] text-amber-700 leading-relaxed">{interview.trainerNote}</p>
        </div>
      )}

      {/* Action */}
      {isScheduled ? (
        <button
          onClick={() => navigate(`/interviews/${interview.id}/prepare`)}
          className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Start Interview
        </button>
      ) : (
        <button disabled
          className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-not-allowed"
          style={{ background: "#f1f5f9", color: "#94a3b8", border: "1px dashed #cbd5e1" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Awaiting Trainer Approval
        </button>
      )}
    </div>
  );
}