export default function InterviewHistoryCard({
  interview,
  selected,
  onClick,
}) {
  const percentage =
    interview.score?.percentage ?? 0;

  // ==========================================
  // SCORE COLOR
  // ==========================================

  const getScoreColor = (score) => {
    if (score >= 80) {
      return {
        stroke: "#16a34a",
        text: "text-green-600",
      };
    }

    if (score >= 60) {
      return {
        stroke: "#eab308",
        text: "text-yellow-600",
      };
    }

    return {
      stroke: "#ef4444",
      text: "text-red-600",
    };
  };

  const scoreColor =
    getScoreColor(percentage);

  // ==========================================
  // TYPE COLORS
  // ==========================================

  const typeStyles = {
    Technical:
      "bg-blue-50 text-blue-600 border-blue-100",

    Behavioral:
      "bg-purple-50 text-purple-600 border-purple-100",

    Coding:
      "bg-orange-50 text-orange-600 border-orange-100",
  };

  const typeClass =
    typeStyles[interview.type] ||
    "bg-gray-50 text-gray-600 border-gray-100";

  // ==========================================
  // DIFFICULTY COLORS
  // ==========================================

  const difficultyStyles = {
    Easy:
      "bg-green-50 text-green-600 border-green-100",

    Medium:
      "bg-yellow-50 text-yellow-600 border-yellow-100",

    Hard:
      "bg-red-50 text-red-600 border-red-100",

    Difficult:
      "bg-red-50 text-red-600 border-red-100",

    Advanced:
      "bg-purple-50 text-purple-600 border-purple-100",
  };

  const difficultyClass =
    difficultyStyles[
      interview.difficulty
    ] ||
    "bg-gray-50 text-gray-600 border-gray-100";

  // ==========================================
  // MODE COLORS
  // ==========================================

  const modeStyles = {
    "Text + Voice":
      "bg-cyan-50 text-cyan-600 border-cyan-100",

    Text:
      "bg-indigo-50 text-indigo-600 border-indigo-100",

    Voice:
      "bg-pink-50 text-pink-600 border-pink-100",

    "Monaco Editor":
      "bg-orange-50 text-orange-600 border-orange-100",
  };

  const modeClass =
    modeStyles[interview.mode] ||
    "bg-gray-50 text-gray-600 border-gray-100";

  // ==========================================
  // CIRCLE CALCULATION
  // ==========================================

  const radius = 30;

  const circumference =
    2 * Math.PI * radius;

  const strokeDashoffset =
    circumference -
    (percentage / 100) * circumference;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${
        selected
          ? "bg-green-50/60 border-green-300 shadow-sm"
          : "bg-white border-gray-100 hover:border-green-200 hover:shadow-sm"
      }`}
    >
      {/* ==========================================
          MAIN CARD CONTENT
      ========================================== */}

      <div className="flex items-center gap-5">

        {/* ========================================
            LEFT ICON
        ======================================== */}

        <div className="flex-shrink-0">

          <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">

            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m18 0h-2M5 15H3m18 0h-2M7 7h10v10H7z"
              />
            </svg>

          </div>

        </div>

        {/* ========================================
            MIDDLE CONTENT
        ======================================== */}

        <div className="flex-1 min-w-0">

          {/* ROLE + STATUS */}

          <div className="flex items-center gap-2">

           <div className="flex items-center gap-6">
  <h3 className="text-base font-bold text-gray-800 truncate">
    {interview.role}
  </h3>

  <span className="flex-shrink-0 text-[9px] font-semibold px-2 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
    Completed
  </span>
</div>

          </div>

          {/* TYPE / MODE / DIFFICULTY */}

          <div className="flex flex-wrap items-center gap-1.5 mt-2">

            {/* TYPE */}

            <span
              className={`text-[9px] font-semibold px-2 py-1 rounded-md border ${typeClass}`}
            >
              {interview.type}
            </span>

            {/* MODE */}

            <span
              className={`text-[9px] font-semibold px-2 py-1 rounded-md border ${modeClass}`}
            >
              {interview.mode}
            </span>

            {/* DIFFICULTY */}

            <span
              className={`text-[9px] font-semibold px-2 py-1 rounded-md border ${difficultyClass}`}
            >
              {interview.difficulty}
            </span>

          </div>

          {/* DATE / TIME / DURATION */}

          <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">

            {/* DATE */}

            <div className="flex items-center gap-1.5">

              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              {interview.scheduledDate}

            </div>

            {/* TIME */}

            <div className="flex items-center gap-1.5">

              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>

              {interview.scheduledTime}

            </div>

            {/* DURATION */}

            <div className="flex items-center gap-1.5">

              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7v5l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              {interview.duration} min

            </div>

          </div>

          {/* TOPICS */}

          <div className="flex flex-wrap gap-1.5 mt-3">

            <span className="text-[9px] text-gray-400 mr-1">
              Topics:
            </span>

            {interview.topics
              ?.slice(0, 4)
              .map((topic) => (
                <span
                  key={topic}
                  className="text-[9px] px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-gray-600"
                >
                  {topic}
                </span>
              ))}

            {interview.topics?.length > 4 && (
              <span className="text-[9px] px-2 py-1 text-gray-400">
                +
                {interview.topics.length - 4}
              </span>
            )}

          </div>

        </div>

        {/* ========================================
            SCORE
        ======================================== */}

        <div className="flex-shrink-0 flex items-center gap-4">

          {/* CIRCLE */}

          <div className="relative w-[76px] h-[76px]">

            <svg
              className="w-[76px] h-[76px] -rotate-90"
              viewBox="0 0 80 80"
            >

              {/* BACKGROUND */}

              <circle
                cx="40"
                cy="40"
                r={radius}
                fill="none"
                stroke="#f0fdf4"
                strokeWidth="6"
              />

              {/* SCORE RING */}

              <circle
                cx="40"
                cy="40"
                r={radius}
                fill="none"
                stroke={scoreColor.stroke}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={
                  strokeDashoffset
                }
              />

            </svg>

            {/* SCORE */}

            <div className="absolute inset-0 flex items-center justify-center">

              <span
                className={`text-base font-bold ${scoreColor.text}`}
              >
                {percentage}%
              </span>

            </div>

          </div>

          {/* MARKS */}

          <div className="w-[65px]">

            <p className="text-base font-bold text-green-600">
              {interview.score?.marksGained ?? 0}
              {" / "}
              {interview.score?.maxMarks ?? 0}
            </p>

            <p className="text-[10px] text-gray-400 mt-1">
              Marks Gained
            </p>

          </div>

        </div>

        {/* ========================================
            VIEW DETAILS
        ======================================== */}

        <div className="flex-shrink-0">

          <span
            className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold border transition ${
              selected
                ? "text-green-600 border-green-200 bg-green-50"
                : "text-gray-500 border-gray-200 hover:text-green-600 hover:border-green-200"
            }`}
          >
            View Details

            <span className="text-sm">
              →
            </span>

          </span>

        </div>

      </div>
    </button>
  );
}