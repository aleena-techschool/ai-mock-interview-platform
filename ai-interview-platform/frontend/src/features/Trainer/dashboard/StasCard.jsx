import {
  AcademicCapIcon,
  UsersIcon,
  CheckCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export default function TrainerStatsCard({
  batches,
  students,
  completed,
  placed,
}) {
  const stats = [
    {
      title: "Active Batches",
      value: batches,
      description: "Currently running",
      icon: AcademicCapIcon,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-500",
    },
    {
      title: "Active Students",
      value: students,
      description: "Students in active batches",
      icon: UsersIcon,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-purple-500",
    },
    {
      title: "Completed Batches",
      value: completed,
      description: "Successfully completed",
      icon: CheckCircleIcon,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-indigo-500",
    },
    {
      title: "Placement Batches",
      value: placed,
      description: "Placement support enabled",
      icon: BriefcaseIcon,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-500",
    },
  ];

  console.log("stas :",batches,students,placed,completed)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className={`group flex items-center gap-4 rounded-xl border border-gray-100 border-b-2 ${stat.borderColor} bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
          >
            {/* Icon */}
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${stat.iconBg}`}
            >
              <Icon className={`h-5 w-5 ${stat.iconColor}`} />
            </div>

            {/* Details */}
            <div className="min-w-0">
              <p className="text-xs font-medium text-gray-500">
                {stat.title}
              </p>

              <div className="mt-0.5 flex items-baseline gap-2">
                <h3 className="text-2xl font-bold leading-tight text-gray-900">
                  {stat.value}
                </h3>
              </div>

              <p className="mt-0.5 truncate text-[11px] text-gray-400">
                {stat.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}