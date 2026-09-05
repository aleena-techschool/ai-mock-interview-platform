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

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? children : <Navigate to="/login" replace />;
};

export default function UserRoutes() {
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

      <Route
        path="/interviews/:id/prepare"
        element={
          <ProtectedRoute>
            <InterviewPreparePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/interviews/:id/session"
        element={
          <ProtectedRoute>
            <InterviewSessionPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings/*"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />

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

      <Route
        path="/resume"
        element={
          <ProtectedRoute>
            <ResumeAnalyzerPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/questions"
        element={
          <ProtectedRoute>
            <QuestionBankPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/roadmap"
        element={
          <ProtectedRoute>
            <RoadmapPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/start-interview"
        element={<Navigate to="/interviews" replace />}
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}