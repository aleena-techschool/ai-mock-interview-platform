import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyUsers } from "../../mock/authData";
import { batchData } from "../../mock/student management/batch";

export default function StudentTable({
  trainerId,
  selectedBatchId,
}) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  const trainerStudents = useMemo(() => {
    const trainerBatchIds = batchData
      .filter((batch) => batch.trainerId === trainerId)
      .map((batch) => batch.batchId);

    return dummyUsers.filter((student) => {
      const belongsToTrainer =
        trainerBatchIds.includes(student.batchId);

      const belongsToSelectedBatch =
        !selectedBatchId ||
        String(student.batchId).trim() ===
          String(selectedBatchId).trim();

      return belongsToTrainer && belongsToSelectedBatch;
    });
  }, [trainerId, selectedBatchId]);

  const filteredStudents = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    if (!searchValue) return trainerStudents;

    return trainerStudents.filter((student) => {
      return (
        student.name?.toLowerCase().includes(searchValue) ||
        student.studentId?.toLowerCase().includes(searchValue) ||
        student.email?.toLowerCase().includes(searchValue)
      );
    });
  }, [trainerStudents, search]);

  const totalPages = Math.ceil(
    filteredStudents.length / studentsPerPage
  );

  const startIndex = (currentPage - 1) * studentsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  const handleViewStudent = (studentId) => {
    navigate(`/trainer/student/${studentId}`);
  };

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      <div className="border-b border-gray-200 px-6 py-5">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              My Students
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Students from your assigned batches
            </p>
          </div>

          <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            {filteredStudents.length} Students
          </span>

        </div>

        <div className="mt-4">

          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full max-w-sm rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left text-sm">

          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-3.5">Student</th>
              <th className="px-6 py-3.5">Student ID</th>
              <th className="px-6 py-3.5">Email</th>
              <th className="px-6 py-3.5">Batch</th>
              <th className="px-6 py-3.5">Placement</th>
              <th className="px-6 py-3.5 text-right">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {currentStudents.length > 0 ? (
              currentStudents.map((student) => (
                <tr
                  key={student.id}
                  className="transition hover:bg-gray-50"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                        {student.name?.charAt(0)}
                      </div>

                      <span className="font-medium text-gray-800">
                        {student.name}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {student.studentId}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {student.email}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {student.batchId}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        student.placed
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {student.placed
                        ? "Placed"
                        : "Not Placed"}
                    </span>

                  </td>

                  <td className="px-6 py-4 text-right">

                    <button
                      onClick={() =>
                        handleViewStudent(student.studentId)
                      }
                      className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50"
                    >
                      View
                    </button>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-12 text-center text-gray-500"
                >
                  No students found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">

          <p className="text-sm text-gray-500">
            Showing {startIndex + 1} to{" "}
            {Math.min(
              startIndex + studentsPerPage,
              filteredStudents.length
            )}{" "}
            of {filteredStudents.length}
          </p>

          <div className="flex gap-1">

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-8 min-w-8 rounded-lg px-2 text-sm ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

          </div>

        </div>
      )}

    </section>
  );
}