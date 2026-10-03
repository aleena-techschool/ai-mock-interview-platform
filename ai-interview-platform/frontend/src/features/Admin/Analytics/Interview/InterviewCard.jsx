import { AnalyticsData } from "../AnalyticsData";
import { interviewsData } from "../../../../mock/interviewData";

export default function InterviewSummaryCards() {

  const summary = AnalyticsData.getMonthlyInterviewAnalytics(interviewsData);

  const total = summary.totalAssigned;

  const completedPercentage = total
    ? ((summary.completed / total) * 100).toFixed(1)
    : 0;

  const incompletePercentage = total
    ? ((summary.incomplete / total) * 100).toFixed(1)
    : 0;

  const pendingPercentage = total
    ? ((summary.pending / total) * 100).toFixed(1)
    : 0;

  return (
    <div className="grid grid-cols-4 gap-4 px-10 pt-5">

      {/* Total Assigned */}
      <div className="bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500">
          Total Assigned
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-1">
          {summary.totalAssigned}
        </h2>
      </div>


      {/* Completed */}
      <div className="bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">

          <p className="text-sm text-gray-500">
            Completed
          </p>

          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
            {completedPercentage}%
          </span>

        </div>

        <h2 className="text-2xl font-bold text-green-600 mt-1">
          {summary.completed}
        </h2>
      </div>


      {/* Incomplete */}
      <div className="bg-white w-full rounded-xl px-5 py-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">

          <p className="text-sm text-gray-500">
            Incomplete
          </p>

          <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded-full">
            {incompletePercentage}%
          </span>

        </div>

        <h2 className="text-2xl font-bold text-red-500 mt-1">
          {summary.incomplete}
        </h2>
      </div>


      {/* Pending */}
      <div className="bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">

          <p className="text-sm text-gray-500">
            Pending
          </p>

          <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
            {pendingPercentage}%
          </span>

        </div>

        <h2 className="text-2xl font-bold text-orange-500 mt-1">
          {summary.pending}
        </h2>
      </div>

    </div>
  );
}