import AdminSidebar from "../../features/Admin/Dashboard/Sidebar";
import TrainerCard from "../../features/Admin/PlacementManagement/TrainerCard";
import Breadcrumbs from "../../features/Admin/common/Breadcrumbs";



export default function PlacementReportPage(){

    return(
        <div className="flex h-screen overflow-hidden">
        
            <AdminSidebar />
                <div className=" px-6 pb-6 pt-5 flex-1 min-h-0 overflow-y-auto 
                        bg-gradient-to-br from-sky-50 via-blue-50 to-white pb-8 ">


                        <Breadcrumbs 
                                items={[
                                {
                                    label: "Admin",
                                    path: "/admin/dashboard"
                                },
                                {
                                    label: "Reports",
                                    path: "/admin/reports"
                                },
                                {
                                    label: "Placement Report"
                                }
                                ]}
                            />

                            <TrainerCard />


                </div>

        </div>
    )

}