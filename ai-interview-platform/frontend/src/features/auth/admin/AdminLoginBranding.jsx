
import adminavatar from "../../../assets/adminavatar.png";
import logo from "../../../assets/logo.svg";

export default function AdminLoginBranding() {
    return (
        <div
            className="absolute top-0 right-0 h-full z-20 flex flex-col items-end justify-start pt-11 px-10 overflow-hidden"
            style={{
                width: "55%",
                background:
                    "linear-gradient(160deg, #6450be 0%, #2616a3 50%, #110d5e 100%)",
                clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
        >
            {/* ================= FLOATING CIRCLES ================= */}

            <div
                style={{
                    position: "absolute",
                    width: "260px",
                    height: "260px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(187,247,208,0.3), transparent)",
                    top: "-60px",
                    right: "-60px",
                    animation: "floatC1 4s ease-in-out infinite",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(187,247,208,0.2), transparent)",
                    top: "38%",
                    left: "2%",
                    animation: "floatC2 5s ease-in-out infinite",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(220,252,231,0.25), transparent)",
                    bottom: "100px",
                    right: "30px",
                    animation: "floatC3 3.5s ease-in-out infinite",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
                    top: "28%",
                    right: "18%",
                    animation: "floatC1 6s ease-in-out infinite",
                }}
            />

            {/* ================= BUILDINGS ================= */}

            <div className="absolute bottom-0 left-0 right-0 h-[48%] z-[1] pointer-events-none">
                {/* Building 1 */}
                <div
                    className="absolute bottom-0 left-[2%] w-[9%]"
                    style={{
                        height: "45%",
                        background: "rgba(15, 10, 100, 0.32)",
                    }}
                >
                    <div className="building-windows">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                {/* Building 2 */}
                <div
                    className="absolute bottom-0 left-[12%] w-[12%]"
                    style={{
                        height: "70%",
                        background: "rgba(20, 12, 115, 0.38)",
                    }}
                >
                    <div className="building-windows">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                {/* Building 3 */}
                <div
                    className="absolute bottom-0 left-[25%] w-[10%]"
                    style={{
                        height: "52%",
                        background: "rgba(12, 8, 90, 0.35)",
                    }}
                >
                    <div className="building-windows">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                {/* Building 4 - Tall */}
                <div
                    className="absolute bottom-0 left-[36%] w-[14%]"
                    style={{
                        height: "85%",
                        background: "rgba(18, 10, 105, 0.4)",
                    }}
                >
                    <div className="building-windows">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                {/* Building 5 */}
                <div
                    className="absolute bottom-0 left-[51%] w-[10%]"
                    style={{
                        height: "58%",
                        background: "rgba(10, 7, 82, 0.34)",
                    }}
                >
                    <div className="building-windows">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                {/* Building 6 */}
                <div
                    className="absolute bottom-0 left-[62%] w-[13%]"
                    style={{
                        height: "76%",
                        background: "rgba(20, 12, 112, 0.38)",
                    }}
                >
                    <div className="building-windows">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                {/* Building 7 */}
                <div
                    className="absolute bottom-0 left-[76%] w-[9%]"
                    style={{
                        height: "48%",
                        background: "rgba(10, 7, 85, 0.35)",
                    }}
                >
                    <div className="building-windows">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                {/* Building 8 */}
                <div
                    className="absolute bottom-0 right-[2%] w-[13%]"
                    style={{
                        height: "65%",
                        background: "rgba(18, 10, 105, 0.4)",
                    }}
                >
                    <div className="building-windows">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>

            {/* ================= LOGO ================= */}

            <div className="flex items-center gap-3 mb-2 z-20">
                <img
                    src={logo}
                    alt="Offenso Logo"
                    className="w-40 h-13 object-contain"
                />
            </div>

            <p className="text-white text-sm mb-6 z-20 opacity-90">
                Mock Interview Platform
            </p>

            {/* ================= CHARACTER ================= */}

            <div
                className="absolute -bottom-28 left-0 right-0 flex justify-center z-10"
                style={{
                    animation: "floatChar 4s ease-in-out infinite",
                }}
            >
                <img
                    src={adminavatar}
                    alt="Student"
                    className="object-contain object-bottom"
                    style={{
                        width: "80%",
                        height: "680px",
                    }}
                />
            </div>

            {/* ================= STYLES ================= */}

            <style>{`
        /* Character animation */
        @keyframes floatChar {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-16px);
          }
        }

        /* Circle animations */
        @keyframes floatC1 {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }

          50% {
            transform: translateY(-20px) scale(1.06);
          }
        }

        @keyframes floatC2 {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }

          50% {
            transform: translateY(-14px) scale(0.95);
          }
        }

        @keyframes floatC3 {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        /* Building windows */
        .building-windows {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          padding: 18px 12px;
          opacity: 0.28;
        }

        .building-windows span {
          width: 7px;
          height: 11px;
          border-radius: 1px;
          background: rgba(187, 247, 208, 0.5);
        }
      `}</style>
        </div>
    );
}

