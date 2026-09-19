import InterviewCard from "./InterviewCard";
import RoleWiseTrend from "./RoleWiseTrend";
import WeekTrend from "./WeekTrend";

export default function Interviewanalytics() {
    return (
        <div className="max-w-full">
            <div className="mx-2">
                <InterviewCard />
            </div>
            <div className="mx-6 max-w-full px-6">
                <div className=" flex gap-6 mt-6">
                    <WeekTrend />
                    <RoleWiseTrend />
                </div>
            </div>
        </div>
    );
}