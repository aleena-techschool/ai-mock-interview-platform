import { useSelector } from "react-redux";
import PlacementSidebar from "../../features/Placement/Dashboard/Sidebar";
import PlacementTopBar from "../../features/Placement/Dashboard/TopBar";
import StatsCard from "../../features/Placement/placementManage/StatsCard";
import CourseSelection from "../../features/Admin/StudentManagement/CourseSelection";
import CourseWise from "../../features/Placement/placementManage/Coursewise";
import PlacedStudents from "../../features/Placement/placementManage/PlacedTable";




export default function PlacementPage(){

     const user = useSelector((state) => state.auth.user);
     
    const mentorId = user ? user.mentorId :  "MTR011";

    return(
        <div className="h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white">
        
                    {/* Fixed Sidebar */}
                    <div className="fixed left-0 top-0 z-30 h-screen">
                        <PlacementSidebar />
                    </div>
        
                    {/* Main Area */}
                    <div className="ml-64 h-screen">
        
                        {/* Fixed TopBar */}
                        <div className="fixed top-0 right-0 left-60 z-20">
                            <PlacementTopBar />
                        </div>
        
                        {/* Scrollable Main Content */}
                        <main className="h-screen overflow-y-auto my-10 pt-20 pb-10">
                            <div className="px-6 pb-10">
                                <StatsCard id={mentorId}/>
                               
                            </div>

                            <div className="px-6 pb-10">
                                <CourseWise id={mentorId}/>
                            </div>

                            <div className="px-6 pb-10">
                                <PlacedStudents id={mentorId}/>
                            </div>
                        </main>
        
                    </div>
                </div>
    )
}