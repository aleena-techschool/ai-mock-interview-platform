
export default function ActiveBatchList({
    batches,
    selectedBatch,
    onBatchSelect,
    getStudentCount,
}) {
    if (batches.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[120px] rounded-lg border border-dashed border-gray-200 bg-gray-50">
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">
                        No active batches
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                        There are no batches available for this course.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-3 overflow-x-auto ">
            {batches.map((batch) => {
                const isSelected = selectedBatch === batch.batchId;
                const studentCount = getStudentCount(batch.batchId);

                return (
                    <button
                        key={batch.batchId}
                        type="button"
                        onClick={() => onBatchSelect(batch.batchId)}
                        className={`
                            relative flex-shrink-0 w-[205px] text-left
                            rounded-lg border px-4 py-3.5 transition-all
                            ${
                                isSelected
                                    ? "border-emerald-400 bg-emerald-50/50 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                            }
                        `}
                    >
                        {/* Batch Name */}
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />

                            <span className="text-sm font-semibold text-gray-900">
                                {batch.name}
                            </span>
                        </div>

                        {/* Trainer + Time */}
                        <p className="mt-1 ml-4 text-xs text-gray-400">
                            {batch.trainer}

                            <span className="pl-12 text-sm text-green-500">
                                {batch.time}
                            </span>
                        </p>

                        {/* Bottom Information */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <UsersIcon />

                                <span>{studentCount} Students</span>
                            </div>

                            <span className="px-2 py-1 rounded-md font-medium bg-emerald-100 text-emerald-700">
                                Active
                            </span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}

function UsersIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.7"
            stroke="currentColor"
            className="w-4 h-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="
                    M15 19.128a9.38 9.38 0 0 0 2.625.372
                    9.337 9.337 0 0 0 4.121-.952
                    4.125 4.125 0 0 0-7.533-2.493
                    M15 19.128v-.003
                    c0-1.113-.285-2.16-.786-3.07
                    M15 19.128v.106
                    A12.318 12.318 0 0 1 8.624 21
                    c-2.331 0-4.512-.645-6.374-1.766
                    l-.001-.109
                    a6.375 6.375 0 0 1 11.964-3.07
                    M12.75 7.5
                    a4.125 4.125 0 1 1-8.25 0
                    4.125 4.125 0 0 1 8.25 0
                    Z
                    m8.25 1.5
                    a3 3 0 1 1-6 0
                    3 3 0 0 1 6 0Z
                "
            />
        </svg>
    );
}

