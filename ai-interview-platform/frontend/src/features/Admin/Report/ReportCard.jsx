import { ChevronRight, Users, FileCheck, CloudDownload,Download,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";


import { exportPlatformReport } from "./PlatformReport.jsx";
// Theme styles
const themes = {
  blue: {
    icon: "bg-blue-100 text-blue-600",
    content: "border-blue-100 bg-blue-50",
    check: "text-blue-600",
    button: "border-blue-300 text-blue-600 hover:bg-blue-50",
  },

  purple: {
    icon: "bg-purple-100 text-purple-600",
    content: "border-purple-100 bg-purple-50",
    check: "text-purple-600",
    button: "border-purple-300 text-purple-600 hover:bg-purple-50",
  },

  green: {
    icon: "bg-green-100 text-green-600",
    content: "border-green-100 bg-green-50",
    check: "text-green-600",
    button: "border-green-300 text-green-600 hover:bg-green-50",
  },

  orange: {
    icon: "bg-orange-100 text-orange-600",
    content: "border-orange-100 bg-orange-50",
    check: "text-orange-600",
    button: "border-orange-300 text-orange-600 hover:bg-orange-50",
  },
};

// Report data
const reportData = [
  {
    icon: Users,
    title: "Student Report",
    description: "View and export student-related reports.",
    content: [
      "View all students",
      "Filter students by batch",
      "View active and inactive students",
      "Export student data",
    ],
    theme: "blue",
    action: "student",
  },

  {
    icon: Users,
    title: "Mentor Report",
    description: "View mentor and batch-related information.",
    content: [
      "View all mentors",
      "View assigned batches",
      "Filter mentors by course",
      "Export mentor data",
    ],
    theme: "purple",
    action: "mentor",
  },

  {
    icon: FileCheck,
    title: "Placement Report",
    description: "View placement-related information.",
    content: [
      "View placed students",
      "View not placed students",
      "Filter by batch",
      "Export placement data",
    ],
    theme: "green",
    action: "placement",
  },

  {
    icon: CloudDownload,
    title: "Complete Platform Data",
    description: "Export complete platform-related information.",
    content: [
      "View complete student data",
      "View mentor and batch data",
      "View placement information",
      "Export complete platform data",
    ],
    theme: "orange",
    action: "platform",
  },
];

function ReportCard({ item }) {

// function handlePlatformExport() {

//   if (!month || !year) {
//     alert("Please select month and year");
//     return;
//   }

//   exportPlatformReport(month, year);
// }

  const style = themes[item.theme];
  const Icon = item.icon;

  const navigate = useNavigate();

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  function handleFilterReport() {
    if (item.action === "student") {
      navigate("/admin/student-report");
    }

    if (item.action === "mentor") {
      navigate("/admin/mentor-report");
    }

    if (item.action === "placement") {
      navigate("/admin/placement-report");
    }
  }

  function handlePlatformExport() {
    if (!month || !year) {
      alert("Please select month and year");
      return;
    }

    console.log("Export platform report:", month, year);
    exportPlatformReport(month, year);

    // Your CSV export logic will come here
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

      {/* Header */}
      <div className="flex items-start gap-4">

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${style.icon}`}
        >
          <Icon size={24} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {item.description}
          </p>
        </div>

      </div>

      {/* Report Features */}
      <div
        className={`mt-4 grid grid-cols-2 gap-x-8 gap-y-3 rounded-xl border p-4 ${style.content}`}
      >
        {item.content.map((text, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-sm text-slate-600"
          >
            <span className={`font-semibold ${style.check}`}>
              ✓
            </span>

            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Platform Report */}
      {item.action === "platform" ? (

        <div className="mt-4 rounded-xl border border-orange-100 bg-orange-50 p-4">

          <p className="mb-3 text-sm font-medium text-slate-700">
            Select report period
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">

            {/* Month */}
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-orange-400"
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            {/* Year */}
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-orange-400"
            >
              <option value="">Select Year</option>

                {Array.from(
                  { length: new Date().getFullYear() - 2020 + 1 },
                  (_, index) => {
                    const year = 2020 + index;

                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  }
                )}
            </select>

            {/* Export */}
            <button
              type="button"
              onClick={handlePlatformExport}
              className="flex items-center justify-center gap-2 rounded-lg border border-orange-300 px-4 py-2 text-sm font-medium text-orange-600 transition hover:bg-orange-100"
            >
              <Download size={17} />
              Export
            </button>

          </div>

        </div>

      ) : (

        /* Other Reports */
        <div className="mt-4 flex items-center justify-between">

          <p className="flex items-center gap-2 text-sm font-medium text-slate-600">
            Filter Data To Export
          </p>

          <button
            type="button"
            onClick={handleFilterReport}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition ${style.button}`}
          >
            Filter Report
            <ChevronRight size={17} />
          </button>

        </div>

      )}

    </div>
  );
}

export default function Reports() {
  return (
    <div className="grid grid-cols-1 gap-5 px-4 lg:grid-cols-2">
      {reportData.map((item) => (
        <ReportCard key={item.title} item={item} />
      ))}
    </div>
  );
}