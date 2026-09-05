import React, { useState,useCallback } from "react";

import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import AdminTopBar from "../../features/Admin/Dashboard/Topbar";
import TodayDate from "../../features/Admin/common/TodayDate";
import PageHeader from "../../features/Admin/common/PageHeader";

import CourseCard from "../../features/Admin/StudentManagement/CourseCard";
import CourseSelection from "../../features/Admin/StudentManagement/CourseSelection";
import StudentTable from "../../features/Admin/StudentManagement/StudentTable";

export default function StudentManagePage() {

const [selectedBatchId, setSelectedBatchId] = useState(null);



// We use useCallback so that the same function is reused
// instead of creating a new function on every render.

// If handleBatchSelect gets recreated on every render,
// CourseSelection may think onBatchSelect has changed.
// Its useEffect can run again and reset the search value to "".

const handleBatchSelect = useCallback((batchId) => {
    setSelectedBatchId(batchId);
    
}, []);



return (
 
<div className=" relative flex h-screen overflow-hidden bg-gray-50">

  {/* Sidebar */}
  <AdminSidebar />

  {/* Right Content */}
  <div className="flex-1 min-w-0 flex flex-col">

    {/* Top Bar */}
    <div className="shrink-0 z-20">
      <AdminTopBar />
    </div>

    {/* Header */}
    <div className="relative shrink-0">
      <PageHeader
        title="Student Management"
        description="Manage students and their details"
      />

      {/* Date */}
       <div className="absolute top-[10px] right-6 z-50 -translate-y-1/2">
        <TodayDate />
    </div>
      
    </div>

    {/* Scrollable Content */}
    <main className="flex-1 min-h-0 overflow-y-auto">

      {/* Course Summary */}
      <CourseCard />

      {/* Course + Batch */}
      <div className="mt-6 px-6">
        <CourseSelection
          onBatchSelect={handleBatchSelect}
        />
      </div>

      {/* Student Table */}
      <div className="mt-6 px-6 pb-6">
        <StudentTable
          selectedBatchId={selectedBatchId}
        />
      </div>

    </main>

  </div>
</div>


  );
}

