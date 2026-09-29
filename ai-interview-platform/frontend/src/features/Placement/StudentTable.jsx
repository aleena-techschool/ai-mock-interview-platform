import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyUsers } from "../../mock/authData"
import PlacementForm from "./PlacementForm";

export default function StudentTable({ selectedBatchId }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [showPlacementForm, setShowPlacementForm] =
    useState(false);

  const [selectedStudent, setSelectedStudent] =
    useState(null);

  const studentsPerPage = 5;

  const students = useMemo(() => {
    return dummyUsers
      .filter(
        (student) =>
          String(student.batchId).trim() ===
          String(selectedBatchId).trim()
      )
      .sort((a, b) => {
        if (a.placed && !b.placed) return -1;
        if (!a.placed && b.placed) return 1;

        return 0;
      });
  }, [selectedBatchId]);

  const filteredStudents = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    if (!searchValue) return students;

    return students.filter((student) => {
      return (
        student.name?.toLowerCase().includes(searchValue) ||
        student.studentId?.toLowerCase().includes(searchValue) ||
        student.email?.toLowerCase().includes(searchValue) ||
        student.company?.toLowerCase().includes(searchValue)
      );
    });
  }, [students, search]);

  const placedCount = filteredStudents.filter(
    (student) => student.placed
  ).length;

  const notPlacedCount =
    filteredStudents.length - placedCount;

  const totalPages = Math.ceil(
    filteredStudents.length / studentsPerPage
  );

  const startIndex = (currentPage - 1) * studentsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  const handleViewStudent = (studentId) => {
    navigate(`/placement/student/${studentId}`);
  };

  const handleAddPlacement = (student) => {
    setSelectedStudent(student);
    setShowPlacementForm(true);
  };

  const handleClosePlacementForm = () => {
    setShowPlacementForm(false);
    setSelectedStudent(null);
  };

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-5">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Placement Management
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage student placement information
            </p>
          </div>

          <span className="rounded-lg bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
            {filteredStudents.length} Students
          </span>

        </div>

        {/* Search */}
        <div className="mt-4">

          <input
            type="text"
            placeholder="Search student, ID, email or company..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full max-w-md rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />

        </div>

        {/* Summary */}
        <div className="mt-5 flex gap-3">

          <div className="rounded-lg bg-green-50 px-4 py-2.5">
            <p className="text-xs text-gray-500">
              Placed
            </p>

            <p className="font-semibold text-green-700">
              {placedCount}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 px-4 py-2.5">
            <p className="text-xs text-gray-500">
              Not Placed
            </p>

            <p className="font-semibold text-gray-700">
              {notPlacedCount}
            </p>
          </div>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-left text-sm">

          <thead className="bg-gray-50 text-xs uppercase text-gray-500">

            <tr>
              <th className="px-6 py-3.5">Student</th>
              <th className="px-6 py-3.5">Student ID</th>
              <th className="px-6 py-3.5">Email</th>
              <th className="px-6 py-3.5">Batch</th>
              <th className="px-6 py-3.5">
                Add Placement
              </th>
              <th className="px-6 py-3.5">
                Placement Status
              </th>
              <th className="px-6 py-3.5 text-right">
                Action
              </th>
            </tr>

          </thead>

          <tbody className="divide-y divide-gray-100">

            {currentStudents.length > 0 ? (
              currentStudents.map((student) => {

                const isPlaced = student.placed === true;

                return (
                  <tr
                    key={student.id}
                    className="transition hover:bg-gray-50"
                  >

                    {/* Student */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                          {student.name?.charAt(0)}
                        </div>

                        <span className="font-medium text-gray-800">
                          {student.name}
                        </span>

                      </div>

                    </td>

                    {/* ID */}
                    <td className="px-6 py-4 text-gray-600">
                      {student.studentId}
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4 text-gray-600">
                      {student.email}
                    </td>

                    {/* Batch */}
                    <td className="px-6 py-4 text-gray-600">
                      {student.batchId}
                    </td>

                    {/* Add Placement */}
                    <td className="px-6 py-4">

                      {isPlaced ? (
                        <span className="text-xs text-gray-400">
                          Added
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            handleAddPlacement(student)
                          }
                          className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-green-700"
                        >
                          Add Placement
                        </button>
                      )}

                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">

                      <div className="flex flex-col gap-1">

                        <span
                          className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${
                            isPlaced
                              ? "bg-green-50 text-green-700"
                              : "bg-yellow-50 text-yellow-700"
                          }`}
                        >
                          {isPlaced
                            ? "Placed"
                            : "Not Placed"}
                        </span>

                        {isPlaced && student.company && (
                          <span className="text-xs text-gray-500">
                            {student.company}
                          </span>
                        )}

                      </div>

                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 text-right">

                      <button
                        type="button"
                        onClick={() =>
                          handleViewStudent(
                            student.studentId
                          )
                        }
                        className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
                      >
                        View
                      </button>

                    </td>

                  </tr>
                );
              })
            ) : (
              <tr>

                <td
                  colSpan="7"
                  className="px-6 py-12 text-center text-gray-500"
                >
                  No students found.
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* Pagination */}
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
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

          </div>

        </div>
      )}

      {/* Placement Modal */}
      {showPlacementForm && selectedStudent && (
        <PlacementForm
          student={selectedStudent}
          onClose={handleClosePlacementForm}
        />
      )}

    </section>
  );
}