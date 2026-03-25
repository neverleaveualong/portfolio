import type { Translations } from "./ko";

const en: Translations = {
  nav: {
    home: "About",
    career: "Career",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    badge: "Open to work",
    name: "Woohyun Sim",
    title: "Frontend-focused Full-stack Developer",
    tagline: "Armed with Claude Code — a junior who thinks like a senior.",
    description:
      "\"Why should I implement it this way?\" \"What's the problem with this code?\" — I always start with reasoning. I leverage Claude Code & Codex to automate repetitive tasks, so I can focus on architecture and decisions. From B2B SaaS to patent dashboards to RAG pipelines — I build software that delivers business value.",
    cta: "View Projects",
    email: "Email",
    typingTexts: [
      "I ask \"why?\" before writing code",
      "I maximize productivity with Claude Code",
      "I refactor systematically",
      "I design RAG pipelines",
    ],
  },
  highlights: [
    "Claude Code & Codex automation",
    "\"Why?\" — design-first coding",
    "29-stage systematic refactoring",
    "RAG pipeline design & build",
  ],
  stats: [
    { label: "Production Projects", value: "4+", unit: "" },
    { label: "React Components", value: "97", unit: "" },
    { label: "Refactoring Stages", value: "29", unit: "" },
    { label: "Tests Written", value: "189", unit: "" },
  ],
  career: {
    label: "Experience",
    title: "Career",
    items: [
      {
        company: "HyperStar (KAIST Startup)",
        role: "Full-stack Developer",
        period: "Dec 2025 — Present",
        type: "Full-time",
        description:
          "KAIST Global TIPS-selected AI influencer marketing B2B SaaS. Rapidly expanded from QA → FE refactoring → BE debugging → Terraform infra separation. Deep commitment — minimum 10pm every day.",
        highlights: [
          "QA → FE refactoring → BE debugging → Terraform infra separation",
          "Planned, designed, and deployed SaaS landing page",
          "Integrated RAG search with React Query on the frontend",
          "Introduced Playwright E2E test automation",
          "Built feature dev automation PoC with Claude Code",
          "Developed Instagram data crawling pipeline",
          "AWS EC2/S3 environment separation + Vercel auto-deployment",
        ],
      },
      {
        company: "Douzone Bizon (KeyCom Division)",
        role: "SW Developer Intern",
        period: "Oct — Dec 2025",
        type: "Intern",
        description:
          "Solo full-stack development of 'TechLens' patent intelligence B2B web app. 262 commits, 51 PRs in 4 weeks under senior engineer mentorship.",
        highlights: [
          "Designed & implemented 17 REST APIs (auth, search, presets, favorites, analytics)",
          "JWT dual-token auth with server-side token revocation",
          "KIPRIS API batch processing (5req/200ms throttle, Promise.allSettled)",
          "14-stage refactoring — TanStack Query, code splitting, 7 security fixes",
          "Vitest 52 tests + MSW mock server infrastructure (custom hook unit tests)",
          "2026 B2B landing page — typing animation · tab switcher · Playwright screenshots",
          "Web Vitals: Performance 98–100 · TBT ≤50ms · CLS 0 · SEO 82→92",
        ],
      },
      {
        company: "Programmers DevCourse 6th",
        role: "Full-stack Project",
        period: "Jan — Jul 2025",
        type: "Program",
        description:
          "Production-oriented full-stack course. Led FE development for team project 'Playce' (52% code contribution) + 15-stage solo refactoring.",
        highlights: [
          "Led 6-member team FE — wrote 97/125 files (52%)",
          "Kakao Maps SDK + Geolocation API real-time location",
          "15-stage · 61 PR solo refactoring post-graduation",
          "Main bundle 510KB → 295KB (−42%) optimization",
        ],
      },
      {
        company: "Kangwon National Univ.",
        role: "System Administrator",
        period: "Aug 2023 — Jan 2025",
        type: "Staff",
        description:
          "Campus server management, network troubleshooting, and lab operations.",
        highlights: [
          "Server infrastructure and network equipment management",
          "System failure monitoring and first-response recovery",
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
          "B2B web app for patent search, analysis, and visualization. Solo full-stack of 8 pages + 14-stage refactoring + landing page.",
        highlights: [
          "JWT dual-token auth + KIPRIS API batch processing (5req/200ms, Promise.allSettled)",
          "14-stage refactoring — TanStack Query, code splitting, 7 security fixes",
          "Vitest 52 tests + MSW mock server infrastructure",
          "2026 B2B landing page — interactive hero (typing animation + tab switcher)",
          "Web Vitals before/after: Performance 100 maintained · TBT ≤50ms · SEO 82→92",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "RAG-based Patent AI Search Platform",
        type: "Personal Project",
        status: "In Progress",
        description:
          "RAG pipeline embedding KIPRIS patent data into vector DB combined with local LLM. Zero-cost architecture with production swap capability.",
        highlights: [
          "RAG: KIPRIS → Chunking → Embedding(384d) → Pinecone → LLM Answer",
          "Anti-hallucination prompts + mandatory source citation",
          "Ollama + HuggingFace → $0 ops, OpenAI/Azure hot-swappable",
          "Docker containerization + GitHub Actions CI",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "Kakao Maps Sports Restaurant Finder",
        type: "Team + Solo Refactoring",
        status: "Completed",
        description:
          "DevCourse 6-member team project → 15-stage · 61 PR solo refactoring. Wrote 52% of FE codebase.",
        highlights: [
          "Bundle: main 510→295KB(−42%), Modal 311→31KB(−90%)",
          "137 tests (Vitest 109 + Playwright 28) + GitHub Actions CI",
          "React Query server state separation + memo optimization",
          "ErrorBoundary + Skeleton UI + Web Vitals monitoring",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "KAIST Global TIPS-selected · AI Influencer Marketing B2B SaaS",
        type: "Production",
        status: "Production",
        description:
          "KAIST startup, AI creator matching with 500M+ influencer DB. Landing · RAG · test automation · infra.",
        highlights: [
          "SaaS visitor landing page planning & deployment",
          "Playwright E2E test automation + Claude Code dev PoC",
          "Instagram data crawling pipeline development",
          "Terraform infra separation + AWS multi-environment setup",
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
      { name: "TOEIC 860", org: "ETS" },
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
