export default function InterviewHistoryFilter({
  activeFilter,
  setActiveFilter,
  activeDiff,
  setActiveDiff,
  search,
  setSearch,
  counts,
}) {
  const filters = [
    {
      label: "All",
      value: "All",
      count: counts.all,
    },
    {
      label: "Technical",
      value: "Technical",
      count: counts.technical,
    },
    {
      label: "Behavioral",
      value: "Behavioral",
      count: counts.behavioral,
    },
    {
      label: "Coding",
      value: "Coding",
      count: counts.coding,
    },
  ];

  const difficulties = [
    "All Levels",
    "Easy",
    "Medium",
    "Difficult",
    "Advanced",
  ];

  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">

      {/* TYPE FILTERS */}
      <div className="flex items-center gap-1 p-1 rounded-xl bg-white border border-gray-100">

        {filters.map((filter) => {
          const active = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                active
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {filter.label}

              <span
                className={`ml-1.5 ${
                  active
                    ? "text-green-100"
                    : "text-green-600"
                }`}
              >
                {filter.count}
              </span>
            </button>
          );
        })}

      </div>

      {/* RIGHT CONTROLS */}
      <div className="flex items-center gap-2">

        {/* SEARCH */}
        <div className="relative">

          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
            />

            <path
              strokeLinecap="round"
              d="m20 20-4-4"
            />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search interviews..."
            className="w-44 pl-9 pr-3 py-2.5 rounded-xl border border-gray-100 bg-white text-xs text-gray-700 focus:outline-none focus:border-green-300"
          />

        </div>

        {/* DIFFICULTY */}
        <select
          value={activeDiff}
          onChange={(e) => setActiveDiff(e.target.value)}
          className="px-3 py-2.5 rounded-xl border border-gray-100 bg-white text-xs text-gray-600 focus:outline-none focus:border-green-300"
        >
          {difficulties.map((difficulty) => (
            <option
              key={difficulty}
              value={difficulty}
            >
              {difficulty}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}