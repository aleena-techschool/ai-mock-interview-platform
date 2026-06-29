import avatar from "../../assets/avatar.png"
import logo from "../../assets/logo.svg"
export default function LoginBranding() {
    return (
        <div
            className="relative flex flex-col items-end justify-start pt-11 px-10 overflow-hidden"
            style={{
                width: "55%",
                background: "linear-gradient(160deg, #22c55e 0%, #16a34a 50%, #15803d 100%)",
                clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
        >
            {/* Floating circles */}
            <div style={{
                position: "absolute", width: "260px", height: "260px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(187,247,208,0.3), transparent)",
                top: "-60px", right: "-60px",
                animation: "floatC1 4s ease-in-out infinite",
            }} />
            <div style={{
                position: "absolute", width: "180px", height: "180px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(187,247,208,0.2), transparent)",
                top: "38%", left: "2%",
                animation: "floatC2 5s ease-in-out infinite",
            }} />
            <div style={{
                position: "absolute", width: "110px", height: "110px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(220,252,231,0.25), transparent)",
                bottom: "100px", right: "30px",
                animation: "floatC3 3.5s ease-in-out infinite",
            }} />
            <div style={{
                position: "absolute", width: "70px", height: "70px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
                top: "28%", right: "18%",
                animation: "floatC1 6s ease-in-out infinite",
            }} />

            {/* Logo */}
            <div className="flex items-center gap-3 mb-2 z-10">

                <img src={logo} alt="Offenso Logo" className="w-40 h-13 object-contain" />
                {/* <div>
          <p className="font-extrabold text-3xl leading-none tracking-tight text-white">offenso</p>
          <p className="text-xs tracking-widest" style={{ color: "#a3e635" }}>Tech School ____</p>
        </div> */}
            </div>

            <p className="text-white text-sm mb-6 z-10 opacity-90">Mock Interview Platform</p>

            {/* Character */}
            {/* Character */}
            <div
                className="absolute -bottom-28 left-0 right-0 flex justify-center z-10"
                style={{ animation: "floatChar 4s ease-in-out infinite" }}
            >
                <img
                    src={avatar}
                    alt="Student"
                    className="object-contain object-bottom"
                    style={{ width: "95%", height: "720px" }}
                />
            </div>

            <style>{`
        @keyframes floatChar {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes floatC1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.06); }
        }
        @keyframes floatC2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-14px) scale(0.95); }
        }
        @keyframes floatC3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
        </div>
    );
}