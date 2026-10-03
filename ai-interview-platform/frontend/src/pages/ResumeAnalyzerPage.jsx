import Sidebar from "../features/dashboard/Sidebar";
import TopBar from "../features/dashboard/TopBar";

import ResumeUploadSection from "../features/resume/resumeAnalyzer/ResumeUploadSection";
import ATSScoreSection from "../features/resume/resumeAnalyzer/ATSScoreSection";
import ResumeTipsSection from "../features/resume/resumeAnalyzer/ResumeTipsSection";

export default function ResumeAnalyzerPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fb]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">

        {/* TOPBAR */}
        <TopBar />

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8">

          {/* PAGE HEADER */}
          <div className="mb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#151b2c]">
              ATS Resume Analyzer
            </h1>

            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Scan your resume against modern Applicant Tracking Systems to
              optimize keyword relevance, formatting, and impact.
            </p>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] gap-6">

            {/* ================= LEFT COLUMN ================= */}
            <div className="min-w-0 space-y-6">

              {/* UPLOAD */}
              <ResumeUploadSection />

              {/* BREAKDOWN + ISSUES */}
              <ATSScoreSection />

            </div>


            {/* ================= RIGHT COLUMN ================= */}
            <div className="min-w-0">

              {/* SCORE + TIPS + CTA */}
              <ResumeTipsSection />

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}