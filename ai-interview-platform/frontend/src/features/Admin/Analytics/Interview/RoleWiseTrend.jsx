import { PieChart,Pie,Cell,Tooltip,
  Legend,ResponsiveContainer,} from "recharts";


import { interviewsData } from "../../../../mock/interviewData";
import { AnalyticsData } from "../AnalyticsData";




export default function RoleWiseTrend(){
    const data = AnalyticsData.getRoleWiseInterviewData(interviewsData);
     const COLORS = [
        "#3B82F6",
        "#8B5CF6",
        "#22C55E",
        "#F59E0B",
        "#EF4444",
        "#06B6D4",
        "#EC4899",
    ];

    
     return (
    <div className="bg-white rounded-xl p-6 shadow-sm w-full h-[350px]">
      <h2 className="text-lg font-semibold text-gray-800">
        Role-wise Interviews
      </h2>

      <p className="text-sm text-gray-500 mb-3">
        Total interviews conducted and assigned by role
      </p>

      <div className="w-full h-[270px]">
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        dataKey="total"
        nameKey="role"
        cx="45%"
        cy="50%"
        outerRadius={100}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip
        formatter={(value, name, props) => {
          const total = data.reduce(
            (sum, item) => sum + item.total,
            0
          );

          const percentage = ((value / total) * 100).toFixed(1);

          return [`${value} (${percentage}%)`, name];
        }}
      />

      <Legend
  layout="vertical"
  align="right"
  verticalAlign="middle"
  content={({ payload }) => {
    const total = data.reduce(
      (sum, item) => sum + item.total,
      0
    );

    return (
      <div className="flex flex-col gap-2">
        {payload.map((entry, index) => {
          const item = data[index];
          const percentage = ((item.total / total) * 100).toFixed(1);

          return (
            <div
              key={entry.value}
              className="flex items-center justify-between gap-4 text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />

                <span className="text-gray-600">
                  {entry.value}
                </span>
              </div>

              <span className="font-medium text-gray-800">
                {percentage}%
              </span>
            </div>
          );
        })}
      </div>
    );
  }}
/>
    </PieChart>
  </ResponsiveContainer>
</div>
    </div>
  );
}
