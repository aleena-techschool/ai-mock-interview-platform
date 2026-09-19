import SubCard from "./SubCard";
import CoureWiseStud from "./CourseStud";
import ActiveInactiveBatch from "./ActiveInactiveBatch";

export default function StudentBatchCard(){

    return(
        <div className="mx-6 max-w-full px-6"> 
            <div>
                <SubCard/>
            </div>
            <div className=" flex gap-6 ">
                <CoureWiseStud/>
                <ActiveInactiveBatch/>
            </div>
            
        </div>
    )
}