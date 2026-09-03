const stats = [
    {
        label: "Total Students",
        value: "123",
        sub: "↑ 12.5% vs last week",
        subColor: "#16a34a",
        icon: "M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441ZM8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z",
        iconBg: "#dcfce7",
        iconColor: "#16a34a",
        chart: [10,15,9,16, 20, 18, 25, 30, 28, 36, 42],
    },
    {
        label: "Total Mentors",
        value: "86",
        sub: "↑ 8.3% vs last week",
        subColor: "#16a34a",
        icon: "M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z",
        iconBg: "#dbeafe",
        iconColor: "#2563eb",
        chart: [15, 20, 18,10,15, 25, 30, 28, 36, 42],
    },
    {
        label: "Active Batches",
        value: "24",
        sub: "↑ 8.3% vs last week",
        subColor: "#16a34a",
        icon: "M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z",
        iconBg: "#ffedd5",
        iconColor: "#ea580c",
        chart: [15, 20, 18, 25, 30, 28, 36, 42],
    },
    {
        label: "Completed Batches",
        value: "24",
        sub: "↑ 8.3% vs last week",
        subColor: "#16a34a",
        icon: "M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z",
        iconBg: "#ede9fe",
        iconColor: "#7c3aed",
        chart: [15, 20, 18, 25,20,18, 30, 28, 36, 42],
    },

    {
        label: "Interview Conducted",
        value: "24",
        sub: "↑ 8.3% vs last week",
        subColor: "#16a34a",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        iconBg: "#ede9fe",
        iconColor: "#7c3aed",
        chart: [15, 20, 18, 25, 30, 28, 36, 42],
    },
];

export default function AdminStatsRow() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {stats.map((s) => (
                <div
                    key={s.label}
                    className="rounded-2xl p-4 relative overflow-hidden"
                    style={{
                        background: "rgba(255,255,255,0.9)",
                        border: "1px solid rgba(22,163,74,0.1)",
                        boxShadow: "0 2px 12px rgba(22,163,74,0.06)",
                    }}
                >
                    {/* Top content */}
                    <div className="flex items-start gap-3">

                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: s.iconBg }}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke={s.iconColor}
                                strokeWidth={1.8}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={s.icon}
                                />
                            </svg>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400 font-medium">
                                {s.label}
                            </p>

                            <p className="text-xl font-bold text-gray-900 mt-0.5 leading-tight">
                                {s.value}
                            </p>

                            <p
                                className="text-xs mt-0.5 font-medium"
                                style={{ color: s.subColor }}
                            >
                                {s.sub}
                            </p>
                        </div>

                    </div>

                    {/* Growing Graph Drawing */}
                    <div className="mt-3 h-10 w-full">
                        <svg
                            viewBox="0 0 120 40"
                            className="w-full h-full"
                            preserveAspectRatio="none"
                        >
                            <polyline
                                points={s.chart
                                    //converts chart values into SVG coordinates to draw the graph line
                                    .map((point, index) => {
                                        const x = (index / (s.chart.length - 1)) * 120;
                                        const max = Math.max(...s.chart);
                                        const min = Math.min(...s.chart);

                                        const y =
                                            35 -
                                            ((point - min) / (max - min || 1)) * 28;

                                        return `${x},${y}`;
                                    })
                                    .join(" ")}
                                fill="none"
                                stroke={s.iconColor}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );
}