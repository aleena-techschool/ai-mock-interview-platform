import { AnalyticsData } from "../AnalyticsData";
import { dummyUsers } from "../../../../mock/authData";


export default function PlacementCards(){

    const compltedstuds = AnalyticsData.inactiveStuds;
const totalComplted = compltedstuds.length;

const placed = dummyUsers.filter((s) => s.placed === true);
const totalPlaced = placed.length;

const notPlaced = compltedstuds.filter((s) => s.placed === false);
const totalNotPlaced = notPlaced.length;

const placementRate =
  totalComplted > 0 ? ((totalPlaced / totalComplted) * 100).toFixed(1) : 0;

const notPlacedRate =
  totalComplted > 0
    ? ((totalNotPlaced / totalComplted) * 100).toFixed(1)
    : 0;

return (
  <div className="grid grid-cols-4 gap-4 px-10 pt-6">

    {/* Completed Students */}
    <div className="bg-white rounded-xl border border-gray-100 px-5 py-4 shadow-sm">
      <p className="text-sm text-gray-500">Completed Students</p>

      <div className="flex items-end justify-between mt-2">
        <h2 className="text-2xl font-semibold text-gray-800">
          {totalComplted}
        </h2>

        <span className="text-xs text-gray-500">
          Total Completed students
        </span>
      </div>
    </div>

    {/* Placed Students */}
    <div className="bg-white rounded-xl border border-gray-100 px-5 py-4 shadow-sm">
      <p className="text-sm text-gray-500">Placed Students</p>

      <div className="flex items-end justify-between mt-2">
        <h2 className="text-2xl font-semibold text-green-600">
          {totalPlaced}
        </h2>

        <span className="text-xs font-medium text-green-600">
          {placementRate}%
        </span>
      </div>
    </div>

    {/* Not Placed Students */}
    <div className="bg-white rounded-xl border border-gray-100 px-5 py-4 shadow-sm">
      <p className="text-sm text-gray-500">Not Placed Students</p>

      <div className="flex items-end justify-between mt-2">
        <h2 className="text-2xl font-semibold text-orange-500">
          {totalNotPlaced}
        </h2>

        <span className="text-xs font-medium text-orange-500">
          {notPlacedRate}%
        </span>
      </div>
    </div>


    <div className="bg-white rounded-xl border border-gray-100 px-5 py-4 shadow-sm">
      <p className="text-sm text-gray-500">Placement Rate</p>

      <div className="flex items-end justify-between mt-2">
        <h2 className="text-2xl font-semibold text-blue-500">
            

          {placementRate}
        </h2>

        <span className="text-xs font-medium text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
        </span>

        
      </div>
    </div>

  </div>
);
}