import { useSelector } from "react-redux";

export default function TopBar() {
  const user = useSelector((state) => state.auth.user);
  const studentId = user?.studentId || "STU001";
  const name = user?.name || "Arjun";

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <header
      className="flex items-center justify-between px-6 py-4"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(22,163,74,0.1)",
      }}
    >
      {/* Greeting */}
      <div>
        <h1 className="text-lg font-semibold text-gray-900">
          {greeting}, {name} 👋
        </h1>
        <p className="text-xs text-gray-400 mt-0.5">
          Ready for your next mock interview?
        </p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div
          className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-gray-400"
          style={{ background: "#f0fdf4", border: "1px solid rgba(22,163,74,0.15)" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Search...</span>
        </div>

        {/* Notification */}
        <button
          className="relative w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-green-50 transition-colors"
          style={{ border: "1px solid rgba(22,163,74,0.15)" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {/* badge */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
          >
            {name.slice(0, 2).toUpperCase()}
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-medium text-gray-700">{name}</p>
            <p className="text-xs text-gray-400">{studentId}</p>
          </div>
        </div>
      </div>
    </header>
  );
}