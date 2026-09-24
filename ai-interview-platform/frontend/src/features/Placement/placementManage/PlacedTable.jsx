import { useMemo, useState } from "react";

import { Interviews } from "../../../mock/actualInterview";
import { dummyUsers } from "../../../mock/authData";
import { batchData } from "../../../mock/student management/batch";
import { courseData } from "../../../mock/student management/course";

export default function PlacedStudents({ id }) {
    const [selectedCourse, setSelectedCourse] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // --------------------------------------------------
    // Get placed students for this mentor
    // --------------------------------------------------
    const placedStudents = useMemo(() => {
        // Interviews conducted by this mentor
        const mentorInterviews = Interviews.filter(
            (interview) => interview.mentor === id
        );

        const students = [];

        mentorInterviews.forEach((interview) => {
            interview.studentsPlaced?.forEach((studentId) => {
                const student = dummyUsers.find(
                    (user) => user.studentId === studentId
                );

                if (!student) return;

                // Find student's batch
                const batch = batchData.find(
                    (batch) => batch.batchId === student.batchId
                );

                // Find student's course
                const course = courseData.find(
                    (course) => course.courseId === batch?.courseId
                );

                students.push({
                    studentId: student.studentId,
                    name: student.name || "",
                    course: course?.name || "",
                    batch: batch?.name || "",
                    company:
                        student.company ||
                        interview.company ||
                        "",
                    package: interview.package || "",
                    role: interview.role || "",
                    placedDate: student.placedDate || "",
                });
            });
        });

        // Remove duplicate students
        const uniqueStudents = Array.from(
            new Map(
                students.map((student) => [
                    student.studentId,
                    student,
                ])
            ).values()
        );

        // Recently placed first
        uniqueStudents.sort((a, b) => {
            if (!a.placedDate) return 1;
            if (!b.placedDate) return -1;

            const dateA = new Date(
                a.placedDate.split("-").reverse().join("-")
            );

            const dateB = new Date(
                b.placedDate.split("-").reverse().join("-")
            );

            return dateB - dateA;
        });

        return uniqueStudents;
    }, [id]);

    // --------------------------------------------------
    // ALL COURSES
    // Get courses directly from courseData
    // instead of getting them from placedStudents
    // --------------------------------------------------
    const courses = useMemo(() => {
        return [
            "All",
            ...courseData
                .map((course) => course.name)
                .filter(Boolean),
        ];
    }, []);

    // Remove duplicate course names
    const uniqueCourses = useMemo(() => {
        return [...new Set(courses)];
    }, [courses]);

    // --------------------------------------------------
    // SEARCH + COURSE FILTER
    // --------------------------------------------------
    const filteredStudents = useMemo(() => {
        const search = searchTerm.toLowerCase().trim();

        return placedStudents.filter((student) => {
            // Course filter
            const matchesCourse =
                selectedCourse === "All" ||
                student.course === selectedCourse;

            // Search by:
            // Name
            // Batch
            // Company
            const matchesSearch =
                search === "" ||
                (student.name || "")
                    .toLowerCase()
                    .includes(search) ||
                (student.batch || "")
                    .toLowerCase()
                    .includes(search) ||
                (student.company || "")
                    .toLowerCase()
                    .includes(search);

            return matchesCourse && matchesSearch;
        });
    }, [placedStudents, selectedCourse, searchTerm]);

    // --------------------------------------------------
    // RESET FILTERS
    // --------------------------------------------------
    const clearFilters = () => {
        setSelectedCourse("All");
        setSearchTerm("");
    };

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

           {/* header */}
            <div className="border-b border-gray-100">

                <div className="flex items-center justify-between px-6 py-5">

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                            Recently Placed Students
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Students placed through interviews handled by this mentor
                        </p>
                    </div>

                    {/* Total */}
                    <div className="rounded-xl bg-emerald-50 px-4 py-2 text-center">
                        <p className="text-xs font-medium text-emerald-600">
                            Total Placed
                        </p>

                        <p className="text-lg font-bold text-emerald-700">
                            {filteredStudents.length}
                        </p>
                    </div>

                </div>

                {/* -----------------------------------------
                    SEARCH + COURSE FILTER
                ----------------------------------------- */}
                <div className="flex flex-col gap-3 px-6 pb-5 md:flex-row md:items-center md:justify-between">

                    {/* Search */}
                    <div className="relative w-full md:max-w-md">

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by name, batch or company..."
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 pl-10 text-sm text-gray-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                        />

                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            🔍
                        </span>

                    </div>

                    {/* Course Dropdown */}
                    <div className="flex w-full gap-2 md:w-auto">

                        <select
                            value={selectedCourse}
                            onChange={(e) =>
                                setSelectedCourse(e.target.value)
                            }
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 md:w-56"
                        >
                            {uniqueCourses.map((course) => (
                                <option
                                    key={course}
                                    value={course}
                                >
                                    {course === "All"
                                        ? "All Courses"
                                        : course}
                                </option>
                            ))}
                        </select>

                        {/* Clear
                        {(searchTerm || selectedCourse !== "All") && (
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                            >
                                Clear
                            </button>
                        )} */}

                    </div>

                </div>

            </div>

            {/* table starts */}
            <div className="overflow-x-auto">

                <table className="w-full border-gray-500 min-w-[900px]">

                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-70/70">

                            <th className="px-6 py-4 text-left">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Student
                                </span>
                            </th>

                            <th className="px-6 py-4 text-left">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Course
                                </span>
                            </th>

                            <th className="px-6 py-4 text-left">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Batch
                                </span>
                            </th>

                            <th className="px-6 py-4 text-left">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Company
                                </span>
                            </th>

                            <th className="px-6 py-4 text-left">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Package
                                </span>
                            </th>

                            <th className="px-6 py-4 text-left">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Role
                                </span>
                            </th>

                            <th className="px-6 py-4 text-left">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Placed Date
                                </span>
                            </th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">

                        {filteredStudents.length > 0 ? (

                            filteredStudents.map((student) => (

                                <tr
                                    key={student.studentId}
                                    className="group transition-colors hover:bg-emerald-50/30"
                                >

                                    {/* Student */}
                                    <td className="px-6 py-4">

                                        <div className="flex items-center gap-3">

                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
                                                {student.name
                                                    ?.charAt(0)
                                                    .toUpperCase()}
                                            </div>

                                            <div>
                                                 <p className="truncate text-sm font-semibold text-gray-800 group-hover:text-indigo-700">
                                            {student.name}
                                        </p>

                                                <p className="text-xs text-gray-400">
                                                    {student.studentId}
                                                </p>
                                            </div>

                                        </div>

                                    </td>

                                    {/* Course */}
                                    <td className="px-6 py-4">

                                        <span className="inline-flex items-center rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
                                    {student.course || "—"}
                                </span>


                                    </td>

                                    {/* Batch */}
                                    <td className="px-6 py-4">

                                        <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700">
                                            {student.batch || "—"}
                                        </span>

                                    </td>

                                    {/* Company */}
                                    <td className="px-6 py-4">

                                        
                                    <div className="flex h-8 w-8 items-center justify-center  bg-gray-100 text-sm">
                                        🏢
                                        <span className="text-sm font-semibold text-gray-700">
                                        {student.company || "—"}
                                    </span>
                                    </div>

                                    

                                    </td>

                                    {/* Package */}
                                     <td className="px-5 py-5">

                                {student.package ? (

                                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1.5 ring-1 ring-emerald-100">

                                        <span className="text-xs">
                                            ₹
                                        </span>

                                        <span className="text-sm font-bold text-emerald-700">
                                            {student.package}
                                        </span>

                                    </div>

                                ) : (

                                    <span className="text-sm text-gray-300">
                                        —
                                    </span>

                                )}

                            </td>

                                    {/* Role */}
                                    <td className="px-6 py-4">

                                        <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
                                        {student.role || "-"}
                                    </span>

                                    </td>

                                    {/* Placed Date */}
                                    <td className="px-6 py-4">

                                        <span className="text-sm font-medium text-gray-700">
                                            {student.placedDate || "—"}
                                        </span>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="px-6 py-12 text-center"
                                >

                                    <div className="flex flex-col items-center">

                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                            <span className="text-xl">
                                                🎓
                                            </span>
                                        </div>

                                        <p className="font-medium text-gray-700">
                                            {placedStudents.length === 0
                                                ? "No placed students"
                                                : "No students found"}
                                        </p>

                                        <p className="mt-1 text-sm text-gray-400">
                                            {placedStudents.length === 0
                                                ? "No students have been placed through this mentor yet."
                                                : "Try changing your search or course filter."}
                                        </p>

                                    </div>

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}