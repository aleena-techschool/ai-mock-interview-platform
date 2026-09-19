import { dummyUsers } from "../../../mock/authData";
import { batchData } from "../../../mock/student management/batch";
import { interviewsData } from "../../../mock/interviewData";
import { courseData } from "../../../mock/student management/course";





// ---------------- ACTIVE BATCH DETAILS ----------------
const activeBatches = batchData.filter((b) => {
    return b.status === "Active";
});


// ---------------- INACTIVE BATCH DETAILS ----------------
const inactiveBatches = batchData.filter((b) => {
    return b.status === "Inactive";
});

//------------------------COURSEWISE ACTIVE AND INACTIVE BATCHES 
const courseWiseBatches = courseData.map((course) => {

    // Get all batches belonging to this course
    const courseBatches = batchData.filter(
        (batch) => batch.courseId === course.courseId
    );

    // Count active batches
    const activeBatches = courseBatches.filter(
        (batch) => batch.status === "Active"
    ).length;

    // Count inactive batches
    const inactiveBatches = courseBatches.filter(
        (batch) => batch.status === "Inactive"
    ).length;

    return {
        courseId: course.courseId,
        courseName: course.name,
        activeBatches,
        inactiveBatches,
    };
});


// ----------------ACTIVE STUDENT DETAILS ----------------
const activeStuds = dummyUsers.filter((u) => {
    return activeBatches.some((b) => {
        return u.batchId === b.batchId;
    });
});

// ----------------INACTIVE STUDENT DETAILS ----------------
const inactiveStuds = dummyUsers.filter((u) => {
    return inactiveBatches.some((b) => {
        return u.batchId === b.batchId;
    });
});

//--------------------TOTAL STUDENTS-------------------
const totalStuds = dummyUsers.length

// ---------------- PLACEMENT DETAILS ----------------
const placementDatas = dummyUsers.filter((u) => {
    return u.placed;
});

// ---------------- INTERVIEW DETAILS ----------------
const totalInterviews = interviewsData.length;


//-------------------COURSEWISE STUDENT===================
const courseWiseStudents = courseData.map((course) => {

    // Get batches belonging to this course
    const courseBatches = batchData.filter(
        (batch) => batch.courseId === course.courseId
    );

    // Get students belonging to those batches
    const students = dummyUsers.filter((student) =>
        courseBatches.some(
            (batch) => batch.batchId === student.batchId
        )
    );

    return {
        courseId: course.courseId,
        courseName: course.name,
        studentCount: students.length,
    };
});

//----------------FOR INTERVIEW ANALYTICS DATA-----------------

//monthwise complete incomplete inetview
    const getMonthlyInterviewAnalytics = (
    interviewsData,
    currentDate = new Date()
    ) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = currentDate.getDate();

    let totalAssigned = 0;
    let completed = 0;
    let incomplete = 0;
    let pending = 0;

    interviewsData.forEach((interview) => {
        const date = new Date(interview.scheduledDate + "T00:00:00");

        // Only current month
        if (
        date.getFullYear() !== year ||
        date.getMonth() !== month
        ) {
        return;
        }

        // Total assigned in current month
        totalAssigned++;

        const interviewDay = date.getDate();

        // Interviews up to today
        if (interviewDay <= today) {
        if (interview.status === "completed") {
            completed++;
        }

        if (interview.status === "incomplete") {
            incomplete++;
        }
        }

        // Future interviews
        if (interviewDay > today) {
        pending++;
        }
    });

    return {
        totalAssigned,
        completed,
        incomplete,
        pending,
    };
    };

// week wise complted and incompleted data 
    const getWeeklyInterviewAnalytics = (
    interviewsData,
    currentDate = new Date()
    ) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get number of days in current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Find first day of month
    const firstDay = new Date(year, month, 1);

    // Find the first Monday of the month
    const firstMonday = new Date(firstDay);

    const day = firstMonday.getDay();

    const diff = day === 0 ? 1 : 1 - day;

    firstMonday.setDate(firstMonday.getDate() + diff);

    const weeklyData = [];

    let weekNumber = 1;

    while (firstMonday.getMonth() <= month) {

        const weekStart = new Date(firstMonday);

        const weekEnd = new Date(firstMonday);
        weekEnd.setDate(weekStart.getDate() + 6);

        let assigned = 0;
        let completed = 0;
        let incomplete = 0;
        let upcoming = 0;

        interviewsData.forEach((interview) => {

        const interviewDate = new Date(interview.scheduledDate);

        if (
            interviewDate.getFullYear() === year &&
            interviewDate.getMonth() === month &&
            interviewDate >= weekStart &&
            interviewDate <= weekEnd
        ) {

            // Every interview in this week is assigned
            assigned++;

            if (interview.status === "completed") {
            completed++;
            }

            if (interview.status === "incomplete") {
            incomplete++;
            }

            if (interview.status === "upcoming") {
            upcoming++;
            }
        }
        });

        weeklyData.push({
        week: `Week ${weekNumber}`,
        assigned,
        completed,
        incomplete,
        upcoming,
        });

        // Move to next week
        firstMonday.setDate(firstMonday.getDate() + 7);

        weekNumber++;
    }

    return weeklyData;
    };
    

//Role wise interview count
const getRoleWiseInterviewData = (interviewsData) => {
  const roleCounts = {};

  interviewsData.forEach((interview) => {
    const role = interview.role;

    if (roleCounts[role]) {
      roleCounts[role]++;
    } else {
      roleCounts[role] = 1;
    }
  });

  return Object.entries(roleCounts).map(([role, total]) => ({
    role,
    total,
  }));
};



export const AnalyticsData = {
    activeBatches, inactiveBatches, activeStuds,
    inactiveStuds, totalStuds, placementDatas, totalInterviews,
    courseWiseStudents, courseWiseBatches,getWeeklyInterviewAnalytics,
    getRoleWiseInterviewData,getMonthlyInterviewAnalytics
}
