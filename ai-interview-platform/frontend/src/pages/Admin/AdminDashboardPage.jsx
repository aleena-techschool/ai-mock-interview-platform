import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import AdminTopBar from "../../features/Admin/Dashboard/Topbar";
import AdminStatsRow from "../../features/Admin/Dashboard/StatsRow";
import InterviewType from "../../features/Admin/Dashboard/InterviewType";
import RecentActivity from "../../features/Admin/Dashboard/RecentActivity";
import TopPerformingStudents from "../../features/Admin/Dashboard/TopPerformingStudents";
import PlatformSummary from "../../features/Admin/Dashboard/PlatformSummary";
import TodayDate from "../../features/Admin/common/TodayDate";

export default function AdminDashboardPage() {
    return (
        <div className="flex h-screen overflow-hidden">

            <AdminSidebar />

            <div className="flex-1 flex flex-col relative overflow-visible">

                {/* TopBar */}
                <div className="relative z-10">
                    <AdminTopBar />
                </div>

                {/* Date Overlay */}
                <div className="absolute top-[85px] right-6 z-50 -translate-y-1/2">
                            <TodayDate/>
                          </div>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto px-6 pt-14 pb-6">

                    {/* First Row */}
                    <AdminStatsRow />

                    {/* Second Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                        <InterviewType />
                        <RecentActivity />
                    </div>

                    {/* Third Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                        <TopPerformingStudents />
                        <PlatformSummary />
                    </div>

                </main>

            </div>
        </div>
    );
}