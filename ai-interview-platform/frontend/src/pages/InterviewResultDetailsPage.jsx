
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
//for student
import Sidebar from "../features/dashboard/Sidebar";
import TopBar from "../features/dashboard/TopBar";
//for placement
import PlacementSidebar from "../features/Placement/Dashboard/Sidebar";
import PlacementTopBar from "../features/Placement/Dashboard/TopBar";

import { interviewResults } from "../mock/interviewResultData";

import InterviewResultHeader from "../features/interviews/interviewHistory/InterviewResultHeader";
import InterviewResultDetails from "../features/interviews/interviewHistory/InterviewResultDetails";
import PerformanceSummary from "../features/interviews/interviewHistory/PerformanceSummary";
import InterviewQusetionAnswer from "../features/interviews/interviewHistory/InterviewQuestionAnswer";
import TrainerSidebar from "../features/Trainer/dashboard/Sidebar";
import TrainerTopBar from "../features/Trainer/dashboard/Topbar";

// this page used by student , plcement and trainer module using location
// we will find out how it hsould be displayed


export default function InterviewResultDetailsPage() {
  const { id } = useParams();
  const {studId}=useParams()

  const location=useLocation()
  const isStudent=!((location.pathname.includes("placement"))||(location.pathname.includes("trainer")))
  // console.log(isStudent)

  const isPlacement=(location.pathname.includes("placement"))

  const isTrainer=(location.pathname.includes("trainer"))

  console.log("isTrainer :",isTrainer)
 

  // Active tab
  const [activeTab, setActiveTab] = useState("Overview");

  const interview = interviewResults.find(
    (item) => String(item.id) === String(id)
  );

  /* Interview Not Found */
  if (!interview) {
    return (
      <div className="flex h-screen overflow-hidden bg-gray-50">
        {
          isStudent && <Sidebar />
        }

        {
          isPlacement && <PlacementSidebar/>
        }

        {
          isTrainer && <TrainerSidebar/>
        }
       

        <div className="flex-1 flex flex-col overflow-hidden">
          
          {
            isStudent &&<TopBar />
          }

          {
            isPlacement && <PlacementTopBar/>
          }

          {
            isTrainer && <TrainerTopBar/>
          }

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
      {  isStudent &&
      <Sidebar /> 
      }

      {
        isPlacement &&
        <PlacementSidebar/>
      }

      {
        isTrainer &&
        <TrainerSidebar/>
      }

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        

       <main
  className={`flex-1 overflow-y-auto px-6 py-5 ${
    (isPlacement || isTrainer) ? "bg-blue-50" : ""
  }`}
>

          {/* Header + Tabs */}
          <InterviewResultHeader
            interview={interview}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isStudent={isStudent}
            studId={studId}
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

