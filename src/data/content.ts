

export const profile = {
  name: "Madhumithra M",
  
  roles: [
  "Aspiring Software Engineer",
  "Full-Stack Developer",
  "CSE (Information Security) Student",
],
tagline:
"Final-year B.Tech Computer Science (Information Security) student passionate about building secure, scalable, and AI-powered applications. Co-inventor of a published Indian patent with interests in full-stack development, AI, and software engineering.",
  location: "Pattukkottai, Tamil Nadu, India",
  email: "mithramadhu777@gmail.com",
  phone: "+91 8667673037",
  resumeUrl: "/assets/Madhumithra_Resume.pdf",
  photoUrl: "/assets/profile.jpg",
  status: "Building Secure & AI-Powered Software",
};


export const socials = {
  github: "https://github.com/Madhu-Mithra-M",
  linkedin: "https://linkedin.com/in/madhu-mithra-m",
  leetcode: "https://leetcode.com/u/MADHUMITHRA_MURUGAIYAN/",
  gfg: "https://www.geeksforgeeks.org/profile/mithramabkz7",
  whatsapp: "https://wa.me/918667673037",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=mithramadhu777@gmail.com",
};

export const education = [
  {
    institution: "Vellore Institute of Technology, Vellore",
    degree: "B.Tech Computer Science and Engineering (Information Security)",
    period: "Aug 2023 – May 2027",
    detail: "CGPA: 9.38 / 10",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js 14",  "HTML/CSS", "REST APIs"],
  },
  {
    category: "Data & AI",
    items: ["Pandas", "Google Gemini API","Flask", "Dialogflow"],
  },
  {
    category: "Backend",
    items: ["Flask","REST APIs","Firebase Auth"],
  },
  {
    category: "Database",
    items: ["Firebase (Auth + Realtime DB)","SQL"],
    
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const patent = {
  title: "Published Indian Patent on AI Agent Security",
  applicationNo: "202641068105",
  publicationNo: "IN202641068105 A1",
  filingDate: "30 May 2026",
  publicationDate: "05 June 2026",
  applicant: "Vellore Institute of Technology",
  inventors: [
    "Murugan Krishnamoorthy",
    "S Lakshmikanth",
    "S Monisha",
    "V Jithendar",
    "Madhumithra M",
],

summary:
"Published Indian patent proposing a risk-based stateful security framework that protects AI agents against prompt injection, instruction manipulation, and sensitive data leakage.",
highlights: [
  "Risk-based stateful security framework for AI agents",
  "Prompt injection detection and mitigation",
  "Adaptive protection against instruction manipulation and data leakage",
  "Dynamic multi-parameter risk assessment with state persistence",
],
  github: "https://github.com/Madhu-Mithra-M/ai-agent-security-patent",

  documents: [
  {
    label: "Patent Publication",
    href: "/assets/patent-IN202641068105-A1.pdf",
  },
  {
    label: "Search Report",
    href: "/assets/patentability-search-report.pdf",
  },
  {
    label: "GitHub Repository",
    href: "https://github.com/Madhu-Mithra-M/ai-agent-security-patent",
  },
],
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  role: string;
  stack: string[];
  highlights: string[];
  github?: string;
  live?: string;
  status: string;
};

export const projects: Project[] = [
  {
    id: "ai-prepzone",
    name: "AI PrepZone",
    tagline: "AI-powered placement prep platform",
    image: "/assets/project-ai-prepzone.jpg",
    description:
      "A solo-built, full-stack exam-preparation platform that analyzes past question papers and generates personalized quizzes. A Python/Pandas analyzer surfaces high-frequency topics and exam trends, while Google Dialogflow and Gemini 1.5 Pro handle intelligent question retrieval and automated MCQ generation over a 500+ question bank.",
    role: "Full-Stack Developer — architecture, backend, AI integration and deployment",
    stack: ["Python", "Flask", "Gemini 1.5 Pro API", "Dialogflow", "Pandas", "HTML/CSS/JS", "Render.com"],
    highlights: [
      "Engineered a Pandas-based Question Paper Analyzer to detect high-frequency exam topics",
      "Integrated Dialogflow + Gemini 1.5 Pro for automated MCQ generation and intent extraction",
      "Curated and served a question CSV bank through a Flask backend",
      "Deployed and live on Render.com",
    ],
    
    github: "https://github.com/Madhu-Mithra-M/AI-prepzone",
    status: "Deployed",
  },
  {
    id: "collaborative-sheets",
    name: "Collaborative Sheets",
    tagline: "Real-time multi-user spreadsheet app",
    image: "/assets/project-collab-sheets.jpg",
    description:
      "A real-time collaborative spreadsheet supporting multi-user editing with live cursor presence, built on Firebase Realtime Database. Includes a custom formula engine handling spreadsheet functions, cell references, formatting and CSV export.",
    role: "Full-stack developer — formula engine, real-time sync and auth",
    stack: ["Next.js 14", "React", "TypeScript", "Firebase Auth", "Firebase Realtime DB", "Tailwind CSS"],
    highlights: [
      "Built a custom formula engine supporting functions, cell references and formatting",
      "Implemented live multi-user presence and real-time synchronization via Firebase",
      "Added CSV export and secure access control with Firebase Authentication",
    ],
    github: "https://github.com/Madhu-Mithra-M/Collaborative-Spreadsheets",
    status: "Live demo",
    live:"https://collaborative-sheets-trademarkia.vercel.app/"
  },
  {
  id: "vit-scheduler",
  name: "VIT Scheduler",
  tagline: "Smart classroom and lab allocation system",
  image: "/assets/project-vit-scheduler.jpg",
  description:
    "An Android application that automates classroom and laboratory allocation for academic schedules, reducing manual conflicts through intelligent room assignment and offline data management.",
  role: "Android Developer",
  stack: [
    "Kotlin",
    "Android Studio",
    "Room Database",
    "SQLite",
    "Apache POI",
    "Firebase Cloud Messaging"
  ],
  highlights: [
    "Automated classroom and laboratory allocation",
    "Excel import/export using Apache POI",
    "Offline storage with Room Database",
    "Real-time notifications using Firebase Cloud Messaging"
  ],
  github: "https://github.com/Madhu-Mithra-M/VIT-Scheduler",
  status: "Academic Project",
},
];

export const certifications = [
  {
    name: "IBM Cybersecurity Analyst Professional Certificate",
    issuer: "IBM",
    detail:
      "Covers cybersecurity fundamentals, Security Operations Centers (SOC), SIEM, SOAR, incident response, and social engineering.",
    
     image: "/assets/ibm_cybersecurity_card.png",
    link: "https://courses.adroitprolearn.skillsnetwork.site/certificates/3e8713e8097447f3ac9aaa1df80c20f9",
  },
];

export const achievements = [
  {
    label: "Named Co-Inventor",
    detail: "Published Indian Patent Application IN202641068105 A1",
  },
  {
    label: "CGPA 9.38 / 10.0",
    detail: "B.Tech CSE (Information Security), VIT Vellore",
  },
  {
    label: "VIT 100% STARS Merit Scholarship",
    detail: "Awarded for academic excellence",
  },
  {
    label: "School Topper",
    detail: "10th & 12th Grade",
  },
]
export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "MADHUMITHRA_MURUGAIYAN",
    url: "https://leetcode.com/u/MADHUMITHRA_MURUGAIYAN/",
  },
  {
    platform: "GeeksforGeeks",
    username: "MADHUMITHRA",
    url: "https://www.geeksforgeeks.org/profile/mithramabkz7",
  },
  {
    platform: "GitHub",
    username: "Madhu-Mithra-M",
    url: "https://github.com/Madhu-Mithra-M",
  },

];


export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "patent", label: "Patent" },
  { id: "certifications", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "coding-profiles", label: "Coding" },
  { id: "contact", label: "Contact" },
];
