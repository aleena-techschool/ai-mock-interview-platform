// import { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { dummyUsers } from "../../../mock/authData";
// import { batchData } from "../../../mock/student management/batch";
// import PlacementForm from "./PlacementForm";


// // this compnet is child of more than one component  behaviour of these is depends
// // location 
// //1) student management in Admin module 
// //2) placemnt mangement in Admin module==>it need plced or not field
// //3) placement managemtn in Placement module==>it need a view button for each row
// //4) Also in trainer module

// export default function StudentTable({ selectedBatchId,actions=[],isAdmin }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [search, setSearch] = useState("");
  
//   const location = useLocation();

//   const studentsPerPage = 5;
//   const searchValue = search.toLowerCase().trim();

//   const navigate=useNavigate()

//   // Detect Placement Management page
  
//   const isPlacementPage =
//     location.pathname.includes("/placement/");
  
// // placement form
//     const [showPlacementForm, setShowPlacementForm] = useState(false);
//    const [selectedStudent, setSelectedStudent] = useState(null);
 
//   // Students belonging to selected batch
 
//   const batchStudents = useMemo(() => {
//     return dummyUsers.filter(
//       (student) =>
//         String(student.batchId).trim() ===
//         String(selectedBatchId).trim()
//     );
//   }, [selectedBatchId]);

// const batch = batchData.find(
//   (b) => b.batchId === selectedBatchId
// );

// const batchStatus = batch?.status ?? "";

  
//   // Search students
 
//   const filteredStudents = useMemo(() => {
//     let students = batchStudents;

//     if (searchValue) {
//       students = students.filter((student) => {
//         const name =
//           student.name?.toLowerCase() || "";

//         const studentId =
//           student.studentId?.toLowerCase() || "";

//         const email =
//           student.email?.toLowerCase() || "";

//         return (
//           name.includes(searchValue) ||
//           studentId.includes(searchValue) ||
//           email.includes(searchValue)
//         );
//       });
//     }

//     /*
//      * Placement page:
//      * Placed students first
//      * Not placed students after
//      */
//     if (isPlacementPage) {
//       students = [...students].sort((a, b) => {
//         if (a.placed === true && b.placed !== true) {
//           return -1;
//         }

//         if (a.placed !== true && b.placed === true) {
//           return 1;
//         }

//         return 0;
//       });
//     }

//     return students;
//   }, [
//     batchStudents,
//     searchValue,
//     isPlacementPage,
//   ]);

 
//   // Pagination

//   const totalPages = Math.ceil(
//     filteredStudents.length / studentsPerPage
//   );

//   const startIndex =
//     (currentPage - 1) * studentsPerPage;

//   const currentStudents = filteredStudents.slice(
//     startIndex,
//     startIndex + studentsPerPage
//   );

//   // Reset page when batch/search changes

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [selectedBatchId, search]);

//   // -----count

//   const placedCount = filteredStudents.filter(
//     (student) => student.placed === true
//   ).length;

//   const notPlacedCount = filteredStudents.filter(
//     (student) => student.placed !== true
//   ).length;

  
// {showPlacementForm && (
//   <PlacementForm
//     student={selectedStudent}
//     onClose={() => {
//       setShowPlacementForm(false);
//       setSelectedStudent(null);
//     }}
//   />
// )}



//   // -No batch selected
//   if (!selectedBatchId) {
//     return (
//       <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-10">
//         <div className="text-center">
//           <h3 className="text-base font-semibold text-gray-800">
//             Select a batch
//           </h3>

//           <p className="mt-1 text-sm text-gray-500">
//             Select a batch above to view its students.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   const noSearchResult =
//     searchValue && filteredStudents.length === 0;


//     const handleViewStudent = (studentId) => {
//       if (isPlacementPage){
//   navigate(`/placement/student/${studentId}`);

//   }
//   else{
//     navigate(`/trainer/student/${studentId}`);
//   }
// };

//   return (
//     <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

//       {/*           HEADER        */}
//       <div className="px-6 py-5 border-b border-gray-200">

//         <div className="flex items-center justify-between gap-4">

//           <div>
//             <h2 className="text-lg font-semibold text-gray-900">
//               {isPlacementPage
//                 ? "Placement Students"
//                 : "Students"}
//             </h2>

//             <p className="mt-1 text-sm text-gray-500">
//               Students enrolled in{" "}
//               <span className="font-medium text-gray-700">
//                 {selectedBatchId}
//               </span>
//             </p>
//           </div>

          

//           {/* Search */}
//           <div className="relative w-full sm:w-72">

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.8"
//               stroke="currentColor"
//               className="
//                 absolute left-3 top-1/2
//                 -translate-y-1/2
//                 w-4 h-4
//                 text-gray-400
//                 pointer-events-none
//               "
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="
//                   m21 21-4.35-4.35
//                   m1.35-5.65
//                   a7 7 0 1 1-14 0
//                   a7 7 0 0 1 14 0Z
//                 "
//               />
//             </svg>

//             <input
//               type="text"
//               value={search}
//               onChange={(e) =>
//                 setSearch(e.target.value)
//               }
//               placeholder="Search students..."
//               className="
//                 w-full h-10
//                 pl-9 pr-4
//                 rounded-lg
//                 border border-gray-200
//                 bg-gray-50
//                 text-sm text-gray-700
//                 placeholder:text-gray-400
//                 outline-none
//                 transition-all
//                 focus:bg-white
//                 focus:border-emerald-400
//                 focus:ring-2
//                 focus:ring-emerald-50
//               "
//             />

//           </div>
         
//        {/* Export button for report page */}

//          {
//             actions?.fullReport && (
//               <button
//                 onClick={actions.fullReport}
//                 className="
//                   inline-flex items-center justify-center gap-2
//                   h-10 px-4
//                   rounded-lg
//                   border border-gray-200
//                   bg-white
//                   text-sm font-medium text-gray-700
//                   shadow-sm
//                   transition-all
//                   hover:bg-gray-50
//                   hover:border-gray-300
//                   focus:outline-none
//                   focus:ring-2
//                   focus:ring-emerald-100
//                 "
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.8"
//                   stroke="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
//                   />
//                 </svg>

//                 Export Full Report
//               </button>
//             )
//           }

//         </div>

//         {/* Placement Summary */}
//         {isPlacementPage || batchStatus==="Inactive" && (
//           <div className="flex items-center gap-4 mt-5">

//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-green-500" />

//               <span className="text-xs text-gray-500">
//                 Placed
//               </span>

//               <span className="text-xs font-semibold text-gray-800">
//                 PLACED {placedCount}
//               </span>
//             </div>

//             <div className="h-4 w-px bg-gray-200" />

//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-red-500" />

//               <span className="text-xs text-gray-500">
//                 Not Placed
//               </span>

//               <span className="text-xs font-semibold text-gray-800">
//                 {notPlacedCount}
//               </span>
//             </div>

//           </div>
//         )}

//       </div>

//       {/* NO SEARCH RESULT */}

//       {noSearchResult ? (
//         <div className="px-6 py-16 text-center">

//           <div className="
//             w-12 h-12
//             mx-auto mb-4
//             rounded-full
//             bg-gray-100
//             flex items-center justify-center
//           ">
//             <svg
//               className="w-6 h-6 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.8"
//                 d="
//                   M21 21l-4.35-4.35
//                   m1.35-5.65
//                   a7 7 0 11-14 0
//                   7 7 0 0114 0z
//                 "
//               />
//             </svg>
//           </div>

//           <h3 className="text-base font-semibold text-gray-800">
//             No student found
//           </h3>

//           <p className="mt-1 text-sm text-gray-500">
//             No student with{" "}
//             <span className="font-medium text-gray-700">
//               "{search}"
//             </span>{" "}
//             exists in this batch.
//           </p>

//           <p className="mt-2 text-xs text-gray-400">
//             Try another student name, ID, or email.
//           </p>

//         </div>
//       ) : (
//         <>
//           {/* TABLE  */}
//           <div className="overflow-x-auto">

//             <table className="w-full text-sm text-left">

//               <thead className="
//                 bg-gray-50
//                 border-b
//                 border-gray-200
//               ">
//                 <tr>

//                   <th className="px-6 py-3.5 font-semibold text-gray-600">
//                     Student
//                   </th>

//                   <th className="px-6 py-3.5 font-semibold text-gray-600">
//                     Student ID
//                   </th>

//                   <th className="px-6 py-3.5 font-semibold text-gray-600">
//                     Email
//                   </th>

//                   <th className="px-6 py-3.5 font-semibold text-gray-600">
//                     Batch
//                   </th>


//                   {/* placed details added button */}

//                   {
//                     isPlacementPage &&
//                     <th className="px-6 py-3.5 font-semibold text-gray-600"> 
//                         Add Placement
//                     </th>
//                   }

//                   {/* Placement page only */}
//                   {isPlacementPage || batchStatus==="Inactive" && (
//                     <th className="px-6 py-3.5 font-semibold text-gray-600">
//                       Placement Status
//                     </th>
//                   )}

//                   {
//                     actions?.studentReport &&
//                     (
//                       <th className="px-6 py-3.5 font-semibold text-gray-600">
//                         Action
//                       </th>
//                     )
//                   }

//                   {!isAdmin && (
//                     <th className="px-6 py-3.5 font-semibold text-gray-600">
//                       Action
//                     </th>
//                   )}

                 

//                 </tr>
//               </thead>

//               <tbody className="
//                 divide-y
//                 divide-gray-100
//               ">

//                 {currentStudents.length > 0 ? (
//                   currentStudents.map((student, index) => {

//                     const isPlaced =
//                       student.placed === true;

//                     return (
//                       <tr
//                         key={student.id}
//                         className="
//                           hover:bg-gray-50
//                           transition-colors
//                         "
//                       >

//                         {/* Student */}
//                         <td className="px-6 py-4">

//                           <div className="flex items-center gap-3">

//                             <div className="
//                               w-9 h-9
//                               rounded-full
//                               bg-emerald-100
//                               text-emerald-700
//                               flex items-center
//                               justify-center
//                               font-semibold
//                             ">
//                               {student.name
//                                 ?.charAt(0)
//                                 .toUpperCase()}
//                             </div>

//                             <div>

//                               <p className="
//                                 font-medium
//                                 text-gray-900
//                               ">
//                                 {student.name}
//                               </p>

//                               <p className="
//                                 text-xs
//                                 text-gray-400
//                                 mt-0.5
//                               ">
//                                 Student
//                               </p>

//                             </div>

//                           </div>

//                         </td>

//                         {/* Student ID */}
//                         <td className="
//                           px-6 py-4
//                           text-gray-700
//                           font-medium
//                         ">
//                           {student.studentId}
//                         </td>

//                         {/* Email */}
//                         <td className="
//                           px-6 py-4
//                           text-gray-600
//                         ">
//                           {student.email}
//                         </td>

//                         {/* Batch */}
//                         <td className="px-6 py-4">

//                           <span className="
//                             inline-flex
//                             items-center
//                             px-2.5 py-1
//                             rounded-md
//                             bg-gray-100
//                             text-gray-600
//                             text-xs
//                             font-medium
//                           ">
//                             {student.batchId}
//                           </span>

//                         </td>
//                            {/* button for place,ent details */}

//                         {
//                           isPlacementPage && 
//                           <td>
//  <button
//   type="button"
//   onClick={() => {
//     setSelectedStudent(student);
//     setShowPlacementForm(true);
    
//   }}
//   className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
// >
//   Add Placement
// </button>
//                           </td>
//                         }

                        
//                             {/* PLACEMENT STATUS for placement page */}
//                         {isPlacementPage || batchStatus==="Inactive"  && (
//                           <td className="px-6 py-4">

//                             {isPlaced ? (
//                               <span className="
//                                 inline-flex
//                                 items-center
//                                 gap-1.5
//                                 px-2.5 py-1
//                                 rounded-full
//                                 bg-green-50
//                                 text-green-700
//                                 text-xs
//                                 font-semibold
//                               ">
//                                 <span className="
//                                   w-1.5 h-1.5
//                                   rounded-full
//                                   bg-green-500
//                                 " />

//                                 Placed
//                               </span>
//                             ) : (
//                               <span className="
//                                 inline-flex
//                                 items-center
//                                 gap-1.5
//                                 px-2.5 py-1
//                                 rounded-full
//                                 bg-red-50
//                                 text-red-600
//                                 text-xs
//                                 font-semibold
//                               ">
//                                 <span className="
//                                   w-1.5 h-1.5
//                                   rounded-full
//                                   bg-red-500
//                                 " />

//                                 Not Placed
//                               </span>
//                             )}

//                           </td>
//                         )}
//                      {/* Export button for report page */}
//                         {
//                             actions?.fullReport && (
//                               <td className="px-6 py-4">
//                               <button
//                                 onClick={() => actions.studentReport(student.studentId)}
//                                 className="
//                                   inline-flex items-center justify-center gap-2
//                                   h-10 px-4
//                                   rounded-lg
//                                   border border-gray-200
//                                   bg-white
//                                   text-sm font-medium text-gray-700
//                                   shadow-sm
//                                   transition-all
//                                   hover:bg-gray-50
//                                   hover:border-gray-300
//                                   focus:outline-none
//                                   focus:ring-2
//                                   focus:ring-emerald-100
//                                 "
//                                 >
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                   strokeWidth="1.8"
//                                   stroke="currentColor"
//                                   className="w-4 h-4"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
//                                   />
//                                 </svg>

//                                 Export 
//                                </button>
//                                </td>
//                         )
//                       }

//                       {
//                         !isAdmin &&(
//                            <td className="px-4 py-3">
//         <button
//             onClick={() => handleViewStudent(student.studentId)}
//             className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
//         >
//             Views
//         </button>
//     </td>
//                         )
//                       }

                        

//                       </tr>
//                     );
//                   })
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan={
//                         isPlacementPage ? 5 : 5
//                       }
//                       className="
//                         px-6 py-12
//                         text-center
//                         text-sm
//                         text-gray-400
//                       "
//                     >
//                       No students found in this batch.
//                     </td>
//                   </tr>
//                 )}

//               </tbody>

//             </table>

//           </div>

//           {/* PAGINATION */}
//           {totalPages > 1 && (
//             <div className="
//               flex items-center
//               justify-between
//               px-6 py-4
//               border-t
//               border-gray-200
//             ">

//               <p className="text-sm text-gray-500">

//                 Showing{" "}

//                 <span className="
//                   font-medium
//                   text-gray-700
//                 ">
//                   {startIndex + 1}
//                 </span>

//                 {" "}to{" "}

//                 <span className="
//                   font-medium
//                   text-gray-700
//                 ">
//                   {Math.min(
//                     startIndex + studentsPerPage,
//                     filteredStudents.length
//                   )}
//                 </span>

//                 {" "}of{" "}

//                 <span className="
//                   font-medium
//                   text-gray-700
//                 ">
//                   {filteredStudents.length}
//                 </span>

//               </p>

//               <div className="flex items-center gap-2">

//                 <button
//                   type="button"
//                   disabled={currentPage === 1}
//                   onClick={() =>
//                     setCurrentPage(
//                       (page) => page - 1
//                     )
//                   }
//                   className="
//                     px-3 py-1.5
//                     text-sm
//                     border
//                     border-gray-200
//                     rounded-md
//                     disabled:opacity-40
//                     hover:bg-gray-50
//                   "
//                 >
//                   Previous
//                 </button>

//                 <span className="
//                   px-3 py-1.5
//                   text-sm
//                   text-gray-600
//                 ">
//                   {currentPage} / {totalPages}
//                 </span>

//                 <button
//                   type="button"
//                   disabled={
//                     currentPage === totalPages
//                   }
//                   onClick={() =>
//                     setCurrentPage(
//                       (page) => page + 1
//                     )
//                   }
//                   className="
//                     px-3 py-1.5
//                     text-sm
//                     border
//                     border-gray-200
//                     rounded-md
//                     disabled:opacity-40
//                     hover:bg-gray-50
//                   "
//                 >
//                   Next
//                 </button>

//               </div>

//             </div>
//           )}

//         </>
//       )}

//          {/* Placement Form Modal */}
//       {showPlacementForm && (
//         <PlacementForm
//           student={selectedStudent}
//           onClose={() => {
//             setShowPlacementForm(false);
//             setSelectedStudent(null);
//           }}
//         />
//       )}

//     </section>
//   );
// }




import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyUsers } from "../../../mock/authData";
import { batchData } from "../../../mock/student management/batch";

export default function StudentTable({ selectedBatchId }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  const students = useMemo(() => {
    return dummyUsers.filter(
      (student) =>
        String(student.batchId).trim() ===
        String(selectedBatchId).trim()
    );
  }, [selectedBatchId]);

  const filteredStudents = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    if (!searchValue) return students;

    return students.filter((student) => {
      return (
        student.name?.toLowerCase().includes(searchValue) ||
        student.studentId?.toLowerCase().includes(searchValue) ||
        student.email?.toLowerCase().includes(searchValue)
      );
    });
  }, [students, search]);

  const totalPages = Math.ceil(
    filteredStudents.length / studentsPerPage
  );

  const startIndex = (currentPage - 1) * studentsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  const batch = batchData.find(
    (item) => item.batchId === selectedBatchId
  );

  // const handleViewStudent = (studentId) => {
  //   navigate(`/admin/student/${studentId}`);
  // };

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-5">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Students
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage students in {batch?.batchId || "this batch"}
            </p>
          </div>

          <span className="rounded-lg bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
            {filteredStudents.length} Students
          </span>
        </div>

        {/* Search */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search by name, ID or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full max-w-sm rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">

          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-3.5">Student</th>
              <th className="px-6 py-3.5">Student ID</th>
              <th className="px-6 py-3.5">Email</th>
              <th className="px-6 py-3.5">Batch</th>
              <th className="px-6 py-3.5">Status</th>
              {/* <th className="px-6 py-3.5 text-right">Action</th> */}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {currentStudents.length > 0 ? (
              currentStudents.map((student) => (
                <tr
                  key={student.id}
                  className="transition hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                        {student.name?.charAt(0)}
                      </div>

                      <span className="font-medium text-gray-800">
                        {student.name}
                      </span>

                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {student.studentId}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {student.email}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {student.batchId}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        student.placed
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {student.placed ? "Placed" : "Active"}
                    </span>
                  </td>

                  {/* <td className="px-6 py-4 text-right">
                    <button
                      onClick={() =>
                        handleViewStudent(student.studentId)
                      }
                      className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50"
                    >
                      View
                    </button>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-12 text-center text-gray-500"
                >
                  No students found.
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">

          <p className="text-sm text-gray-500">
            Showing {startIndex + 1} to{" "}
            {Math.min(
              startIndex + studentsPerPage,
              filteredStudents.length
            )}{" "}
            of {filteredStudents.length}
          </p>

          <div className="flex gap-1">

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-8 min-w-8 rounded-lg px-2 text-sm ${
                  currentPage === page
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

          </div>
        </div>
      )}

    </section>
  );
}