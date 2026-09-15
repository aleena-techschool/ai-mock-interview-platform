import { useNavigate,useLocation } from "react-router-dom";

import { mentors } from "../../../mock/student management/mentorDetails";
import { batchData} from "../../../mock/student management/batch";


export default function MentorCard({ mentor }) {
    const navigate = useNavigate();
    const location=useLocation()
    

    const initials = mentor.name
        ?.split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const isActive = mentor.status === "Active";
const isMentorManagement =
    location.pathname === "/admin/mentor-management";

    // view full details of mentor
 const handleViewDetails = () => {
    navigate(`/admin/mentor-details/${mentor.employeeId}`);
};


// this function is for report section to donwload the detials of the mntor

const handleExport = () => {
    const mentorId = mentor.employeeId;
    // Get mentor details
    const mentorData = mentors.find(
        (m) => m.employeeId === mentorId
    );
    // Get active batches
    const activeBatches = batchData.filter(
        (b) =>
            b.trainerId === mentorId &&
            b.status === "Active"
    );
    // Get inactive batches
    const inactiveBatches = batchData.filter(
        (b) =>
            b.trainerId === mentorId &&
            b.status === "Inactive"
    );
    // CSV Header
    const headers = [
        "Mentor Name",
        "Joined Date",
        "Preferred Course",
        "Batch ID",
        "Batch Name",
        "Batch Time",
        "Batch Status"
    ];
    // Store CSV rows
    const rows = [];
    // Active batches
    activeBatches.forEach((batch) => {
        rows.push([
            mentorData.name,
            mentorData.joiningDate,
            mentorData.preferredCourse,
            batch.batchId,
            batch.name,
            batch.time,
            "Active"
        ]);
    });
    // Inactive batches
    inactiveBatches.forEach((batch) => {
        rows.push([
            mentorData.name,
            mentorData.joiningDate,
            mentorData.preferredCourse,
            batch.batchId,
            batch.name,
            batch.time,
            "Inactive"
        ]);

    });
    // If mentor has no batches
    if (rows.length === 0) {
        rows.push([
            mentorData.name,
            mentorData.joiningDate,
            mentorData.preferredCourse,
            "",
            "",
            "",
            "No batches"
        ]);
    }
    // Convert data into CSV format
    const csvContent = [
        headers,
        ...rows
    ]
        .map((row) =>
            row
                .map((value) => `"${value ?? ""}"`)
                .join(",")
        )
        .join("\n");
    // Create CSV Blob
    const blob = new Blob(
        [csvContent],
        {
            type: "text/csv;charset=utf-8;"
        }
    );
    // Create download URL
    const url = URL.createObjectURL(blob);
    // Create temporary link
    const link = document.createElement("a");
    link.href = url;
    link.download = `${mentorData.employeeId}_Mentor_Report.csv`;
    document.body.appendChild(link);
    link.click();
    // Remove temporary link
    document.body.removeChild(link);
    // Release URL
    URL.revokeObjectURL(url);
};


// Use the current pathname to determine whether the card is displayed
// on the Mentor Management page or the Mentor Report page,
// and execute handleViewDetails or handleExport accordingly.






    return (
        <div
           onClick={
        isMentorManagement ? handleViewDetails
            : undefined
    }
            className="
                group
                cursor-pointer
                rounded-xl
                border border-gray-200
                bg-white
                p-4
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-emerald-200
                hover:shadow-md
            "
        >

            {/* Top Row */}
            <div className="flex items-center justify-between">

                <span
                    className={`
                        rounded-md px-2 py-1
                        text-[11px] font-medium
                        ${
                            isActive
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-red-50 text-red-500"
                        }
                    `}
                >
                    {mentor.status}
                </span>

                <span className="text-[11px] text-gray-400">
                    {mentor.employeeId}
                </span>

            </div>


            {/* Mentor Information */}
            <div className="mt-4 flex items-center gap-3">

                {/* Avatar */}
                <div
                    className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-emerald-50
                        text-sm font-semibold
                        text-emerald-600
                    "
                >
                    {initials}
                </div>

                {/* Name + Designation */}
                <div className="min-w-0">

                    <h3
                        className="
                            truncate
                            text-sm font-semibold
                            text-gray-900
                        "
                    >
                        {mentor.name}
                    </h3>

                    <p className="
                            mt-0.5 truncate
                            text-xs text-gray-400
                        "
                    >
                        {mentor.designation}
                    </p>

                </div>

            </div>

            {/* Course */}
            <div className="mt-4">

                <p className="text-[11px] text-gray-400">
                    Course
                </p>

                <p
                    className="
                        mt-1 truncate
                        text-xs font-medium
                        text-gray-700
                    "
                >
                    {mentor.preferredCourse}
                </p>

            </div>


            {/* Bottom */}
            <div
                className="
                    mt-4 flex items-center
                    justify-between
                    border-t border-gray-100
                    pt-3
                "
            >

                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <BatchIcon />

                    <span>
                        {mentor.activeBatches ?? 0} Active Batches
                    </span>
                </div>

                {isMentorManagement ? (
    <button
        type="button"
        onClick={(e) => {
            e.stopPropagation();
            handleViewDetails();
        }}
        className="
            text-xs font-medium
            text-emerald-600
            transition-colors
            hover:text-emerald-700
        "
    >
        View Details →
    </button>
) : (
    <button
        type="button"
        onClick={(e) => {
            e.stopPropagation();
            handleExport();
        }}
        className="
            text-xs font-medium
            text-blue-600
            transition-colors
            hover:text-blue-700
        "
    >
        Export →
    </button>
)}

            </div>

        </div>
    );
}


function BatchIcon() {
    return (
        <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
            />

            <path
                strokeLinecap="round"
                d="M8 8h8M8 12h8M8 16h4"
            />
        </svg>
    );
}