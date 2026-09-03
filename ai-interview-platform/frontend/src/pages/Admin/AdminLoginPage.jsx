import AdminLoginForm from "../../features/auth/admin/AdminLoginForm.jsx";
import AdminLoginBranding from "../../features/auth/admin/AdminLoginBranding.jsx";

export default function AdminLoginPage() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #c1cbd0 0%, #a7bfdc 100%)" }}
    >
      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maxWidth: "1100px",
          minHeight: "620px",
          borderRadius: "24px",
          boxShadow: "0 32px 80px rgba(22,163,74,0.15)",
        }}
      >
        <AdminLoginForm />
        <AdminLoginBranding />
      </div>
    </div>
  );
}