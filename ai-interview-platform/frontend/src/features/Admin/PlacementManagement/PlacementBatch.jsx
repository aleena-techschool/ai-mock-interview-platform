import { useState } from "react";
import { useNavigate} from "react-router-dom"
import { dummyUsers } from "../../../mock/authData";
import { batchData } from "../../../mock/student management/batch";

export default function PlacementBatch({ trainer }) {

  const navigate = useNavigate();

  // Inactive selected by default
  const [batchStatus, setBatchStatus] = useState("Inactive");

//  active batch
  const activeBatches = batchData
    .filter(
      (b) =>
        b.Placement === trainer.employeeId &&
        b.status === "Active"
    )
    .map((batch) => {

      const students = dummyUsers.filter(
        (student) => student.batchId === batch.batchId
      );

      const totalStudents = students.length;

      const placedStudents = students.filter(
        (student) => student.placed === true
      ).length;

      const notPlacedStudents = students.filter(
        (student) => student.placed === false
      ).length;

      const placementRate =
        totalStudents > 0
          ? ((placedStudents / totalStudents) * 100).toFixed(1)
          : 0;

      return {
        ...batch,
        totalStudents,
        placedStudents,
        notPlacedStudents,
        placementRate,
      };
    });

//  inactive batch
  const inactiveBatches = batchData
    .filter(
      (b) =>
        b.Placement === trainer.employeeId &&
        b.status === "Inactive"
    )
    .map((batch) => {

      const students = dummyUsers.filter(
        (student) => student.batchId === batch.batchId
      );

      const totalStudents = students.length;

      const placedStudents = students.filter(
        (student) => student.placed === true
      ).length;

      const notPlacedStudents = students.filter(
        (student) => student.placed === false
      ).length;

      const placementRate =
        totalStudents > 0
          ? ((placedStudents / totalStudents) * 100).toFixed(1)
          : 0;

      return {
        ...batch,
        totalStudents,
        placedStudents,
        notPlacedStudents,
        placementRate,
      };
    });

  // Current batches based on toggle
  const displayedBatches =
    batchStatus === "Active"
      ? activeBatches
      : inactiveBatches;

  return (
    <div className="mt-5 rounded-xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">

        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Batches Under {trainer.name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            View placement statistics for assigned batches
          </p>
        </div>

        {/* Active / Inactive Toggle */}
        <div className="flex rounded-lg bg-gray-100 p-1">

          <button
            type="button"
            onClick={() => setBatchStatus("Inactive")}
            className={`
              rounded-md px-4 py-2
              text-xs font-semibold
              transition-all
              ${
                batchStatus === "Inactive"
                  ? "bg-white text-red-500 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }
            `}
          >
            Inactive
            <span className="ml-1.5">
              ({inactiveBatches.length})
            </span>
          </button>

          <button
            type="button"
            onClick={() => setBatchStatus("Active")}
            className={`
              rounded-md px-4 py-2
              text-xs font-semibold
              transition-all
              ${
                batchStatus === "Active"
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }
            `}
          >
            Active
            <span className="ml-1.5">
              ({activeBatches.length})
            </span>
          </button>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        {displayedBatches.length > 0 ? (

          <table className="w-full text-left">

            <thead>
              <tr className="border-y border-gray-100 bg-gray-50">

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Batch Name
                </th>

                <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Total Students
                </th>

                <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Placed
                </th>

                <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Not Placed
                </th>

                <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Placement Rate
                </th>

                <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Action
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {displayedBatches.map((b) => (

                <tr
                  key={b.id}
                  className="transition hover:bg-gray-50"
                >

                  {/* Batch Name */}
                  <td className="px-5 py-4">

                    <p className="text-sm font-semibold text-gray-900">
                      {b.name}
                    </p>

                    <p className="mt-0.5 text-xs text-gray-400">
                      {b.batchId}
                    </p>

                  </td>

                  {/* Total Students */}
                  <td className="px-5 py-4 text-center">
                    <span className="text-sm font-semibold text-gray-900">
                      {b.totalStudents}
                    </span>
                  </td>

                  {/* Placed */}
                  <td className="px-5 py-4 text-center">
                    <span className="
                      inline-flex rounded-full
                      bg-green-50 px-3 py-1
                      text-xs font-semibold text-green-600
                    ">
                      {b.placedStudents}
                    </span>
                  </td>

                  {/* Not Placed */}
                  <td className="px-5 py-4 text-center">
                    <span className="
                      inline-flex rounded-full
                      bg-red-50 px-3 py-1
                      text-xs font-semibold text-red-500
                    ">
                      {b.notPlacedStudents}
                    </span>
                  </td>

                  {/* Placement Rate */}
                  <td className="px-5 py-4">

                    <div className="flex items-center justify-center gap-2">

                      <div className="
                        h-1.5 w-16
                        overflow-hidden rounded-full
                        bg-gray-100
                      ">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{
                            width: `${b.placementRate}%`,
                          }}
                        />
                      </div>

                      <span className="text-xs font-semibold text-gray-700">
                        {b.placementRate}%
                      </span>

                    </div>

                  </td>

                  {/* Action */}
                  <td className="px-5 py-4 text-center">

                    <button
                      type="button"
                      onClick={() =>navigate(`/admin/batch/${b.batchId}`)}
                      className="
                        rounded-lg px-3 py-1.5
                        text-xs font-semibold
                        text-indigo-600
                        transition hover:bg-indigo-50
                      "
                    >
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        ) : (

          <div className="py-12 text-center">

            <p className="text-sm font-semibold text-gray-700">
              No {batchStatus.toLowerCase()} batches found
            </p>

            <p className="mt-1 text-xs text-gray-400">
              There are no {batchStatus.toLowerCase()} batches assigned
              to this trainer.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}