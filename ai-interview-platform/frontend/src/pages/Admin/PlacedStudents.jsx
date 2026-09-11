import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import StudentTable from "../../features/Admin/StudentManagement/StudentTable";
import { useParams } from "react-router-dom";
import { batchData } from "../../mock/student management/batch";
import { courseData } from "../../mock/student management/course";
import { mentors } from "../../mock/student management/mentorDetails";
import { placement } from "../../mock/student management/mentorDetails";
import AdminTopBar from "../../features/Admin/Dashboard/Topbar";


export default function PlacedStudents() {
    const { batchId } = useParams();
    

    console.log("placement batch:", batchId);

    // Find selected batch
    const selectedBatch = batchData.find(
        (batch) => String(batch.batchId) === String(batchId)
    );
    const trainerId=selectedBatch.trainerId
    const placementId=selectedBatch.Placement

    const trainer=mentors.find(
        (m) => String(m.employeeId) === String(trainerId)
    );

    const p_trainer=placement.find(
        (m) => String(m.employeeId) === String(placementId)
    );


    // Find course of selected batch
    const selectedCourse = courseData.find(
        (course) =>
            String(course.courseId) ===
            String(selectedBatch?.courseId)
    );

    if (!selectedBatch) {
        return (
            <div className="flex h-screen bg-gray-50">
                <AdminSidebar />
                <div className="flex-1 flex flex-col relative overflow-visible">
                                    <div className="relative z-10">
                                        <AdminTopBar />
                                    </div>
            
                </div>
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Batch not found
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            The selected batch does not exist.
                        </p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="relative flex h-screen overflow-hidden bg-gray-50">

            <AdminSidebar />
            <div className="flex-1 flex flex-col relative overflow-visible">
                                    <div className="relative z-10">
                                        <AdminTopBar />
                                    </div>
            
              

            <main className="flex-1 min-h-0 overflow-y-auto">


                <div className="px-6 pt-6 pb-6">

                    <section className="bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-5">

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                            {/* Batch Information */}
                            <div className="flex items-center gap-4">

                                {/* Course Icon */}
                                <div className="
                                            w-11 h-11
                                            rounded-lg
                                            bg-emerald-50
                                            text-emerald-600
                                            flex items-center justify-center
                                            font-semibold
                                            text-lg
                                            shrink-0
                                        ">
                                    {selectedCourse?.name?.charAt(0)?.toUpperCase() || "C"}
                                </div>

                                <div>
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-lg font-semibold text-gray-900">
                                            {selectedBatch.name}
                                        </h1>

                                                <span className="
                                                        px-2 py-0.5
                                                        rounded-full
                                                        bg-green-50
                                                        text-green-700
                                                        text-xs
                                                        font-medium
                                                    ">
                                            {selectedBatch.status}
                                        </span>
                                    </div>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {selectedCourse?.name || "Course"}
                                    </p>
                                </div>

                            </div>


                            {/* Details */}
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">

                                {/* Batch ID */}
                                <div>
                                    <p className="text-xs text-gray-400">
                                        Batch ID
                                    </p>
                                    <p className="mt-0.5 text-sm font-medium text-gray-800">
                                        {selectedBatch.batchId}
                                    </p>
                                </div>

                                {/* Trainer */}
                                <div>
                                    <p className="text-xs text-gray-400">
                                        Leading Trainer
                                    </p>
                                    <p className="mt-0.5 text-sm font-medium text-gray-800">
                                        {trainer.name || "-"}
                                    </p>
                                </div>

                                 {/* Placement trainer */}
                                <div>
                                    <p className="text-xs text-gray-400">
                                        Placement Trainer
                                    </p>
                                    <p className="mt-0.5 text-sm font-medium text-gray-800">
                                        {p_trainer.name || "-"}
                                    </p>
                                </div>

                                {/* Time */}
                                <div>
                                    <p className="text-xs text-gray-400">
                                        Class Time
                                    </p>
                                    <p className="mt-0.5 text-sm font-medium text-gray-800">
                                        {selectedBatch.time || "-"}
                                    </p>
                                </div>

                                {/* Status */}
                                <div>
                                    <p className="text-xs text-gray-400">
                                        Status
                                    </p>

                                    <div className="flex items-center gap-1.5 mt-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-sm font-medium text-gray-800">
                                            {selectedBatch.status}
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>


                    <div className="mt-6">

                        <StudentTable
                            selectedBatchId={batchId}
                        />

                    </div>

                </div>

            </main>
              </div>

        </div>
    );
}