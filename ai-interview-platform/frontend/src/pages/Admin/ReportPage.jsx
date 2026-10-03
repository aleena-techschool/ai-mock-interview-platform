import PageHeader from "../../features/Admin/common/PageHeader";
import TodayDate from "../../features/Admin/common/TodayDate";
import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import AdminTopBar from "../../features/Admin/Dashboard/Topbar";
import Reports from "../../features/Admin/Report/ReportCard";

export default function ReportPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white">

      {/* Fixed Sidebar */}
      <div className="shrink-0">
        <AdminSidebar />
      </div>

      {/* Right Side */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Fixed TopBar */}
        <div className="relative z-10 shrink-0">
          <AdminTopBar />
        </div>

        {/* Scrollable Main Content */}
        <main className="min-h-0 flex-1 overflow-y-auto">

          {/* Page Header */}
          <div className="relative shrink-0 bg-blue-50">

            <PageHeader
              title="Report"
              description="Export detailed reports and complete data from the platform"
            />

            <div
              className="absolute right-6 top-[10px] z-50 -translate-y-1/2"
            >
              <TodayDate />
            </div>

          </div>

          {/* Main Report Cards */}
          <div className="m-6">
            <Reports />
          </div>

        </main>

      </div>
    </div>
  );
}