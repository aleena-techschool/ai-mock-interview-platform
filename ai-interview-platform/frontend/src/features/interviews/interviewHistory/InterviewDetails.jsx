
export default function InterviewDetails({ interview }) {
  return (
    <div>
      <div className="border border-gray-100 rounded-xl p-5">

        <h2 className="text-sm font-bold text-gray-800 mb-5">
          Details
        </h2>

        <DetailRow
          label="Interview Type"
          value={interview.type}
        />

        <DetailRow
          label="Mode"
          value={interview.mode}
        />

        <DetailRow
          label="Difficulty"
          value={interview.difficulty}
        />

        <DetailRow
          label="Duration"
          value={`${interview.duration} min`}
        />

        {/* Status */}
        <div className="flex justify-between items-center py-3 border-b border-gray-50">

          <span className="text-xs text-gray-400">
            Status
          </span>

          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
            Completed
          </span>

        </div>

        <DetailRow
          label="Completed At"
          value={interview.completedAt}
        />

        <DetailRow
          label="Assigned By"
          value={interview.assignedBy}
        />

      </div>
    </div>
  );
}


/* Detail Row */
function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-3 border-b border-gray-50">

      <span className="text-xs text-gray-400">
        {label}
      </span>

      <span className="text-xs font-semibold text-gray-700 text-right">
        {value ?? "-"}
      </span>

    </div>
  );
}

