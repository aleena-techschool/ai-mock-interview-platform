import { useParams } from "react-router-dom";

import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import AdminTopBar from "../../features/Admin/Dashboard/Topbar";
import PageHeader from "../../features/Admin/common/PageHeader";
import TodayDate from "../../features/Admin/common/TodayDate";
import MentorProfile from "../../features/Admin/MentorManagement/MentorProfile";
import MentorProfileStatus from "../../features/Admin/MentorManagement/MentorProfileStatus";
import MentorBatchTable from "./MentorBatchTable";
import RecentActivities from "../../features/Admin/MentorManagement/RecentActivity";


import { mentors } from "../../mock/student management/mentorDetails";
import { batchData } from "../../mock/student management/batch";
import { dummyUsers } from "../../mock/adminAuthData";

export default function MentorDetails(){

const { mentorId } = useParams();

const mentor = mentors.find(
    (mentor) => mentor.employeeId === mentorId
);

// Batches handled by this mentor
const mentorBatches = batchData.filter(
    (batch) => batch.trainerId === mentorId
);

// Total active batches
const activeBatches = mentorBatches.filter(
    (batch) => batch.status === "Active"
);

// Total inactive batches
const inactiveBatches = mentorBatches.filter(
    (batch) => batch.status === "Inactive"
);

// Students belonging to active batches of this mentor
const activeBatchIds = activeBatches.map(
    (batch) => batch.batchId
);

const studentsActiveBatches = dummyUsers.filter(
    (student) =>
        student.role === "student" &&
        activeBatchIds.includes(student.batchId)
);

const totalActiveBatches = activeBatches.length;
const totalInactiveBatches = inactiveBatches.length;
const totalStudentsActiveBatches = studentsActiveBatches.length;

return(
<div className="flex h-screen overflow-hidden">
            <AdminSidebar/>
            <div className="flex flex-1 flex-col relative overflow-visible">
                
                 <div className="relative z-10">
                    <AdminTopBar />
                </div>

                <div className="relative shrink-0">
                
                    <PageHeader 
                    title="Mentor Profile"
                    description="Manage mentor details, expertise, and active batches in one place."
                    />
                    
                    {/* Date */}
                    <div className="absolute top-[10px] right-6
                        z-50 -translate-y-1/2 ">
                        <TodayDate />
                    </div>
                
                </div>

                <main className="flex-1 min-h-0 overflow-y-auto
                    bg-gray-50 pb-8 ">

                
                <MentorProfile mentor={mentor}/>

                <MentorProfileStatus totalBatches={totalActiveBatches}
                completedBatches={totalInactiveBatches} 
                totalStudents={totalStudentsActiveBatches}/>

                <MentorBatchTable activeBatches={activeBatches}
                inactiveBatches={inactiveBatches} />


                <div className="m-6">
                    <RecentActivities />
                </div>

                </main>

            </div>
</div>

)}