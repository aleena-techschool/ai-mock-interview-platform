import React from "react";
import { NavLink } from "react-router-dom";

const settingsItems = [
  {
    label: "Profile Information",
    to: "/settings/profile",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 21a8 8 0 00-16 0"
        />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },

  {
    label: "Set Password",
    to: "/settings/set-password",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <rect
          x="3"
          y="11"
          width="18"
          height="10"
          rx="2"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 11V7a5 5 0 0110 0v4"
        />
      </svg>
    ),
  },

  // {
  //   label: "Notifications",
  //   to: "/settings/notifications",
  //   icon: (
  //     <svg
  //       className="w-5 h-5"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="1.8"
  //       viewBox="0 0 24 24"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M18 8a6 6 0 00-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
  //       />
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M10 21h4"
  //       />
  //     </svg>
  //   ),
  // },

  {
    label: "Account Settings",
    to: "/settings/account",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1-1.5 1.5-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V20h-2v-.4a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.9.3l-.1.1-1.5-1.5.1-.1A1.7 1.7 0 008 15a1.7 1.7 0 00-1.5-1H6v-2h.5A1.7 1.7 0 008 11a1.7 1.7 0 00-.3-1.9l-.1-.1 1.5-1.5.1.1a1.7 1.7 0 001.9.3 1.7 1.7 0 001-1.5V6h2v.4a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3l.1-.1 1.5 1.5-.1.1a1.7 1.7 0 00-.3 1.9 1.7 1.7 0 001.5 1h.5v2h-.5a1.7 1.7 0 00-1.5 1z"
        />
      </svg>
    ),
  },
];

export default function SettingsSidebar() {
  return (
    <aside className="w-72 flex-shrink-0">

      <div className="bg-white border border-green-100 rounded-2xl p-3 shadow-sm">

        {settingsItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 mb-1 ${
                isActive
                  ? "bg-green-50 text-green-600 shadow-sm"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-600"
              }`
            }
          >
            {item.icon}

            <span>{item.label}</span>
          </NavLink>
        ))}

      </div>

    </aside>
  );
}