import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { interviewsData, difficultyConfig } from "../../mock/interviewData";

// ─── Mock AI resume analysis ────────────────────────────────────────────────
function mockAnalyzeResume() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        atsScore: 74,
        name: "Aleena Mathew",
        experience: "1.5 years",
        skills: ["React", "Node.js", "MongoDB", "Express", "Redux", "JavaScript", "Git"],
        missingKeywords: ["TypeScript", "Docker", "GraphQL"],
        strengths: [
          "Strong JS fundamentals",
          "Full-stack experience",
          "REST API design",
        ],
        improvements: [
          "Add TypeScript projects",
          "Include system design exposure",
          "Quantify achievements",
        ],
        matchScore: 82,
      });
    }, 2800);
  });
}

// ─── Countdown timer hook ────────────────────────────────────────────────────
function useInterviewTimer(scheduledDateStr, scheduledTimeStr) {
  const getScheduled = useCallback(() => {
    const [year, month, day] = scheduledDateStr.split("-").map(Number);
    const [timePart, ampm] = scheduledTimeStr.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);
    if (ampm === "PM" && hours !== 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;
    return new Date(year, month - 1, day, hours, minutes, 0, 0);
  }, [scheduledDateStr, scheduledTimeStr]);

  const [phase, setPhase] = useState("waiting");
  const [secondsLeft, setSecondsLeft] = useState(null);
  const WINDOW = 3 * 60;

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const scheduled = getScheduled();
      const diff = scheduled - now;
      const end = scheduled.getTime() + WINDOW * 1000;
      if (now < scheduled) {
        setPhase("waiting");
        setSecondsLeft(Math.ceil(diff / 1000));
      } else if (now.getTime() <= end) {
        setPhase("active");
        setSecondsLeft(Math.ceil((end - now.getTime()) / 1000));
      } else {
        setPhase("expired");
        setSecondsLeft(0);
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [getScheduled]);

  return { phase, secondsLeft };
}

function fmt(secs) {
  if (secs === null) return "--:--";
  const m = Math.floor(Math.abs(secs) / 60);
  const s = Math.abs(secs) % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// ─── Difficulty option row ───────────────────────────────────────────────────
function DifficultyOption({ level, isSelected }) {
  const cfg = difficultyConfig[level];
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
      style={{
        background: isSelected ? cfg.bg : "transparent",
        border: isSelected ? `2px solid ${cfg.color}` : "1.5px solid rgba(0,0,0,0.07)",
        boxShadow: isSelected ? `0 0 0 4px ${cfg.ring}` : "none",
        opacity: isSelected ? 1 : 0.38,
        transform: isSelected ? "scale(1.01)" : "scale(1)",
      }}
    >
      <div className="w-3 h-3 rounded-full flex-shrink-0"
        style={{ background: isSelected ? cfg.color : "#d1d5db" }} />
      <span className="text-sm font-bold flex-1"
        style={{ color: isSelected ? cfg.color : "#9ca3af" }}>
        {level}
      </span>
      {isSelected && (
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg text-white"
          style={{ background: cfg.color }}>
          Trainer Set
        </span>
      )}
    </div>
  );
}

// ─── Resume analysis result ──────────────────────────────────────────────────
function ResumeAnalysis({ analysis }) {
  return (
    <div className="flex flex-col gap-5 animate-fadeIn">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-gray-900">Resume Analysed</p>
          <p className="text-xs text-gray-400">{analysis.name} · {analysis.experience}</p>
        </div>
        <div className="flex flex-col items-center flex-shrink-0">
          <svg width="52" height="52" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="20" fill="none" stroke="#dcfce7" strokeWidth="5" />
            <circle cx="26" cy="26" r="20" fill="none" stroke="#16a34a" strokeWidth="5"
              strokeDasharray={`${(analysis.atsScore / 100) * 125.6} 125.6`}
              strokeLinecap="round" transform="rotate(-90 26 26)" />
            <text x="26" y="30" textAnchor="middle" fontSize="12" fontWeight="700" fill="#16a34a">
              {analysis.atsScore}
            </text>
          </svg>
          <span className="text-[9px] text-gray-400 -mt-0.5 font-medium">ATS</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1.5">
          <span className="text-xs font-semibold text-gray-600">Interview Match</span>
          <span className="text-xs font-bold text-green-600">{analysis.matchScore}%</span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "#f0fdf4" }}>
          <div className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${analysis.matchScore}%`, background: "linear-gradient(90deg,#22c55e,#16a34a)" }} />
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Detected Skills</p>
        <div className="flex flex-wrap gap-1.5">
          {analysis.skills.map((s) => (
            <span key={s} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
              style={{ background: "#dcfce7", color: "#166534", border: "1px solid rgba(22,163,74,0.2)" }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Missing Keywords</p>
        <div className="flex flex-wrap gap-1.5">
          {analysis.missingKeywords.map((s) => (
            <span key={s} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
              style={{ background: "#fee2e2", color: "#dc2626", border: "1px solid rgba(220,38,38,0.2)" }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Strengths</p>
        <div className="space-y-1.5">
          {analysis.strengths.map((s) => (
            <div key={s} className="flex items-center gap-2 text-xs text-gray-700">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {s}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Suggestions</p>
        <div className="space-y-1.5">
          {analysis.improvements.map((s) => (
            <div key={s} className="flex items-center gap-2 text-xs text-gray-700">
              <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function InterviewPreparePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const interview = interviewsData.find((i) => i.id === id);

  const [cvFile, setCvFile] = useState(null);
  const [analysing, setAnalysing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef();

  const { phase, secondsLeft } = useInterviewTimer(
    interview?.scheduledDate || "2026-01-01",
    interview?.scheduledTime || "12:00 AM"
  );

  const handleFile = async (file) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }
    setCvFile(file);
    setAnalysing(true);
    const result = await mockAnalyzeResume();
    setAnalysis(result);
    setAnalysing(false);
  };

  const canStart = phase === "active" && analysis !== null;

  if (!interview) {
    return (
      <div className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7,#fff)" }}>
        <p className="text-gray-500 text-sm">Interview not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(135deg,#f0fdf4 0%,#e8fdf0 40%,#ffffff 100%)" }}>

      {/* ── Top Nav ── */}
      <header className="flex items-center justify-between px-8 py-4 flex-shrink-0"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(22,163,74,0.12)",
        }}>
        <div className="flex items-center gap-5">
          <img src={logo} alt="Offenso" className="h-8 w-auto object-contain" />
          <div className="flex items-center gap-2 text-sm">
            <button onClick={() => navigate("/interviews")}
              className="text-gray-400 hover:text-green-600 transition-colors">
              Interviews
            </button>
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-semibold text-gray-700">{interview.role}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {interview.assignedBy && (
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: interview.trainerColor || "#16a34a" }}>
                {interview.trainerAvatar}
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] text-gray-400 leading-none">Assigned by</p>
                <p className="text-xs font-semibold text-gray-700">{interview.assignedBy}</p>
              </div>
            </div>
          )}

          {phase === "waiting" && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl"
              style={{ background: "#fffbeb", border: "1.5px solid rgba(245,158,11,0.35)" }}>
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[10px] text-amber-600 font-medium leading-none">Interview starts in</p>
                <p className="text-base font-bold text-amber-700 leading-tight">{fmt(secondsLeft)}</p>
              </div>
            </div>
          )}
          {phase === "active" && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl"
              style={{ background: "#dcfce7", border: "1.5px solid rgba(22,163,74,0.4)" }}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="text-[10px] text-green-700 font-medium leading-none">Window closes in</p>
                <p className="text-base font-bold text-green-700 leading-tight">{fmt(secondsLeft)}</p>
              </div>
            </div>
          )}
          {phase === "expired" && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl"
              style={{ background: "#fee2e2", border: "1.5px solid rgba(220,38,38,0.3)" }}>
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-[10px] text-red-600 font-medium leading-none">Window expired</p>
                <p className="text-sm font-bold text-red-600 leading-tight">Time's up</p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ── Page title ── */}
      <div className="px-8 py-5 flex-shrink-0">
        <h1 className="text-2xl font-bold text-gray-900">{interview.role}</h1>
        <p className="text-sm text-gray-400 mt-1">
          Scheduled · {interview.scheduledDate} at {interview.scheduledTime} · {interview.duration} min
        </p>
      </div>

      {/* ── Main card ── */}
      <div className="flex-1 px-8 pb-8 flex flex-col min-h-0">
        <div className="flex-1 rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "rgba(255,255,255,0.97)",
            border: "1.5px solid rgba(22,163,74,0.15)",
            boxShadow: "0 8px 40px rgba(22,163,74,0.09)",
          }}>

          {/* Two-column body */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden" style={{ minHeight: 0 }}>

            {/* LEFT — Difficulty */}
            <div className="flex flex-col gap-5 p-7 overflow-y-auto"
              style={{ borderRight: "1px solid rgba(22,163,74,0.1)" }}>
              <div>
                <h2 className="text-base font-bold text-gray-800">Difficulty Level</h2>
                <p className="text-xs text-gray-400 mt-0.5">Set by your trainer — cannot be changed</p>
              </div>

              <div className="flex flex-col gap-3">
                {["Easy", "Medium", "Difficult", "Advanced"].map((level) => (
                  <DifficultyOption key={level} level={level} isSelected={interview.difficulty === level} />
                ))}
              </div>

              <div className="mt-auto pt-5" style={{ borderTop: "1px solid rgba(22,163,74,0.1)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Session Info</p>
                <div className="space-y-2">
                  {[
                    ["Interview type", interview.type],
                    ["Mode", interview.mode],
                    ["Duration", `${interview.duration} min`],
                    ["Topics", interview.topics.join(", ")],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start justify-between gap-4">
                      <span className="text-xs text-gray-400 flex-shrink-0">{label}</span>
                      <span className="text-xs font-semibold text-gray-800 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — CV upload / analysis */}
            <div className="flex flex-col p-7 overflow-y-auto">
              {!cvFile && (
                <>
                  <div className="mb-5">
                    <h2 className="text-base font-bold text-gray-800">Resume (optional)</h2>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Upload your CV to get personalised interview questions
                    </p>
                  </div>
                  <div
                    className="flex-1 flex flex-col items-center justify-center gap-5 rounded-2xl cursor-pointer transition-all duration-200"
                    style={{
                      border: dragOver ? "2.5px dashed #16a34a" : "2px dashed rgba(22,163,74,0.22)",
                      background: dragOver ? "#f0fdf4" : "#fafffe",
                      minHeight: "260px",
                    }}
                    onClick={() => fileRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]); }}
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: dragOver ? "#dcfce7" : "#f0fdf4", border: "1.5px solid rgba(22,163,74,0.2)" }}>
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-700">Upload CV</p>
                      <p className="text-xs text-gray-400 mt-1">Drag & drop or click · PDF only</p>
                    </div>
                    <button
                      className="px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
                      onClick={(e) => { e.stopPropagation(); fileRef.current?.click(); }}
                    >
                      Browse PDF
                    </button>
                    <input ref={fileRef} type="file" accept=".pdf" className="hidden"
                      onChange={(e) => handleFile(e.target.files[0])} />
                  </div>
                </>
              )}

              {cvFile && analysing && (
                <div className="flex-1 flex flex-col items-center justify-center gap-5" style={{ minHeight: "260px" }}>
                  <svg className="w-14 h-14 animate-spin" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="22" fill="none" stroke="#dcfce7" strokeWidth="5" />
                    <circle cx="28" cy="28" r="22" fill="none" stroke="#16a34a" strokeWidth="5"
                      strokeDasharray="34 104" strokeLinecap="round" />
                  </svg>
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-700">Analysing your resume…</p>
                    <p className="text-xs text-gray-400 mt-1">{cvFile.name}</p>
                  </div>
                </div>
              )}

              {cvFile && !analysing && analysis && <ResumeAnalysis analysis={analysis} />}
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="flex items-center justify-between gap-4 px-7 py-4 flex-shrink-0"
            style={{ borderTop: "1px solid rgba(22,163,74,0.1)", background: "rgba(248,255,254,0.8)" }}>
            <p className="text-xs font-medium"
              style={{
                color: phase === "waiting" ? "#d97706"
                  : phase === "active" && analysis ? "#16a34a"
                  : phase === "expired" ? "#dc2626"
                  : "#6b7280",
              }}>
              {phase === "waiting" && `⏳ Button activates at your scheduled time · ${interview.scheduledTime}`}
              {phase === "active" && !analysis && "Upload your resume or proceed directly once the window opens."}
              {phase === "active" && analysis && "✅ Resume analysed · You're all set! Start your interview."}
              {phase === "expired" && "❌ The 3-minute interview window has closed. Contact your trainer."}
            </p>

            <button
              disabled={!canStart}
              onClick={() => navigate(`/interviews/${interview.id}/session`)}
              className="flex items-center gap-2.5 px-8 py-3 rounded-xl text-sm font-bold text-white transition-all flex-shrink-0"
              style={canStart
                ? { background: "linear-gradient(135deg,#22c55e,#16a34a)", boxShadow: "0 4px 18px rgba(22,163,74,0.35)", cursor: "pointer" }
                : { background: "#e2e8f0", color: "#94a3b8", cursor: "not-allowed" }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Start Interview
            </button>
          </div>
        </div>

        {interview.trainerNote && (
          <div className="mt-4 flex gap-3 p-4 rounded-2xl flex-shrink-0"
            style={{ background: "#fffbeb", border: "1px solid rgba(245,158,11,0.2)" }}>
            <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-xs font-bold text-amber-700">Trainer's Note</p>
              <p className="text-xs text-amber-600 mt-0.5">{interview.trainerNote}</p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.35s ease forwards; }
      `}</style>
    </div>
  );
}