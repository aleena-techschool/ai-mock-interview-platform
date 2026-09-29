import PlacementSidebar from "../../features/Placement/Dashboard/Sidebar";
import PlacementTopBar from "../../features/Placement/Dashboard/TopBar";
import Notifications from "../../features/Admin/notifications/Notification";

import {notificationData} from "../../features/Admin/notifications/notificationData";

export default function NotificationPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">

            {/* Fixed Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-40 w-64">
                <PlacementSidebar />
            </aside>

            {/* Main Area */}
            <div className="ml-64 flex h-screen flex-1 min-w-0 flex-col">

                {/* Fixed Top Bar */}
                <header className="sticky top-0 z-30 flex-shrink-0">
                    <PlacementTopBar />
                </header>

                {/* Scrollable Main Content */}
                <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">

                        {/* Page Header */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Notifications
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Stay updated with your interviews, performance,
                                and placement activities.
                            </p>
                        </div>

                        {/* Notification Section */}
                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                            <Notifications
                                notificationData={notificationData}
                            />
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}