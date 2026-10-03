// Interview status types: "scheduled" | "upcoming" | "completed"
// Difficulty levels set by trainer: "Easy" | "Medium" | "Difficult" | "Advanced"
 
// export const interviewsData = [
//   // ── SCHEDULED (trainer assigned, student can start now or soon) ──────────
//   {
//     id: "INT001",
//     role: "Flutter Developer",
//     type: "Technical",
//     mode: "Text + Voice",
//     difficulty: "Medium",
//     duration: 40,
//     scheduledDate: "2026-09-31",
//     scheduledTime: "3:15 PM",
//     status: "scheduled",
//     trainerNote: "Focus on state management & Firebase integration",
//     topics: ["BLoC", "Provider", "Firebase Auth", "Streams"],
//     assignedBy: "Trainer Rahul",
//   },
//   {
//     id: "INT002",
//     role: "MERN Stack",
//     type: "Technical",
//     mode: "Text",
//     difficulty: "Difficult",
//     duration: 60,
//     scheduledDate: "2026-09-25",
//     scheduledTime: "5:50 PM",
//     status: "scheduled",
//     trainerNote: "Cover REST API design and MongoDB aggregation",
//     topics: ["Express", "MongoDB", "Redux", "JWT"],
//     assignedBy: "Trainer Priya",
//   },
//   {
//     id: "INT003",
//     role: "HR Round",
//     type: "Behavioral",
//     mode: "Voice",
//     difficulty: "Easy",
//     duration: 30,
//     scheduledDate: "2026-09-10",
//     scheduledTime: "5:50 PM",
//     status: "scheduled",
//     trainerNote: "Soft skills and situation handling",
//     topics: ["Communication", "Team Work", "Problem Solving", "Leadership"],
//     assignedBy: "Trainer Ananya",
//   },

//   // ── UPCOMING (not yet scheduled by trainer, auto-generated suggestions) ──
//   {
//     id: "INT004",
//     role: "Python Developer",
//     type: "Technical",
//     mode: "Text",
//     difficulty: "Advanced",
//     duration: 50,
//     scheduledDate: "2026-09-2",
//     scheduledTime: "3:00 PM",
//     status: "upcoming",
//     topics: ["Django", "FastAPI", "Data Structures", "Async Python"],
//     assignedBy: null,
//   },
//   {
//     id: "INT005",
//     role: "System Design",
//     type: "System Design",
//     mode: "Text + Voice",
//     difficulty: "Advanced",
//     duration: 60,
//     scheduledDate: "2026-09-29",
//     scheduledTime: "2:00 PM",
//     status: "upcoming",
//     topics: ["Scalability", "Load Balancing", "Caching", "Microservices"],
//     assignedBy: null,
//   },
//   {
//     id: "INT006",
//     role: "Coding Round",
//     type: "Coding",
//     mode: "Monaco Editor",
//     difficulty: "Medium",
//     duration: 45,
//     scheduledDate: "2026-09-012",
//     scheduledTime: "5:00 PM",
//     status: "upcoming",
//     topics: ["Arrays", "Dynamic Programming", "Trees", "String Manipulation"],
//     assignedBy: null,
//   },
//   {
//     id: "INT007",
//     role: "Odoo Developer",
//     type: "Technical",
//     mode: "Text",
//     difficulty: "Difficult",
//     duration: 45,
//     scheduledDate: "2026-09-023",
//     scheduledTime: "10:30 AM",
//     status: "upcoming",
//     topics: ["ORM", "XML Views", "Python Modules", "Odoo Widgets"],
//     assignedBy: null,
//   },
// ];


// CREATE MORE INTERVIEWS FOR PLATFORMANALAYTICS UI

export const interviewsData = [

  // ─────────────────────────────────────────────
  // WEEK 1
  // ─────────────────────────────────────────────

  {
    id: "INT001",
    role: "Flutter Developer",
    type: "Technical",
    mode: "Text + Voice",
    difficulty: "Medium",
    duration: 40,
    scheduledDate: "2026-09-01",
    scheduledTime: "10:00 AM",
    status: "completed",
    trainerNote: "Focus on state management",
    topics: ["BLoC", "Provider", "Firebase"],
    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT002",
    role: "MERN Stack",
    type: "Technical",
    mode: "Text",
    difficulty: "Difficult",
    duration: 60,
    scheduledDate: "2026-09-02",
    scheduledTime: "11:00 AM",
    status: "completed",
    trainerNote: "REST API and MongoDB",
    topics: ["Express", "MongoDB", "Redux", "JWT"],
    assignedBy: "Trainer Priya",
  },

  {
    id: "INT003",
    role: "Python Developer",
    type: "Technical",
    mode: "Text",
    difficulty: "Advanced",
    duration: 50,
    scheduledDate: "2026-09-03",
    scheduledTime: "2:00 PM",
    status: "incomplete",
    topics: ["Django", "FastAPI", "Python"],
    assignedBy: "Trainer Ananya",
  },

  {
    id: "INT004",
    role: "HR Round",
    type: "Behavioral",
    mode: "Voice",
    difficulty: "Easy",
    duration: 30,
    scheduledDate: "2026-09-04",
    scheduledTime: "3:00 PM",
    status: "completed",
    topics: ["Communication", "Team Work"],
    assignedBy: "Trainer Ananya",
  },

  {
    id: "INT005",
    role: "MERN Stack",
    type: "Technical",
    mode: "Text",
    difficulty: "Medium",
    duration: 45,
    scheduledDate: "2026-09-05",
    scheduledTime: "10:30 AM",
    status: "incomplete",
    topics: ["React", "Node.js", "MongoDB"],
    assignedBy: "Trainer Priya",
  },


  // ─────────────────────────────────────────────
  // WEEK 2
  // ─────────────────────────────────────────────

  {
    id: "INT006",
    role: "Python Developer",
    type: "Technical",
    mode: "Text + Voice",
    difficulty: "Medium",
    duration: 45,
    scheduledDate: "2026-09-07",
    scheduledTime: "10:00 AM",
    status: "completed",
    topics: ["Django", "REST API"],
    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT007",
    role: "Flutter Developer",
    type: "Technical",
    mode: "Text",
    difficulty: "Difficult",
    duration: 50,
    scheduledDate: "2026-09-08",
    scheduledTime: "11:30 AM",
    status: "completed",
    topics: ["BLoC", "Firebase", "Widgets"],
    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT008",
    role: "System Design",
    type: "System Design",
    mode: "Text + Voice",
    difficulty: "Advanced",
    duration: 60,
    scheduledDate: "2026-09-09",
    scheduledTime: "2:00 PM",
    status: "incomplete",
    topics: ["Scalability", "Caching", "Microservices"],
    assignedBy: "Trainer Priya",
  },

  {
    id: "INT009",
    role: "HR Round",
    type: "Behavioral",
    mode: "Voice",
    difficulty: "Easy",
    duration: 30,
    scheduledDate: "2026-09-10",
    scheduledTime: "5:50 PM",
    status: "completed",
    topics: ["Communication", "Leadership"],
    assignedBy: "Trainer Ananya",
  },

  {
    id: "INT010",
    role: "Coding Round",
    type: "Coding",
    mode: "Monaco Editor",
    difficulty: "Medium",
    duration: 45,
    scheduledDate: "2026-09-11",
    scheduledTime: "4:00 PM",
    status: "completed",
    topics: ["Arrays", "Trees", "Strings"],
    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT011",
    role: "Odoo Developer",
    type: "Technical",
    mode: "Text",
    difficulty: "Difficult",
    duration: 45,
    scheduledDate: "2026-09-12",
    scheduledTime: "10:30 AM",
    status: "incomplete",
    topics: ["ORM", "XML Views", "Python"],
    assignedBy: "Trainer Priya",
  },


  // ─────────────────────────────────────────────
  // WEEK 3
  // ─────────────────────────────────────────────

  {
    id: "INT012",
    role: "Python Developer",
    type: "Technical",
    mode: "Text",
    difficulty: "Advanced",
    duration: 50,
    scheduledDate: "2026-09-14",
    scheduledTime: "10:00 AM",
    status: "completed",
    topics: ["Django", "FastAPI", "Async Python"],
    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT013",
    role: "MERN Stack",
    type: "Technical",
    mode: "Text + Voice",
    difficulty: "Difficult",
    duration: 60,
    scheduledDate: "2026-09-14",
    scheduledTime: "2:00 PM",
    status: "completed",
    topics: ["React", "Node.js", "MongoDB"],
    assignedBy: "Trainer Priya",
  },

  {
    id: "INT014",
    role: "Flutter Developer",
    type: "Technical",
    mode: "Voice",
    difficulty: "Medium",
    duration: 40,
    scheduledDate: "2026-09-15",
    scheduledTime: "11:00 AM",
    status: "incomplete",
    topics: ["Provider", "Firebase"],
    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT015",
    role: "System Design",
    type: "System Design",
    mode: "Text + Voice",
    difficulty: "Advanced",
    duration: 60,
    scheduledDate: "2026-09-16",
    scheduledTime: "3:00 PM",
    status: "completed",
    topics: ["Load Balancing", "Caching"],
    assignedBy: "Trainer Priya",
  },

  {
    id: "INT016",
    role: "HR Round",
    type: "Behavioral",
    mode: "Voice",
    difficulty: "Easy",
    duration: 30,
    scheduledDate: "2026-09-17",
    scheduledTime: "11:00 AM",
    status: "completed",
    topics: ["Communication", "Problem Solving"],
    assignedBy: "Trainer Ananya",
  },

  {
    id: "INT017",
    role: "Coding Round",
    type: "Coding",
    mode: "Monaco Editor",
    difficulty: "Medium",
    duration: 45,
    scheduledDate: "2026-09-18",
    scheduledTime: "4:00 PM",
    status: "incomplete",
    topics: ["Arrays", "Dynamic Programming"],
    assignedBy: "Trainer Rahul",
  },


  // ─────────────────────────────────────────────
  // WEEK 4
  // ─────────────────────────────────────────────

  {
    id: "INT018",
    role: "Python Developer",
    type: "Technical",
    mode: "Text",
    difficulty: "Medium",
    duration: 45,
    scheduledDate: "2026-09-21",
    scheduledTime: "10:00 AM",
    status: "completed",
    topics: ["Python", "Django"],
    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT019",
    role: "MERN Stack",
    type: "Technical",
    mode: "Text",
    difficulty: "Difficult",
    duration: 60,
    scheduledDate: "2026-09-22",
    scheduledTime: "11:30 AM",
    status: "completed",
    topics: ["Express", "MongoDB", "JWT"],
    assignedBy: "Trainer Priya",
  },

  {
    id: "INT020",
    role: "Odoo Developer",
    type: "Technical",
    mode: "Text",
    difficulty: "Difficult",
    duration: 45,
    scheduledDate: "2026-09-23",
    scheduledTime: "10:30 AM",
    status: "incomplete",
    topics: ["ORM", "XML Views"],
    assignedBy: "Trainer Priya",
  },

  {
    id: "INT021",
    role: "Flutter Developer",
    type: "Technical",
    mode: "Text + Voice",
    difficulty: "Medium",
    duration: 40,
    scheduledDate: "2026-09-24",
    scheduledTime: "3:15 PM",
    status: "completed",
    topics: ["BLoC", "Firebase"],
    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT022",
    role: "HR Round",
    type: "Behavioral",
    mode: "Voice",
    difficulty: "Easy",
    duration: 30,
    scheduledDate: "2026-09-25",
    scheduledTime: "5:50 PM",
    status: "completed",
    topics: ["Leadership", "Communication"],
    assignedBy: "Trainer Ananya",
  },

  {
    id: "INT023",
    role: "System Design",
    type: "System Design",
    mode: "Text + Voice",
    difficulty: "Advanced",
    duration: 60,
    scheduledDate: "2026-09-26",
    scheduledTime: "2:00 PM",
    status: "upcoming",
    topics: ["Scalability", "Microservices"],
    assignedBy: "Trainer Priya",
  },


  // ─────────────────────────────────────────────
  // WEEK 5
  // ─────────────────────────────────────────────

  {
    id: "INT024",
    role: "Python Developer",
    type: "Technical",
    mode: "Text",
    difficulty: "Advanced",
    duration: 50,
    scheduledDate: "2026-09-28",
    scheduledTime: "10:00 AM",
    status: "upcoming",
    topics: ["FastAPI", "Async Python"],
    assignedBy: null,
  },

  {
    id: "INT025",
    role: "System Design",
    type: "System Design",
    mode: "Text + Voice",
    difficulty: "Advanced",
    duration: 60,
    scheduledDate: "2026-09-29",
    scheduledTime: "2:00 PM",
    status: "upcoming",
    topics: ["Caching", "Load Balancing"],
    assignedBy: null,
  },

  {
    id: "INT026",
    role: "Flutter Developer",
    type: "Technical",
    mode: "Text + Voice",
    difficulty: "Medium",
    duration: 40,
    scheduledDate: "2026-09-30",
    scheduledTime: "3:15 PM",
    status: "upcoming",
    topics: ["BLoC", "Firebase Auth"],
    assignedBy: null,
  },
];

export const difficultyConfig = {
  Easy: {
    label: "Easy",
    color: "#16a34a",
    bg: "#dcfce7",
    border: "rgba(22,163,74,0.3)",
    dot: "#16a34a",
  },
  Medium: {
    label: "Medium",
    color: "#d97706",
    bg: "#fef3c7",
    border: "rgba(217,119,6,0.3)",
    dot: "#f59e0b",
  },
  Difficult: {
    label: "Difficult",
    color: "#dc2626",
    bg: "#fee2e2",
    border: "rgba(220,38,38,0.3)",
    dot: "#ef4444",
  },
  Advanced: {
    label: "Advanced",
    color: "#7c3aed",
    bg: "#ede9fe",
    border: "rgba(124,58,237,0.3)",
    dot: "#8b5cf6",
  },
};

export const modeIcons = {
  "Text": "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  "Voice": "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  "Text + Voice": "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  "Monaco Editor": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
};