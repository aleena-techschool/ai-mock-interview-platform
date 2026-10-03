import React from "react";

export default function TodayDate() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 shadow-sm">
      <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 002 2v12a2 2 0 002 2z"
        />
      </svg>

      <span>{formattedDate}</span>
    </div>
  );
}