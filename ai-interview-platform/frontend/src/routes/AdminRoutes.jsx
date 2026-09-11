import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import AdminDashboardPage from "../pages/Admin/AdminDashboardPage";
import StudentManagePage from "../pages/Admin/StudentManagePage";
import MentorManagement from "../pages/Admin/MentorManagement";
import MentorDetails from "../pages/Admin/MentorDetails";
import PlacementManagement from "../pages/Admin/PlacementManagement";






const AdminProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? (
    children
  ) : (
    <Navigate to="/admin" replace />
  );
};

export default function AdminRoutes() {
  return (
    <Routes>

      {/* /admin */}
      <Route
        path="/"
        element={<AdminLoginPage />}
      />

      {/* /admin/dashboard */}
      <Route
        path="/dashboard"
        element={
          <AdminProtectedRoute>
            <AdminDashboardPage />
          </AdminProtectedRoute>
        }
      />


      {/* admin/studentmanagement */}
      <Route
        path="/student-management"
        element={
          <AdminProtectedRoute>
            <StudentManagePage />
          </AdminProtectedRoute>
        }
      />


      {/* admin/studentmanagement */}
      <Route
        path="/mentor-management"
        element={
          <AdminProtectedRoute>
            <MentorManagement />
          </AdminProtectedRoute>
        }
      />

      {/* admin/studentmanagement */}
      <Route
        path="/mentor-details/:mentorId"
        element={
          <AdminProtectedRoute>
            <MentorDetails />
          </AdminProtectedRoute>
        }
      />

      {/* /admin/placement-management */}
      <Route
        path="/placement-management"
        element={
          <AdminProtectedRoute>
            <PlacementManagement />
          </AdminProtectedRoute>
        }
      />


      {/* Unknown admin route */}
      <Route
        path="*"
        element={<Navigate to="/admin" replace />}
      />

    </Routes>
  );
}