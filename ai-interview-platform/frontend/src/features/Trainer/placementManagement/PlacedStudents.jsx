import { useState } from "react";

export default function PlacedStudents({ placedStudents }) {
  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 10;

  const totalPages = Math.ceil(
    placedStudents.length / studentsPerPage
  );

  const startIndex = (currentPage - 1) * studentsPerPage;

  const currentStudents = placedStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
        

        {/* Total Count */}
        <div className="rounded-xl bg-green-50 px-4 py-2 text-center">
          <p className="text-xs font-medium text-green-600">
            Total Placed
          </p>

          <p className="text-lg font-bold text-green-700">
            {placedStudents.length}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">

          {/* Table Header */}
          <thead className="border-b border-gray-100 bg-gray-50/80">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                #
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Student
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Student ID
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Email
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Company
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Placed Date
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">

            {currentStudents.length > 0 ? (
              currentStudents.map((student, index) => (
                <tr
                  key={student.studentId}
                  className="transition-colors duration-150 hover:bg-green-50/40"
                >

                  {/* Number */}
                  <td className="px-6 py-4 text-gray-400">
                    {startIndex + index + 1}
                  </td>

                  {/* Student */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100 text-sm font-semibold text-green-700">
                        {student.name?.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p className="font-medium text-gray-800">
                          {student.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          {student.batchId}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Student ID */}
                  <td className="px-6 py-4">
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                      {student.studentId}
                    </span>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 text-gray-600">
                    {student.email}
                  </td>

                  {/* Company */}
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                      {student.company}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-gray-600">
                    {student.placedDate}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Placed
                    </span>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-16 text-center"
                >
                  <div className="flex flex-col items-center">

                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                      —
                    </div>

                    <p className="font-medium text-gray-600">
                      No placed students found
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Placed students from your batches will appear here.
                    </p>

                  </div>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {placedStudents.length > 0 && (
        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">

          {/* Showing Information */}
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-700">
              {startIndex + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium text-gray-700">
              {Math.min(
                startIndex + studentsPerPage,
                placedStudents.length
              )}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-700">
              {placedStudents.length}
            </span>{" "}
            students
          </p>

          {/* Pagination Buttons */}
          <div className="flex items-center gap-1">

            {/* Previous */}
            <button
              onClick={() =>
                handlePageChange(currentPage - 1)
              }
              disabled={currentPage === 1}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`h-9 min-w-9 rounded-lg px-3 text-sm font-medium transition ${
                  currentPage === page
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() =>
                handlePageChange(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>

          </div>
        </div>
      )}
    </div>
  );
}