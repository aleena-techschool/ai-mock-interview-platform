import { AnalyticsData } from "../AnalyticsData";
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";

export default function ActiveInactiveBatch(){

    const courseWiseBatches=AnalyticsData.courseWiseBatches

    return(

        <div className="w-1/2 h-[350px] rounded-2xl border border-gray-100 bg-white 
        p-3 shadow-sm">
             {/* Header */} 
             <div className="mb-6">
                 <h2 className="text-lg font-semibold text-gray-800"> 
                    Course-wise Batch Status
                     </h2>
                      <p className="text-sm text-gray-500">
                         Active and inactive batches across each course 
                         </p>
                          </div>
                           {/* Chart */}
                            <div className="h-[250px] w-full"> 
                                <ResponsiveContainer width="100%" height="100%">
                                     <BarChart data={courseWiseBatches} 
                                     margin={{ top: 10, right: 20, left: 0, bottom: 10, }}
                                      barGap={8} > 
                                      <CartesianGrid strokeDasharray="3 3" vertical={false} /> 
                                      <XAxis dataKey="courseName" tick={{ fontSize: 12 }} 
                                      axisLine={false} tickLine={false} />
                                       <YAxis allowDecimals={false} axisLine={false} tickLine={false} />
                                        <Tooltip />
                                         <Legend />
                                          <Bar dataKey="activeBatches" name="Active Batches"
                                           fill="#10B981" radius={[6, 6, 0, 0]} barSize={35} /> 
                                          <Bar dataKey="inactiveBatches" name="Inactive Batches"
                                           fill="#94A3B8" radius={[6, 6, 0, 0]} barSize={35} /> 
                                           </BarChart>
                                            </ResponsiveContainer>
                                             </div> 
                                             </div>
    )
}