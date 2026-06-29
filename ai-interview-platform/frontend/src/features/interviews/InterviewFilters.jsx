const filters = ["All", "Scheduled", "Upcoming"];
const difficulties = ["All Levels", "Easy", "Medium", "Difficult", "Advanced"];

export default function InterviewFilters({ activeFilter, onFilter, activeDiff, onDiff, counts }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
      {/* Status tabs */}
      <div
        className="flex gap-1 p-1 rounded-xl"
        style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(22,163,74,0.12)" }}
      >
        {filters.map((f) => {
          const isActive = activeFilter === f;
          const count = f === "All" ? counts.all : f === "Scheduled" ? counts.scheduled : counts.upcoming;
          return (
            <button
              key={f}
              onClick={() => onFilter(f)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={
                isActive
                  ? { background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "#fff", boxShadow: "0 2px 8px rgba(22,163,74,0.3)" }
                  : { color: "#6b7280" }
              }
            >
              {f}
              <span
                className="min-w-[18px] h-4 flex items-center justify-center rounded-full text-[10px] font-bold px-1"
                style={
                  isActive
                    ? { background: "rgba(255,255,255,0.25)", color: "#fff" }
                    : { background: "#f0fdf4", color: "#16a34a" }
                }
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Difficulty filter */}
      <div className="flex flex-wrap gap-1.5">
        {difficulties.map((d) => {
          const isActive = activeDiff === d;
          const colorMap = {
            Easy:      { color: "#16a34a", bg: "#dcfce7" },
            Medium:    { color: "#d97706", bg: "#fef3c7" },
            Difficult: { color: "#dc2626", bg: "#fee2e2" },
            Advanced:  { color: "#7c3aed", bg: "#ede9fe" },
          };
          const style = colorMap[d];
          return (
            <button
              key={d}
              onClick={() => onDiff(d)}
              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all hover:scale-105"
              style={
                isActive && style
                  ? { background: style.bg, color: style.color, border: `1.5px solid ${style.color}40` }
                  : isActive
                  ? { background: "#1e293b", color: "#fff" }
                  : { background: "rgba(255,255,255,0.7)", color: "#6b7280", border: "1px solid rgba(22,163,74,0.12)" }
              }
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}