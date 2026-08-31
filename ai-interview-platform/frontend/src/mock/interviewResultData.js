// src/mock/interviewResultData.js

export const interviewResults = [
  {
    id: "INT001",

    role: "Flutter Developer",
    type: "Technical",
    mode: "Text + Voice",
    difficulty: "Medium",

    scheduledDate: "2026-08-27",
    scheduledTime: "11:25 AM",
    duration: 40,

    completedAt: "2026-08-27 12:06 PM",

    topics: [
      "BLoC",
      "Provider",
      "Firebase Auth",
      "Streams",
    ],

    score: {
      marksGained: 31,
      maxMarks: 40,
      percentage: 78,
    },

    summary: {
      questionsAsked: 32,
      totalTime: 35,
    },

    sectionScores: [
      {
        name: "BLoC",
        marksGained: 8,
        maxMarks: 10,
        percentage: 80,
      },
      {
        name: "Provider",
        marksGained: 7,
        maxMarks: 10,
        percentage: 70,
      },
      {
        name: "Firebase Auth",
        marksGained: 9,
        maxMarks: 10,
        percentage: 90,
      },
      {
        name: "Streams",
        marksGained: 7,
        maxMarks: 10,
        percentage: 70,
      },
    ],

    strengths: [
      "Good understanding of BLoC and state management.",
      "Explained Firebase Authentication flow clearly.",
      "Handled follow-up questions well.",
    ],

    areasToImprove: [
      "Improve Stream error handling.",
      "Provide more real-world examples.",
      "Work on time optimization while answering.",
    ],

    trainerFeedback: {
      trainer: "Trainer Rahul",
      designation: "Senior Flutter Developer",
      comment:
        "Overall good performance. Your concepts are clear and you explained them well. Focus more on code implementation and handling edge cases in Streams.",
    },

    questions: [
      {
        id: 1,
        question: "What is BLoC in Flutter?",
        answer:
          "BLoC is a design pattern used to separate business logic from the UI.",
        marksGained: 2,
        maxMarks: 2,
        status: "correct",
      },
      {
        id: 2,
        question: "What is the difference between BLoC and Provider?",
        answer:
          "Provider is mainly used for dependency injection and state access, while BLoC provides a structured approach for managing business logic using streams.",
        marksGained: 2,
        maxMarks: 3,
        status: "partial",
      },
      {
        id: 3,
        question: "How does Firebase Authentication work in Flutter?",
        answer:
          "Firebase Authentication provides authentication services such as email/password, Google login and other authentication providers.",
        marksGained: 3,
        maxMarks: 3,
        status: "correct",
      },
    ],

    recording: {
      available: true,
      duration: "35 min",
    },

    report: {
      available: true,
    },

    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT002",

    role: "MERN Stack",
    type: "Technical",
    mode: "Text",
    difficulty: "Difficult",

    scheduledDate: "2026-06-25",
    scheduledTime: "5:50 PM",
    duration: 60,

    completedAt: "2026-06-25 06:48 PM",

    topics: [
      "Express",
      "MongoDB",
      "Redux",
      "JWT",
    ],

    score: {
      marksGained: 37,
      maxMarks: 60,
      percentage: 62,
    },

    summary: {
      questionsAsked: 40,
      totalTime: 52,
    },

    sectionScores: [
      {
        name: "Express",
        marksGained: 10,
        maxMarks: 15,
        percentage: 67,
      },
      {
        name: "MongoDB",
        marksGained: 8,
        maxMarks: 15,
        percentage: 53,
      },
      {
        name: "Redux",
        marksGained: 11,
        maxMarks: 15,
        percentage: 73,
      },
      {
        name: "JWT",
        marksGained: 8,
        maxMarks: 15,
        percentage: 53,
      },
    ],

    strengths: [
      "Good understanding of Express routing.",
      "Understands Redux state management.",
      "Good knowledge of REST API concepts.",
    ],

    areasToImprove: [
      "Improve MongoDB aggregation knowledge.",
      "Study JWT security practices.",
      "Practice complex backend scenarios.",
    ],

    trainerFeedback: {
      trainer: "Trainer Priya",
      designation: "Senior MERN Developer",
      comment:
        "Good understanding of the MERN stack fundamentals. More practice is needed with MongoDB aggregation and authentication security.",
    },

    questions: [
      {
        id: 1,
        question: "What is Express.js?",
        answer:
          "Express.js is a Node.js web framework used to build APIs and web applications.",
        marksGained: 2,
        maxMarks: 2,
        status: "correct",
      },
      {
        id: 2,
        question: "What is MongoDB aggregation?",
        answer:
          "Aggregation is used to process and transform MongoDB documents using pipeline stages.",
        marksGained: 2,
        maxMarks: 4,
        status: "partial",
      },
    ],

    recording: {
      available: false,
      duration: null,
    },

    report: {
      available: true,
    },

    assignedBy: "Trainer Priya",
  },

  {
    id: "INT003",

    role: "HR Round",
    type: "Behavioral",
    mode: "Voice",
    difficulty: "Easy",

    scheduledDate: "2026-06-23",
    scheduledTime: "3:15 PM",
    duration: 30,

    completedAt: "2026-06-23 03:43 PM",

    topics: [
      "Communication",
      "Team Work",
      "Problem Solving",
      "Leadership",
    ],

    score: {
      marksGained: 25.5,
      maxMarks: 30,
      percentage: 85,
    },

    summary: {
      questionsAsked: 20,
      totalTime: 28,
    },

    sectionScores: [
      {
        name: "Communication",
        marksGained: 9,
        maxMarks: 10,
        percentage: 90,
      },
      {
        name: "Team Work",
        marksGained: 8,
        maxMarks: 10,
        percentage: 80,
      },
      {
        name: "Problem Solving",
        marksGained: 8.5,
        maxMarks: 10,
        percentage: 85,
      },
    ],

    strengths: [
      "Clear communication.",
      "Good confidence during the interview.",
      "Provided relevant examples.",
    ],

    areasToImprove: [
      "Improve answer structure.",
      "Give more measurable examples.",
      "Reduce unnecessary pauses.",
    ],

    trainerFeedback: {
      trainer: "Trainer Ananya",
      designation: "HR Trainer",
      comment:
        "Strong communication and confidence. Continue practicing structured answers using real-world examples.",
    },

    questions: [
      {
        id: 1,
        question: "Tell me about yourself.",
        answer:
          "Candidate provided a clear introduction covering education, skills and career goals.",
        marksGained: 3,
        maxMarks: 3,
        status: "correct",
      },
      {
        id: 2,
        question: "Tell me about a difficult situation you handled.",
        answer:
          "Candidate explained a team-related challenge and how it was resolved.",
        marksGained: 3,
        maxMarks: 3,
        status: "correct",
      },
    ],

    recording: {
      available: true,
      duration: "28 min",
    },

    report: {
      available: true,
    },

    assignedBy: "Trainer Ananya",
  },

  {
    id: "INT004",

    role: "Python Developer",
    type: "Technical",
    mode: "Text",
    difficulty: "Advanced",

    scheduledDate: "2026-06-20",
    scheduledTime: "4:00 PM",
    duration: 50,

    completedAt: "2026-06-20 04:48 PM",

    topics: [
      "Django",
      "FastAPI",
      "Data Structures",
      "Async Python",
    ],

    score: {
      marksGained: 36,
      maxMarks: 50,
      percentage: 72,
    },

    summary: {
      questionsAsked: 35,
      totalTime: 48,
    },

    sectionScores: [
      {
        name: "Django",
        marksGained: 9,
        maxMarks: 12,
        percentage: 75,
      },
      {
        name: "FastAPI",
        marksGained: 8,
        maxMarks: 12,
        percentage: 67,
      },
      {
        name: "Data Structures",
        marksGained: 11,
        maxMarks: 13,
        percentage: 85,
      },
      {
        name: "Async Python",
        marksGained: 8,
        maxMarks: 13,
        percentage: 62,
      },
    ],

    strengths: [
      "Strong Python fundamentals.",
      "Good understanding of data structures.",
      "Good Django knowledge.",
    ],

    areasToImprove: [
      "Practice asynchronous programming.",
      "Improve FastAPI architecture knowledge.",
      "Study advanced database optimization.",
    ],

    trainerFeedback: {
      trainer: "Trainer Rahul",
      designation: "Python Technical Trainer",
      comment:
        "Strong Python fundamentals. Focus more on asynchronous programming and backend architecture.",
    },

    questions: [
      {
        id: 1,
        question: "What is Django ORM?",
        answer:
          "Django ORM allows developers to interact with the database using Python objects instead of writing raw SQL for every operation.",
        marksGained: 3,
        maxMarks: 3,
        status: "correct",
      },
      {
        id: 2,
        question: "What is async programming in Python?",
        answer:
          "Async programming allows tasks to execute cooperatively without blocking while waiting for I/O operations.",
        marksGained: 2,
        maxMarks: 4,
        status: "partial",
      },
    ],

    recording: {
      available: false,
      duration: null,
    },

    report: {
      available: true,
    },

    assignedBy: "Trainer Rahul",
  },

  {
    id: "INT005",

    role: "Coding Round",
    type: "Coding",
    mode: "Monaco Editor",
    difficulty: "Medium",

    scheduledDate: "2026-06-18",
    scheduledTime: "6:10 PM",
    duration: 45,

    completedAt: "2026-06-18 06:52 PM",

    topics: [
      "Arrays",
      "Dynamic Programming",
      "Trees",
      "String Manipulation",
    ],

    score: {
      marksGained: 30.5,
      maxMarks: 45,
      percentage: 68,
    },

    summary: {
      questionsAsked: 12,
      totalTime: 42,
    },

    sectionScores: [
      {
        name: "Arrays",
        marksGained: 9,
        maxMarks: 10,
        percentage: 90,
      },
      {
        name: "Dynamic Programming",
        marksGained: 6,
        maxMarks: 15,
        percentage: 40,
      },
      {
        name: "Trees",
        marksGained: 8,
        maxMarks: 10,
        percentage: 80,
      },
      {
        name: "Strings",
        marksGained: 7.5,
        maxMarks: 10,
        percentage: 75,
      },
    ],

    strengths: [
      "Strong array problem-solving skills.",
      "Good understanding of trees.",
      "Writes readable code.",
    ],

    areasToImprove: [
      "Practice dynamic programming.",
      "Improve time complexity analysis.",
      "Practice more medium and hard coding problems.",
    ],

    trainerFeedback: {
      trainer: "Trainer Priya",
      designation: "Coding Trainer",
      comment:
        "Good coding fundamentals. Spend more time practicing dynamic programming and optimizing solutions.",
    },

    questions: [
      {
        id: 1,
        question: "Find the maximum element in an array.",
        answer:
          "Used a single loop to traverse the array and maintain the maximum value.",
        marksGained: 4,
        maxMarks: 4,
        status: "correct",
      },
      {
        id: 2,
        question: "Solve a basic dynamic programming problem.",
        answer:
          "Candidate identified the recursive solution but had difficulty optimizing it.",
        marksGained: 2,
        maxMarks: 5,
        status: "partial",
      },
    ],

    recording: {
      available: false,
      duration: null,
    },

    report: {
      available: true,
    },

    assignedBy: "Trainer Priya",
  },
];