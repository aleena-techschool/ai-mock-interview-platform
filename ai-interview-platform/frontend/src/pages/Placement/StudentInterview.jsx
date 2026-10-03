import { useParams } from "react-router-dom";
import PlacementSidebar from "../../features/Placement/Dashboard/Sidebar";
import PlacementTopBar from "../../features/Placement/Dashboard/TopBar";
import InterviewInfo from "../../features/Placement/Interview/InterviewInfo";
import Breadcrumbs from "../../features/Admin/common/Breadcrumbs";

export default function StudentInterview() {
    const { studentId } = useParams();

    return (
        <div className="h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white">

            {/* Fixed Sidebar */}
            <div className="fixed left-0 top-0 z-30 h-screen">
                <PlacementSidebar />
            </div>

            {/* Fixed Top Bar */}
            <div className="fixed top-0 left-64 right-0 z-20">
                <PlacementTopBar />
            </div>

            {/* Main Content */}
            <div className="ml-64 h-screen overflow-y-auto">

                <main className="w-full max-w-[1600px] mx-auto px-6 pt-24 pb-10">

                    {/* Breadcrumb */}
                    <div className="mb-5">
                        <Breadcrumbs
                            items={[
                                {
                                    label: "Dashboard",
                                    path: "/placement/dashboard",
                                },
                                {
                                    label: "Interview Info",
                                    path: `/placement/student/${studentId}`,
                                },
                            ]}
                        />
                    </div>

                    {/* Page Content */}
                    <InterviewInfo studId={studentId} />

                </main>

            </div>
        </div>
    );
}