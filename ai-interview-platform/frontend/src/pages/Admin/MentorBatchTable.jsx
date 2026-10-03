import { useState } from "react";
import {
    MagnifyingGlassIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

export default function MentorBatchTable({
    activeBatches,
    inactiveBatches,
}) {
    const [batchStatus, setBatchStatus] = useState("Active");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 5;

    // Select batches based on status
    const batches =
        batchStatus === "Active"
            ? activeBatches
            : inactiveBatches;

    // Search by batch name
    const filteredBatches = batches.filter((batch) =>
        batch.name.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination
    const totalPages = Math.ceil(
        filteredBatches.length / rowsPerPage
    );

    const startIndex = (currentPage - 1) * rowsPerPage;

    const paginatedBatches = filteredBatches.slice(
        startIndex,
        startIndex + rowsPerPage
    );

    const handleStatusChange = (status) => {
        setBatchStatus(status);
        setCurrentPage(1);
        setSearch("");
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="m-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

           {/* Header */}
            <div className=" border-b border-gray-100 px-6 py-5">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Title */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                             Batches
                        </h2>

                       
                    </div>

                    {/* Search */}
                    <div className="relative w-full sm:w-64">
                        <MagnifyingGlassIcon
                            className="
                                absolute left-3 top-1/2
                                h-4 w-4
                                -translate-y-1/2
                                text-gray-400
                            "
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={handleSearch}
                            placeholder="Search batch..."
                            className="
                                w-full rounded-xl
                                border border-gray-200
                                bg-gray-50
                                py-2.5 pl-9 pr-4
                                text-sm text-gray-700
                                outline-none
                                transition
                                placeholder:text-gray-400
                                focus:border-gray-300
                                focus:bg-white
                                focus:ring-2
                                focus:ring-gray-100
                            "
                        />
                    </div>
                </div>

                {/* Stauts tab */}

                <div className="mt-5 flex items-center gap-1 rounded-xl bg-gray-100 p-1 w-fit">

                    <button
                        onClick={() => handleStatusChange("Active")}
                        className={`
                            rounded-lg px-4 py-2
                            text-sm font-medium
                            transition-all
                            ${
                                batchStatus === "Active"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                            }
                        `}
                    >
                        <span className="flex items-center gap-2">
                            <span
                                className={`
                                    h-2 w-2 rounded-full
                                    ${
                                        batchStatus === "Active"
                                            ? "bg-green-500"
                                            : "bg-gray-300"
                                    }
                                `}
                            />

                            Active

                            <span className="text-xs text-gray-400">
                                {activeBatches.length}
                            </span>
                        </span>
                    </button>

                    <button
                        onClick={() => handleStatusChange("Inactive")}
                        className={`
                            rounded-lg px-4 py-2
                            text-sm font-medium
                            transition-all
                            ${
                                batchStatus === "Inactive"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                            }
                        `}
                    >
                        <span className="flex items-center gap-2">
                            <span
                                className={`
                                    h-2 w-2 rounded-full
                                    ${
                                        batchStatus === "Inactive"
                                            ? "bg-red-500"
                                            : "bg-red-300"
                                    }
                                `}
                            />

                            Inactive

                            <span className="text-xs text-gray-400">
                                {inactiveBatches.length}
                            </span>
                        </span>
                    </button>

                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full min-w-[650px]">

                    {/* Table Header */}
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/70">

                            <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Batch
                            </th>

                            <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Batch ID
                            </th>

                            <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Time
                            </th>

                            <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Status
                            </th>

                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-100">

                        {paginatedBatches.length > 0 ? (

                            paginatedBatches.map((batch) => (

                                <tr
                                    key={batch.id}
                                    className="
                                        group
                                        transition-colors
                                        hover:bg-gray-50/70
                                    "
                                >

                                    {/* Batch Name */}
                                    <td className="px-6 py-4">

                                        <div className="flex items-center gap-3">

                                            <div
                                                className="
                                                    flex h-10 w-10
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    bg-gray-100
                                                    text-gray-500
                                                    transition
                                                    group-hover:bg-gray-200
                                                "
                                            >
                                                <UsersIcon className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">
                                                    {batch.name}
                                                </p>

                                                <p className="mt-0.5 text-xs text-gray-400">
                                                    Training Batch
                                                </p>
                                            </div>

                                        </div>

                                    </td>

                                    {/* Batch ID */}
                                    <td className="px-6 py-4">

                                        <span
                                            className="
                                                rounded-md
                                                bg-gray-50
                                                px-2.5 py-1
                                                font-mono
                                                text-xs
                                                text-gray-600
                                            "
                                        >
                                            {batch.batchId}
                                        </span>

                                    </td>

                                    {/* Time */}
                                    <td className="px-6 py-4">

                                        <span className="text-sm text-gray-600">
                                            {batch.time}
                                        </span>

                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4">

                                        {batch.status === "Active" ? (
                                            <span
                                                className="
                                                    inline-flex
                                                    items-center gap-1.5
                                                    rounded-full
                                                    bg-green-50
                                                    px-2.5 py-1
                                                    text-xs
                                                    font-medium
                                                    text-green-700
                                                "
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                                Active
                                            </span>
                                        ) : (
                                            <span
                                                className="
                                                    inline-flex
                                                    items-center gap-1.5
                                                    rounded-full
                                                    bg-red-100
                                                    px-2.5 py-1
                                                    text-xs
                                                    font-medium
                                                    text-gray-500
                                                "
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                                                Inactive
                                            </span>
                                        )}

                                    </td>

                                </tr>

                            ))

                        ) : (

                            /* Empty State */
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-6 py-14 text-center"
                                >
                                    <div className="flex flex-col items-center">

                                        <div
                                            className="
                                                mb-3 flex h-12 w-12
                                                items-center justify-center
                                                rounded-full
                                                bg-gray-100
                                                text-gray-400
                                            "
                                        >
                                            <UsersIcon className="h-6 w-6" />
                                        </div>

                                        <p className="text-sm font-medium text-gray-700">
                                            No {batchStatus.toLowerCase()} batches found
                                        </p>

                                        <p className="mt-1 text-xs text-gray-400">
                                            Try changing your search or status filter.
                                        </p>

                                    </div>
                                </td>
                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

            {/* FOOTER / PAGINATION */}
            {filteredBatches.length > 0 && (

                <div
                    className="
                        flex flex-col gap-3
                        border-t border-gray-100
                        px-6 py-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    {/* Showing */}
                    <p className="text-xs text-gray-500">

                        Showing{" "}
                        <span className="font-medium text-gray-700">
                            {startIndex + 1}
                        </span>
                        {" - "}
                        <span className="font-medium text-gray-700">
                            {Math.min(
                                startIndex + rowsPerPage,
                                filteredBatches.length
                            )}
                        </span>
                        {" of "}
                        <span className="font-medium text-gray-700">
                            {filteredBatches.length}
                        </span>

                    </p>

                    {/* Pagination */}
                    <div className="flex items-center gap-1">

                        <button
                            disabled={currentPage === 1}
                            onClick={() =>
                                setCurrentPage((prev) => prev - 1)
                            }
                            className="
                                flex h-8 w-8
                                items-center justify-center
                                rounded-lg
                                border border-gray-200
                                text-gray-500
                                transition
                                hover:bg-gray-50
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            <ChevronLeftIcon className="h-4 w-4" />
                        </button>

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (

                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`
                                    h-8 w-8
                                    rounded-lg
                                    text-xs font-medium
                                    transition
                                    ${
                                        currentPage === page
                                            ? "bg-gray-900 text-white shadow-sm"
                                            : "text-gray-500 hover:bg-gray-100"
                                    }
                                `}
                            >
                                {page}
                            </button>

                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() =>
                                setCurrentPage((prev) => prev + 1)
                            }
                            className="
                                flex h-8 w-8
                                items-center justify-center
                                rounded-lg
                                border border-gray-200
                                text-gray-500
                                transition
                                hover:bg-gray-50
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            <ChevronRightIcon className="h-4 w-4" />
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}