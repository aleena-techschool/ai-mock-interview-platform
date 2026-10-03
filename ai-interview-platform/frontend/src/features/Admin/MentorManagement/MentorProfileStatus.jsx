
export default function MentorProfileStatus({totalBatches,completedBatches,totalStudents}){



    return(
        <div className="grid grid-cols-1 gap-5 px-6 mt-6 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard 
            title="Total Batches" 
            value={totalBatches}
            description="Currently handling."
            icon={<BatchIcon/>}
            iconBg="bg-emerald-50"
            iconColor="text-emerald-600" />

            <StatCard 
            title="Total Students" 
            value={totalStudents}
            description="From active batches."
            icon={<StudentIcon/>}
            iconBg="bg-blue-50"
            iconColor="text-blue-600" />

            <StatCard 
            title="Completed Batches" 
            value={completedBatches}
            description="currently handling"
            icon={<Completed/>}
            iconBg="bg-orange-50"
            iconColor="text-orange-500" />

            <StatCard 
            title="FeedBack Rating" 
            value="2"
            description="currently handling"
            icon={<FeedbackIcon/>}
            iconBg="bg-purple-50"
            iconColor="text-purple-600" />
        </div>



    )

}

function StatCard({
    title,
    value,
    description,
    icon,
    iconBg,
    iconColor,
 
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
                    <div className="min-w-0">
                        
                        {/* Title + Icon */}
                        <div className="flex items-center justify-between gap-3">
                            <p className="truncate text-sm font-medium text-gray-500">
                                {title}
                            </p>

                            {/* Icon - Same line as title */}
                            <div
                                className={`
                                    flex h-12 w-12 shrink-0
                                    items-center justify-center
                                    rounded-xl ${iconBg} ${iconColor}
                                `}
                            >
                                {icon}
                            </div>
                        </div>

                        {/* Value */}
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            {value}
                        </h2>

                        {/* Description */}
                        <p className="truncate text-xs text-gray-400">
                            {description}
                        </p>
                    </div>
                </div>
    );
}

function StudentIcon() {
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

function BatchIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path strokeLinecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>

    )
}

function Completed(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>

    )
}

function FeedbackIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    )
}


