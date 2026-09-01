
import { useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../features/dashboard/Sidebar";
import TopBar from "../features/dashboard/TopBar";

import { interviewResults } from "../mock/interviewResultData";

import InterviewResultHeader from "../features/interviews/interviewHistory/InterviewResultHeader";
import InterviewResultDetails from "../features/interviews/interviewHistory/InterviewResultDetails";
import PerformanceSummary from "../features/interviews/interviewHistory/PerformanceSummary";
import InterviewQusetionAnswer from "../features/interviews/interviewHistory/InterviewQuestionAnswer";

export default function InterviewResultDetailsPage() {
  const { id } = useParams();

  // Active tab
  const [activeTab, setActiveTab] = useState("Overview");

  const interview = interviewResults.find(
    (item) => String(item.id) === String(id)
  );

  /* Interview Not Found */
  if (!interview) {
    return (
      <div className="flex h-screen overflow-hidden bg-gray-50">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar />

          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Interview not found
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                The selected interview could not be found.
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #ffffff 100%)",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <main className="flex-1 overflow-y-auto px-6 py-5">

          {/* Header + Tabs */}
          <InterviewResultHeader
            interview={interview}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* ==================================
              TAB CONTENT
          ================================== */}

          {activeTab === "Overview" && (
            <div className="bg-white border border-gray-100 p-6">
              <PerformanceSummary interview={interview} />
            </div>
          )}

          {activeTab === "Questions" && (
            <div className="bg-white border border-gray-100 p-6">
              <InterviewQusetionAnswer interview={interview} />
            </div>
          )}
{/* 
          {activeTab === "Performance" && (
            <div className="bg-white border border-gray-100 p-6">
              <PerformanceSummary interview={interview} />
            </div>
          )} */}

          {activeTab === "Feedback" && (
            <InterviewResultDetails interview={interview} />
          )}

        </main>
      </div>
    </div>
  );
}

