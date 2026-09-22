import { useCallback, useState } from "react";
import CourseCard from "../../Admin/StudentManagement/CourseCard";
import CourseSelection from "../../Admin/StudentManagement/CourseSelection";
import StudentTable from "../../Admin/StudentManagement/StudentTable";
import { useLocation } from "react-router-dom";

export default function ActiveBatches(){

    const [selectedBatchId, setSelectedBatchId] = useState(null);
    const handleBatchSelect = useCallback((batchId) => {
        setSelectedBatchId(batchId);
        
    }, []);

     const location=useLocation()
    const path=location.pathname
    const isAdmin= !(path==="/placement/dashboard")

    return(

    <div className="flex-1 min-h-0 overflow-y-auto bg-gradient-to-br from-sky-50 via-blue-50 to-white">
    
          {/* Course Summary */}
          <CourseCard />
    
          {/* Course + Batch */}
          <div className="mt-6 px-6">
            <CourseSelection
              onBatchSelect={handleBatchSelect}
              isAdmin={isAdmin}
            />
          </div>
    
          {/* Student Table */}
          <div className="mt-6 px-6 pb-6">
            <StudentTable
              selectedBatchId={selectedBatchId}
              isAdmin={isAdmin}
            />
          </div>
    
        </div>

        
    )

}