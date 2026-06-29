import { useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import TopBar from "../dashboard/TopBar";
import InterviewCard from "./InterviewCard";
import InterviewFilters from "./InterviewFilters";
import { interviewsData } from "../../mock/interviewData";

export default function InterviewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeDiff, setActiveDiff] = useState("All Levels");

  const scheduled = interviewsData.filter((i) => i.status === "scheduled");
  const upcoming = interviewsData.filter((i) => i.status === "upcoming");

  const counts = {
    all: interviewsData.length,
    scheduled: scheduled.length,
    upcoming: upcoming.length,
  };

  // Filter logic
  const filtered = interviewsData.filter((i) => {
    const matchStatus =
      activeFilter === "All" ||
      (activeFilter === "Scheduled" && i.status === "scheduled") ||
      (activeFilter === "Upcoming" && i.status === "upcoming");
    const matchDiff = activeDiff === "All Levels" || i.difficulty === activeDiff;
    return matchStatus && matchDiff;
  });

  const filteredScheduled = filtered.filter((i) => i.status === "scheduled");
  const filteredUpcoming = filtered.filter((i) => i.status === "upcoming");

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #ffffff 100%)" }}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <main className="flex-1 overflow-y-auto px-6 py-5">
          {/* Page header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold text-gray-900">My Interviews</h1>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-lg"
                style={{ background: "#dcfce7", color: "#15803d" }}
              >
                {counts.all} total
              </span>
            </div>
            <p className="text-sm text-gray-400">
              View your scheduled interviews and upcoming sessions assigned by your trainer.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-6">
            <InterviewFilters
              activeFilter={activeFilter}
              onFilter={setActiveFilter}
              activeDiff={activeDiff}
              onDiff={setActiveDiff}
              counts={counts}
            />
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "#f0fdf4", border: "1px solid rgba(22,163,74,0.15)" }}
              >
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-700">No interviews found</p>
              <p className="text-xs text-gray-400 mt-1">Try adjusting your filters</p>
            </div>
          )}

          {/* ── SCHEDULED section ──────────────────────────────── */}
          {filteredScheduled.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h2 className="text-sm font-bold text-gray-800">
                  Scheduled by Trainer
                </h2>
                <span
                  className="text-[11px] font-semibold px-2 py-0.5 rounded-lg"
                  style={{ background: "#dcfce7", color: "#16a34a" }}
                >
                  {filteredScheduled.length}
                </span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(22,163,74,0.2),transparent)" }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredScheduled.map((interview) => (
                  <InterviewCard key={interview.id} interview={interview} />
                ))}
              </div>
            </section>
          )}

          {/* ── UPCOMING section ────────────────────────────────── */}
          {filteredUpcoming.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <h2 className="text-sm font-bold text-gray-800">Upcoming Sessions</h2>
                <span
                  className="text-[11px] font-semibold px-2 py-0.5 rounded-lg"
                  style={{ background: "#dbeafe", color: "#1d4ed8" }}
                >
                  {filteredUpcoming.length}
                </span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(37,99,235,0.15),transparent)" }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredUpcoming.map((interview) => (
                  <InterviewCard key={interview.id} interview={interview} />
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}