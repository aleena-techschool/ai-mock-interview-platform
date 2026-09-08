import { useEffect, useMemo, useState } from "react";
import { dummyUsers } from "../../../mock/authData";

export default function StudentTable({ selectedBatchId }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const studentsPerPage = 5;
  const searchValue = search.toLowerCase().trim();

  // Students belonging to selected batch
  const batchStudents = useMemo(
    () =>
      dummyUsers.filter(
        (student) =>
          String(student.batchId).trim() === String(selectedBatchId).trim()
      ),
    [selectedBatchId]
  );

  // Search inside selected batch
  const filteredStudents = useMemo(() => {
    if (!searchValue) return batchStudents;

    return batchStudents.filter((student) => {
      const name = student.name?.toLowerCase() || "";
      const studentId = student.studentId?.toLowerCase() || "";
      const email = student.email?.toLowerCase() || "";

      return (
        name.includes(searchValue) ||
        studentId.includes(searchValue) ||
        email.includes(searchValue)
      );
    });
  }, [batchStudents, searchValue]);

  // Reset pagination when batch or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBatchId, search]);

  const totalPages = Math.ceil(
    filteredStudents.length / studentsPerPage
  );

  const startIndex = (currentPage - 1) * studentsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  if (!selectedBatchId) {
    return (
      <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-10">
        <div className="text-center">
          <h3 className="text-base font-semibold text-gray-800">
            Select a batch
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Select a batch above to view its students.
          </p>
        </div>
      </section>
    );
  }

  const noSearchResult =
    searchValue && filteredStudents.length === 0;

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between gap-4">

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Students
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Students enrolled in{" "}
              <span className="font-medium text-gray-700">
                {selectedBatchId}
              </span>
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="
                  m21 21-4.35-4.35
                  m1.35-5.65
                  a7 7 0 1 1-14 0
                  7 7 0 0 1 14 0Z
                "
              />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search students..."
              className="
                w-full h-10 pl-9 pr-4 rounded-lg
                border border-gray-200 bg-gray-50
                text-sm text-gray-700 placeholder:text-gray-400
                outline-none transition-all
                focus:bg-white focus:border-emerald-400
                focus:ring-2 focus:ring-emerald-50
              "
            />
          </div>

        </div>
      </div>

      {/* No Search Result */}
      {noSearchResult ? (
        <div className="px-6 py-16 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <h3 className="text-base font-semibold text-gray-800">
            No student found
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            No student with{" "}
            <span className="font-medium text-gray-700">
              "{search}"
            </span>{" "}
            exists in this batch.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Try another student name, ID, or email.
          </p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">

              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3.5 font-semibold text-gray-600">
                    Student
                  </th>

                  <th className="px-6 py-3.5 font-semibold text-gray-600">
                    Student ID
                  </th>

                  <th className="px-6 py-3.5 font-semibold text-gray-600">
                    Email
                  </th>

                  <th className="px-6 py-3.5 font-semibold text-gray-600">
                    Batch
                  </th>

                  <th className="px-6 py-3.5 font-semibold text-gray-600 text-right">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {currentStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                          {student.name?.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="font-medium text-gray-900">
                            {student.name}
                          </p>

                          <p className="text-xs text-gray-400 mt-0.5">
                            Student
                          </p>
                        </div>

                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {student.studentId}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {student.email}
                    </td>

                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium">
                        {student.batchId}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">

              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-medium text-gray-700">
                  {startIndex + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium text-gray-700">
                  {Math.min(
                    startIndex + studentsPerPage,
                    filteredStudents.length
                  )}
                </span>{" "}
                of{" "}
                <span className="font-medium text-gray-700">
                  {filteredStudents.length}
                </span>
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => page - 1)
                  }
                  className="px-3 py-1.5 text-sm border border-gray-200 rounded-md disabled:opacity-40 hover:bg-gray-50"
                >
                  Previous
                </button>

                <span className="px-3 py-1.5 text-sm text-gray-600">
                  {currentPage} / {totalPages}
                </span>

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) => page + 1)
                  }
                  className="px-3 py-1.5 text-sm border border-gray-200 rounded-md disabled:opacity-40 hover:bg-gray-50"
                >
                  Next
                </button>
              </div>

            </div>
          )}
        </>
      )}

    </section>
  );
}

