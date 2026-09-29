import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../pages/Placement/PlacementLogin";
import PlacementDashboard from "../pages/Placement/DashboardPage";
import StudentInterview from "../pages/Placement/StudentInterview";
import InterviewResultDetails from "../features/interviews/interviewHistory/InterviewResultDetails";
import InterviewResultDetailsPage from "../pages/InterviewResultDetailsPage";
import PlacementPage from "../pages/Placement/PlacementManagePage";

const PlacementProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? (
    children
  ) : (
    <Navigate to="/placement" replace />
  );
};


export default function PlacementRoutes(){

        return(
        <Routes> 

            <Route
                    path="/"
                    element={<LoginPage />}
                  />


            {/* /placement/dashboard */}
                  <Route
                    path="/dashboard"
                    element={
                      <PlacementProtectedRoute>
                        <PlacementDashboard />
                      </PlacementProtectedRoute>
                    }
                  />


                   {/* student interview deatils */}

        <Route
                path="/student/:studentId"
                element={
                  <PlacementProtectedRoute>
                    <StudentInterview />
                  </PlacementProtectedRoute>
                }
              />

      {/* placement/students/STU001/interviews/INT002 */}
               <Route
                path="/students/:studId/interviews/:id"
                element={
                  <PlacementProtectedRoute>
                    <InterviewResultDetailsPage />
                  </PlacementProtectedRoute>
                }
              />


              {/* //Inactive batch   same as active(dashboard)  */}


              <Route
                    path="/Inactive"
                    element={
                      <PlacementProtectedRoute>
                        <PlacementDashboard />
                      </PlacementProtectedRoute>
                    }
                  />


                  {/* placement page */}
                   <Route
                    path="/placementmanage"
                    element={
                      <PlacementProtectedRoute>
                        <PlacementPage />
                      </PlacementProtectedRoute>
                    }
                  />


                  <Route path="*" element={<Navigate to="/placement" replace />} />
        </Routes>

       




        )

}