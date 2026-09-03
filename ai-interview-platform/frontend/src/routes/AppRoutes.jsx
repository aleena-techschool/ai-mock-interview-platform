import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import InterviewsPage from "../features/interviews/InterviewsPage";
import InterviewPreparePage from "../features/interviews/InterviewPreparePage";
import InterviewSessionPage from "../features/interviews/InterviewSessionPage";
import SettingsPage from "../pages/SettingsPage";
import InterviewHistoryPage from "../pages/InterviewHistoryPage";
import InterviewResultDetailsPage from "../pages/InterviewResultDetailsPage";
import QuestionBankPage from "../pages/QuestionBankPage";
import ResumeAnalyzerPage from "../pages/ResumeAnalyzerPage";
import RoadmapPage from "../pages/RoadMapPage";

import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import AdminDashboardPage from "../pages/Admin/AdminDashboardPage";


const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? children : <Navigate to="/login" replace />;
};

const AdminProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? children : <Navigate to="/admin" replace />;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interviews"
        element={
          <ProtectedRoute>
            <InterviewsPage />
          </ProtectedRoute>
        }
      />
      <Route path="/interviews/:id/prepare" element={<ProtectedRoute>
        <InterviewPreparePage />
      </ProtectedRoute>} />
      <Route path="/interviews/:id/session" element={<ProtectedRoute>
        <InterviewSessionPage />
      </ProtectedRoute>} />
      {/* SETTINGS */}
      <Route path="/settings/*" element={<ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>} />
      {/* INTERVIEW */}
      <Route path="/start-interview" element={<Navigate to="/interviews" replace />} />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <InterviewHistoryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history/:id"
        element={
          <ProtectedRoute>
            <InterviewResultDetailsPage />
          </ProtectedRoute>
        }
      />
      {/* Resumeanalyzer */}
      <Route path="/resume" element={<ProtectedRoute>
        <ResumeAnalyzerPage />    </ProtectedRoute>} />
      {/* questionbank page */}
      <Route path="/questions" element={<ProtectedRoute>
        <QuestionBankPage />    </ProtectedRoute>} />
      {/* Roadmap */}
      <Route path="/roadmap" element={<ProtectedRoute>
        <RoadmapPage />    </ProtectedRoute>} />




{/* *-----------------ADMIN-------------------* */}
      <Route path="/admin" element={<AdminLoginPage />} />
      <Route path="/admindashboard"  element={
          <AdminProtectedRoute>
            <AdminDashboardPage />
          </AdminProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}