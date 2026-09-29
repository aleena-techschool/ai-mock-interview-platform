import { useLocation, useNavigate } from "react-router-dom";
import { interviewResults} from "../../../mock/interviewResultData"
import InterviewBarChart from "./InterviewBarChart";
import InterviewPieChart from "./InterviewPieChart";
import StatsCard from "./StatsCards";
import InterviewTable from "./InterviewTable";

export default function InterviewInfo({ studId }) {

  
    // 1. Get all interviews of this student

    const interviews = interviewResults.filter(
        (interview) => interview.studId === studId
    );
 
    // 2. total counts

    const totalInterviews = interviews.length;

    // 3. Overall Average Score

    const averageScore =
        totalInterviews > 0
            ? Math.round(
                  interviews.reduce(
                      (total, interview) =>
                          total + interview.score.percentage,
                      0
                  ) / totalInterviews
              )
            : 0;
 
    // 4. Technical Interviews=  Technical + Coding
   

    const technicalInterviews = interviews.filter(
        (interview) =>
            interview.type === "Technical" ||
            interview.type === "Coding"
    );

    const technicalScore =
        technicalInterviews.length > 0
            ? Math.round(
                  technicalInterviews.reduce(
                      (total, interview) =>
                          total + interview.score.percentage,
                      0
                  ) / technicalInterviews.length
              )
            : 0;
 
    // 5. Behavioral Interviews=Behavioral + HR

    const behavioralInterviews = interviews.filter(
        (interview) =>
            interview.type === "Behavioral" ||
            interview.role === "HR Round"
    );

    const behavioralScore =
        behavioralInterviews.length > 0
            ? Math.round(
                  behavioralInterviews.reduce(
                      (total, interview) =>
                          total + interview.score.percentage,
                      0
                  ) / behavioralInterviews.length
              )
            : 0;

    // 6. Summary data for Stats Cards

    const statsData = {
        totalInterviews,
        averageScore,
        technicalScore,
        behavioralScore,
    };

   
    // 7. Count of each interview type
    //    For Pie Chart

    const interviewTypeCounts = interviews.reduce(
        (acc, interview) => {

            const type = interview.type;

            if (!acc[type]) {
                acc[type] = 0;
            }

            acc[type] += 1;

            return acc;
        },
        {}
    );


    const pieChartData = Object.entries(interviewTypeCounts).map(
        ([type, count]) => ({
            name: type,
            value: count,
        })
    );


  
    // 8. Percentage of each interview type
    //    For Bar Chart
  const typeWiseMarkPercentage = interviewResults
    .filter((interview) => interview.studId === studId)
    .reduce((acc, interview) => {
        const type = interview.type;

        if (!acc[type]) {
            acc[type] = {
                totalPercentage: 0,
                count: 0,
            };
        }

        acc[type].totalPercentage += interview.score.percentage;
        acc[type].count += 1;

        return acc;
    }, {});

   const barChartData = Object.entries(typeWiseMarkPercentage).map(
    ([type, data]) => ({
        type,
        percentage: Math.round(
            data.totalPercentage / data.count
        ),
        count: data.count,
    })
);


   
    // 9. Individual interview details
    //    For Table
   

    const interviewTableData = interviews.map((interview) => ({
        id: interview.id,
        role: interview.role,
        type: interview.type,
        mode: interview.mode,
        difficulty: interview.difficulty,
        scheduledDate: interview.scheduledDate,
        scheduledTime: interview.scheduledTime,
        duration: interview.duration,
        score: interview.score.percentage,
        marksGained: interview.score.marksGained,
        maxMarks: interview.score.maxMarks,
        completedAt: interview.completedAt,
    }));

    //handle view
    const navigate = useNavigate();

    const location=useLocation()
    const isPlacement=location.pathname.includes("placement")


    // placement/students/STU001/interviews/INT002
    const handleViewDetails = (interview) => {
        // if it is from placement
        if (isPlacement){        
            navigate(`/placement/students/${studId}/interviews/${interview.id}`);
            }
            else{
        navigate(`/trainer/students/${studId}/interviews/${interview.id}`);

            }
    };


   

    return (
    <div className="w-full">
        <StatsCard data={statsData} />

        <div className="flex w-full gap-4 mt-4">
            <div className="w-1/2 bg-white rounded-xl border border-gray-100 p-4">
                <InterviewBarChart data={barChartData} />
            </div>

            <div className="w-1/2 bg-white rounded-xl border border-gray-100 p-4">
                <InterviewPieChart data={pieChartData} />
            </div>
        </div>

        <div className=" w-full gap-4 my-4">
                   <InterviewTable
                        data={interviewTableData}
                        onViewDetails={handleViewDetails}
                    />
        </div>


    </div>
);
}