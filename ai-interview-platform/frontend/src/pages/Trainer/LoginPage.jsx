import TrainerLoginBranding from "../../features/auth/trainer/LoginBranding";
import TrainerLoginForm from "../../features/auth/trainer/LoginForm";


export default function TrainerLoginPage() {
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
        <TrainerLoginForm/>
        <TrainerLoginBranding/>
       
      </div>
    </div>
  );
}