export default function ATSScoreSection() {
  const breakdown = [
    {
      name: "Keyword Match",
      score: 82,
      color: "bg-[#5146e5]",
    },
    {
      name: "Formatting",
      score: 91,
      color: "bg-[#10b981]",
    },
    {
      name: "Section Structure",
      score: 88,
      color: "bg-[#5146e5]",
    },
    {
      name: "Contact Info",
      score: 100,
      color: "bg-[#10b981]",
    },
    {
      name: "Experience Relevance",
      score: 78,
      color: "bg-[#f59e0b]",
    },
    {
      name: "Education",
      score: 85,
      color: "bg-[#5146e5]",
    },
  ];

  const issues = [
    {
      text: "No quantifiable metrics in experience section",
      level: "High",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      badgeBg: "bg-red-50",
      badgeColor: "text-red-500",
    },
    {
      text: "Missing action verbs in 2 bullet points",
      level: "Medium",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
      badgeBg: "bg-amber-50",
      badgeColor: "text-amber-500",
    },
    {
      text: "Skills section could include more industry keywords",
      level: "Low",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      badgeBg: "bg-blue-50",
      badgeColor: "text-blue-500",
    },
  ];

  return (
    <div className="space-y-6">

      {/* ================= DETAILED SCORE ================= */}
      <section className="bg-white rounded-2xl p-6">

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-[#151b2c]">
            Detailed Score Breakdown
          </h2>

          <span className="text-xs sm:text-sm text-gray-400">
            Target: 80%+ is industry standard
          </span>
        </div>

        <div>
          {breakdown.map((item, index) => (
            <div
              key={item.name}
              className={`flex items-center gap-4 py-3 ${
                index !== breakdown.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              {/* LABEL */}
              <div className="w-[145px] sm:w-[160px] flex-shrink-0">
                <span className="text-sm text-[#1c2333]">
                  {item.name}
                </span>
              </div>

              {/* PROGRESS */}
              <div className="flex-1">
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{
                      width: `${item.score}%`,
                    }}
                  />
                </div>
              </div>

              {/* SCORE */}
              <div className="w-10 text-right flex-shrink-0">
                <span className="text-sm font-bold text-[#151b2c]">
                  {item.score}%
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* ================= CRITICAL ISSUES ================= */}
      <section className="bg-white rounded-2xl p-6">

        <div className="flex items-center justify-between mb-5">

          <h2 className="text-lg font-bold text-[#151b2c]">
            Critical Issues to Fix
          </h2>

          <span className="px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-semibold">
            3 Issues Detected
          </span>

        </div>


        <div className="space-y-3">

          {issues.map((issue) => (
            <div
              key={issue.text}
              className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3.5"
            >

              {/* WARNING ICON */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${issue.iconBg}`}
              >
                <span
                  className={`text-sm font-bold ${issue.iconColor}`}
                >
                  !
                </span>
              </div>


              {/* ISSUE */}
              <p className="flex-1 text-sm text-[#1c2333]">
                {issue.text}
              </p>


              {/* LEVEL */}
              <span
                className={`px-3 py-1 rounded-md text-xs font-semibold ${issue.badgeBg} ${issue.badgeColor}`}
              >
                {issue.level}
              </span>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}