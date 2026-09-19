

import {AnalyticsData} from "../AnalyticsData"

export default function AnalyticStats() {

// Previous month's active batch ,student,placement and interview count are
// Static dummy value for now; will be calculated dynamically
// from  start/end dates when real historical data is available.

  // ---------------- BATCH DETAILS ----------------
  const activeBatch = AnalyticsData.activeBatches

  const totalActiveBatch = activeBatch.length;

  const preMonthBatch = 2;

  const batchRate =
    ((totalActiveBatch - preMonthBatch) / preMonthBatch) * 100;


  // ---------------- STUDENT DETAILS ----------------
  const activeStud = AnalyticsData.activeStuds

  const totalActiveStud = activeStud.length;

  const preActiveStud = 1;

  const studRate =
    ((totalActiveStud - preActiveStud) / preActiveStud) * 100;


  // ---------------- PLACEMENT DETAILS ----------------
  const placementData = AnalyticsData.placementDatas

  const totalPlaced = placementData.length;

  const prePlacement = 1;

  const placementRate =
    ((totalPlaced - prePlacement) / prePlacement) * 100;


  // ---------------- INTERVIEW DETAILS ----------------
  const totalInterview = AnalyticsData.totalInterviews;

  const preInterview = 3;

  const interviewRate =
    ((totalInterview - preInterview) / preInterview) * 100;


  // ---------------- CARD DATA ----------------
  const cards = [
    {
      title: "Total Students",
      value: totalActiveStud,
      rate: studRate,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
        </svg>
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },

    {
      title: "Active Batches",
      value: totalActiveBatch,
      rate: batchRate,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
        </svg>
      ),
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },

    {
      title: "Placement Rate",
      value: totalPlaced,
      rate: placementRate,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },

    {
      title: "Total Interviews",
      value: totalInterview,
      rate: interviewRate,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
        </svg>
      ),
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];


  return (
    <div className="grid  w-full grid-cols-1 gap-5 p-3 sm:grid-cols-2 xl:grid-cols-4 overflow-x-hidden">

      {cards.map((card, index) => {

        const isIncrease = card.rate >= 0;

        return (
          <div
            key={index}
            className="flex min-h-[150px] rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >

            {/* LEFT COLUMN - ICON */}
            <div className="flex w-16 shrink-0 items-start justify-start">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}
              >
                {card.icon}
              </div>
            </div>


            {/* RIGHT COLUMN - DETAILS */}
            <div className="flex flex-1 flex-col">

              {/* TITLE */}
              <h3 className="text-sm font-medium text-gray-500">
                {card.title}
              </h3>

              {/* VALUE */}
              <h1 className="mt-2 text-3xl font-bold text-gray-800">
                {card.value}
              </h1>

              {/* RATE */}
              <div className="mt-2 flex items-center gap-1">

                <span
                  className={`text-sm font-semibold ${
                    isIncrease
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {Math.abs(card.rate).toFixed(1)}%
                </span>

                <span
                  className={`text-sm font-bold ${
                    isIncrease
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {isIncrease ? "↑" : "↓"}
                </span>

              </div>

              {/* COMPARISON */}
              <p className="mt-1 text-xs text-gray-400">
                vs. last month
              </p>

            </div>

          </div>
        );
      })}

    </div>
  );
}
