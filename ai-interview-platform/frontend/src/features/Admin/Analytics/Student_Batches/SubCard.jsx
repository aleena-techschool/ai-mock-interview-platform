import { AnalyticsData } from "../AnalyticsData";
import { dummyUsers } from "../../../../mock/authData";
export default function SubCard() {
    const totalActiveStud = AnalyticsData.activeStuds.length;
    const totalInactiveStud=AnalyticsData.inactiveStuds.length ;
    const totalStud = dummyUsers.length;
    const activeBatch = AnalyticsData.activeBatches.length;
    const inactiveBatch = AnalyticsData.inactiveBatches.length;
    const totalBatch = activeBatch + inactiveBatch;
    return (
        <div className="w-full mb-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Total Students */}
                <div className="flex flex-col justify-center rounded-xl bg-blue-50 p-4">
                    <h3 className="text-sm font-medium text-gray-500"> Total Students </h3>
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">
                        {totalStud}
                    </h1>
                  
                </div> {/* Active Students */}
                <div className="flex flex-col justify-center rounded-xl bg-emerald-50 p-4">
                    <h3 className="text-sm font-medium text-gray-500">
                        Active / Complted Students
                    </h3>
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">
                        {totalActiveStud} /{totalInactiveStud}
                    </h1>
                  
                </div>
                {/* Total Batches */}
                <div className="flex flex-col justify-center rounded-xl bg-purple-50 p-4">
                    <h3 className="text-sm font-medium text-gray-500">
                        Total Batches
                    </h3>
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">
                        {totalBatch}
                    </h1>
                   
                </div>
                {/* Active / Inactive Batches */}
                <div className="flex flex-col justify-center rounded-xl bg-amber-50 p-4">
                    <h3 className="text-sm font-medium text-gray-500">
                        Active / Completed Batches
                    </h3>
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">
                        {activeBatch}/{inactiveBatch}
                    </h1>
                    
                </div>
            </div>
        </div>
    );
}