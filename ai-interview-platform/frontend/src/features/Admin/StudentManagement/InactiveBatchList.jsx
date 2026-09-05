export default function InactiveBatchTable({
    batches,
    selectedBatch,
    onBatchSelect,
}) {

    console.log("batch length :",batches.length)
    // if no students
    if (batches.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[120px] rounded-lg border border-dashed border-gray-200 bg-gray-50">
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">
                        No inactive batches
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                        There are no batches available for this course.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <table className="w-full text-left">

                        {/* Header */}
                        <thead className="sticky top-0 z-10 border-b border-red-100 bg-red-50">
                            <tr>
                                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-red-600">
                                    Batch Name
                                </th>

                                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-red-600">
                                    Trainer
                                </th>

                                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-red-600">
                                    Time
                                </th>

                                <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-red-600">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody className="divide-y divide-gray-100">
                            {batches.map((batch) => {
                                const isSelected =
                                    selectedBatch === batch.batchId;

                                return (
                                    <tr
                                        key={batch.batchId}
                                        onClick={() =>
                                            onBatchSelect(batch.batchId)
                                        }
                                        className={`
                                            group relative cursor-pointer
                                            transition-all duration-150
                                            ${
                                                isSelected
                                                    ? "bg-red-50/70"
                                                    : "bg-white hover:bg-gray-50"
                                            }
                                        `}
                                    >
                                        {/* Batch Name */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">

                                                {/* Batch indicator */}
                                                <div
                                                    className={`
                                                        flex h-9 w-9 items-center
                                                        justify-center rounded-lg
                                                        text-xs font-bold
                                                        ${
                                                            isSelected
                                                                ? "bg-red-100 text-red-600"
                                                                : "bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-red-500"
                                                        }
                                                    `}
                                                >
                                                    {batch.name
                                                        ?.charAt(0)
                                                        ?.toUpperCase()}
                                                </div>

                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900">
                                                        {batch.name}
                                                    </p>

                                                    <p className="mt-0.5 text-xs text-gray-400">
                                                        Batch ID: {batch.batchId}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Trainer */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2.5">
                                                <div className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center">
                                                    <span className="text-[10px] font-semibold text-gray-500">
                                                        {batch.trainer
                                                            ?.charAt(0)
                                                            ?.toUpperCase()}
                                                    </span>
                                                </div>

                                                <span className="text-sm text-gray-600">
                                                    {batch.trainer}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Time */}
                                        <td className="px-5 py-4">
                                            <span className="text-sm font-medium text-gray-600">
                                                {batch.time}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td className="px-5 py-4 text-right">
                                            <span
                                                className="
                                                    inline-flex items-center gap-1.5
                                                    rounded-full
                                                    bg-red-50
                                                    px-2.5 py-1
                                                    text-xs font-semibold
                                                    text-red-600
                                                    ring-1 ring-inset ring-red-100
                                                "
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                                                {batch.status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    );
}

