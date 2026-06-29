import LoginForm from "../features/auth/LoginForm.jsx";
import LoginBranding from "../features/auth/LoginBranding.jsx";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" }}
    >
      <div
        className="flex w-full overflow-hidden"
        style={{
          maxWidth: "1100px",
          minHeight: "620px",
          borderRadius: "24px",
          boxShadow: "0 32px 80px rgba(22,163,74,0.15)",
        }}
      >
        <LoginForm />
        <LoginBranding />
      </div>
    </div>
  );
}