

export default function StatsCard({ data }) {

    const {
        totalInterviews,
        averageScore,
        technicalScore,
        behavioralScore
    } = data;

    const stats = [
        {
            title: "Total Interviews",
            value: totalInterviews,
            suffix: ""
        },
        {
            title: "Average Score",
            value: averageScore,
            suffix: "%"
        },
        {
            title: "Technical Score",
            value: technicalScore,
            suffix: "%"
        },
        {
            title: "Behavioral Score",
            value: behavioralScore,
            suffix: "%"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {stats.map((stat, index) => (
        <div
            key={stat.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            {/* Decorative background */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-50 opacity-70 transition-transform duration-300 group-hover:scale-125" />

            <div className="relative z-10">
                {/* Icon / Number indicator */}
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">
                        {stat.title}
                    </p>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        {index === 0 && "📊"}
                        {index === 1 && "⭐"}
                        {index === 2 && "💻"}
                        {index === 3 && "🧠"}
                    </div>
                </div>

                {/* Value */}
                <div className="mt-4 flex items-baseline gap-1">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                        {stat.value}
                    </h2>

                    {stat.suffix && (
                        <span className="text-sm font-medium text-gray-400">
                            {stat.suffix}
                        </span>
                    )}
                </div>

                {/* Bottom indicator */}
                <div className="mt-4 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div
                            className="h-full rounded-full bg-blue-500 transition-all duration-500"
                            style={{
                                width: `${Math.min(
                                    Number(stat.value) || 50,
                                    100
                                )}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>
    );
}