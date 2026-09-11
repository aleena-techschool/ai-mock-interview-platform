import SearchIcon from "./SearchIcon";

export default function MentorStatusBar({
    activeTab,
    setActiveTab,
    search,
    setSearch,
    activeCount,
    inactiveCount,
    totalCount,
}) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4">

            <div className="flex items-center justify-between gap-4">

                {/* Status Tabs */}
                <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">

                    <StatusTab
                        label={`Active (${activeCount})`}
                        active={activeTab === "Active"}
                        onClick={() => setActiveTab("Active")}
                    />

                    <StatusTab
                        label={`Inactive (${inactiveCount})`}
                        active={activeTab === "Inactive"}
                        onClick={() => setActiveTab("Inactive")}
                    />

                    <StatusTab
                        label={`All Mentors (${totalCount})`}
                        active={activeTab === "All"}
                        onClick={() => setActiveTab("All")}
                    />

                </div>

                {/* Search */}
                <div className="relative w-[240px]">

                    <SearchIcon />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search course..."
                        className="
                            h-9 w-full rounded-lg
                            border border-gray-200
                            bg-white
                            pl-9 pr-3
                            text-xs text-gray-700
                            outline-none
                            placeholder:text-gray-400
                            focus:border-emerald-400
                            focus:ring-2 focus:ring-emerald-50
                        "
                    />

                </div>

            </div>
        </div>
    );
}


function StatusTab({ label, active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                rounded-md
                px-4 py-2
                text-xs font-medium
                transition-all
                ${
                    active
                        ? "bg-white text-emerald-600 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                }
            `}
        >
            {label}
        </button>
    );
}