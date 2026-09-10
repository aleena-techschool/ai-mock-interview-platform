import { useMemo, useState } from "react";
import { placement } from "../../../mock/student management/mentorDetails";
import { batchData } from "../../../mock/student management/batch";
import PlacementBatch from "./PlacementBatch";

export default function TrainerCard() {
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [search, setSearch] = useState("");
  const [selectedTrainerId, setSelectedTrainerId] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const trainersPerPage = 8;

//  take trainer details
  const trainersWithStats = useMemo(() => {
    return placement.map((trainer) => {
      const trainerBatches = batchData.filter(
        (batch) => batch.Placement === trainer.employeeId
      );

      const activeBatches = trainerBatches.filter(
        (batch) => batch.status === "Active"
      );

      const inactiveBatches = trainerBatches.filter(
        (batch) => batch.status === "Inactive"
      );

      return {
        ...trainer,
        totalBatches: trainerBatches.length,
        activeBatches: activeBatches.length,
        inactiveBatches: inactiveBatches.length,
      };
    });
  }, []);

//   filter and search
  const filteredTrainers = useMemo(() => {
    return trainersWithStats.filter((trainer) => {
      const matchesSearch = trainer.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus = trainer.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [trainersWithStats, search, selectedStatus]);

//  pagination
  const totalPages = Math.ceil(
    filteredTrainers.length / trainersPerPage
  );

  const startIndex = (currentPage - 1) * trainersPerPage;

  const displayedTrainers = filteredTrainers.slice(
    startIndex,
    startIndex + trainersPerPage
  );

//   select trainer
  const handleTrainerClick = (trainer) => {
    setSelectedTrainerId(trainer.employeeId);
    setSelectedTrainer(trainer)

  };

  // --------------------------------------------------
  // Change Active / Inactive
  // --------------------------------------------------
  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
    setSelectedTrainerId(null);
  };

  // --------------------------------------------------
  // Get initials
  // --------------------------------------------------
  const getInitials = (name) => {
    if (!name) return "";

    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="w-full space-y-5">

         {/* SEARCH and STATUS FILTER */}
     
      <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-2 shadow-sm md:flex-row md:items-center md:justify-between">

        {/* Search */}
        <div className="relative w-full md:max-w-md">

          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61Z"
            />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search trainer by name..."
            className="
              w-full
              rounded-lg
              border
              border-gray-200
              bg-gray-50
              py-2.5
              pl-11
              pr-4
              text-sm
              text-gray-700
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-indigo-500
              focus:bg-white
              focus:ring-2
              focus:ring-indigo-100
            "
          />

        </div>

        {/* Active / Inactive */}
        <div className="flex w-fit rounded-lg bg-gray-100 p-1">

          <button
            onClick={() => handleStatusChange("Active")}
            className={`
              rounded-md
              px-5
              py-2
              text-sm
              font-semibold
              transition
              ${
                selectedStatus === "Active"
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }
            `}
          >
            Active
          </button>

          <button
            onClick={() => handleStatusChange("Inactive")}
            className={`
              rounded-md
              px-5
              py-2
              text-sm
              font-semibold
              transition
              ${
                selectedStatus === "Inactive"
                  ? "bg-white text-red-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }
            `}
          >
            Inactive
          </button>

        </div>

      </div>

      <div className="flex items-end justify-between border-gray-200 pb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              Trainers
            </h2>
          </div>        
      </div>


     {/* Trainer Cards Container */}
<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

  {displayedTrainers.length > 0 ? (

    <>
      {/* Trainer Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {displayedTrainers.map((trainer) => {

          const isSelected =
            selectedTrainerId === trainer.employeeId;

          return (
            <button
              key={trainer.employeeId}
              type="button"
              onClick={() => handleTrainerClick(trainer)}
              className={`
                group relative rounded-xl border bg-white p-4
                text-left transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-md
                ${
                  isSelected
                    ? "border-indigo-500 ring-2 ring-indigo-100"
                    : "border-gray-200 hover:border-indigo-200"
                }
              `}
            >

              {/* Selected Check */}
              {isSelected && (
                <div className="
                  absolute right-3 top-3
                  flex h-5 w-5 items-center justify-center
                  rounded-full bg-indigo-600
                ">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 12 4 4L19 6"
                    />
                  </svg>
                </div>
              )}

              {/* Trainer Info */}
              <div className="flex items-center gap-3">

                <div className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-lg bg-indigo-50
                  text-sm font-bold text-indigo-600
                ">
                  {getInitials(trainer.name)}
                </div>

                <div className="min-w-0 pr-5">

                  <h3 className="
                    truncate text-sm font-bold text-gray-900
                  ">
                    {trainer.name}
                  </h3>

                  <p className="
                    mt-0.5 truncate text-xs text-gray-500
                  ">
                    {trainer.designation}
                  </p>

                </div>

              </div>

              {/* Batch Statistics */}
              <div className="mt-4 grid grid-cols-3 gap-1.5">

                <div className="
                  rounded-lg bg-gray-50
                  px-2 py-2 text-center
                ">
                  <p className="text-base font-bold text-gray-900">
                    {trainer.totalBatches}
                  </p>

                  <p className="text-[10px] font-medium text-gray-500">
                    Total
                  </p>
                </div>

                <div className="
                  rounded-lg bg-green-50
                  px-2 py-2 text-center
                ">
                  <p className="text-base font-bold text-green-600">
                    {trainer.activeBatches}
                  </p>

                  <p className="text-[10px] font-medium text-green-600">
                    Active
                  </p>
                </div>

                <div className="
                  rounded-lg bg-red-50
                  px-2 py-2 text-center
                ">
                  <p className="text-base font-bold text-red-500">
                    {trainer.inactiveBatches}
                  </p>

                  <p className="text-[10px] font-medium text-red-500">
                    Inactive
                  </p>
                </div>

              </div>

              {/* View Batches */}
              <div className="
                mt-4 flex items-center justify-between
                border-t border-gray-100 pt-3
                text-xs font-semibold text-indigo-600
              ">
                <span>View Batches</span>

                <svg
                  className="
                    h-3.5 w-3.5
                    transition-transform
                    group-hover:translate-x-1
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

            </button>
          );
        })}

      </div>

      {/* Simple Pagination - Inside Card */}
      {totalPages > 1 && (
        <div className="
          mt-4 flex items-center justify-center
          border-t border-gray-100 pt-3
        ">

          <div className="flex items-center gap-1">

            {/* Previous */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((page) => page - 1)
              }
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg text-gray-500
                transition hover:bg-gray-100
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Page Numbers */}
            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`
                  h-8 min-w-8 rounded-lg px-2
                  text-xs font-semibold transition
                  ${
                    currentPage === page
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((page) => page + 1)
              }
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg text-gray-500
                transition hover:bg-gray-100
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>

          </div>

        </div>
      )}

    </>

  ) : (

    /* Empty Trainer */
    <div className="
      py-14 text-center
    ">

      <div className="
        mx-auto flex h-12 w-12
        items-center justify-center
        rounded-full bg-gray-100
      ">
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-3v6m3-3h-6"
          />
        </svg>
      </div>

      <h3 className="mt-3 font-semibold text-gray-900">
        No trainers found
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        Try changing the search or status filter.
      </p>

    </div>

  )}

</div>


     {/* Selected trainer stye */}
      {selectedTrainer && (
    <PlacementBatch
        trainer={selectedTrainer}
        
    />
)}

    </div>
  );
}