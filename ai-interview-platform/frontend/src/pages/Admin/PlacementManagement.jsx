import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import AdminTopBar from "../../features/Admin/Dashboard/Topbar";
// import TrainerCard from "../../features/Admin/PlacementManagement/TrainerCard";
import PageHeader from "../../features/Admin/common/PageHeader";
import TodayDate from "../../features/Admin/common/TodayDate";


export default function PlacementManagement(){
    return(
            <div className="flex h-screen overflow-hidden">

                <AdminSidebar />

                <div className="flex-1 flex flex-col relative overflow-visible">
                    <div className="relative z-10">
                        <AdminTopBar />
                    </div>
 {/* ----------------------header----------------------- */}
                    <div className="relative shrink-0">
                    
                        <PageHeader title="Placement Management"
                         description="Track and manage placement activities and placement statistics"
                        />
                    
                        
                        <div className=" absolute top-[10px] right-6
                        z-50 -translate-y-1/2 ">
                            <TodayDate />
                        </div>
                    </div>                   
                

    {/* ---------------------main contents------------------------- */}

                    <main className=" m-6 flex-1 min-h-0 overflow-y-auto
                        bg-gray-50 pb-8 ">

                            {/* <TrainerCard /> */}


                    </main>
                </div>

            </div>
    )
}