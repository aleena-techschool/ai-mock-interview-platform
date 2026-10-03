import { useCallback, useState } from "react";
import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import CourseSelection from "../../features/Admin/StudentManagement/CourseSelection";
import StudentTable from "../../features/Admin/StudentManagement/StudentTable";
import Breadcrumbs from "../../features/Admin/common/Breadcrumbs";
import { dummyUsers } from "../../mock/authData";

export default function StudentReport() {
  const [selectedBatchId, setSelectedBatchId] = useState(null);
  
  const handleBatchSelect = useCallback((batchId) => {
    setSelectedBatchId(batchId);
  }, []);

    function downloadCSV(data, headers, fileName) {
    const rows = data.map((item) =>
        headers.map((header) => item[header.key])
    );

    const csvContent = [
        headers.map((header) => header.label).join(","),

        ...rows.map((row) =>
        row
            .map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`)
            .join(",")
        ),
    ].join("\n");

    const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
    }

    function fullReport() {
    if (!selectedBatchId) {
        alert("Please select a batch first");
        return;
    }

  const selectedStudents = dummyUsers.filter(
    (student) => student.batchId === selectedBatchId
  );

  if (selectedStudents.length === 0) {
    alert("No students found in this batch");
    return;
  }

  const headers = [
    { key: "studentId", label: "Student ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "course", label: "Course" },
    { key: "batchId", label: "Batch" },
    { key: "status", label: "Status" },
  ];

  downloadCSV(
    selectedStudents,
    headers,
    `batch-${selectedBatchId}-full-report.csv`
  );
}

function studentReport(id) {
  const student = dummyUsers.find(
    (student) => student.studentId === id
  );

  if (!student) {
    alert("Student not found");
    return;
  }

  const headers = [
    { key: "studentId", label: "Student ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "course", label: "Course" },
    { key: "batchId", label: "Batch" },
    { key: "status", label: "Status" },
  ];

  downloadCSV(
    [student],
    headers,
    `student-${student.studentId}-report.csv`
  );
}


  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">

      <Breadcrumbs
        items={[
          {
            label: "Admin",
            path: "/admin/dashboard"
          },
          {
            label: "Reports",
            path: "/admin/reports"
          },
          {
            label: "Student Report"
          }
        ]}
      />

        

        {/* Course Selection */}
        <div className="px-6 pt-6">
          <CourseSelection
            onBatchSelect={handleBatchSelect}
          />
        </div>

        {/* Student Table */}
        <div className="px-6 pt-6 pb-6">
          <StudentTable
            selectedBatchId={selectedBatchId}
             actions={{
                fullReport: fullReport,
                studentReport: studentReport
            }}
          />
        </div>

      </main>
    </div>
  );
}