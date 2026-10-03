import { useSelector } from "react-redux";
import InactiveContent from "../../features/Trainer/completedBatches/Details";
import TrainerSidebar from "../../features/Trainer/dashboard/Sidebar";
import TrainerTopBar from "../../features/Trainer/dashboard/Topbar";

export default function CompletedBatch() {
  const user = useSelector((state) => state.auth.user);

  const trainerId = user ? user.trainerId : "MTR002";

  return (
  <div className="min-h-screen bg-blue-50">

  {/* Sidebar */}
  <aside className="fixed inset-y-0 left-0 z-30 w-60">
    <TrainerSidebar />
  </aside>

  {/* Topbar */}
  <header className="fixed top-0 left-60 right-0 z-20">
    <TrainerTopBar />
  </header>

  {/* Main Content */}
  <main className="h-screen overflow-y-auto pl-60 pt-24 pb-10">
    <div className="w-full px-6">
      <InactiveContent trainerId={trainerId} />
    </div>
  </main>

</div>
  );
}