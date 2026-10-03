import React from "react";
export default function InterviewTable({ data, onViewDetails }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-5 py-3 text-left font-medium text-gray-600">
                                Interview ID
                            </th>

                            <th className="px-5 py-3 text-left font-medium text-gray-600">
                                Role
                            </th>

                            <th className="px-5 py-3 text-left font-medium text-gray-600">
                                Type
                            </th>

                            <th className="px-5 py-3 text-left font-medium text-gray-600">
                                Mode
                            </th>

                            <th className="px-5 py-3 text-left font-medium text-gray-600">
                                Difficulty
                            </th>

                            <th className="px-5 py-3 text-left font-medium text-gray-600">
                                Scheduled
                            </th>

                            <th className="px-5 py-3 text-left font-medium text-gray-600">
                                Duration
                            </th>

                            <th className="px-5 py-3 text-left font-medium text-gray-600">
                                Score
                            </th>

                            <th className="px-5 py-3 text-left font-medium text-gray-600">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {data.length > 0 ? (
                            data.map((interview) => (
                                <tr
                                    key={interview.id}
                                    className="hover:bg-gray-50 transition"
                                >
                                    <td className="px-5 py-4 font-medium text-gray-800">
                                        {interview.id}
                                    </td>

                                    <td className="px-5 py-4 text-gray-700">
                                        {interview.role}
                                    </td>

                                    <td className="px-5 py-4">
                                        <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">
                                            {interview.type}
                                        </span>
                                    </td>

                                    <td className="px-5 py-4 text-gray-600">
                                        {interview.mode}
                                    </td>

                                    <td className="px-5 py-4 text-gray-600">
                                        {interview.difficulty}
                                    </td>

                                    <td className="px-5 py-4 text-gray-600">
                                        <div>
                                            <p>{interview.scheduledDate}</p>
                                            <p className="text-xs text-gray-400">
                                                {interview.scheduledTime}
                                            </p>
                                        </div>
                                    </td>

                                    <td className="px-5 py-4 text-gray-600">
                                        {interview.duration} min
                                    </td>

                                    <td className="px-5 py-4">
                                        <div>
                                            <span
                                                className={`font-semibold ${
                                                    interview.score >= 70
                                                        ? "text-green-600"
                                                        : interview.score >= 40
                                                        ? "text-yellow-600"
                                                        : "text-red-600"
                                                }`}
                                            >
                                                {interview.score}%
                                            </span>

                                            <p className="text-xs text-gray-400">
                                                {interview.marksGained}/
                                                {interview.maxMarks}
                                            </p>
                                        </div>
                                    </td>

                                    <td className="px-5 py-4">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onViewDetails?.(interview)
                                            }
                                            className="px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="9"
                                    className="px-5 py-10 text-center text-gray-400"
                                >
                                    No interview records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
