import { AnalyticsData } from "../AnalyticsData"
import { PieChart, Cell, Pie, ResponsiveContainer } from 'recharts'


export default function CoureWiseStud() {

    const courseWiseStudents = AnalyticsData.courseWiseStudents
    const totalStudents = AnalyticsData.totalStuds
    // Add percentage to each course 
    const chartData = courseWiseStudents.map((course) =>
    ({
        ...course, percentage:
            totalStudents === 0 ? 0 :
                ((course.studentCount / totalStudents) * 100).toFixed(1),
    }));
    // Different color for each course 
    const COLORS =
        ["#6366F1",
            "#10B981",
            "#F59E0B",
            "#EF4444",
            "#8B5CF6",];

    return (
        <div className="w-1/2  rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Students by Course
                </h2>
                <p className="text-sm text-gray-500">
                    Distribution of students across different courses
                </p> </div> {/* THREE COLUMNS */}
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">

    {/* PIE CHART */}
    <div className="flex h-[220px] w-full items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={chartData}
                    dataKey="studentCount"
                    nameKey="courseName"
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={95}
                    paddingAngle={3}
                >
                    {chartData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    </div>

    {/* COURSE + PERCENTAGE */}
    <div className="flex flex-col gap-4">

        {chartData.map((course, index) => (
            <div
                key={course.courseId}
                className="flex items-center justify-between"
            >

                {/* Course */}
                <div className="flex min-w-0 items-center gap-3">
                    <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{
                            backgroundColor:
                                COLORS[index % COLORS.length],
                        }}
                    />

                    <span className="truncate text-sm font-medium text-gray-700">
                        {course.courseName}
                    </span>
                </div>

                {/* Percentage */}
                <span className="ml-4 shrink-0 text-sm font-semibold text-gray-800">
                    {course.percentage}%
                </span>

            </div>
        ))}

    </div>

</div>
        </div>
    )
}