import Sidebar from "../features/dashboard/Sidebar";
import TopBar from "../features/dashboard/TopBar";
import SettingsSidebar from "../features/settings/SettingsSidebar";
import SetPassword from "../features/settings/SetPassword";

import { Routes, Route } from "react-router-dom";

export default function SettingsPage() {
  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #ffffff 100%)",
      }}
    >

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <TopBar />

        <main className="flex-1 overflow-y-auto px-6 py-5">

          <div className="mb-5">
            <h1 className="text-2xl font-semibold text-gray-800">
              Settings
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage your account and preferences
            </p>
          </div>

          <div className="flex gap-5">

            <SettingsSidebar />

            <div className="flex-1 min-w-0">

              <Routes>

                {/* /settings */}
                <Route
                  index
                  element={null}
                />

                {/* /settings/set-password */}
                <Route
                  path="set-password"
                  element={<SetPassword />}
                />

              </Routes>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}