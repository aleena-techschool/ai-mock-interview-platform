const activity = [
    {
        activityType: "Interview Scheduled",
        activityDescription: "An interview has been scheduled for John Doe.",
        activityTime: "2023-08-15 10:30 AM",
        icon: "M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z",
        icon_color: "#2563eb"
    },
    {
        activityType: "New Student Registered",
        activityDescription: "An interview has been scheduled for John Doe.",
        activityTime: "2023-08-15 10:30 AM",
        icon: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
        icon_color: "#16a34a"
    },
    {
        activityType: "Batch Completed",
        activityDescription: "An interview has been scheduled for John Doe.",
        activityTime: "2023-08-15 10:30 AM",
        icon: "M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z",
        icon_color: "#ea580c"
    },
    {
        activityType: "Interview Scheduled",
        activityDescription: "An interview has been scheduled for John Doe.",
        activityTime: "2023-08-15 10:30 AM",
        icon: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
        icon_color: "#7c3aed"
    },
    {
        activityType: "New Mentor Added",
        activityDescription: "An interview has been scheduled for John Doe.",
        activityTime: "2023-08-15 10:30 AM",
        icon: "M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z",
        icon_color: "#2563eb"
    },
]

export default function RecentActivity() {
    return (
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-semibold text-gray-800">
                    Recent Activity
                </h2>

                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    View All
                </button>
            </div>

            {/* Activity List */}
            <div className="space-y-5">
                {activity.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4"
                    >
                        {/* Icon */}
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                            style={{
                                backgroundColor: `${item.icon_color}15`,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                stroke={item.icon_color}
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={item.icon}
                                />
                            </svg>
                        </div>

                        {/* Activity Content */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-800">
                                {item.activityType}
                            </h3>

                            <p className="flex items-center justify-between text-sm text-gray-500 mt-1">
                                <span>{item.activityDescription}</span>

                                <span className="text-xs text-gray-400 whitespace-nowrap ml-4">
                                    {item.activityTime}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}