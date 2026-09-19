import { LineChart, Line,XAxis,YAxis,CartesianGrid,
  Tooltip,Legend,ResponsiveContainer,} from "recharts";

import { AnalyticsData } from "../AnalyticsData";

import { interviewsData } from "../../../../mock/interviewData";



export default function WeekTrend(){
    const data=AnalyticsData.getWeeklyInterviewAnalytics(interviewsData)

    
            return (
    <div className="bg-white rounded-xl p-6 shadow-sm w-full  h-[350px]">
      
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        Interview Analytics
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Weekly interview status for the current month
      </p>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="week" />

          <YAxis allowDecimals={false} />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="assigned"
            name="Assigned"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="completed"
            name="Completed"
            stroke="#22C55E"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="incomplete"
            name="Incomplete"
            stroke="#EF4444"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="upcoming"
            name="Upcoming"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
        
