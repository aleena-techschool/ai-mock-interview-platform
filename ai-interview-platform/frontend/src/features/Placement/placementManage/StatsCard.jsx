import {
    ClipboardDocumentListIcon,
    UsersIcon,
    TrophyIcon,
    ChartBarIcon,
} from "@heroicons/react/24/outline";

import { Interviews } from "../../../mock/actualInterview";

export default function StatsCard({ id }) {

    // Interviews handled by this mentor 
    const interview = Interviews.filter((i) => i.mentor === id);

    // Total interviews conducted
    const interviewCount = interview.length;

    // Total unique students handled by this mentor : total students who attend interview by under this mentor
    const studs = [
        ...new Set(
            interview.flatMap((i) => i.studentsAttended || [])
        ),
    ];

    const studscount = studs.length;

    // total Unique students who placed under this mentor 
    const placed = [
        ...new Set(
            interview.flatMap((i) => i.studentsPlaced || [])
        ),
    ];

    const placedCount = placed.length;

    //placement rate calculated : students placed from students  handled

    const successRate =
        studscount > 0
            ? ((placedCount / studscount) * 100).toFixed(1)
            : 0;

    const stats = [
        {
            title: "Total Interviews",
            value: interviewCount,
            description: "Interviews conducted",
            icon: ClipboardDocumentListIcon,
            bg: "bg-indigo-50",
            iconBg: "bg-indigo-100",
            iconColor: "text-indigo-600",
        },
        {
            title: "Students Handled",
            value: studscount,
            description: "Unique students interviewed",
            icon: UsersIcon,
            bg: "bg-blue-50",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
        },
        {
            title: "Placed Students",
            value: placedCount,
            description: "Students successfully placed",
            icon: TrophyIcon,
            bg: "bg-green-50",
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
        },
        {
            title: "Placement Rate",
            value: `${successRate}%`,
            description: "Overall placement success",
            icon: ChartBarIcon,
            bg: "bg-purple-50",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className={`rounded-xl border border-gray-100 ${stat.bg} p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
                    >
                        <div className="flex items-start justify-between">

                            {/* Content */}
                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    {stat.title}
                                </p>

                                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                                    {stat.value}
                                </h2>

                                <p className="mt-1 text-xs text-gray-500">
                                    {stat.description}
                                </p>
                            </div>

                            {/* Icon */}
                            <div
                                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg}`}
                            >
                                <Icon
                                    className={`h-6 w-6 ${stat.iconColor}`}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}