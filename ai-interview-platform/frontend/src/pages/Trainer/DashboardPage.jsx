import { useSelector } from "react-redux";
import TrainerMainContent from "../../features/Trainer/dashboard/Maincontent";
import TrainerSidebar from "../../features/Trainer/dashboard/Sidebar";
import TrainerTopBar from "../../features/Trainer/dashboard/Topbar";

// dashboard shows active batches and it's corresponding pages and compoenets

export default function TrainerDashboard() {
    const user = useSelector((state) => state.auth.user);

    const trainerId = user ? user.trainerId : "MTR002";

    console.log("trainerId dasbordpge :",trainerId)


    return (
        <div className="h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white">

  {/* Fixed Sidebar */}
  <aside className="fixed left-0 top-0 z-30 h-screen w-60">
    <TrainerSidebar />
  </aside>

  {/* Fixed TopBar */}
  <header className="fixed left-60 right-0 top-0 z-20">
    <TrainerTopBar />
  </header>

  {/* Main Content */}
  <main className="h-screen overflow-y-auto pl-60 pt-24 pb-10">
    <div className="px-6 pb-10">
      <TrainerMainContent trainerId={trainerId} />
    </div>
  </main>

</div>
    )
}