import { useLocation, useParams } from "react-router-dom";
import PlacementSidebar from "../../features/Placement/Dashboard/Sidebar";
import PlacementTopBar from "../../features/Placement/Dashboard/TopBar";
import InterviewInfo from "../../features/Placement/Interview/InterviewInfo";
import Breadcrumbs from "../../features/Admin/common/Breadcrumbs";
import TrainerSidebar from "../../features/Trainer/dashboard/Sidebar";
import TrainerTopBar from "../../features/Trainer/dashboard/Topbar";
import { dummyUsers } from "../../mock/authData";
import { batchData } from "../../mock/student management/batch";

export default function StudentInterview() {
    const { studentId } = useParams();

    const student = dummyUsers.find((s) => s.studentId === studentId);

    const batchId = student?.batchId;

    const batch=batchData.find((b)=>b.batchId==batchId)

    const batchStatus=batch.status

    console.log("student :",student," batchid :",batchId)

    const location=useLocation()
    const isPlacement=location.pathname.includes("placement")

    return (
  <div className="h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white">

    {/* Sidebar */}
    <aside className="fixed inset-y-0 left-0 z-30 w-64">
      {isPlacement ? <PlacementSidebar /> : <TrainerSidebar />}
    </aside>

    {/* Right Side */}
    <div className="ml-64 h-screen">

      {/* Main Content */}
      <div className="h-screen overflow-y-auto">
        <main className="w-full max-w-[1600px] mx-auto px-6  pb-10">

          {/* Breadcrumb */}
          <div className="mb-5">
            {isPlacement ? (
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
            ) :  batchStatus=="Active" ?(
              <Breadcrumbs
                items={[
                  {
                    label: "Dashboard",
                    path: "/trainer/dashboard",
                  },
                  {
                    label: "Batch Details",
                    path: `/trainer/batches/${batchId}`,
                  },
                  {
                    label: "Student Performance",
                  },
                ]}
              />
            ):
            (
              <Breadcrumbs
                items={[
                  {
                    label: "Completed Batches",
                    path: "/trainer/inactive",
                  },
                  {
                    label: "Batch Details",
                    path: `/trainer/batches/${batchId}`,
                  },
                  {
                    label: "Student Performance",
                  },
                ]}
              />
            )}
          </div>

          {/* Page Content */}
          <InterviewInfo studId={studentId} />

        </main>
      </div>
    </div>
  </div>
);
}