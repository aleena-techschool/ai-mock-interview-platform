import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import AdminTopBar from "../../features/Admin/Dashboard/Topbar";
import AdminStatsRow from "../../features/Admin/Dashboard/StatsRow";
import InterviewType from "../../features/Admin/Dashboard/InterviewType";
import RecentActivity from "../../features/Admin/Dashboard/RecentActivity";
import TopPerformingStudents from "../../features/Admin/Dashboard/TopPerformingStudents";
import PlatformSummary from "../../features/Admin/Dashboard/PlatformSummary";

export default function AdminDashboardPage() {

    const today = new Date();
    ;

    const formatDate = (date) =>
        date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

    const date = `${formatDate(today)}`;

    return (
        <div className="flex h-screen overflow-hidden">

            <AdminSidebar />

            <div className="flex-1 flex flex-col relative overflow-visible">

                {/* TopBar */}
                <div className="relative z-10">
                    <AdminTopBar />
                </div>

                {/* Date Div */}
                <div className="absolute top-[85px] right-6 z-50 -translate-y-1/2">
                    <button
                        type="button"
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 shadow-md"
                    >
                        {/* Calendar Icon */}
                        <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"
                            />
                        </svg>

                        <span>{date}</span>
                    </button>
                </div>

                {/* Dashboard Content Area  first row */}
                <main className="flex-1 overflow-y-auto px-6 pt-14 pb-6">
                    {/* carsd of statesrow */}
                    <AdminStatsRow />

                {/* second row */}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                            <InterviewType />

                            <RecentActivity/>
                        </div>
                    {/* Third row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    
                        <TopPerformingStudents />

                        <PlatformSummary />
                    </div>
                </main>

            </div>
        </div>
    );
}