const summary = [
  {
    title: "Total Users",
    value: 120,
    icon: "M3 10h18M3 6h18M3 14h18M3 18h18",
  },
  {
    title: "Active Users",
    value: "85%",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17a1 1 0 01-2 0v-1.07A8.001 8.001 0 014.07 13H3a1 1 0 010-2h1.07A8.001 8.001 0 0111 4.07V3a1 1 0 012 0v1.07A8.001 8.001 0 0119.93 11H21a1 1 0 010 2h-1.07A8.001 8.001 0 0113 19.93z",
  },
  {
    title: "Upcoming Events",
    value: 4,
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17a1 1 0 01-2 0v-1.07A8.001 8.001 0 014.07 13H3a1 1 0 010-2h1.07A8.001 8.001 0 0111 4.07V3a1 1 0 012 0v1.07A8.001 8.001 0 0119.93 11H21a1 1 0 010 2h-1.07A8.001 8.001 0 0113 19.93z",
  },
  {
    title: "Upcoming Interviews",
    value: 7,
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17a1 1 0 01-2 0v-1.07A8.001 8.001 0 014.07 13H3a1 1 0 010-2h1.07A8.001 8.001 0 0111 4.07V3a1 1 0 012 0v1.07A8.001 8.001 0 0119.93 11H21a1 1 0 010 2h-1.07A8.001 8.001 0 0113 19.93z",
  },
  {
    title: "Placement Rate",
    value: "25.9%",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17a1 1 0 01-2 0v-1.07A8.001 8.001 0 014.07 13H3a1 1 0 010-2h1.07A8.001 8.001 0 0111 4.07V3a1 1 0 012 0v1.07A8.001 8.001 0 0119.93 11H21a1 1 0 010 2h-1.07A8.001 8.001 0 0113 19.93z",
  },
  {
    title: "Companies",
    value: "15",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17a1 1 0 01-2 0v-1.07A8.001 8.001 0 014.07 13H3a1 1 0 010-2h1.07A8.001 8.001 0 0111 4.07V3a1 1 0 012 0v1.07A8.001 8.001 0 0119.93 11H21a1 1 0 010 2h-1.07A8.001 8.001 0 0113 19.93z",
  },
];

export default function PlatformSummary() {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden h-full">

      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-800">
          Platform Summary
        </h2>
      </div>

      {/* Summary Grid */}
      <div className="grid grid-cols-2">
        {summary.map((s, index) => (
          <div
            key={s.title}
            className={`
              flex items-center gap-3 p-5
              ${index % 2 === 0 ? "border-r border-gray-100" : ""}
              ${index < 4 ? "border-b border-gray-100" : ""}
            `}
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-5 h-5 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={s.icon}
                />
              </svg>
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-medium text-gray-500">
                {s.title}
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-1">
                {s.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
