import {  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Legend  } from "recharts";



import { dummyUsers } from "../../../../mock/authData";
import { batchData } from "../../../../mock/student management/batch";

export default function PlacementTrend(){

   const getLastSixMonthsPlacementAnalytics = (students, batches) => {

    const today = new Date();

    const result = [];

    for (let i = 5; i >= 0; i--) {

        const date = new Date(
            today.getFullYear(),
            today.getMonth() - i,
            1
        );

        const year = date.getFullYear();
        const month = date.getMonth();

        // End of selected month
        const monthEnd = new Date(year, month + 1, 0);

        // Batches completed up to this month
        const completedBatchIds = batches
            .filter((batch) => {

                if (!batch.end) return false;

                const [day, monthNum, batchYear] =
                    batch.end.split("-").map(Number);

                const batchEndDate = new Date(
                    batchYear,
                    monthNum - 1,
                    day
                );

                return batchEndDate <= monthEnd;

            })
            .map((batch) => batch.batchId);


        // Students belonging to completed batches
        const completedStudents = students.filter((student) =>
            completedBatchIds.includes(student.batchId)
        );


        const totalCompleted = completedStudents.length;

        const placed = completedStudents.filter(
            (student) => student.placed === true
        );

        const notPlaced = completedStudents.filter(
            (student) => student.placed === false
        );


        result.push({
            month: date.toLocaleString("en-US", {
                month: "short"
            }),

            year,

            totalCompleted,

            placed: placed.length,

            notPlaced: notPlaced.length,

            
        });
    }

    return result;
};

const monthlyAnalytics =
    getLastSixMonthsPlacementAnalytics(
        dummyUsers,
        batchData
    );

    return(
        <div className="bg-white rounded-xl w-full border border-gray-100 shadow-sm p-5">

            <div className="mb-3">
                <h2 className="text-base font-semibold text-gray-800">
                    Monthly Placement
                </h2>

                <p className="text-xs text-gray-500">
                    Placed vs Not Placed Students
                </p>
            </div>

            <div className="w-full h-[280px]">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart
                        data={monthlyAnalytics}
                        margin={{
                            top: 10,
                            right: 20,
                            left: 0,
                            bottom: 5
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis
                            allowDecimals={false}
                            tick={{ fontSize: 12 }}
                            label={{
                                value: "Placement Count",
                                angle: -90,
                                position: "insideLeft",
                                style: {
                                    textAnchor: "middle",
                                    fontSize: 12
                                }
                            }}
                        />

                        <Tooltip />

                        <Legend />

                        {/* Placed */}
                        <Line
                            type="linear"
                            dataKey="placed"
                            name="Placed"
                            stroke="#16a34a"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />

                        {/* Not Placed */}
                        <Line
                            type="linear"
                            dataKey="notPlaced"
                            name="Not Placed"
                            stroke="#f97316"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>
        </div>
    )
}