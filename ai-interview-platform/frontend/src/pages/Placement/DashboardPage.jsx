import ActiveBatches from "../../features/Placement/Dashboard/MainContent";
import PlacementSidebar from "../../features/Placement/Dashboard/Sidebar";
import PlacementTopBar from "../../features/Placement/Dashboard/TopBar";

export default function PlacementDashboard() {
    return (
        <div className="h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white">

            {/* Fixed Sidebar */}
            <div className="fixed left-0 top-0 z-30 h-screen">
                <PlacementSidebar />
            </div>

            {/* Main Area */}
            <div className="ml-64 h-screen">

                {/* Fixed TopBar */}
                <div className="fixed top-0 right-0 left-60 z-20">
                    <PlacementTopBar />
                </div>

                {/* Scrollable Main Content */}
                <main className="h-screen overflow-y-auto pt-20 pb-10">
                    <div className="px-6 pb-10">
                        <ActiveBatches />
                    </div>
                </main>

            </div>
        </div>
    );
}