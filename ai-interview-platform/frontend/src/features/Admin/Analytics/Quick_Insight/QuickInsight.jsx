import { dummyUsers } from "../../../../mock/authData"
import { batchData } from "../../../../mock/student management/batch"
import { courseData } from "../../../../mock/student management/course"
import { interviewsData } from "../../../../mock/interviewData";


export default function QuickInsight(){

    const getQuickInsights = (students, batches, courses) => {

 
    // COMPLETED BATCHES 
    const completedBatches = batches.filter(
        (batch) => batch.end
    );

    const completedBatchIds = completedBatches.map(
        (batch) => batch.batchId
    );

    // Students from completed batches
    const completedStudents = students.filter(
        (student) =>
            completedBatchIds.includes(student.batchId)
    );


    // CURRENT MONTH 
    const today = new Date();

    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const currentMonthEnd = new Date(
        currentYear,
        currentMonth + 1,
        0
    );


    // Batches completed by current month
    const batchesCompletedThisMonth = completedBatches.filter(
        (batch) => {

            const [day, month, year] =
                batch.end.split("-").map(Number);

            const endDate = new Date(
                year,
                month - 1,
                day
            );

            return endDate <= currentMonthEnd;
        }
    );

    const currentCompletedBatchIds =
        batchesCompletedThisMonth.map(
            (batch) => batch.batchId
        );


    const currentCompletedStudents =
        students.filter((student) =>
            currentCompletedBatchIds.includes(
                student.batchId
            )
        );


    const currentPlaced =
        currentCompletedStudents.filter(
            (student) => student.placed === true
        ).length;


    const currentPlacementRate =
        currentCompletedStudents.length > 0
            ? (
                (currentPlaced /
                    currentCompletedStudents.length) *
                100
            ).toFixed(1)
            : 0;

    // PREVIOUS MONTH
    const previousMonthEnd = new Date(
        currentYear,
        currentMonth,
        0
    );


    const previousBatches =
        completedBatches.filter((batch) => {

            const [day, month, year] =
                batch.end.split("-").map(Number);

            const endDate = new Date(
                year,
                month - 1,
                day
            );

            return endDate <= previousMonthEnd;
        });


    const previousBatchIds =
        previousBatches.map(
            (batch) => batch.batchId
        );


    const previousStudents =
        students.filter((student) =>
            previousBatchIds.includes(
                student.batchId
            )
        );


    const previousPlaced =
        previousStudents.filter(
            (student) => student.placed === true
        ).length;


    const previousPlacementRate =
        previousStudents.length > 0
            ? (
                (previousPlaced /
                    previousStudents.length) *
                100
            ).toFixed(1)
            : 0;


  
    // PLACEMENT RATE CHANGE

    const placementRateChange =
        (
            Number(currentPlacementRate) -
            Number(previousPlacementRate)
        ).toFixed(1);


   
    // COURSE WITH HIGHEST PLACEMENT
  
    const coursePlacementData =
        courses.map((course) => {

            const courseStudents =
                currentCompletedStudents.filter(
                    (student) => {

                        const batch =
                            batches.find(
                                (batch) =>
                                    batch.batchId ===
                                    student.batchId
                            );

                        return (
                            batch?.courseId ===
                            course.courseId
                        );
                    }
                );


            const placed =
                courseStudents.filter(
                    (student) =>
                        student.placed === true
                ).length;


            const rate =
                courseStudents.length > 0
                    ? (
                        (placed /
                            courseStudents.length) *
                        100
                    )
                    : 0;


            return {
                courseName: course.name,
                totalStudents:
                    courseStudents.length,
                placed,
                placementRate: Number(
                    rate.toFixed(1)
                )
            };
        });


    const highestPlacementCourse =
        coursePlacementData
            .filter(
                (course) =>
                    course.totalStudents > 0
            )
            .sort(
                (a, b) =>
                    b.placementRate -
                    a.placementRate
            )[0];


    // COURSE WITH HIGHEST STUDENTS
    const courseStudentData =
        courses.map((course) => {

            const count =
                students.filter((student) => {

                    const batch =
                        batches.find(
                            (batch) =>
                                batch.batchId ===
                                student.batchId
                        );

                    return (
                        batch?.courseId ===
                        course.courseId
                    );
                }).length;


            return {
                courseName: course.name,
                studentCount: count
            };
        });


    const highestStudentCourse =
        courseStudentData.sort(
            (a, b) =>
                b.studentCount -
                a.studentCount
        )[0];


    return {

        placementRate: {
            current: Number(currentPlacementRate),
            previous: Number(previousPlacementRate),
            change: Number(placementRateChange)
        },

        highestPlacementCourse,

        highestStudentCourse,

        coursePlacementData
    };
};

const insights = getQuickInsights(
    dummyUsers,
    batchData,
    courseData
);

//------------------interview rate using Interview data

const getInterviewCompletionRate = (interviews) => {

    const today = new Date();

    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Previous month
    const previousMonth =
        currentMonth === 0 ? 11 : currentMonth - 1;

    const previousYear =
        currentMonth === 0
            ? currentYear - 1
            : currentYear;


    // Get interviews for a particular month
    const getMonthInterviews = (month, year) => {

        return interviews.filter((interview) => {

            const date = new Date(interview.scheduledDate);

            return (
                date.getMonth() === month &&
                date.getFullYear() === year
            );
        });
    };


    const currentInterviews =
        getMonthInterviews(
            currentMonth,
            currentYear
        );

    const previousInterviews =
        getMonthInterviews(
            previousMonth,
            previousYear
        );


    // Calculate rate
    const calculateRate = (monthInterviews) => {

        const completed =
            monthInterviews.filter(
                (interview) =>
                    interview.status === "completed"
            ).length;

        const incomplete =
            monthInterviews.filter(
                (interview) =>
                    interview.status === "incomplete"
            ).length;

        const total =
            completed + incomplete;

        const rate =
            total > 0
                ? (completed / total) * 100
                : 0;

        return {
            completed,
            incomplete,
            total,
            rate: Number(rate.toFixed(1))
        };
    };


    const current =
        calculateRate(currentInterviews);

    const previous =
        calculateRate(previousInterviews);


    const change =
        Number(
            (current.rate - previous.rate).toFixed(1)
        );


    return {
        current,
        previous,
        change
    };
};

const interviewInsights =
    getInterviewCompletionRate(interviewsData);




    return(
<div className="mx-10 mt-12 mb-8">

    {/* Section Header */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 px-6 py-5 shadow-md">

        {/* Decorative background */}
        <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute right-20 -bottom-12 w-24 h-24 rounded-full bg-white/5"></div>

        <div className="relative flex items-center gap-4">

            <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <span className="text-white text-xl">
                    ✦
                </span>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white">
                    Quick Insights
                </h2>

                <p className="text-xs text-purple-100 mt-1">
                    Key platform performance highlights at a glance
                </p>
            </div>

        </div>
    </div>


    {/* Insight Cards */}
    <div className="grid grid-cols-2 gap-4 mt-5">

        {/* Placement Rate */}
        <div className="group bg-green-50 hover:bg-green-100 transition rounded-xl border  border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-200">

            <div className="flex items-center justify-between">

                <p className="text-xs font-medium text-gray-500">
                    Placement Rate
                </p>

                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                    <span className="text-green-600 text-sm">
                        ↗
                    </span>
                </div>

            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-3">
                {insights.placementRate.current}%
            </h3>

            <p className="text-xs text-green-600 font-medium mt-1">
                ↑ {insights.placementRate.change}%
                <span className="text-gray-400 font-normal ml-1">
                    from last month
                </span>
            </p>

        </div>


        {/* Highest Placement */}
        <div className="group bg-purple-50 hover:bg-purple-100 transition rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-200">

            <div className="flex items-center justify-between">

                <p className="text-xs font-medium text-gray-500">
                    Highest Placement Rate
                </p>

                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                    <span className="text-purple-600 text-sm">
                        ★
                    </span>
                </div>

            </div>

            <h3 className="text-base font-bold text-gray-800 mt-3 truncate">
                {insights.highestPlacementCourse?.courseName}
            </h3>

            <p className="text-xs text-purple-600 font-medium mt-1">
                {insights.highestPlacementCourse?.placementRate}%
                <span className="text-gray-400 font-normal ml-1">
                    placement
                </span>
            </p>

        </div>


        {/* Highest Student Count */}
        <div className="group bg-blue-50 hover:bg-blue-100 transition rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-200">

            <div className="flex items-center justify-between">

                <p className="text-xs font-medium text-gray-500">
                    Highest Student Count
                </p>

                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">
                        👥
                    </span>
                </div>

            </div>

            <h3 className="text-base font-bold text-gray-800 mt-3 truncate">
                {insights.highestStudentCourse?.courseName}
            </h3>

            <p className="text-xs text-blue-600 font-medium mt-1">
                {insights.highestStudentCourse?.studentCount}
                <span className="text-gray-400 font-normal ml-1">
                    students
                </span>
            </p>

        </div>


        {/* Interview Completion */}
        <div className="group bg-orange-50 hover:bg-orange-100 transition rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-200">

            <div className="flex items-center justify-between">

                <p className="text-xs font-medium text-gray-500">
                    Interview Completion
                </p>

                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                    <span className="text-orange-500 text-sm">
                        ✓
                    </span>
                </div>

            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-3">
                {interviewInsights.current.rate}%
            </h3>

            <p className="text-xs text-gray-400 mt-1">
                Based on interview data
            </p>

        </div>

    </div>

</div>
    )
}