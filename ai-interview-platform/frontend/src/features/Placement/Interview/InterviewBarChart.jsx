import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
} from "recharts";

const BAR_COLORS = [
    "#6366F1", // Indigo
    "#10B981", // Green
    "#F59E0B", // Amber
    "#EF4444", // Red
    "#8B5CF6", // Purple
    "#06B6D4", // Cyan
];

export default function InterviewBarChart({ data }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-800">
                    Interviews by Type
                </h3>

                <p className="text-sm text-gray-500">
                    Interview distribution by type
                </p>
            </div>

            <div className="w-full h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -15,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="type"
                            tick={{ fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            allowDecimals={false}
                            tick={{ fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            cursor={{ fill: "rgba(0,0,0,0.04)" }}
                            formatter={(value, name, props) => [
                                `${value} (${props.payload.percentage}%)`,
                                "Interviews",
                            ]}
                        />

                        <Bar
                            dataKey="count"
                            radius={[6, 6, 0, 0]}
                            barSize={45}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={BAR_COLORS[index % BAR_COLORS.length]}
                                />
                            ))}

                            <LabelList
                                dataKey="percentage"
                                position="top"
                                formatter={(value) => `${value}%`}
                                style={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}