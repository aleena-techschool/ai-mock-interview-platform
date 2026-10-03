import { mentors } from "../../../mock/student management/mentorDetails";
import { batchData } from "../../../mock/student management/batch";

export default function MentorStates() {
    const totalMentors = mentors.length;

    const activeMentors = mentors.filter(
        (mentor) => mentor.status === "Active"
    ).length;

    const inactiveMentors = mentors.filter(
        (mentor) => mentor.status === "Inactive"
    ).length;

    const totalActiveBatches = batchData.filter(
        (batch) => batch.status === "Active"
    ).length;

    const activePercentage =
        totalMentors > 0
            ? Math.round((activeMentors / totalMentors) * 100)
            : 0;

    const inactivePercentage =
        totalMentors > 0
            ? Math.round((inactiveMentors / totalMentors) * 100)
            : 0;

    return (
        <div className="grid grid-cols-1 gap-5 px-6 mt-6 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total Mentors */}
            <StatCard
                title="Total Mentors"
                value={totalMentors}
                description="All registered mentors"
                icon={<MentorIcon />}
                iconBg="bg-emerald-50"
                iconColor="text-emerald-600"
                indicator={
                    <span className="text-xs font-medium text-emerald-600">
                        Team overview
                    </span>
                }
            />

            {/* Active Mentors */}
            <StatCard
                title="Active Mentors"
                value={activeMentors}
                description="Currently active mentors"
                icon={<ActiveMentorIcon />}
                iconBg="bg-blue-50"
                iconColor="text-blue-600"
                indicator={
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-gray-100">
                            <div
                                className="h-full rounded-full bg-blue-500"
                                style={{ width: `${activePercentage}%` }}
                            />
                        </div>

                        <span className="text-xs font-semibold text-blue-600">
                            {activePercentage}%
                        </span>
                    </div>
                }
            />

            {/* Inactive Mentors */}
            <StatCard
                title="Inactive Mentors"
                value={inactiveMentors}
                description="Currently unavailable"
                icon={<InactiveMentorIcon />}
                iconBg="bg-orange-50"
                iconColor="text-orange-500"
                indicator={
                    <span className="text-xs font-medium text-orange-500">
                        {inactivePercentage}% of mentors
                    </span>
                }
            />

            {/* Active Batches */}
            <StatCard
                title="Active Batches"
                value={totalActiveBatches}
                description="Batches currently running"
                icon={<BatchIcon />}
                iconBg="bg-purple-50"
                iconColor="text-purple-600"
                indicator={
                    <span className="text-xs font-medium text-purple-600">
                        Currently running
                    </span>
                }
            />
        </div>
    );
}


// Reusable statcard

function StatCard({
    title,
    value,
    description,
    icon,
    iconBg,
    iconColor,
    indicator,
}) {
    return (
        <div
            className="
                group relative overflow-hidden
                rounded-2xl border border-gray-200
                bg-white p-5
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-gray-300
                hover:shadow-lg hover:shadow-gray-200/40
            "
        >
            <div className="relative flex items-center gap-4">

                {/* Icon - Left */}
                <div
                    className={`
                        flex h-12 w-12 shrink-0 items-center justify-center
                        rounded-xl ${iconBg} ${iconColor}
                    `}
                >
                    {icon}
                </div>

                {/* Content - Two Lines */}
                <div className="min-w-0 flex-1">

                    {/* Line 1 */}
                    <div className="flex items-center justify-between gap-3">
                        <p className="truncate text-sm font-medium text-gray-500">
                            {title}
                        </p>

                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            {value}
                        </h2>
                    </div>

                    {/* Line 2 */}
                    <div className="mt-1 flex items-center justify-between gap-2">
                        <p className="truncate text-xs text-gray-400">
                            {description}
                        </p>

                        {indicator}
                    </div>

                </div>
            </div>
        </div>
    );
}



//    Mentor Icon

function MentorIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            />

            <circle
                cx="9"
                cy="7"
                r="4"
            />

            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            />
        </svg>
    );
}



//    Active Mentor Icon


function ActiveMentorIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <circle
                cx="9"
                cy="7"
                r="4"
            />

            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21v-2a6 6 0 0 1 12 0v2"
            />

            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16 11 2 2 4-4"
            />
        </svg>
    );
}



//    Inactive Mentor Icon


function InactiveMentorIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <circle
                cx="9"
                cy="7"
                r="4"
            />

            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21v-2a6 6 0 0 1 12 0v2"
            />

            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m17 9 4 4m0-4-4 4"
            />
        </svg>
    );
}


//    Batch Icon


function BatchIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z"
            />

            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10v5.5L12 19l7-3.5V10"
            />

            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5v5"
            />
        </svg>
    );
}


//    More Icon


function MoreIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
        >
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
        </svg>
    );
}