import avatar from "../../../assets/placementAvatar.png";
import logo from "../../../assets/logo.svg";

export default function PlacementLoginBranding() {
  return (
    <div
      className="relative  overflow-hidden flex flex-col items-center"
      style={{
        width: "55%",
        background:
          "linear-gradient(160deg, #6450be 0%, #2616a3 50%, #110d5e 100%)",
        clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      {/* ================= LOGO ================= */}

      <div className="relative z-20 mt-7">
        <img
          src={logo}
          alt="Offenso Logo"
          className="w-32 h-auto object-contain"
        />
      </div>

      {/* ================= SUBTITLE ================= */}

      <p className="relative z-20 mt-1 text-white text-xs opacity-90">
        Mock Interview Platform
      </p>

      {/* ================= CHARACTER ================= */}

      <div
        className="absolute inset-0 flex items-end justify-center"
        style={{
                    paddingTop:"95px",
                    paddingBottom:"10px",
                    animation: "floatChar 4s ease-in-out infinite",
                }}
      >
        <img
          src={avatar}
          alt="Placement Platform"
          className="w-full object-contain object-bottom"
          style={{
            height: "100%",
            maxHeight: "100%",
          }}
        />
      </div>

      {/* ================= DARK BOTTOM OVERLAY ================= */}

      <div
        className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none"
        style={{
          height: "25%",
          background:
            "linear-gradient(to top, rgba(17,13,94,0.3), transparent)",
        }}
      />
 

    <style>
        {`
        /* Character animation */
        @keyframes floatChar {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-16px);
          }
        `}
    </style>

       </div>
  );
}