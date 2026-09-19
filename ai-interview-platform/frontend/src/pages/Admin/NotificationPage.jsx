import AdminSidebar from "../../features/Admin/Dashboard/Sidebar"
import AdminTopBar from "../../features/Admin/Dashboard/Topbar"
import PageHeader from "../../features/Admin/common/PageHeader"
import TodayDate from "../../features/Admin/common/TodayDate"
import Notification from "../../features/Admin/notifications/Notification"




export default function NotoficationPage(){

    return(
       <div className="flex h-screen overflow-hidden">
       
                       <AdminSidebar />
       
                       <div className="flex-1 flex flex-col relative overflow-visible">
                           <div className="relative z-10">
                               <AdminTopBar />
                           </div>
        {/* ----------------------header----------------------- */}
                           <div className="relative shrink-0 bg-blue-50">
                           
                              
                           
                               
                               <div className=" absolute top-[10px] right-6
                               z-50 -translate-y-1/2 ">
                                   <TodayDate />
                               </div>
                           </div> 

            {/* -----------------MAIN CONTENT--------------------- */}
                            <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden"> 
                                <Notification /> 
                            </main>
                        
                        </div>
                    </div> 
    )
}