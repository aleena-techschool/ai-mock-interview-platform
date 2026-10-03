import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import MentorStatusBar from "../../features/Admin/MentorManagement/StatusBar";
import MentorCard from "../../features/Admin/MentorManagement/MentorCard";
import Breadcrumbs from "../../features/Admin/common/Breadcrumbs";

import { useState, useMemo, useEffect } from "react";

import { mentors } from "../../mock/student management/mentorDetails";
import { batchData } from "../../mock/student management/batch";

export default function MentorReport() {
  const [activeTab, setActiveTab] = useState("Active");
  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const mentorsPerPage = 8;

  // Mentor counts
  const activeCount = mentors.filter(
    (mentor) => mentor.status === "Active"
  ).length;

  const inactiveCount = mentors.filter(
    (mentor) => mentor.status === "Inactive"
  ).length;

  // Filter mentors
  const filteredMentors = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return mentors
      .filter((mentor) => {
        // Status filter
        const statusMatch =
          activeTab === "All" || mentor.status === activeTab;

        // Course search
        const courseMatch =
          !searchValue ||
          mentor.preferredCourse
            ?.toLowerCase()
            .includes(searchValue);

        return statusMatch && courseMatch;
      })
      .map((mentor) => {
        // Count active batches assigned to mentor
        const activeBatches = batchData.filter(
          (batch) =>
            batch.trainerId === mentor.employeeId &&
            batch.status === "Active"
        ).length;

        return {
          ...mentor,
          activeBatches,
        };
      });
  }, [activeTab, search]);

  // Total pages
  const totalPages = Math.ceil(
    filteredMentors.length / mentorsPerPage
  );

  // Mentors for current page
  const currentMentors = filteredMentors.slice(
    (currentPage - 1) * mentorsPerPage,
    currentPage * mentorsPerPage
  );

  // Reset to first page when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, search]);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main
        className="
          flex-1 min-h-screen overflow-y-auto
          bg-gradient-to-br from-sky-50 via-blue-50 to-white
          px-6 py-5
        "
      >
        {/* Main content container */}
        <div className="w-full max-w-[1600px] mx-auto">

          {/* Breadcrumb */}
          <Breadcrumbs
            items={[
              {
                label: "Admin",
                path: "/admin/dashboard",
              },
              {
                label: "Reports",
                path: "/admin/reports",
              },
              {
                label: "Mentor Report",
              },
            ]}
          />

          {/* Status + Search */}
          <section className="mt-6">
            <MentorStatusBar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              search={search}
              setSearch={setSearch}
              activeCount={activeCount}
              inactiveCount={inactiveCount}
              totalCount={mentors.length}
            />
          </section>

          {/* Mentor Cards */}
          {filteredMentors.length > 0 ? (
            <>
              <section
                className="
                  mt-5
                  grid
                  grid-cols-1
                  gap-5
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >
                {currentMentors.map((mentor) => (
                  <MentorCard
                    key={mentor.employeeId}
                    mentor={mentor}
                  />
                ))}
              </section>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 py-6">

                  {/* Previous */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => prev - 1)
                    }
                    disabled={currentPage === 1}
                    className="
                      rounded-lg
                      border border-gray-200
                      bg-white
                      px-4 py-2
                      text-sm font-medium
                      text-gray-600
                      hover:bg-gray-50
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
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
                      onClick={() => setCurrentPage(page)}
                      className={`
                        h-9 w-9
                        rounded-lg
                        text-sm font-medium
                        transition
                        ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                        }
                      `}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => prev + 1)
                    }
                    disabled={currentPage === totalPages}
                    className="
                      rounded-lg
                      border border-gray-200
                      bg-white
                      px-4 py-2
                      text-sm font-medium
                      text-gray-600
                      hover:bg-gray-50
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                  >
                    Next
                  </button>

                </div>
              )}
            </>
          ) : (
            /* Empty State */
            <section
              className="
                mt-5
                rounded-xl
                border border-dashed border-gray-200
                bg-white
                px-6 py-16
                text-center
              "
            >
              <p className="text-sm font-medium text-gray-700">
                No mentors found
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Try searching for a different course.
              </p>
            </section>
          )}

        </div>
      </main>
    </div>
  );
}

