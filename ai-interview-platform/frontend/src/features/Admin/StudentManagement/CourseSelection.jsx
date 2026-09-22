import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { courseData } from "../../../mock/student management/course";
import { batchData } from "../../../mock/student management/batch";
import { dummyUsers } from "../../../mock/authData";
import { mentors } from "../../../mock/student management/mentorDetails";

import ActiveBatchList from "./ActiveBatchList";
import InactiveBatchTable from "./InactiveBatchList";
import { useSelector } from "react-redux";




// use selection component is used in admin and placement section
//for admin we need all active nad inactive batches under each course
// for placement we does not need active and inactive toggle there
//  we wnt only active batcehs here but we do not need all active 
// batches only need active batches under Loggined Placement trainer and course selected 
// so we need to check where it come under admin/placement using current location

export default function CourseSelection({ onBatchSelect,isAdmin }) {

    const user = useSelector((state) => state.auth.user);
    
    const mentorId=user? user.mentorId:"MTR011"

    const [selectedCourse, setSelectedCourse] = useState(
        courseData[0]?.courseId || null
    );
    const [batchStatus, setBatchStatus] = useState("Active");
    const [selectedBatch, setSelectedBatch] = useState(null);

    // take current url and check whether it is admin or not
    // const location=useLocation()
    // const path=location.pathname
    // const isAdmin= !(path==="/placement/dashboard")
    




    // Get batches for selected course and status
    const filteredBatches = useMemo(
    () =>
        batchData.filter(
            (batch) =>
                batch.courseId === selectedCourse &&
                batch.status.toLowerCase() === batchStatus.toLowerCase() &&
                (isAdmin || batch.Placement === mentorId)// if isAdmin is True show all batch else only batches where the placement trainer/mentor matches mentorId are shown.
        ),
    [batchData, selectedCourse, batchStatus, isAdmin, mentorId]
);
    // --------------------------

    console.log("selected status batches :", filteredBatches);

    // Get number of students in a batch
    const getStudentCount = (batchId) =>
        dummyUsers.filter((student) => student.batchId === batchId).length;

    // Automatically select the first available batch
    useEffect(() => {
        const firstBatchId = filteredBatches[0]?.batchId || null;

        setSelectedBatch(firstBatchId);
        onBatchSelect?.(firstBatchId);
    }, [filteredBatches, onBatchSelect]);

    // Course selection
    const handleCourseChange = (courseId) => {
        setSelectedCourse(courseId);
        setBatchStatus("Active");
    };

    // Batch selection
    const handleBatchSelect = (batchId) => {
        setSelectedBatch(batchId);
        onBatchSelect?.(batchId);
    };

    return (
        <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {/* Course Tabs */}
            <div className="border-b border-gray-200 px-5">
                <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
                    {courseData.map((course) => {
                        const isSelected = course.courseId === selectedCourse;

                        return (
                            <button
                                key={course.courseId}
                                type="button"
                                onClick={() =>
                                    handleCourseChange(course.courseId)
                                }
                                className={`
                                    relative py-4 text-sm font-medium
                                    whitespace-nowrap transition-colors
                                    ${
                                        isSelected
                                            ? "text-blue-600"
                                            : "text-gray-600 hover:text-gray-900"
                                    }
                                `}
                            >
                                {course.name.replace(" Development", "")}

                                {isSelected && (
                                    <span
                                        className="
                                            absolute left-0 right-0 bottom-0
                                            h-0.5 bg-blue-500 rounded-full
                                        "
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Batch Status */}

           
            
            <div className="px-5 pt-6 pb-5">

                {isAdmin &&
                <div className="flex items-center gap-2">
                    {/* Active */}
                    <button
                        type="button"
                        onClick={() => setBatchStatus("Active")}
                        className={`
                            inline-flex items-center gap-2 px-4 py-2
                            rounded-lg border text-xs font-medium transition-all
                            ${
                                batchStatus === "Active"
                                    ? "border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm"
                                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                            }
                        `}
                    >
                        <span
                            className={`
                                w-1.5 h-1.5 rounded-full
                                ${
                                    batchStatus === "Active"
                                        ? "bg-emerald-500"
                                        : "bg-gray-400"
                                }
                            `}
                        />

                        Active Batches
                    </button>

                    {/* Inactive */}
                    <button
                        type="button"
                        onClick={() => setBatchStatus("Inactive")}
                        className={`
                            inline-flex items-center gap-2 px-4 py-2
                            rounded-lg border text-xs font-medium transition-all
                            ${
                                batchStatus === "Inactive"
                                    ? "border-red-300 bg-red-100 text-red-700 shadow-sm"
                                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                            }
                        `}
                    >
                        <span
                            className={`
                                w-1.5 h-1.5 rounded-full
                                ${
                                    batchStatus === "Inactive"
                                        ? "bg-gray-500"
                                        : "bg-gray-400"
                                }
                            `}
                        />

                        Inactive Batches
                    </button>
                </div>
                }

                {/* Batch List */}
                <div className="mt-5">
                    {batchStatus === "Active" ? (
                        <ActiveBatchList
                            batches={filteredBatches}
                            selectedBatch={selectedBatch}
                            onBatchSelect={handleBatchSelect}
                            getStudentCount={getStudentCount}
                        />
                    ) : (
                        <InactiveBatchTable
                            batches={filteredBatches}
                            selectedBatch={selectedBatch}
                            onBatchSelect={handleBatchSelect}
                        />
                    )}
                </div>
            </div>

        </section>
    );
}

