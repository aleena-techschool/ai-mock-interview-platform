import Sidebar from "../features/dashboard/Sidebar";
import StatsRow from "../features/dashboard/StatsRow";
import TopBar from "../features/dashboard/TopBar";
import AIRoadmap from "../features/resume/AIRoadmap";
import OverallScoreCard from "../features/resume/OverallScoreCard";
import RecentInterviews from "../features/resume/RecentInterviews";
import SkillBars from "../features/resume/SkillBar";
import UpcomingSessions from "../features/resume/UpcomingSessions";
import WeakTopics from "../features/resume/WeakTopics";


export default function DashboardPage() {
  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #ffffff 100%)" }}
    >
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <main className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {/* Stats */}
          <StatsRow />

          {/* Row 2: Skill bars + Recent interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <SkillBars />
            <RecentInterviews />
          </div>

          {/* Row 3: Upcoming + Score + Weak topics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-1">
              <UpcomingSessions />
            </div>
            <div className="lg:col-span-1">
              <OverallScoreCard />
            </div>
            <div className="lg:col-span-1">
              <WeakTopics />
            </div>
          </div>

          {/* Row 4: AI Roadmap (full width) */}
          <AIRoadmap />
        </main>
      </div>
    </div>
  );
}