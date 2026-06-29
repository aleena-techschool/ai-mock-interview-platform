const breakdown = [
  { label: "Technical", score: 74, color: "#16a34a" },
  { label: "Communication", score: 68, color: "#2563eb" },
  { label: "Confidence", score: 55, color: "#ea580c" },
  { label: "Problem Solving", score: 80, color: "#7c3aed" },
];

const OVERALL = 72;
const R = 52;
const CIRC = 2 * Math.PI * R;
const DASH = (OVERALL / 100) * CIRC;

export default function OverallScoreCard() {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(22,163,74,0.1)",
        boxShadow: "0 2px 12px rgba(22,163,74,0.06)",
      }}
    >
      <h2 className="text-sm font-semibold text-gray-800 mb-4">Overall Score</h2>

      {/* Ring */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <svg width="120" height="120" viewBox="0 0 120 120">
            {/* Track */}
            <circle cx="60" cy="60" r={R} fill="none" stroke="#dcfce7" strokeWidth="10" />
            {/* Progress */}
            <circle
              cx="60" cy="60" r={R}
              fill="none"
              stroke="url(#greenGrad)"
              strokeWidth="10"
              strokeDasharray={`${DASH} ${CIRC}`}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
            <defs>
              <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
            </defs>
            <text x="60" y="56" textAnchor="middle" fontSize="22" fontWeight="700" fill="#16a34a">{OVERALL}</text>
            <text x="60" y="70" textAnchor="middle" fontSize="10" fill="#9ca3af">/ 100</text>
          </svg>
        </div>
      </div>

      {/* Breakdown */}
      <div className="space-y-2">
        {breakdown.map((b) => (
          <div key={b.label} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: b.color }} />
            <span className="text-xs text-gray-500 flex-1">{b.label}</span>
            <div className="flex items-center gap-1.5">
              <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background: "#f0fdf4" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${b.score}%`, background: b.color }}
                />
              </div>
              <span className="text-xs font-semibold" style={{ color: b.color, minWidth: "28px" }}>
                {b.score}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}