import { useMemo } from "react";

import { Interviews } from "../../../mock/actualInterview";
import { dummyUsers } from "../../../mock/authData";
import { batchData } from "../../../mock/student management/batch";
import { courseData } from "../../../mock/student management/course";

export default function StatsCard({ id }) {

  const courseWiseData = useMemo(() => {

    // Interviews conducted by this mentor
    const mentorInterviews = Interviews.filter(
        (interview) => interview.mentor === id
    );

    // Create statistics for EVERY course
    return courseData.map((course) => {

        const courseInterviews = mentorInterviews.filter((interview) => {

            // Check whether any student in this interview belongs
            // to the current course
            return interview.studentsAttended?.some((studentId) => {

                const student = dummyUsers.find(
                    (student) => student.studentId === studentId
                );

                if (!student) return false;

                const batch = batchData.find(
                    (batch) => batch.batchId === student.batchId
                );

                return batch?.courseId === course.courseId;
            });

        });

        // No interview for this course
        if (courseInterviews.length === 0) {
            return {
                courseId: course.courseId,
                courseName: course.name,
                totalInterviews: null,
                studentsAttended: null,
                studentsPlaced: null,
                placementRate: null,
            };
        }

        // Unique students who attended this course's interviews
        const studentsAttended = new Set();

        // Unique students placed through this course's interviews
        const studentsPlaced = new Set();

        courseInterviews.forEach((interview) => {

            interview.studentsAttended?.forEach((studentId) => {

                const student = dummyUsers.find(
                    (student) => student.studentId === studentId
                );

                if (!student) return;

                const batch = batchData.find(
                    (batch) => batch.batchId === student.batchId
                );

                if (batch?.courseId !== course.courseId) return;

                studentsAttended.add(studentId);

                if (interview.studentsPlaced?.includes(studentId)) {
                    studentsPlaced.add(studentId);
                }

            });

        });

        const attendedCount = studentsAttended.size;
        const placedCount = studentsPlaced.size;

        const placementRate =
            attendedCount > 0
                ? ((placedCount / attendedCount) * 100).toFixed(1)
                : null;

        return {
            courseId: course.courseId,
            courseName: course.name,
            totalInterviews: courseInterviews.length,
            studentsAttended: attendedCount,
            studentsPlaced: placedCount,
            placementRate,
        };

    });

}, [id]);


   return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <div>
                <h2 className="text-lg font-semibold text-gray-800">
                    Course-wise Interview Performance
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Interview and placement statistics handled by this mentor
                </p>
            </div>

            {/* Small summary */}
            <div className="hidden rounded-lg bg-indigo-50 px-4 py-2 sm:block">
                <p className="text-xs font-medium text-indigo-500">
                    Courses
                </p>

                <p className="text-lg font-bold text-indigo-700">
                    {courseWiseData.length}
                </p>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

            <table className="w-full min-w-[750px]">

                {/* Table Header */}
                <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/70">

                        <th className="px-6 py-4 text-left">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Course
                            </span>
                        </th>

                        <th className="px-6 py-4 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Interviews
                            </span>
                        </th>

                        <th className="px-6 py-4 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Students Attended
                            </span>
                        </th>

                        <th className="px-6 py-4 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Students Placed
                            </span>
                        </th>

                        <th className="px-6 py-4 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Placement Rate
                            </span>
                        </th>

                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-100">

                    {courseWiseData.map((course, index) => {

                        const hasData =
                            course.totalInterviews !== null;

                        return (
                            <tr
                                key={course.courseId}
                                className="group transition-all duration-200 hover:bg-indigo-50/30"
                            >

                                {/* Course */}
                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-3">

                                        {/* Course Icon */}
                                        <div
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                                                hasData
                                                    ? "bg-indigo-50 text-indigo-600"
                                                    : "bg-gray-100 text-gray-400"
                                            }`}
                                        >
                                            <span className="text-sm font-bold">
                                                {course.courseName
                                                    ?.charAt(0)
                                                    .toUpperCase()}
                                            </span>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-gray-800">
                                                {course.courseName}
                                            </p>

                                            <p className="mt-0.5 text-xs text-gray-400">
                                                {course.courseId}
                                            </p>
                                        </div>

                                    </div>

                                </td>

                                {/* Interviews */}
                                <td className="px-6 py-5 text-center">

                                    {hasData ? (
                                        <span className="inline-flex min-w-[42px] items-center justify-center rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">
                                            {course.totalInterviews}
                                        </span>
                                    ) : (
                                        <span className="text-gray-300">
                                            —
                                        </span>
                                    )}

                                </td>

                                {/* Students Attended */}
                                <td className="px-6 py-5 text-center">

                                    {hasData ? (
                                        <span className="font-semibold text-blue-600">
                                            {course.studentsAttended}
                                        </span>
                                    ) : (
                                        <span className="text-gray-300">
                                            —
                                        </span>
                                    )}

                                </td>

                                {/* Students Placed */}
                                <td className="px-6 py-5 text-center">

                                    {hasData ? (
                                        <span className="font-semibold text-emerald-600">
                                            {course.studentsPlaced}
                                        </span>
                                    ) : (
                                        <span className="text-gray-300">
                                            —
                                        </span>
                                    )}

                                </td>

                                {/* Placement Rate */}
                                <td className="px-6 py-5 text-center">

                                    {course.placementRate !== null ? (
                                        <div className="flex items-center justify-center">

                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">

                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                                                {course.placementRate}%

                                            </span>

                                        </div>
                                    ) : (
                                        <span className="text-gray-300">
                                            —
                                        </span>
                                    )}

                                </td>

                            </tr>
                        );
                    })}

                </tbody>

            </table>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-3">

            <p className="text-xs text-gray-400">
                Placement rate is calculated based on unique students
                placed versus unique students who attended interviews.
            </p>

        </div>

    </div>
);
}