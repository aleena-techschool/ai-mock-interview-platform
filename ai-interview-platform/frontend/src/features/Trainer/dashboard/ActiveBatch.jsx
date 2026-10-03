import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  UsersIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { courseData } from "../../../mock/student management/course";
import { dummyUsers } from "../../../mock/authData";

export default function ActiveBatches({
  batches,
  onPlacementStatusChange,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate=useNavigate();
  const rowsPerPage = 4;

  // Get course name
  const getCourseName = (courseId) => {
    const course = courseData.find(
      (course) => course.courseId === courseId
    );

    return course?.name || "Unknown Course";
  };

  // Get students of a batch
  const getBatchStudents = (batchId) => {
    return dummyUsers.filter(
      (student) =>
        student.role === "student" &&
        student.batchId === batchId
    );
  };

  // Search batches by batch name or course
  const filteredBatches = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) {
      return batches;
    }

    return batches.filter((batch) => {
      const batchName = batch.batchId?.toLowerCase() || "";
      const courseName = getCourseName(batch.courseId).toLowerCase();

      return (
        batchName.includes(search) ||
        courseName.includes(search)
      );
    });
  }, [batches, searchTerm]);

  // Total pages
  const totalPages = Math.ceil(
    filteredBatches.length / rowsPerPage
  );

  // Current page data
  const paginatedBatches = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;

    return filteredBatches.slice(
      startIndex,
      startIndex + rowsPerPage
    );
  }, [filteredBatches, currentPage]);

  // Reset page when searching
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Previous page
  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Next page
  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages)
    );
  };

 const handleViewBatch = (batchId) => {
  navigate(`/trainer/batches/${batchId}`);
};

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-gray-100 px-5 py-4 md:flex-row md:items-center md:justify-between">

        {/* Title */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
             Batch Management
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Overview of your current batches
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search batch or course..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px] text-left">

          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                #
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Batch Name
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Course
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Students
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Placement Status
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Start Date
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                End Date
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Action
              </th>

            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">

            {paginatedBatches.map((batch, index) => {

              const students = getBatchStudents(
                batch.batchId
              );

              const courseName = getCourseName(
                batch.courseId
              );

              // Correct number when paginated
              const rowNumber =
                (currentPage - 1) * rowsPerPage +
                index +
                1;

              return (
                <tr
                  key={batch.batchId}
                  className="transition-colors hover:bg-gray-50"
                >

                  {/* Number */}
                  <td className="px-5 py-4 text-sm text-gray-400">
                    {String(rowNumber).padStart(2, "0")}
                  </td>

                  {/* Batch */}
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {batch.batchId}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        {batch.trainerId}
                      </p>
                    </div>
                  </td>

                  {/* Course */}
                  <td className="px-5 py-4">
                    <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
                      {courseName}
                    </span>
                  </td>

                  {/* Students */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                        <UsersIcon className="h-4 w-4 text-blue-600" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {students.length}
                        </p>

                        <p className="text-[11px] text-gray-400">
                          students
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Placement Toggle */}
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        onPlacementStatusChange(
                          batch.batchId
                        )
                      }
                      aria-label={`Change placement status for ${batch.batchId}`}
                      className={`relative h-7 w-12 rounded-full border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        batch.placementStatus
                          ? "border-emerald-600 bg-emerald-500 focus:ring-emerald-400"
                          : "border-gray-300 bg-gray-200 focus:ring-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-200 ${
                          batch.placementStatus
                            ? "right-1"
                            : "left-1"
                        }`}
                      />
                    </button>
                  </td>

                  {/* Start Date */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {batch.startDate}
                  </td>

                  {/* End Date */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {batch.endDate}
                  </td>

                  {/* Action */}
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      onClick={() => handleViewBatch(batch.batchId)}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      <EyeIcon className="h-4 w-4" />
                      View Details
                    </button>
                  </td>

                </tr>
              );
            })}

          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredBatches.length === 0 && (
        <div className="px-5 py-12 text-center">
          <p className="text-sm font-medium text-gray-500">
            {searchTerm
              ? "No batches found matching your search"
              : "No active batches found"}
          </p>
        </div>
      )}

      {/* Pagination */}
      {filteredBatches.length > 0 && (
        <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3">

          {/* Result count */}
          <p className="text-xs text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-700">
              {(currentPage - 1) * rowsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium text-gray-700">
              {Math.min(
                currentPage * rowsPerPage,
                filteredBatches.length
              )}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-700">
              {filteredBatches.length}
            </span>{" "}
            batches
          </p>

          {/* Pagination buttons */}
          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>

            <span className="min-w-[70px] text-center text-xs font-medium text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>

          </div>
        </div>
      )}

    </div>
  );
}