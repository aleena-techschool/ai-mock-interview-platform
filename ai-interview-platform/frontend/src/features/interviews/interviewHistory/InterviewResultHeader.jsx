
import { useNavigate } from "react-router-dom";

export default function InterviewResultHeader({
  interview,
  activeTab,
  setActiveTab,
}) {
  const navigate = useNavigate();

  const marksGained = interview?.score?.marksGained ?? 0;
  const maxMarks = interview?.score?.maxMarks ?? 0;
  const percentage = interview?.score?.percentage ?? 0;

  const tabs = [
    "Overview",
    "Questions",
    // "Performance",
    "Feedback",
  ];

  return (
    <>
      {/* Back to History */}
      <button
        onClick={() => navigate("/history")}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 mb-4"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>

        Back to Interview History
      </button>

      {/* Interview Header  div with interview details*/}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
        <div className="flex items-center justify-between">

          {/* Left Side */}
          <div className="flex items-center gap-4">

            {/* Role Icon */}
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center">
              <svg
                className="w-9 h-9 text-green-600"
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

            {/* Interview Info */}
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {interview.role}
              </h1>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-gray-500">
                  {interview.type}
                </span>

                <span className="text-gray-300">•</span>

                <span className="text-xs text-gray-500">
                  {interview.mode}
                </span>

                <span className="text-gray-300">•</span>

                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-50 text-yellow-600">
                  {interview.difficulty}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                <span>
                  📅 {formatDate(interview.scheduledDate)}
                </span>

                <span>
                  🕐 {interview.scheduledTime}
                </span>

                <span>
                  ⏱ {interview.duration} min
                </span>
              </div>
            </div>
          </div>

          {/* Score */}
          <div className="flex items-center gap-5">

            <div className="relative w-24 h-24">
              <svg
                className="w-24 h-24 -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#22c55e"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  strokeDashoffset={
                    251.2 - (251.2 * percentage) / 100
                  }
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">
                  {percentage}%
                </span>
              </div>
            </div>

            <div>
              <p className="text-xl font-bold text-green-600">
                {marksGained} / {maxMarks}
              </p>

              <p className="text-xs text-gray-400">
                Marks Gained
              </p>

              <p className="text-xs font-semibold text-green-600 mt-2">
                {percentage >= 75
                  ? "Good Performance"
                  : "Needs Improvement"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs : overview,questions,feedback*/}
      <div className="bg-white rounded-t-2xl border border-gray-100 border-b-0">
        <div className="flex items-center gap-8 px-6">

          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-500"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            );
          })}

        </div>
      </div>
    </>
  );
}

/* Date Formatter */
function formatDate(date) {
  if (!date) return "-";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

