import Sidebar from "../features/dashboard/Sidebar";
import TopBar from "../features/dashboard/TopBar";

export default function RoadmapPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1">
        <TopBar />

        <main className="p-6">
          <div className="mb-5">
            <h1 className="text-2xl font-bold text-gray-800">
              Python Full Stack Roadmap
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Follow your learning path and build your full-stack skills.
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white">
            <iframe
            // src="https://roadmap.cedlearn.com/backend"
              src="https://roadmap.sh/r/embed?id=684e4351368c556c65cd286d"
              title="Python Roadmap"
              className="h-[calc(100vh-180px)] w-full border-0"
            />
          </div>
        </main>
      </div>
    </div>
  );
}