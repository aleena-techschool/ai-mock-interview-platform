import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import PlacementRoutes from "./PlacementRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/placement/*" element={<PlacementRoutes />} />
      <Route path="/*" element={<UserRoutes />} />
    </Routes>
  );
}