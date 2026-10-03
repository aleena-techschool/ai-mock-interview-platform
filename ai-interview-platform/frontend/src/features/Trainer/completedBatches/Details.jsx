import { batchData } from "../../../mock/student management/batch"
import { mentors } from "../../../mock/student management/mentorDetails"
import { dummyUsers } from "../../../mock/authData"

import { useState } from "react"
import TrainerStatsCard from "../dashboard/StasCard"
import ActiveBatches from "../dashboard/ActiveBatch"

export default function InactiveContent({trainerId}){

  // take active batch details

    const activeBatches=batchData.filter((batch)=>{
               return batch.trainerId==trainerId & batch.status==="Active" 
    })

    const BatchCount=activeBatches.length

    const activeBatchIds = activeBatches.map(batch => batch.batchId);

    const totalStudents = dummyUsers.filter(
    student =>
        activeBatchIds.includes(student.batchId)
    ).length;

    const plcementActive=activeBatches.filter((b)=>{
        return b.placementStatus
    })

    const countPlacement=plcementActive.length

    const completedBatches=batchData.filter((batch)=>{
               return batch.trainerId==trainerId & batch.status==="Inactive" 
    })

    const countCompleted=completedBatches.length

    console.log("  dats :",BatchCount,totalStudents,countCompleted,countPlacement,trainerId)


// take compleeted batch details



    const [batches, setBatches] = useState(activeBatches);

const handlePlacementStatusChange = (batchId) => {
  setBatches((prevBatches) =>
    prevBatches.map((batch) => {
      if (batch.batchId === batchId) {
        const updatedBatch = {
          ...batch,
          placedStatus: !batch.placedStatus,
        };

        console.log("Placement status changed:", updatedBatch);

        return updatedBatch;
      }

      return batch;
    })
  );
};


    return(

        <div className="space-y-6">
  {/* Trainer Statistics */}
  <section>
    <TrainerStatsCard
      batches={BatchCount}
      students={totalStudents}
      completed={countCompleted}
      placed={countPlacement}
    />
  </section>

  {/* Active Batches */}
  <section>
    <ActiveBatches
      batches={completedBatches}
      onPlacementStatusChange={handlePlacementStatusChange}
    />
  </section>
</div>
    )

}