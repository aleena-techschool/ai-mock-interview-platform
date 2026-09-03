
import topPerformingStudents from "../../../mock/topPerformingStudents";

export default function TopPerformingStudents() {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-base font-semibold text-gray-800">
          Top Performing Students
        </h2>

        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-y border-gray-100 bg-gray-50">
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500">
                Sl. No
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500">
                Name
              </th>

              <th className="px-5 py-3 text-center text-xs font-semibold text-gray-500">
                Interviews
              </th>

              <th className="px-5 py-3 text-center text-xs font-semibold text-gray-500">
                Success Rate
              </th>

              <th className="px-5 py-3 text-center text-xs font-semibold text-gray-500">
                Avg. Score
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500">
                Batch / Course
              </th>
            </tr>
          </thead>

          <tbody>
            {topPerformingStudents.map((student, index) => (
              <tr
                key={student.id}
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                {/* Sl No */}
                <td className="px-5 py-4 text-sm text-gray-500">
                  {index + 1}
                </td>

                {/* Name */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <span className="text-xs font-semibold text-blue-600">
                        {student.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>

                    <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                      {student.name}
                    </span>
                  </div>
                </td>

                {/* Interviews */}
                <td className="px-5 py-4 text-center text-sm text-gray-600">
                  {student.interviews}
                </td>

                {/* Success Rate */}
                <td className="px-5 py-4 text-center">
                  <span className="text-sm font-semibold text-green-600">
                    {student.successRate}%
                  </span>
                </td>

                {/* Average Score */}
                <td className="px-5 py-4 text-center">
                  <span className="text-sm font-semibold text-gray-800">
                    {student.avgScore}%
                  </span>
                </td>

                {/* Batch / Course */}
                <td className="px-5 py-4">
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    {student.batchCourse}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

