import CoureWiseStud from "../Student_Batches/CourseStud"
import CourseWiseTrend from "./CoursewiseTrend"
import PlacementCards from "./PlacementCards"
import PlacementTrend from "./PlacementTrend"


export default function PlacementAnalytics(){

    return (
         <div className="max-w-full">
                    <div className="mx-2">
                        <PlacementCards />
                    </div>
                    <div className="mx-6 max-w-full px-6">
                        <div className=" flex gap-6 mt-6">
                            <PlacementTrend />
                            <CourseWiseTrend/>
                           
                        </div>
                    </div>
                </div>
    )
}