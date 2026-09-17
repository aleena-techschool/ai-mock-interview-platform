import { batchData} from "../../../mock/student management/batch";
import { dummyUsers } from "../../../mock/authData";
import { mentors, placement } from "../../../mock/student management/mentorDetails";

// Functions for exporting the complete platform report
//
// The admin selects a month and year to generate a report containing:
//
// 1. All batches that were active during the selected month and year
//
// 2. All batches that became inactive during the selected month and year
//
// 3. All students who were placed during the selected month and year
//
// 4. All active mentors, including placement trainers
//
// 5. All mentors who became inactive during the selected month and year





// Convert DD-MM-YYYY into Date
function parseDate(dateString) {
  if (!dateString) return null;

  const [day, month, year] = dateString.split("-");

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  );
}


// Check whether a date belongs to selected month/year
function isDateInMonth(date, month, year) {
  if (!date) return false;

  return (
    date.getMonth() === month &&
    date.getFullYear() === year
  );
}


// Check whether batch existed during selected month
function batchWasActiveInMonth(batch, month, year) {

  const startDate = parseDate(batch.start);

  if (!startDate) return false;

  const selectedMonthStart = new Date(
    year,
    month,
    1
  );

  const selectedMonthEnd = new Date(
    year,
    month + 1,
    0
  );

  const endDate = batch.end
    ? parseDate(batch.end)
    : null;

  return (
    startDate <= selectedMonthEnd &&
    (!endDate || endDate >= selectedMonthStart)
  );
}


// Check whether mentor/trainer existed during month
function mentorWasActiveInMonth(
  person,
  month,
  year
) {

  const joiningDate = parseDate(
    person.joiningDate
  );

  if (!joiningDate) return false;

  const selectedMonthStart = new Date(
    year,
    month,
    1
  );

  const selectedMonthEnd = new Date(
    year,
    month + 1,
    0
  );

  const lastWorkingDate = person.lastWorkingDate
    ? parseDate(person.lastWorkingDate)
    : null;

  return (
    joiningDate <= selectedMonthEnd &&
    (!lastWorkingDate ||
      lastWorkingDate >= selectedMonthStart)
  );
}



// MAIN EXPORT FUNCTION


export function exportPlatformReport(
  month,
  year
) {

 const monthMap = {
  January: 0, February: 1,March: 2,April: 3,May: 4, June: 5,July: 6,
  August: 7, September: 8, October: 9, November: 10, ecember: 11,
};

const monthIndex = monthMap[month];
  const selectedYear = Number(year);
  
 
  console.log("mothindex ",month)



  // BATCHES
 

  const selectedBatches = batchData.filter(
    (batch) =>
      batchWasActiveInMonth(
        batch,
        monthIndex,
        selectedYear
      )
  );

  const activeBatches = selectedBatches.filter(
    (batch) => batch.status === "Active"
  );

  const inactiveBatches = selectedBatches.filter(
    (batch) => batch.status === "Inactive"
  );


  // PLACED STUDENTS
 

  const placedStudents = dummyUsers.filter(
    (student) => {

      if (
        student.role !== "student" ||
        !student.placed ||
        !student.placedDate
      ) {
        return false;
      }

      const placedDate = parseDate(
        student.placedDate
      );

      return isDateInMonth(
        placedDate,
        monthIndex,
        selectedYear
      );
    }
  );


  // MENTORS

  const mentorsInMonth = mentors.filter(
    (mentor) =>
      mentorWasActiveInMonth(
        mentor,
        monthIndex,
        selectedYear
      )
  );

  const activeMentors = mentorsInMonth.filter(
    (mentor) =>
      mentor.status === "Active"
  );

  const inactiveMentors = mentorsInMonth.filter(
    (mentor) =>
      mentor.status === "Inactive"
  );


  // PLACEMENT TRAINERS

  const placementInMonth = placement.filter(
    (trainer) =>
      mentorWasActiveInMonth(
        trainer,
        monthIndex,
        selectedYear
      )
  );

  const activePlacementTrainers =
    placementInMonth.filter(
      (trainer) =>
        trainer.status === "Active"
    );

  const inactivePlacementTrainers =
    placementInMonth.filter(
      (trainer) =>
        trainer.status === "Inactive"
    );


  // CSV ROWS

  const rows = [];


  function addSection(
    title,
    headers,
    data
  ) {

    rows.push([]);
    rows.push([title]);
    rows.push(headers);

    data.forEach((row) => {
      rows.push(row);
    });
  }


  // REPORT HEADER
 

  const monthName = new Date(
    selectedYear,
    monthIndex
  ).toLocaleString("default", {
    month: "long",
  });

  rows.push([
    "FULL PLATFORM REPORT"
  ]);

  rows.push([
    "Report Month",
    monthName
  ]);

  rows.push([
    "Report Year",
    selectedYear
  ]);


  // SUMMARY

  addSection(
    "PLATFORM SUMMARY",
    [
      "Metric",
      "Count"
    ],
    [
      [
        "Active Batches",
        activeBatches.length
      ],
      [
        "Inactive Batches",
        inactiveBatches.length
      ],
      [
        "Placed Students",
        placedStudents.length
      ],
      [
        "Active Mentors",
        activeMentors.length
      ],
      [
        "Inactive Mentors",
        inactiveMentors.length
      ],
      [
        "Active Placement Trainers",
        activePlacementTrainers.length
      ],
      [
        "Inactive Placement Trainers",
        inactivePlacementTrainers.length
      ]
    ]
  );


  // ACTIVE BATCHES

  addSection(
    "ACTIVE BATCHES",
    [
      "Batch ID",
      "Batch Name",
      "Trainer ID",
      "Start Date",
      "End Date",
      "Status"
    ],
    activeBatches.map((batch) => [
      batch.batchId,
      batch.name,
      batch.trainerId,
      batch.start,
      batch.end || "",
      batch.status
    ])
  );


  // INACTIVE BATCHES

  addSection(
    "INACTIVE BATCHES",
    [
      "Batch ID",
      "Batch Name",
      "Trainer ID",
      "Start Date",
      "End Date",
      "Status"
    ],
    inactiveBatches.map((batch) => [
      batch.batchId,
      batch.name,
      batch.trainerId,
      batch.start,
      batch.end || "",
      batch.status
    ])
  );


  // PLACED STUDENTS

  addSection(
    "PLACED STUDENTS",
    [
      "Student ID",
      "Student Name",
      "Batch ID",
      "Placed Date"
    ],
    placedStudents.map((student) => [
      student.studentId,
      student.name,
      student.batchId,
      student.placedDate
    ])
  );


  // ACTIVE MENTORS

  addSection(
    "ACTIVE MENTORS",
    [
      "Employee ID",
      "Name",
      "Designation",
      "Preferred Course",
      "Joining Date"
    ],
    activeMentors.map((mentor) => [
      mentor.employeeId,
      mentor.name,
      mentor.designation,
      mentor.preferredCourse || "",
      mentor.joiningDate || ""
    ])
  );


  // INACTIVE MENTORS

  addSection(
    "INACTIVE MENTORS",
    [
      "Employee ID",
      "Name",
      "Designation",
      "Preferred Course",
      "Joining Date",
      "Last Working Date"
    ],
    inactiveMentors.map((mentor) => [
      mentor.employeeId,
      mentor.name,
      mentor.designation,
      mentor.preferredCourse || "",
      mentor.joiningDate || "",
      mentor.lastWorkingDate || ""
    ])
  );


  // ACTIVE PLACEMENT TRAINERS

  addSection(
    "ACTIVE PLACEMENT TRAINERS",
    [
      "Employee ID",
      "Name",
      "Designation",
      "Joining Date"
    ],
    activePlacementTrainers.map((trainer) => [
      trainer.employeeId,
      trainer.name,
      trainer.designation,
      trainer.joiningDate || ""
    ])
  );


  // INACTIVE PLACEMENT TRAINERS

  addSection(
    "INACTIVE PLACEMENT TRAINERS",
    [
      "Employee ID",
      "Name",
      "Designation",
      "Joining Date",
      "Last Working Date"
    ],
    inactivePlacementTrainers.map((trainer) => [
      trainer.employeeId,
      trainer.name,
      trainer.designation,
      trainer.joiningDate || "",
      trainer.lastWorkingDate || ""
    ])
  );


  // CREATE CSV

  const csvContent = rows
    .map((row) =>
      row
        .map((value) => {

          const safeValue = String(
            value ?? ""
          ).replace(/"/g, '""');

          return `"${safeValue}"`;
        })
        .join(",")
    )
    .join("\n");


  // DOWNLOAD

  const blob = new Blob(
    [csvContent],
    {
      type: "text/csv;charset=utf-8;"
    }
  );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    `Full_Platform_Report_${monthName}_${selectedYear}.csv`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}