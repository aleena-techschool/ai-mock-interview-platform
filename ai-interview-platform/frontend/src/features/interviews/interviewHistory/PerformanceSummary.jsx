
export default function PerformanceSummary({ interview }) {
  const marksGained = interview.score?.marksGained ?? 0;
  const maxMarks = interview.score?.maxMarks ?? 0;
  const percentage = interview.score?.percentage ?? 0;

  const questionsAsked =
    interview.summary?.questionsAsked ?? 0;

  const totalTime =
    interview.summary?.totalTime ?? 0;

  return (
    <div className="col-span-2">
      <div className="border border-gray-100 rounded-xl p-5">

        <h2 className="text-sm font-bold text-gray-800 mb-4">
          Overall Summary
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-3">

          <SummaryCard
            value={`${marksGained} / ${maxMarks}`}
            label="Marks Gained"
          />

          <SummaryCard
            value={`${percentage}%`}
            label="Overall Score"
          />

          <SummaryCard
            value={questionsAsked}
            label="Questions Asked"
          />

          <SummaryCard
            value={`${totalTime} min`}
            label="Total Time"
          />

        </div>

        {/* Score By Section */}
        <div className="mt-6">

          <h3 className="text-xs font-bold text-gray-700 mb-4">
            Score by Section
          </h3>

          {interview.sectionScores?.map((section, index) => (
            <ScoreBar
              key={index}
              name={section.name}
              score={section.marksGained}
              max={section.maxMarks}
              percentage={section.percentage}
            />
          ))}

        </div>
      </div>
    </div>
  );
}


/* Summary Card */
function SummaryCard({ value, label }) {
  return (
    <div className="bg-green-50 rounded-lg p-4">
      <p className="text-lg font-bold text-gray-800">
        {value}
      </p>

      <p className="text-[11px] text-gray-400 mt-1">
        {label}
      </p>
    </div>
  );
}


/* Score Bar */
function ScoreBar({
  name,
  score,
  max,
  percentage,
}) {
  return (
    <div className="mb-4">

      <div className="flex justify-between mb-1">
        <span className="text-xs font-semibold text-gray-700">
          {name}
        </span>

        <span className="text-xs text-gray-500">
          {score} / {max}
        </span>
      </div>

      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="flex justify-end mt-1">
        <span className="text-[10px] text-gray-400">
          {percentage}%
        </span>
      </div>

    </div>
  );
}

