import { useMemo, useState, useEffect } from "react";

import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import AdminTopBar from "../../features/Admin/Dashboard/Topbar";
import PageHeader from "../../features/Admin/common/PageHeader";
import TodayDate from "../../features/Admin/common/TodayDate";

import MentorStates from "../../features/Admin/MentorManagement/MentorStates";
import MentorStatusBar from "../../features/Admin/MentorManagement/StatusBar";
import MentorCard from "../../features/Admin/MentorManagement/MentorCard";

import { mentors } from "../../mock/student management/mentorDetails";
import { batchData } from "../../mock/student management/batch";

export default function MentorManagement() {

    const [activeTab, setActiveTab] = useState("Active");

    // Search course
    const [search, setSearch] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);

    // Number of mentor cards displayed per page
    const mentorsPerPage = 8;


    // Mentor count under active status
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
                    activeTab === "All" ||
                    mentor.status === activeTab;

                // Course search
                const courseMatch =
                    !searchValue ||
                    mentor.preferredCourse
                        ?.toLowerCase()
                        .includes(searchValue);

                return statusMatch && courseMatch;
            })
            .map((mentor) => {

                // Count active batches assigned to this mentor
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


    // Total number of pages
    const totalPages = Math.ceil(
        filteredMentors.length / mentorsPerPage
    );


    // Get mentors for current page
    const currentMentors = filteredMentors.slice(
        (currentPage - 1) * mentorsPerPage,
        currentPage * mentorsPerPage
    );


    // Reset pagination when filter/search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, search]);


    return (
        <div className="flex h-screen overflow-hidden">

            <AdminSidebar />

            <div className="flex flex-1 flex-col relative overflow-visible">

                <div className="relative z-10">
                    <AdminTopBar />
                </div>


                <div className="relative shrink-0 bg-blue-50">

                    <PageHeader
                        title="Mentor Management"
                        description="View and manage all mentors in the platform"
                    />

                    {/* Date */}
                    <div
                        className="
                            absolute
                            top-[10px]
                            right-6
                            z-50
                            -translate-y-1/2
                        "
                    >
                        <TodayDate />
                    </div>

                </div>


                <main
                    className="
                        flex-1
                        min-h-0
                        overflow-y-auto
                        bg-gradient-to-br
                        from-sky-50
                        via-blue-50
                        to-white
                        pb-8
                    "
                >

                    {/* Cards under header */}
                    <MentorStates />


                    {/* Active / Inactive options */}
                    <div className="mt-6">

                        <MentorStatusBar
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}

                            search={search}
                            setSearch={setSearch}

                            activeCount={activeCount}
                            inactiveCount={inactiveCount}
                            totalCount={mentors.length}
                        />

                    </div>


                    {/* Mentor cards */}
                    <div
                        className="
                            mt-5
                            grid
                            grid-cols-1
                            gap-4
                            px-6
                            pb-6
                            sm:grid-cols-2
                            xl:grid-cols-4
                        "
                    >

                        {currentMentors.map((mentor) => (

                            <MentorCard
                                key={mentor.employeeId}
                                mentor={mentor}
                            />

                        ))}

                    </div>


                    {/* No mentors */}
                    {filteredMentors.length === 0 && (

                        <div
                            className="
                                mx-6
                                rounded-xl
                                border
                                border-dashed
                                border-gray-200
                                bg-white
                                py-16
                                text-center
                            "
                        >

                            <p className="text-sm font-medium text-gray-700">
                                No mentors found
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                                Try searching for a different course.
                            </p>

                        </div>

                    )}


                    {/* Pagination */}
                    {totalPages > 1 && (

                        <div
                            className="
                                flex
                                items-center
                                justify-center
                                gap-2
                                px-6
                                pb-6
                            "
                        >

                            {/* Previous */}
                            <button
                                onClick={() =>
                                    setCurrentPage((prev) => prev - 1)
                                }
                                disabled={currentPage === 1}
                                className="
                                    rounded-lg
                                    border
                                    border-gray-200
                                    bg-white
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-gray-600
                                    transition
                                    hover:bg-gray-50
                                    disabled:cursor-not-allowed
                                    disabled:opacity-40
                                "
                            >
                                Previous
                            </button>


                            {/* Page numbers */}
                            {Array.from(
                                { length: totalPages },
                                (_, index) => index + 1
                            ).map((page) => (

                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`
                                        h-9
                                        w-9
                                        rounded-lg
                                        text-sm
                                        font-medium
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
                                    border
                                    border-gray-200
                                    bg-white
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-gray-600
                                    transition
                                    hover:bg-gray-50
                                    disabled:cursor-not-allowed
                                    disabled:opacity-40
                                "
                            >
                                Next
                            </button>

                        </div>

                    )}

                </main>

            </div>

        </div>
    );
}

