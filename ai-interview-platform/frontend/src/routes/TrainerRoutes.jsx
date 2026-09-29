import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import TrainerLoginPage from "../pages/Trainer/LoginPage";
import TrainerDashboard from "../pages/Trainer/DashboardPage";
import BatchDetails from "../features/Trainer/dashboard/BatchDetails";
import StudentInterview from "../pages/Placement/StudentInterview";
import CompletedBatch from "../pages/Trainer/completedBatch";
import PlacedstudentPage from "../pages/Trainer/PlacedstudentPage";
import InterviewResultDetailsPage from "../pages/InterviewResultDetailsPage";



const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? children : <Navigate to="/trainer" replace />;
};


export default function TrainerRoutes(){

    return(
        <Routes>
            {/* --------------------LOGIN--------------------- */}
            <Route
                    path="/"
                    element={<TrainerLoginPage />}
                  />

            {/* ---------------------------DASDHBOARD--------------------- */}
<Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <TrainerDashboard />
          </ProtectedRoute>
        }
      />

      {/* ------------------------------BATCH DETAILS----------------------------------------- */}
<Route
        path="/batches/:batchId"
        element={
          <ProtectedRoute>
            <BatchDetails />
          </ProtectedRoute>
        }
      />

          // -----------------------------STUDENT DETSILS------------------------
    <Route
                    path="/student/:studentId"
                    element={
                      <ProtectedRoute>
                        <StudentInterview />
                      </ProtectedRoute>
                    }
                  />

                  {/* ------------------------------INTERVIEW DETAISL-------------------- */}
 <Route
                path="/students/:studId/interviews/:id"
                element={
                  <ProtectedRoute>
                    <InterviewResultDetailsPage />
                  </ProtectedRoute>
                }
              />

                  {/* -----------------------------COMPLETED BATCH DETAILS--------------- */}
            <Route
                    path="/inactive/"
                    element={
                      <ProtectedRoute>
                        <CompletedBatch />
                      </ProtectedRoute>
                    }
                  />

                      {/* -----------------------------PLACED STUDENTS DETAILS--------------- */}
            <Route
                    path="/placementmanage/"
                    element={
                      <ProtectedRoute>
                        <PlacedstudentPage />
                      </ProtectedRoute>
                    }
                  />


                 <Route path="*" element={<Navigate to="/trainer" replace />} /> 
        </Routes>

    
    
      )
}