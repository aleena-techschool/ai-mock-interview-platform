import { useState } from "react";

const activities = [
  {
    title: "Completed assessment review for MERN Batch 12",
    time: "2 hours ago",
  },
  {
    title: "Added new assignment: React Hooks Workshop",
    time: "Yesterday",
  },
  {
    title: "Conducted mock interview session for 8 students",
    time: "2 days ago",
  },
  {
    title: "Updated curriculum for Node.js Backend Batch 8",
    time: "3 days ago",
  },
  {
    title: "Submitted monthly performance report",
    time: "1 week ago",
  },
];

export default function RecentActivities() {
  const [showAll, setShowAll] = useState(false);

  const displayedActivities = showAll
    ? activities
    : activities.slice(0, 3);

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white px-6 pt-6">

      {/* Heading */}
      <h2 className="mb-5 text-lg font-bold text-slate-800">
        Recent Activities
      </h2>

      {/* Activities */}
      <div className="w-full">
        {displayedActivities.map((activity, index) => {
          const isLast = index === displayedActivities.length - 1;

          return (
            <div
              key={index}
              className="relative flex min-h-[74px] gap-5 pl-1"
            >
              {/* Vertical Line */}
              {!isLast && (
                <div className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-200" />
              )}

              {/* Green Dot */}
              <div className="relative z-10 mt-[7px] h-2 w-2 shrink-0 rounded-full bg-green-500" />

              {/* Activity Content */}
              <div className="flex-1 pb-[18px]">
                <p className="mb-1.5 text-sm font-medium leading-5 text-slate-800">
                  {activity.title}
                </p>

                <span className="text-xs text-slate-400">
                  {activity.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 py-5">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group flex items-center gap-2 text-sm font-semibold text-green-500 transition-colors hover:text-green-600"
        >
          {showAll ? "View Less Activities" : "View All Activities"}

          <span
            className={`text-lg transition-transform duration-200 ${
              showAll
                ? "rotate-180"
                : "group-hover:translate-x-1"
            }`}
          >
            →
          </span>
        </button>
      </div>
    </div>
  );
}