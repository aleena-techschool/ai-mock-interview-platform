import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../features/dashboard/Sidebar";
import TopBar from "../features/dashboard/TopBar";

import InterviewHistoryCard from "../features/interviews/interviewHistory/InterviewHistoryCard";
import InterviewHistoryFilter from "../features/interviews/interviewHistory/InterviewHistoryFilter";

import { interviewResults } from "../mock/interviewResultData";

export default function InterviewHistoryPage() {
  const navigate = useNavigate();

  // ==========================================
  // FILTER STATES
  // ==========================================

  const [activeFilter, setActiveFilter] = useState("All");

  const [activeDiff, setActiveDiff] =
    useState("All Levels");

  const [search, setSearch] = useState("");

  // ==========================================
  // PAGINATION
  // ==========================================

  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 3;

  // ==========================================
  // SELECTED INTERVIEW
  // ==========================================

  const [selectedInterview, setSelectedInterview] =
    useState(null);

  // ==========================================
  // COUNTS
  // ==========================================

  const counts = {
    all: interviewResults.length,

    technical: interviewResults.filter(
      (item) => item.type === "Technical"
    ).length,

    behavioral: interviewResults.filter(
      (item) => item.type === "Behavioral"
    ).length,

    coding: interviewResults.filter(
      (item) => item.type === "Coding"
    ).length,
  };

  // ==========================================
  // FILTER INTERVIEWS
  // ==========================================

  const filteredInterviews = interviewResults.filter(
    (interview) => {
      // ----------------------------------------
      // TYPE
      // ----------------------------------------

      const typeMatch =
        activeFilter === "All" ||
        interview.type === activeFilter;

      // ----------------------------------------
      // DIFFICULTY
      // ----------------------------------------

      const difficultyMatch =
        activeDiff === "All Levels" ||
        interview.difficulty === activeDiff;

      // ----------------------------------------
      // SEARCH
      // ----------------------------------------

      const searchValue =
        search.trim().toLowerCase();

      const searchMatch =
        searchValue === "" ||
        interview.role
          ?.toLowerCase()
          .includes(searchValue) ||
        interview.type
          ?.toLowerCase()
          .includes(searchValue) ||
        interview.difficulty
          ?.toLowerCase()
          .includes(searchValue) ||
        interview.mode
          ?.toLowerCase()
          .includes(searchValue) ||
        interview.topics?.some((topic) =>
          topic.toLowerCase().includes(searchValue)
        );

      return (
        typeMatch &&
        difficultyMatch &&
        searchMatch
      );
    }
  );

  // ==========================================
  // PAGINATION CALCULATIONS
  // ==========================================

  const totalPages = Math.ceil(
    filteredInterviews.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedInterviews =
    filteredInterviews.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );

  // ==========================================
  // SELECT INTERVIEW
  // ==========================================

  const handleInterviewClick = (interview) => {
    setSelectedInterview(interview);

    // Go to detailed result page
    navigate(`/history/${interview.id}`);
  };

  // ==========================================
  // TYPE FILTER
  // ==========================================

  const handleFilterChange = (filter) => {
    console.log("Type selected:", filter);

    setActiveFilter(filter);

    // Reset pagination
    setCurrentPage(1);
  };

  // ==========================================
  // DIFFICULTY FILTER
  // ==========================================

  const handleDifficultyChange = (
    difficulty
  ) => {
    console.log(
      "Difficulty selected:",
      difficulty
    );

    setActiveDiff(difficulty);

    // Reset pagination
    setCurrentPage(1);
  };

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearchChange = (value) => {
    console.log("Search:", value);

    setSearch(value);

    // Reset pagination
    setCurrentPage(1);
  };

  // ==========================================
  // PAGE CHANGE
  // ==========================================

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #ffffff 100%)",
      }}
    >
      {/* ==========================================
          SIDEBAR
      ========================================== */}

      <Sidebar />

      {/* ==========================================
          MAIN AREA
      ========================================== */}

      <div className="flex-1 flex flex-col overflow-hidden">

        {/* ==========================================
            TOP BAR
        ========================================== */}

        <TopBar />

        {/* ==========================================
            CONTENT
        ========================================== */}

        <main className="flex-1 overflow-y-auto px-6 py-5">

          {/* ==========================================
              PAGE HEADER
          ========================================== */}

          <div className="mb-5">

            <div className="flex items-center gap-2 mb-1">

              <h1 className="text-xl font-bold text-gray-900">
                Interview History
              </h1>

              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-lg"
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                }}
              >
                {interviewResults.length} completed
              </span>

            </div>

            <p className="text-sm text-gray-400">
              Review your completed mock interviews
              and track your performance.
            </p>

          </div>

          {/* ==========================================
              FILTERS
          ========================================== */}

          <div className="mb-5">

            <InterviewHistoryFilter
              activeFilter={activeFilter}
              setActiveFilter={handleFilterChange}

              activeDiff={activeDiff}
              setActiveDiff={
                handleDifficultyChange
              }

              search={search}
              setSearch={handleSearchChange}

              counts={counts}
            />

          </div>

          {/* ==========================================
              INTERVIEW CONTAINER
          ========================================== */}

          <div
            className="bg-white rounded-2xl border border-green-100 shadow-sm overflow-hidden"
          >

            {/* ==========================================
                LIST HEADER
            ========================================== */}

            <div className="px-5 py-4 border-b border-gray-100">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-sm font-semibold text-gray-800">
                    Completed Interviews
                  </h2>

                  <p className="text-xs text-gray-400 mt-1">
                    {filteredInterviews.length}{" "}
                    interviews
                  </p>

                </div>

                {/* CURRENT PAGE INFO */}

                {filteredInterviews.length > 0 && (
                  <p className="text-xs text-gray-400">
                    Showing{" "}
                    {startIndex + 1}-
                    {Math.min(
                      startIndex +
                        ITEMS_PER_PAGE,
                      filteredInterviews.length
                    )}{" "}
                    of{" "}
                    {filteredInterviews.length}
                  </p>
                )}

              </div>

            </div>

            {/* ==========================================
                INTERVIEW CARDS
            ========================================== */}

            <div className="p-4">

              {filteredInterviews.length === 0 ? (

                /* ======================================
                   EMPTY STATE
                ====================================== */

                <div className="flex flex-col items-center justify-center py-20 text-center">

                  <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-3">

                    <svg
                      className="w-7 h-7 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h4m2-13H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z"
                      />
                    </svg>

                  </div>

                  <p className="text-sm font-semibold text-gray-700">
                    No interviews found
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    Try changing your filters or
                    search.
                  </p>

                </div>

              ) : (

                /* ======================================
                   CARDS
                ====================================== */

                <div className="space-y-3">

                  {paginatedInterviews.map(
                    (interview) => (

                      <InterviewHistoryCard
                        key={interview.id}
                        interview={interview}
                        selected={
                          selectedInterview?.id ===
                          interview.id
                        }
                        onClick={() =>
                          handleInterviewClick(
                            interview
                          )
                        }
                      />

                    )
                  )}

                </div>

              )}

            </div>

            {/* ==========================================
                PAGINATION
            ========================================== */}

            {totalPages > 1 && (
              <div className="border-t border-gray-100 px-5 py-4">

                <div className="flex items-center justify-center gap-1">

                  {/* ====================================
                      PREVIOUS
                  ==================================== */}

                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      handlePageChange(
                        currentPage - 1
                      )
                    }
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm border transition ${
                      currentPage === 1
                        ? "border-gray-100 text-gray-300 cursor-not-allowed"
                        : "border-gray-100 text-gray-500 hover:border-green-200 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    ‹
                  </button>

                  {/* ====================================
                      PAGE NUMBERS
                  ==================================== */}

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (

                    <button
                      key={page}
                      type="button"
                      onClick={() =>
                        handlePageChange(page)
                      }
                      className={`w-9 h-9 rounded-lg text-xs font-semibold border transition ${
                        currentPage === page
                          ? "bg-green-50 text-green-600 border-green-200"
                          : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      }`}
                    >
                      {page}
                    </button>

                  ))}

                  {/* ====================================
                      NEXT
                  ==================================== */}

                  <button
                    type="button"
                    disabled={
                      currentPage === totalPages
                    }
                    onClick={() =>
                      handlePageChange(
                        currentPage + 1
                      )
                    }
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm border transition ${
                      currentPage === totalPages
                        ? "border-gray-100 text-gray-300 cursor-not-allowed"
                        : "border-gray-100 text-gray-500 hover:border-green-200 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    ›
                  </button>

                </div>

              </div>
            )}

          </div>

        </main>

      </div>

    </div>
  );
}