import { courseData } from "../../../mock/student management/course";
import { batchData } from "../../../mock/student management/batch";
import { dummyUsers } from "../../../mock/authData";

import mern from "../../../assets/react-logo.png";
import python from "../../../assets/python-logo.png";
import flutter from "../../../assets/flutter-logo.png";

export default function CourseCard() {
  // Course logo mapping
  const courseLogos = {
    "mern stack": mern,
    "python full stack": python,
    flutter: flutter,
  };

  // Create course summary
  const courseSummary = courseData.map((course) => {
    // Active batches belonging to the course
    const activeBatches = batchData.filter(
      (batch) =>
        batch.courseId === course.courseId &&
        batch.status === "Active"
    );

    // Students belonging to active batches
    const activeStudents = dummyUsers.filter((student) =>
      activeBatches.some(
        (batch) => batch.batchId === student.batchId
      )
    );

    return {
      courseId: course.courseId,
      courseName: course.name,
      activeBatches: activeBatches.length,
      activeStudents: activeStudents.length,
      image:
        courseLogos[course.name.toLowerCase()] || flutter,
    };
  });

  return (
    <div className="px-6 mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {courseSummary.map((course) => (
        <div
          key={course.courseId}
          className="
            flex items-center justify-between
            bg-white
            border border-gray-200
            rounded-xl
            px-5 py-4
            min-h-[130px]
            transition-all duration-200
            hover:shadow-md
            hover:border-gray-300
          "
        >
          {/* Left Section */}
          <div className="flex items-center gap-4 min-w-0">
            {/* Course Logo */}
            <div
              className="
                w-14 h-14
                flex items-center justify-center
                rounded-full
                bg-gray-50
                shrink-0
              "
            >
              <img
                src={course.image}
                alt={`${course.courseName} logo`}
                className="w-11 h-11 object-contain"
              />
            </div>

            {/* Course Information */}
            <div className="min-w-0">
              {/* Course Name */}
              <h2 className="text-[15px] font-semibold text-gray-900 truncate">
                {course.courseName}
              </h2>

              {/* Batch Count */}
              <div className="flex items-end gap-2 mt-2">
                <span className="text-2xl font-bold text-gray-900 leading-none">
                  {course.activeBatches}
                </span>

                <span className="text-xs text-gray-500 mb-[2px]">
                  Active Batches
                </span>
              </div>

              {/* Student Count */}
              <div className="flex items-center gap-2 mt-3 text-gray-500">
                {/* Users Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-4 h-4 text-indigo-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372
                       9.337 9.337 0 0 0 4.121-.952
                       4.125 4.125 0 0 0-7.533-2.493
                       M15 19.128v-.003
                       c0-1.113-.285-2.16-.786-3.07
                       M15 19.128v.106
                       A12.318 12.318 0 0 1 8.624 21
                       c-2.331 0-4.512-.645-6.374-1.766
                       l-.001-.109
                       a6.375 6.375 0 0 1 11.964-3.07
                       M12.75 7.5
                       a4.125 4.125 0 1 1-8.25 0
                       4.125 4.125 0 0 1 8.25 0
                       Z
                       m8.25 1.5
                       a3 3 0 1 1-6 0
                       3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span className="text-xs">
                  <span className="font-semibold text-gray-700">
                    {course.activeStudents}
                  </span>{" "}
                  Students
                </span>
              </div>
            </div>
          </div>

          {/* Arrow Button */}
          <button
            type="button"
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              border border-gray-200
              text-gray-700
              shrink-0
              ml-3
              transition-all duration-200
              hover:bg-gray-50
              hover:border-gray-300
              hover:translate-x-0.5
            "
            aria-label={`View ${course.courseName}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 18 6-6-6-6"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}