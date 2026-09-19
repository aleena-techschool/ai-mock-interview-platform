import { dummyUsers } from "../../../../mock/authData";
import { batchData } from "../../../../mock/student management/batch";
import { courseData } from "../../../../mock/student management/course";

export default function CourseWiseTrend(){

    const getCourseWisePlacementRate = (students, batches, courses) => {

    // Only batches which have an end date are completed
    const completedBatches = batches.filter(
        (batch) => batch.end
    );

    const completedBatchIds = completedBatches.map(
        (batch) => batch.batchId
    );

    // Students who belong to completed batches
    const completedStudents = students.filter(
        (student) =>
            completedBatchIds.includes(student.batchId)
    );

    return courses.map((course) => {

        // Completed students belonging to this course
        const courseStudents = completedStudents.filter((student) => {

            const batch = completedBatches.find(
                (batch) => batch.batchId === student.batchId
            );

            return batch?.courseId === course.courseId;
        });

        // Placed students from completed batches
        const placedStudents = courseStudents.filter(
            (student) => student.placed === true
        );

        const totalStudents = courseStudents.length;
        const totalPlaced = placedStudents.length;

        const placementRate =
            totalStudents > 0
                ? Number(
                    ((totalPlaced / totalStudents) * 100).toFixed(1)
                )
                : 0;

        return {
            courseId: course.courseId,
            courseName: course.name,
            totalStudents,
            placedStudents: totalPlaced,
            notPlacedStudents: totalStudents - totalPlaced,
            placementRate
        };
    });
};


const courseWisePlacement = getCourseWisePlacementRate(
    dummyUsers,
    batchData,
    courseData
);

console.log(courseWisePlacement);
    return(
        <div className="bg-white w-full rounded-xl border border-gray-100 shadow-sm p-5">

        <div className="mb-5">
            <h2 className="text-base font-semibold text-gray-800">
                Course-wise Placement Rate
            </h2>

            <p className="text-xs text-gray-500 mt-1">
                Placement rate based on completed batches
            </p>
        </div>

        <div className="space-y-5">

            {courseWisePlacement.map((course) => (

                <div key={course.courseId}>

                    {/* Course name + percentage */}
                    <div className="flex items-center justify-between mb-2">

                        <span className="text-sm font-medium text-gray-700">
                            {course.courseName}
                        </span>

                        <span className="text-sm font-semibold text-gray-800">
                            {course.placementRate}%
                        </span>

                    </div>

                    {/* Range / Progress bar */}
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">

                        <div
                            className="h-full bg-green-500 rounded-full transition-all duration-500"
                            style={{
                                width: `${course.placementRate}%`
                            }}
                        />

                    </div>

                    {/* Student count */}
                    <div className="flex justify-between mt-1">

                        <span className="text-[11px] text-gray-400">
                            {course.placedStudents} placed
                        </span>

                        <span className="text-[11px] text-gray-400">
                            {course.totalStudents} completed
                        </span>

                    </div>

                </div>

            ))}

        </div>
    </div>
    )
}