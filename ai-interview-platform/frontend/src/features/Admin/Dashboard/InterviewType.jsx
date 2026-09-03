import {  PieChart,  Pie,  Cell,  ResponsiveContainer,  Tooltip,} from "recharts";

export default function InterviewType() {
  const data = [
    { name: "Technical", value: 45 },
    { name: "Behavioral", value: 30 },
    { name: "Coding", value: 20 },
    { name: "HR", value: 5 },
  ];

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#ea580c",
    "#7c3aed",
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">

      {/* Header */}
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-800">
          Interviews by Type
        </h2>

        <p className="text-xs text-gray-400 mt-1">
          Distribution of interviews conducted
        </p>
      </div>

      {/* Chart + Legend */}
      <div className="flex items-center">

        {/* Pie Chart */}
        <div className="w-1/2 h-[260px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((item, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => [`${value}%`, "Interviews"]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">
                {total}
              </p>

              <p className="text-xs text-gray-400">
                Total
              </p>
            </div>
          </div>
        </div>

        {/* Right Legend */}
        <div className="w-1/2 space-y-5 pl-4">

          {data.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center justify-between"
            >

              <div className="flex items-center gap-2">

                {/* Color Indicator */}
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                />

                <span className="text-sm text-gray-600">
                  {item.name}
                </span>

              </div>

              {/* Percentage */}
              <span className="text-sm font-semibold text-gray-800">
                {item.value}%
              </span>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}