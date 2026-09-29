import { useSelector } from "react-redux";
import TrainerSidebar from "../../features/Trainer/dashboard/Sidebar";
import TrainerTopBar from "../../features/Trainer/dashboard/Topbar";
import PlacedStudents from "../../features/Trainer/placementManagement/PlacedStudents";
import { dummyUsers } from "../../mock/authData";
import { batchData } from "../../mock/student management/batch";

export default function PlacedstudentPage() {
  const user = useSelector((state) => state.auth.user);

  const trainerId = user ? user.trainerId : "MTR002";

  const trainerBatches = batchData.filter(
    (b) => b.trainerId === trainerId
  );

  const placedStudents = dummyUsers.filter(
    (student) =>
      student.placed === true &&
      trainerBatches.some(
        (batch) => batch.batchId === student.batchId
      )
  );

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-30 h-screen w-60">
        <TrainerSidebar />
      </aside>

      {/* Top Bar */}
      <header className="fixed left-60 right-0 top-0 z-20">
        <TrainerTopBar />
      </header>

      {/* Main Content */}
      <main className="h-screen overflow-y-auto pl-60 pt-20 pb-10">
        <div className="w-full px-6">
          
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Placed Students
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              View students who have been placed from your assigned batches.
            </p>
          </div>

      

          {/* Placed Students Table */}
          <PlacedStudents placedStudents={placedStudents} />

        </div>
      </main>
    </div>
  );
}