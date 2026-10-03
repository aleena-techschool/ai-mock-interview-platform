import Interviewanalytics from "../../features/Admin/Analytics/Interview/InterviewAnalytics";
import WeekTrend from "../../features/Admin/Analytics/Interview/WeekTrend";
import PlacementAnalytics from "../../features/Admin/Analytics/Placement/Placementanalytics";
import QuickInsight from "../../features/Admin/Analytics/Quick_Insight/QuickInsight";
import StudentBatchCard from "../../features/Admin/Analytics/Student_Batches/StudBatchCard";
import AnalyticStats from "../../features/Admin/Analytics/TopCards/AnalyticStats";
import PageHeader from "../../features/Admin/common/PageHeader";
import TodayDate from "../../features/Admin/common/TodayDate";
import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import AdminTopBar from "../../features/Admin/Dashboard/Topbar";




export default function PlatformAnalytics() {
    return (
        <div className="flex h-screen overflow-hidden  
        bg-gradient-to-br from-sky-50 via-blue-50 to-white">

            <div className="shrink-0">
                <AdminSidebar />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">

                {/* Topbar + overlapping date */}
                <div className="relative z-10 shrink-0">
                    <AdminTopBar />

                    <div className="absolute top-[90px] right-6 z-50 -translate-y-1/2">
                        <TodayDate />
                    </div>
                </div>

                <main className="min-h-0 flex-1 overflow-y-auto">
                    <div className="relative shrink-0 bg-blue-50">
                        <PageHeader
                            title="Platform Analytics"
                            description="Detailed overview of overall platform performance and trends"
                        />
                    </div>
                    <div>

                    <div className="w-full max-w-full p-6">
                        <AnalyticStats />
                    </div>

                    <div className="w-full max-w-full">
                        <StudentBatchCard />
                    </div>
                    </div>

                    <div className="w-full max-w-full">
                        <Interviewanalytics/>
                    </div>

                    <div className="w-full max-w-full">
                        <PlacementAnalytics/>
                    </div>

                    <div className="w-full max-w-full">
                        <QuickInsight/>
                    </div>
                </main>
            </div>
        </div>
    );
}