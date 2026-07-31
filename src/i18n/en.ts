import type { Translations } from "./ko";

const en: Translations = {
  nav: {
    home: "About",
    career: "Career",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    badge: "Open to work",
    name: "Woohyun Sim",
    title: "FullStack SW Developer",
    tagline: "Building user-facing products and AI search workflows.",
    description:
      "I build React-based user interfaces and AI search services with FastAPI and RAG pipelines. Through AI startup and ICT internship experience, I have worked on service development, QA, documentation, and deployment workflows.",
    descriptionBullets: [
      "I define the user problem first and connect planning, implementation, and deployment.",
      "I design React interfaces together with API and data flows to deliver complete services.",
      "I build maintainable software with performance, testing, and documentation in mind.",
    ],
    cta: "View Projects",
    email: "Email",
    typingTexts: [
      "I build React frontends and FastAPI backends",
      "I design RAG-based AI search flows",
      "I improve collaboration through QA and documentation",
      "I build with deployment in mind",
    ],
  },
  highlights: [
    "Pre-CES2026 AI SaaS dev · QA",
    "ICT internship full-stack build",
    "React · FastAPI · RAG search",
    "Reproduce · document · deploy",
  ],
  stats: [
    { label: "Internships", value: "2", unit: "" },
    { label: "Services Built", value: "4", unit: "" },
    { label: "Refactoring / Upgrade", value: "2", unit: "" },
    { label: "Deployed Services", value: "3", unit: "" },
  ],
  career: {
    label: "Experience",
    title: "Career",
    items: [
      {
        company: "HyperStar (KAIST Startup)",
        role: "Frontend / Backend / QA Intern",
        period: "Dec 2025 — Mar 2026",
        type: "Intern",
        description:
          "Worked through pre-CES2026 service development and QA cycles at a KAIST Global TIPS-selected AI influencer marketing B2B SaaS startup.",
        highlights: [
          "Participated in landing page introduction and service UI improvements for CES2026",
          "Documented QA checklists, reproduction paths, expected and actual results",
          "Investigated RAG integration and DB cascade issues",
          "Experienced GitHub Actions, Claude Actions, and Playwright-based validation flows",
        ],
      },
      {
        company: "Douzone ICT Group / KeyCom",
        role: "SW Developer Intern",
        period: "Oct — Nov 2025",
        type: "Intern",
        description:
          "Planned, developed, and deployed TechLens, a patent intelligence service for tracking competitor technology trends through patent data.",
        highlights: [
          "Built full-stack features with React, Express, PostgreSQL, and KIPRIS API",
          "Implemented search, analytics, favorites, memo, and company comparison features",
          "Reduced unnecessary calls with caching and controlled query conditions",
          "Reflected security requirements and mentorship feedback in implementation",
        ],
      },
    ],
  },
  experience: {
    label: "Experience Plus",
    title: "Education & Operations",
    items: [
      {
        title: "Programmers DevCourse 6th",
        role: "Full-cycle Web Development",
        period: "Jan — Jul 2025",
        type: "Program",
        description:
          "Completed a TypeScript-based full-cycle web development course, covering REST API design, React frontend development, team collaboration, and deployment.",
        highlights: [
          "Built Playce, a map-based sports broadcasting restaurant finder",
          "Implemented React UI and API integration as a frontend developer",
          "Collaborated with backend teammates on REST API contracts",
          "Learned the importance of state separation and early architecture through refactoring",
        ],
      },
      {
        title: "Kangwon National Univ.",
        role: "System Administrator",
        period: "Aug 2023 — Jan 2025",
        type: "Staff",
        description:
          "Supported campus computer lab operations, server and network troubleshooting, and user-facing technical support.",
        highlights: [
          "Supported server and network equipment operations",
          "Handled first-response checks for lab environment issues",
          "Provided technical support for students and staff",
          "Learned the value of stability and user-centered operations",
        ],
      },
    ],
  },
  projects: {
    label: "Selected Works",
    title: "Projects",
    oneLinerLabel: "One-liner",
    achievementsLabel: "Key Outcomes",
    roleLabel: "My Role",
    items: [
      {
        title: "TechLens",
        subtitle: "KIPRIS Patent Analysis & Visualization Dashboard",
        type: "Douzone Internship",
        status: "Completed",
        description:
          "A full-stack B2B patent intelligence dashboard that turns public patent data into searchable company technology trends and analysis views.",
        achievements: [
          "Implemented 17 REST APIs for search, detail views, favorites, and company analysis",
          "Connected KIPRIS API responses to PostgreSQL storage and query flows",
          "Built dashboards for IPC distribution, monthly filing trends, and technology fields",
          "Applied JWT auth, refresh token rotation, and input validation flows",
        ],
        role: [
          "Owned planning, frontend, backend, and database implementation end to end",
          "Analyzed external API response structures and designed searchable data fields",
          "Improved maintainability and stability through a 14-step refactoring after the internship",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "RAG-based Patent AI Search Platform",
        type: "Personal Project",
        status: "In Progress",
        description:
          "A RAG-based AI search service that extends TechLens from condition-based patent search into natural-language patent and evidence retrieval.",
        achievements: [
          "Built patent chunking, embedding, and vector database indexing pipelines",
          "Designed BM25 + Vector Search + RRF hybrid retrieval",
          "Returned question-based search results with source documents and AI answers",
          "Added a RAGAS-based evaluation flow to inspect retrieval and answer quality",
        ],
        role: [
          "Individually owned planning, architecture, frontend, and backend implementation",
          "Debugged search failures by separating chunking, retrieval strategy, and answer grounding",
          "Converted patent search from list lookup into question-based information exploration",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "Kakao Maps Sports Restaurant Finder",
        type: "Team + Solo Refactoring",
        status: "Completed",
        description:
          "A location-based service for finding sports-broadcasting restaurants by map, sport, league, and date, later improved through solo performance and test refactoring.",
        achievements: [
          "Contributed 66% of frontend commits and built map, detail, favorites, and mypage flows",
          "Completed a 15-step, 61-PR solo refactoring after the team project",
          "Reduced initial bundle size by 42% through code splitting",
          "Built 100+ Vitest/Playwright tests and GitHub Actions CI",
        ],
        role: [
          "Developed Kakao Maps markers, location search, and restaurant detail screens",
          "Separated server state with React Query and UI state with Zustand",
          "Removed dead code, reorganized domain structure, and improved error recovery",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "KAIST Global TIPS-selected · AI Influencer Marketing B2B SaaS",
        type: "Production",
        status: "Production",
        description:
          "Pre-CES2026 stabilization work for an AI influencer marketing B2B SaaS, covering UI, API, data flow, and RAG response checks.",
        achievements: [
          "Structured QA checklists for main screens and edge cases",
          "Reproduced API/RAG integration issues and documented fix directions",
          "Contributed to QA automation with GitHub Actions and Claude Actions",
          "Supported CES2026 landing page and SEO improvements",
        ],
        role: [
          "Expanded from QA into frontend fixes and debugging support",
          "Traced issues across UI display, server responses, and data processing",
          "Documented fixes and remaining issues so the team could align on status",
        ],
      },
    ],
  },
  skills: {
    label: "Tech Stack",
    title: "Tech Stack",
  },
  education: {
    label: "Background",
    title: "Education & Certifications",
    universityLabel: "Education",
    certificationsLabel: "Certifications",
    certCount: " earned",
    activitiesLabel: "Activities",
    majorLabel: "Major",
    minorLabel: "Minor",
    universityName: "Kangwon National University (Chuncheon)",
    major: "Computer Science",
    minor: "Precision Medicine Convergence",
    period: "2021.03 — 2026.02",
    status: "Graduated",
    certifications: [
      { name: "Engineer Information Processing", org: "KIPA" },
      { name: "Big Data Analyst", org: "KIPA" },
      { name: "SQLD", org: "KDATA" },
      { name: "ADsP", org: "KDATA" },
      { name: "DAsP", org: "KDATA" },
      { name: "TOEIC 785", org: "ETS" },
    ],
    activities: [
      { name: "AWS Solutions Architect Associate", desc: "Cloud architecture design", period: "2025.11" },
      { name: "Programmers DevCourse 6th", desc: "Production full-stack project & team collaboration", period: "2025.01 — 2025.07" },
      { name: "University of Waikato Exchange", desc: "Global communication skills", period: "2024.07" },
      { name: "Cloud Security (QueryPie)", desc: "Cloud security & access control", period: "2024.08" },
      { name: "Naver Cloud Associate", desc: "Cloud service architecture fundamentals", period: "2023.12" },
    ],
  },
  achievements: {
    label: "Achievements",
    title: "Notable Achievements",
    items: [
      {
        icon: "scholarship",
        title: "Kangwon LRS Shared Univ. — Innovation Talent 1st Cohort",
        description: "~₩12M scholarship over 6 semesters",
      },
      {
        icon: "prize",
        title: "Gangwon-do Specialized Talent Program",
        description: "Province-recognized talent — cumulative ₩10M+ scholarship",
      },
      {
        icon: "global",
        title: "Waikato University, New Zealand",
        description: "Korea Scholarship Foundation full grant (₩8M+) · 4-week program",
      },
      {
        icon: "cloud",
        title: "Naver Cloud Platform (NCP)",
        description: "NCA course completed — keen on NCP adoption",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Looking for opportunities to grow together",
    description: "I welcome new challenges and growth opportunities.",
    sub: "A casual coffee chat works too.",
    emailBtn: "Send Email",
    copied: "Copied!",
  },
  footer: {
    built: "Built with Next.js + Tailwind",
  },
};

export default en;
