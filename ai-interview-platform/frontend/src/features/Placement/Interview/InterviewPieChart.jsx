import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const COLORS = [
    "#6366F1",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#06B6D4",
    "#A855F7",
];

export default function InterviewPieChart({ data }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm w-full ">
            {/* Heading */}
            <div className="mb-3  border border-gray-100">
                <h3 className="text-base font-semibold text-gray-800">
                    Number of Interviews Attended by Type
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                    Distribution of interviews based on interview type
                </p>
            </div>

            {/* Chart */}
            <div className="w-full h-[270px] mb-2">
                <ResponsiveContainer width="100%"  height="100%">
                    <PieChart>
                       <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="45%"
    outerRadius={90}
    innerRadius={50}
    paddingAngle={3}
    labelLine={false}
    label={({ cx, cy, midAngle, innerRadius, outerRadius, value, percent }) => {
        const RADIAN = Math.PI / 180;

        const radius =
            innerRadius + (outerRadius - innerRadius) * 0.5;

        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={11}
                fontWeight={600}
            >
                <tspan x={x} dy="-6">
                    {value}
                </tspan>

                <tspan x={x} dy="14">
                    {(percent * 100).toFixed(0)}%
                </tspan>
            </text>
        );
    }}
>
    {data.map((entry, index) => (
        <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
        />
    ))}
</Pie>

                        <Tooltip
                            contentStyle={{
                                borderRadius: "8px",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                            }}
                            formatter={(value, name) => [
                                `${value} interviews`,
                                name,
                            ]}
                        />

                        <Legend
                            verticalAlign="bottom"
                            height={28}
                            iconType="circle"
                            wrapperStyle={{
                                fontSize: "12px",
                                paddingTop: "1px",
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}