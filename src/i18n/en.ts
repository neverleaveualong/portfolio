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
    title: "AI & Full-Stack Developer",
    tagline: "Expanding from frontend to backend and RAG-based AI features.",
    description:
      "Computer science graduate with experience across React frontend, Express/FastAPI backend, and RAG-based AI search. Through AI startup and Douzone ICT internship experience, I have worked on service development, QA, documentation, and deployment workflows.",
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
    "AI startup CES2026 pre-launch development and QA",
    "Douzone ICT / KeyCom full-stack internship",
    "React · FastAPI · RAG-based AI search",
    "Issue reproduction · documentation · deployment-aware development",
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
    items: [
      {
        title: "TechLens",
        subtitle: "KIPRIS Patent Analysis & Visualization Dashboard",
        type: "Douzone Internship",
        status: "Completed",
        description:
          "Patent intelligence B2B web app planned, developed, and deployed during the Douzone ICT internship. It helps users inspect competitor patent trends by date, IPC, and registration status.",
        highlights: [
          "Applicant-based search for company patent lists and technology flow",
          "Visualized IPC distribution, monthly filing trends, and registration status",
          "Built favorites and memo features to track patents continuously",
          "Developed React + TypeScript frontend and Express + PostgreSQL backend",
          "Separated user state and server state with Zustand and React Query",
          "Learned the need for internal DB caching and scheduled refreshes after KIPRIS API limits",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "RAG-based Patent AI Search Platform",
        type: "Personal Project",
        status: "In Progress",
        description:
          "An AI search upgrade from TechLens' condition-based patent search to natural-language RAG search, helping users find related patents and documents from ideas or known patent information.",
        highlights: [
          "Collected KIPRIS patent data and built a LangChain-based RAG pipeline",
          "Analyzed patent text length and applied 800-character chunking",
          "Combined BM25 + Vector search with RRF for hybrid retrieval",
          "Implemented search and answer flow with FastAPI backend and Next.js frontend",
          "Built answer quality checks with RAGAS and user feedback",
          "Planned future AI Agent and data collection/refresh pipeline upgrades",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "Kakao Maps Sports Restaurant Finder",
        type: "Team + Solo Refactoring",
        status: "Completed",
        description:
          "Map-based restaurant search service for users who want to watch sports broadcasts with friends outside stadiums. Built as a DevCourse team project and later improved through solo refactoring.",
        highlights: [
          "Implemented Kakao Maps-based nearby sports broadcasting restaurant search",
          "Provided location-based schedule view with sport, league, and date filters",
          "Separated server state with React Query and map/search UI state with Zustand",
          "Collaborated with backend teammates on API contracts as frontend developer",
          "Refactored structure, state management, performance, and testing after the team project",
          "Identified owner-side restaurant management and broadcast-edit UX as future improvements",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "KAIST Global TIPS-selected · AI Influencer Marketing B2B SaaS",
        type: "Production",
        status: "Production",
        description:
          "AI influencer marketing B2B SaaS startup work before CES2026 launch, covering service UI improvements, QA, automation workflows, and landing page work.",
        highlights: [
          "Participated in landing page introduction and SEO optimization for CES2026",
          "Improved creator search and campaign management screens with React/TypeScript",
          "Investigated FastAPI-based RAG integration and DB cascade issues",
          "Documented reproducible QA issues during busy development cycles",
          "Experienced AI-assisted validation workflows with GitHub Actions and Claude Actions",
          "Participated in PR validation using Playwright logs and screenshots",
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
