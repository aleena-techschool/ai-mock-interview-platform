import { useParams } from "react-router-dom";
import TrainerSidebar from "./Sidebar";
import Breadcrumbs from "../../Admin/common/Breadcrumbs";
import StudentTable from "../StudentTable";

import { batchData } from "../../../mock/student management/batch";
import { useSelector } from "react-redux";

export default function BatchDetails() {
  

  const user = useSelector((state) => state.auth.user);

    const trainerId = user ? user.trainerId : "MTR002";

  const { batchId } = useParams();

  const batch=batchData.find((b)=>b.batchId==batchId)
  const batchStatus=batch.status

  console.log("batchstatus :",batchStatus,batch,batchId)



  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <TrainerSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Breadcrumb */}
        <div className="mb-6">

            {
                batchStatus=="Active" ?
                <Breadcrumbs
            items={[
              {
                label: "Dashboard",
                path: "/trainer/dashboard",
              },
              {
                label: "Batch Details",
              },
            ]}
          />
          :
          <Breadcrumbs
            items={[
              {
                label: "Completed Batches",
                path: "/trainer/inactive",
              },
              {
                label: "Batch Details",
              },
            ]}
          />
            }
          
        </div>

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Batch Details
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View and manage students enrolled in this batch.
          </p>
        </div>

        {/* Students Section */}
        <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-gray-800">
              Students
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Students assigned to this batch
            </p>
          </div>

          <div className="p-5">
            <StudentTable
              selectedBatchId={batchId}
              trainerId={trainerId}
            />
          </div>
        </section>
      </main>
    </div>
  );
}