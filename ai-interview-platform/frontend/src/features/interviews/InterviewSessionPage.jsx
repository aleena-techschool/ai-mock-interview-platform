import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import { interviewsData } from "../../mock/interviewData";

// ─── Question bank generator (mocked — replace with real AI question API) ──
function buildScript(interview) {
  const topics = interview.topics?.length ? interview.topics : [interview.role];
  const script = [
    {
      type: "intro",
      text: `Hi! I'm your AI interviewer for today's ${interview.role} round. Could you start by briefly introducing yourself and your background?`,
    },
  ];
  topics.forEach((topic) => {
    script.push({
      type: "question",
      topic,
      text: `Let's talk about ${topic}. Can you walk me through your experience with it and how you've used it in a real project?`,
    });
    script.push({
      type: "followup",
      topic,
      text: `Good. As a follow-up — what's one challenge you faced while working with ${topic}, and how did you solve it?`,
    });
  });
  script.push({
    type: "closing",
    text: "Thanks for sharing all that. That brings us to the end of this round — do you have any questions for me before we wrap up?",
  });
  return script;
}

const MOCK_ANSWERS = [
  "Sure — I've worked on this for a few projects now, mainly focusing on building scalable, maintainable features and collaborating closely with the rest of the team.",
  "I ran into a tricky bug around state syncing, traced it back to a race condition, and fixed it by restructuring how the data flowed between components.",
  "I'd say my biggest strength here is breaking a big problem into smaller, testable pieces before writing any code.",
  "I usually start by understanding the requirements fully, sketch a rough architecture, then iterate quickly with small, reviewable commits.",
  "Not right now, but I'm looking forward to learning more about the team and what a typical sprint looks like.",
];

function fmtClock(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function initials(name = "Student") {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function InterviewSessionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((s) => s.auth?.user);

  const interview = interviewsData.find((i) => i.id === id);
  const studentName = user?.name || "Student";

  // ── Media ──────────────────────────────────────────────────────────────
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [camOn, setCamOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [camError, setCamError] = useState(false);

  useEffect(() => {
    let active = true;
    navigator.mediaDevices
      ?.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (!active) return;
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch(() => setCamError(true));
    return () => {
      active = false;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const toggleCam = () => {
    const next = !camOn;
    setCamOn(next);
    streamRef.current?.getVideoTracks().forEach((t) => (t.enabled = next));
  };
  const toggleMic = () => {
    const next = !micOn;
    setMicOn(next);
    streamRef.current?.getAudioTracks().forEach((t) => (t.enabled = next));
  };

  // ── Timer ──────────────────────────────────────────────────────────────
  const totalSeconds = (interview?.duration || 30) * 60;
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [roomPhase, setRoomPhase] = useState("connecting"); // connecting | live | ending | ended

  useEffect(() => {
    const t = setTimeout(() => setRoomPhase("live"), 1600);
    return () => clearTimeout(t);
  }, []);

  const endInterview = useCallback(() => {
    setRoomPhase("ending");
    streamRef.current?.getTracks().forEach((t) => t.stop());
    setTimeout(() => setRoomPhase("ended"), 1500);
  }, []);

  useEffect(() => {
    if (roomPhase !== "live") return;
    if (secondsLeft <= 0) {
      endInterview();
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [roomPhase, secondsLeft, endInterview]);

  const timerColor =
    secondsLeft <= 60 ? "#dc2626" : secondsLeft <= 300 ? "#d97706" : "#16a34a";

  // ── Conversation engine ───────────────────────────────────────────────
  const script = useRef(buildScript(interview || { role: "Interview", topics: [] })).current;
  const [stepIndex, setStepIndex] = useState(-1);
  const [stage, setStage] = useState("idle"); // idle | ai-asking | listening | wrap
  const [transcript, setTranscript] = useState([]);
  const transcriptEndRef = useRef(null);
  const answerCounter = useRef(0);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [transcript]);

  useEffect(() => {
    if (roomPhase !== "live") return;
    if (stepIndex === -1) {
      setStepIndex(0);
      return;
    }
    if (stepIndex >= script.length) {
      setStage("wrap");
      return;
    }

    const current = script[stepIndex];
    setStage("ai-asking");
    setTranscript((prev) => [
      ...prev,
      { speaker: "AI", text: current.text, ts: Date.now() },
    ]);

    const speakingTimer = setTimeout(() => {
      setStage("listening");
      const answerTimer = setTimeout(() => {
        const answer = MOCK_ANSWERS[answerCounter.current % MOCK_ANSWERS.length];
        answerCounter.current += 1;
        setTranscript((prev) => [
          ...prev,
          { speaker: "You", text: answer, ts: Date.now() },
        ]);
        setTimeout(() => setStepIndex((i) => i + 1), 900);
      }, 4200 + Math.random() * 2200);
      return () => clearTimeout(answerTimer);
    }, 2600 + current.text.length * 18);

    return () => clearTimeout(speakingTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex, roomPhase]);

  if (!interview) {
    return (
      <div
        className="h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7,#fff)" }}
      >
        <p className="text-gray-500 text-sm">Interview session not found.</p>
      </div>
    );
  }

  return (
    <div
      className="h-screen flex flex-col overflow-hidden text-gray-900"
      style={{ background: "linear-gradient(135deg,#f0fdf4 0%,#e8fdf0 40%,#ffffff 100%)" }}
    >
      {/* ── Top bar ── */}
      <header
        className="flex items-center justify-between px-6 py-3 flex-shrink-0"
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(22,163,74,0.12)",
        }}
      >
        <div className="flex items-center gap-4">
          <img src={logo} alt="Offenso" className="h-7 w-auto object-contain" />
          <div className="hidden sm:flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              REC · AI Evaluation
            </span>
            <span className="text-sm font-semibold text-gray-800">{interview.role}</span>
            <span className="text-xs text-gray-400">· {interview.difficulty}</span>
          </div>
        </div>

        <div
          className="flex items-center gap-2 px-4 py-1.5 rounded-xl font-mono text-base font-bold"
          style={{ background: "#fff", color: timerColor, border: `1.5px solid ${timerColor}55`, boxShadow: `0 0 0 4px ${timerColor}14` }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {fmtClock(Math.max(secondsLeft, 0))}
        </div>
      </header>

      {/* ── Connecting overlay ── */}
      {roomPhase === "connecting" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <svg className="w-10 h-10 animate-spin" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="16" fill="none" stroke="#dcfce7" strokeWidth="4" />
            <circle cx="20" cy="20" r="16" fill="none" stroke="#16a34a" strokeWidth="4" strokeDasharray="60 100" strokeLinecap="round" />
          </svg>
          <p className="text-sm text-gray-500">Joining interview room…</p>
        </div>
      )}

      {/* ── Ending overlay ── */}
      {roomPhase === "ending" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <svg className="w-10 h-10 animate-spin" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="16" fill="none" stroke="#fee2e2" strokeWidth="4" />
            <circle cx="20" cy="20" r="16" fill="none" stroke="#dc2626" strokeWidth="4" strokeDasharray="60 100" strokeLinecap="round" />
          </svg>
          <p className="text-sm text-gray-500">Ending interview…</p>
        </div>
      )}

      {/* ── Ended summary ── */}
      {roomPhase === "ended" && (
        <div className="flex-1 flex items-center justify-center px-6">
          <div
            className="max-w-md w-full rounded-2xl p-8 text-center"
            style={{ background: "#fff", border: "1.5px solid rgba(22,163,74,0.18)", boxShadow: "0 8px 40px rgba(22,163,74,0.12)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Interview completed</h2>
            <p className="text-sm text-gray-500 mt-2">
              Your responses have been recorded. The AI is generating your feedback report — technical depth, communication, confidence and grammar scores will appear on your dashboard shortly.
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="mt-6 w-full py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => navigate("/interviews")}
              className="mt-2 w-full py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-800"
            >
              View other interviews
            </button>
          </div>
        </div>
      )}

      {/* ── Live room ── */}
      {roomPhase === "live" && (
        <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4 min-h-0">
          {/* Video grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-0">
            {/* AI Interviewer tile */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center min-h-0"
              style={{
                background: "linear-gradient(160deg,#f0fdf4,#dcfce7)",
                border: stage === "ai-asking" ? "2px solid #16a34a" : "1.5px solid rgba(22,163,74,0.15)",
                boxShadow: stage === "ai-asking" ? "0 0 0 4px rgba(22,163,74,0.16)" : "none",
              }}
            >
              <div className="relative flex items-center justify-center">
                {stage === "ai-asking" && (
                  <span className="absolute w-28 h-28 rounded-full animate-ping" style={{ background: "rgba(22,163,74,0.18)" }} />
                )}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold relative z-10 text-white"
                  style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
                >
                  AI
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-800">AI Interviewer</p>
              {stage === "ai-asking" && (
                <span className="mt-1 text-[11px] font-medium text-green-700 flex items-center gap-1.5">
                  <span className="flex gap-0.5">
                    <span className="w-1 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: "120ms" }} />
                    <span className="w-1 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: "240ms" }} />
                  </span>
                  Speaking
                </span>
              )}
              {stage === "listening" && <span className="mt-1 text-[11px] font-medium text-gray-400">Listening…</span>}
              {stage === "wrap" && <span className="mt-1 text-[11px] font-medium text-gray-400">Wrapping up…</span>}
            </div>

            {/* Student tile */}
            <div
              className="relative rounded-2xl overflow-hidden flex items-center justify-center min-h-0"
              style={{
                background: "#0f172a",
                border: stage === "listening" && micOn ? "2px solid #16a34a" : "1.5px solid rgba(22,163,74,0.15)",
                boxShadow: stage === "listening" && micOn ? "0 0 0 4px rgba(22,163,74,0.16)" : "none",
              }}
            >
              {camOn && !camError ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ transform: "scaleX(-1)" }}
                />
              ) : (
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                  style={{ background: "linear-gradient(135deg,#475569,#1e293b)" }}
                >
                  {initials(studentName)}
                </div>
              )}

              <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "rgba(0,0,0,0.55)" }}>
                <span className="text-xs font-semibold text-white">{studentName}</span>
                {!micOn && (
                  <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18M12 18.5a3.5 3.5 0 003.5-3.5v-1m-7 0v1a3.5 3.5 0 005.6 2.8M19 11a7 7 0 01-1.18 3.9M5 11a7 7 0 007 7m0 0v3"
                    />
                  </svg>
                )}
              </div>
              {camError && (
                <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-md bg-black/50 text-gray-300">Camera unavailable</span>
              )}
            </div>
          </div>

          {/* Transcript panel */}
          <div
            className="w-full lg:w-80 flex-shrink-0 rounded-2xl flex flex-col min-h-0"
            style={{ background: "#fff", border: "1.5px solid rgba(22,163,74,0.15)", boxShadow: "0 4px 24px rgba(22,163,74,0.07)" }}
          >
            <div className="px-4 py-3 flex items-center gap-2 flex-shrink-0" style={{ borderBottom: "1px solid rgba(22,163,74,0.12)" }}>
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-9 8l1.5-4.5A8 8 0 1112 20H4z" />
              </svg>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600">Live Transcript</p>
            </div>

            {/* scrollable message list — fixed within panel, page never grows */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0" style={{ scrollbarWidth: "thin" }}>
              {transcript.length === 0 && (
                <p className="text-xs text-gray-400">Transcript will appear here as the interview begins…</p>
              )}
              {transcript.map((line, idx) => (
                <div key={idx} className="text-xs leading-relaxed">
                  <span className={`font-bold ${line.speaker === "AI" ? "text-green-600" : "text-sky-600"}`}>
                    {line.speaker === "AI" ? "AI Interviewer" : "You"}
                  </span>
                  <p className="text-gray-600 mt-0.5">{line.text}</p>
                </div>
              ))}
              {stage === "ai-asking" && <p className="text-[11px] text-gray-400 italic">AI is typing…</p>}
              <div ref={transcriptEndRef} />
            </div>
          </div>
        </div>
      )}

      {/* ── Bottom controls ── */}
      {(roomPhase === "live" || roomPhase === "connecting") && (
        <div
          className="flex items-center justify-center gap-4 py-5 flex-shrink-0"
          style={{ borderTop: "1px solid rgba(22,163,74,0.12)", background: "rgba(255,255,255,0.7)" }}
        >
          <button
            onClick={toggleMic}
            title={micOn ? "Mute microphone" : "Unmute microphone"}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
            style={{
              background: micOn ? "#f0fdf4" : "#dc2626",
              border: micOn ? "1.5px solid rgba(22,163,74,0.2)" : "none",
              color: micOn ? "#16a34a" : "#fff",
            }}
          >
            {micOn ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18M12 18.5a3.5 3.5 0 003.5-3.5v-1m-7 0v1a3.5 3.5 0 005.6 2.8M19 11a7 7 0 01-1.18 3.9M5 11a7 7 0 007 7m0 0v3"
                />
              </svg>
            )}
          </button>

          <button
            onClick={toggleCam}
            title={camOn ? "Turn camera off" : "Turn camera on"}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
            style={{
              background: camOn ? "#f0fdf4" : "#dc2626",
              border: camOn ? "1.5px solid rgba(22,163,74,0.2)" : "none",
              color: camOn ? "#16a34a" : "#fff",
            }}
          >
            {camOn ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18M9 9v6a2 2 0 002 2h4M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.293.708M9.5 6H15a2 2 0 012 2v.5"
                />
              </svg>
            )}
          </button>

          <button
            onClick={endInterview}
            title="End interview"
            className="px-6 h-12 rounded-full inline-flex items-center gap-2 text-sm font-bold text-white transition-all hover:opacity-90 leading-none"
            style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", boxShadow: "0 4px 14px rgba(220,38,38,0.3)" }}
          >
            <svg className="w-[18px] h-[18px] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.996.996 0 010-1.41C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85a.99.99 0 01-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
            </svg>
            <span>End Interview</span>
          </button>
        </div>
      )}
    </div>
  );
}