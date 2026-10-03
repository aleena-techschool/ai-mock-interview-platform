import { useState } from "react";
import { Bell, CheckCheck } from "lucide-react";
import notificationData from "./notificationData";

const filters = ["All", "Batch", "Course", "Student", "Placement"];

export default function Notifications() {
  const [notifications, setNotifications] = useState(notificationData);
  const [activeFilter, setActiveFilter] = useState("All");

  // Calculate relative notification time
  const getRelativeTime = (datetime) => {
    const notificationDate = new Date(datetime);
    const currentDate = new Date();

    const difference =
      currentDate.getTime() - notificationDate.getTime();

    const minutes = Math.floor(difference / (1000 * 60));
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (minutes < 1) {
      return "Just now";
    }

    if (minutes < 60) {
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    }

    if (hours < 24) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }

    if (days === 1) {
      return "Yesterday";
    }

    if (days < 7) {
      return `${days} days ago`;
    }

    if (days < 14) {
      return "1 week ago";
    }

    return `${Math.floor(days / 7)} weeks ago`;
  };

  // Handle filter click  now  doesn't add type to notification so when selcet a filter 
//   we does not get any notification under any type

  const handleFilter = (filter) => {
    // setActiveFilter(filter);
    console.log("Filter clicked:", filter);
  };

  // Filter notifications
  const filteredNotifications =
    activeFilter === "All"
      ? notifications
      : notifications.filter(
          (notification) => notification.type === activeFilter
        );

  // Separate unread and read notifications
  const unreadNotifications = filteredNotifications.filter(
    (notification) => notification.status === "unread"
  );

  const readNotifications = filteredNotifications.filter(
    (notification) => notification.status === "read"
  );

  // Total unread count
  const totalUnreadCount = unreadNotifications.length;

  // Mark all notifications as read
  const handleMarkAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        status: "read",
      }))
    );
  };

  // Mark individual notification as read
  const handleNotificationClick = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, status: "read" }
          : notification
      )
    );

    console.log("Notification clicked:", id);
  };

  return (
    <div className="w-full min-h-screen bg-white px-10 py-8">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-3">

          <h1 className="text-3xl font-bold text-slate-900">
            Notifications
          </h1>

          {/* Bell */}
          <div className="relative">
            <div className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center">
              <Bell size={21} className="text-slate-700" />
            </div>

            {/* Unread Count */}
            {totalUnreadCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center">
                {totalUnreadCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ================= FILTER BUTTONS ================= */}
      <div className="flex items-center justify-between mb-8">

        {/* Filters */}
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`
                px-5 py-2
                rounded-full
                text-sm
                font-medium
                border
                transition
                ${
                  activeFilter === filter
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Mark all as read */}
        <button
          onClick={handleMarkAllAsRead}
          className="
            flex items-center gap-2
            px-4 py-2.5
            rounded-lg
            border border-slate-200
            text-sm font-medium
            text-slate-600
            hover:bg-slate-50
            transition
          "
        >
          <CheckCheck size={16} />
          Mark all as read
        </button>
      </div>

      {/* ================= UNREAD ================= */}
      {unreadNotifications.length > 0 && (
        <div className="mb-8">

          {/* Unread heading */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-indigo-600">
              UNREAD
            </span>

            <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 text-xs font-medium">
              {unreadNotifications.length} New
            </span>
          </div>

          {/* Unread notifications */}
          <div className="space-y-3">
            {unreadNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                getRelativeTime={getRelativeTime}
                onClick={handleNotificationClick}
              />
            ))}
          </div>
        </div>
      )}

      {/* ================= EARLIER ================= */}
      {readNotifications.length > 0 && (
        <div>

          {/* Earlier heading */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm font-semibold text-slate-400">
              EARLIER
            </span>

            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* Read notifications */}
          <div className="space-y-3">
            {readNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                getRelativeTime={getRelativeTime}
                onClick={handleNotificationClick}
              />
            ))}
          </div>
        </div>
      )}

      {/* No notifications */}
      {filteredNotifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Bell size={35} className="text-slate-300 mb-3" />

          <h3 className="text-lg font-semibold text-slate-700">
            No notifications
          </h3>

          <p className="text-sm text-slate-400 mt-1">
            There are no notifications in this category.
          </p>
        </div>
      )}
    </div>
  );
}

/* =====================================================
   NOTIFICATION CARD
===================================================== */

function NotificationCard({
  notification,
  getRelativeTime,
  onClick,
}) {
  const isUnread = notification.status === "unread";

  return (
    <div
      onClick={() => onClick(notification.id)}
      className={`
        w-full
        rounded-xl
        border
        p-4
        flex
        items-center
        gap-4
        cursor-pointer
        transition
        hover:shadow-sm
        ${
          isUnread
            ? "bg-blue-50/70 border-blue-100 hover:bg-blue-50"
            : "bg-white border-slate-200 hover:bg-slate-50"
        }
      `}
    >

      {/* ================= ICON ================= */}
      <div
        className="
          w-10 h-10
          shrink-0
          rounded-lg
          bg-indigo-50
          border border-indigo-100
          flex items-center justify-center
        "
      >
        <Bell size={19} className="text-indigo-600" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-slate-900 mb-1">
          {notification.title}
        </h3>

        <p className="text-sm text-slate-600">
          {notification.description}
        </p>
      </div>

      {/* ================= TIME ================= */}
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-xs text-slate-400 whitespace-nowrap">
          {getRelativeTime(notification.datetime)}
        </span>

        {/* Unread blue dot */}
        {isUnread && (
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        )}
      </div>
    </div>
  );
}

