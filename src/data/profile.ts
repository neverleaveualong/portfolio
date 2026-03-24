export const profile = {
  name: "심우현",
  nameEn: "Sim Woohyun",
  title: "Frontend-focused Full-stack Developer",
  tagline: "기획부터 배포까지, 서비스를 완성하는 개발자",
  description:
    "React + TypeScript 기반 프로덕션 서비스를 설계하고, 체계적인 리팩토링으로 코드 품질을 끌어올립니다. B2B SaaS, 특허 분석 대시보드, RAG 파이프라인까지 — 비즈니스 가치를 만드는 개발을 합니다.",
  email: "wmr06244@naver.com",
  github: "https://github.com/neverleaveualong",
  photo: "/images/profile.jpg",
};

export const stats = [
  { label: "실무급 프로젝트", value: "4+", unit: "개" },
  { label: "프로덕션 React 컴포넌트", value: "97", unit: "개" },
  { label: "체계적 리팩토링 단계", value: "29", unit: "단계" },
  { label: "테스트 커버리지", value: "137", unit: "건" },
];

export const highlights = [
  "B2B SaaS 프로덕션 서비스 개발 경험",
  "15단계 + 14단계 체계적 리팩토링 수행",
  "Claude Code 활용 개발 자동화 및 생산성 극대화",
  "RAG 파이프라인 직접 설계 · 구현",
];

export const skills = {
  frontend: {
    label: "Frontend",
    items: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Framer Motion",
      "Chart.js",
      "Recharts",
      "Vitest",
      "Playwright",
    ],
  },
  backend: {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "TypeORM",
      "Zod",
      "JWT Auth",
      "Swagger",
    ],
  },
  ai: {
    label: "AI / Data",
    items: [
      "LangChain",
      "Pinecone",
      "Ollama",
      "RAG Pipeline",
      "HuggingFace Embeddings",
      "Prompt Engineering",
    ],
  },
  devops: {
    label: "DevOps & Tools",
    items: [
      "AWS (EC2, S3)",
      "Docker",
      "GitHub Actions CI",
      "Vercel",
      "Render",
      "Linux",
      "Claude Code",
    ],
  },
};

export const careers = [
  {
    company: "하이퍼스타",
    role: "QA → Frontend → Full-stack",
    period: "2025.12 — 현재",
    type: "정규직",
    description:
      "AI 기반 인플루언서 마케팅 B2B SaaS 플랫폼. QA에서 시작해 CTO·선임 개발자와 협업하며 풀스택까지 역할을 확장.",
    highlights: [
      "QA → UI 수정 → FE API 연동 → 풀스택 → 인프라까지 5단계 역할 확장",
      "97개 React 컴포넌트 + 15개 커스텀 훅 + 50+ TypeScript 인터페이스 설계",
      "Recharts 기반 5종 차트(Area/Bar/Line/Stacked/Dual-Axis) 퍼포먼스 대시보드",
      "25+ REST API 엔드포인트 Axios 인터셉터 연동",
      "Instagram 데이터 크롤링 파이프라인 설계",
      "AWS EC2/S3 환경 분리(Demo/Dev) + Vercel 자동 배포 구성",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Zustand",
      "React Query",
      "Recharts",
      "Tailwind",
      "AWS",
    ],
  },
  {
    company: "더존비즈온 (키컴 개발본부)",
    role: "SW Developer Intern",
    period: "2025.10 — 2025.12",
    type: "인턴",
    description:
      "특허 인텔리전스 B2B 웹앱 'TechLens' 풀스택 단독 개발. 선임연구원 기술 멘토링 하에 4주 262 커밋.",
    highlights: [
      "17개 REST API 설계·구현 (인증, 특허 검색, 프리셋, 즐겨찾기, 분석)",
      "JWT 이중 토큰(Access+Refresh) 인증 + 서버 사이드 토큰 폐기",
      "KIPRIS API 배치 처리 (5건/200ms 스로틀, Promise.allSettled 에러 내성)",
      "Chart.js 3종 대시보드 (월별 추이, IPC 분포, 등록 상태)",
      "14단계 체계적 리팩토링 — 59 PR 머지, 7개 보안 강화",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Chart.js",
      "Express",
      "PostgreSQL",
      "Zod",
      "Vercel",
    ],
  },
  {
    company: "프로그래머스 데브코스 6기",
    role: "풀스택 프로젝트 (더존비즈온 스폰서)",
    period: "2025.01 — 2025.07",
    type: "교육",
    description:
      "실무형 풀스택 과정. 팀 프로젝트 'Playce' FE 메인 개발자 (52% 코드 기여) + 이후 15단계 솔로 리팩토링.",
    highlights: [
      "6인 팀 프로젝트 FE 메인 개발 — 97/125 파일(52%) 직접 작성",
      "Kakao Maps SDK + Geolocation API 기반 실시간 위치 인터랙션",
      "졸업 후 15단계 · 61 PR 솔로 리팩토링 수행",
      "메인 번들 510KB → 295KB (−42%), MypageModal 311KB → 31KB (−90%)",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Tailwind",
      "Vitest",
      "Playwright",
    ],
  },
  {
    company: "강원대 교양교육원",
    role: "System Administrator",
    period: "2023.08 — 2025.01",
    type: "근무",
    description: "교내 전산망 서버 관리, 네트워크 장애 대응, 실습실 운영 지원.",
    highlights: [
      "전산실습실 서버 인프라 및 네트워크 장비 관리",
      "시스템 장애 모니터링 및 1차 대응 / 복구",
      "학생 대상 실습 환경 운영 및 기술 지원",
    ],
    stack: ["Linux", "Network", "Server"],
  },
];

export const projects = [
  {
    title: "TechDocs",
    subtitle: "RAG 기반 특허 문서 AI 검색 플랫폼",
    type: "개인 프로젝트",
    status: "In Progress",
    description:
      "KIPRIS 특허 데이터를 벡터 DB에 임베딩하고, 로컬 LLM과 결합하여 자연어로 특허를 검색·분석하는 RAG 파이프라인. 운영비 $0으로 프로덕션 전환 가능한 아키텍처.",
    highlights: [
      "RAG 파이프라인: KIPRIS → 청킹(500자) → 임베딩(384d) → Pinecone 저장 → LLM 답변",
      "할루시네이션 방지 프롬프트 + 출처 명시 강제 설계",
      "Ollama(llama3) + HuggingFace 임베딩 → 운영비 $0, OpenAI/Azure 핫스왑 가능",
      "Docker 컨테이너화 + GitHub Actions CI 자동화",
    ],
    stack: ["Next.js", "FastAPI", "LangChain", "Pinecone", "Ollama", "Docker"],
    github: "https://github.com/neverleaveualong/TechDocs",
    color: "#6366f1",
  },
  {
    title: "HyperStar",
    subtitle: "AI 인플루언서 마케팅 B2B SaaS",
    type: "실무 · 프로덕션",
    status: "Production",
    description:
      "500M+ 인플루언서 DB, 5M+ 글로벌 바이어 DB 기반 AI 크리에이터 매칭 플랫폼. QA에서 시작해 풀스택까지 역할 확장.",
    highlights: [
      "97개 React 컴포넌트 + 15개 커스텀 훅 규모 프로덕션 FE 구축",
      "5종 차트(Area/Bar/Line/Stacked/Dual-Axis) 대시보드 + Nice Number 알고리즘",
      "Instagram 크롤링 파이프라인 설계 + AWS EC2/S3 멀티 환경 구성",
      "25+ API 엔드포인트 연동, Axios 인터셉터 기반 인증 플로우",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Zustand",
      "React Query",
      "Recharts",
      "AWS",
    ],
    color: "#f59e0b",
  },
  {
    title: "TechLens",
    subtitle: "KIPRIS 특허 분석 · 시각화 대시보드",
    type: "더존비즈온 인턴십",
    status: "Completed",
    description:
      "KIPRIS 공공데이터 기반 특허 검색, 분석, 시각화 B2B 웹앱. 8개 페이지 풀스택 단독 개발 + 14단계 리팩토링.",
    highlights: [
      "JWT 이중 토큰 인증 + Zustand 기반 풀스택 아키텍처 설계",
      "KIPRIS API 동시 배치 처리 + IPC 사전 캐싱 성능 최적화",
      "Chart.js 3종 대시보드 (월별 추이 Bar, IPC 분포 Pie, 등록 상태 Doughnut)",
      "14단계 리팩토링 — Rate Limiting, Helmet, Zod 검증 등 7개 보안 강화",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Chart.js",
      "Express",
      "PostgreSQL",
      "Zod",
    ],
    github:
      "https://github.com/Douzone-Keycom-Internship-woohyun-2025",
    demo: "https://frontend-techlens.vercel.app/login",
    color: "#06b6d4",
  },
  {
    title: "PlayceV",
    subtitle: "카카오맵 기반 스포츠 중계 식당 추천",
    type: "팀 프로젝트 + 솔로 리팩토링",
    status: "Completed",
    description:
      "프로그래머스 데브코스 6인 팀 프로젝트 → 15단계 · 61 PR 솔로 리팩토링. FE 코드 52% 직접 작성.",
    highlights: [
      "번들 최적화: 메인 510→295KB(−42%), Modal 311→31KB(−90%)",
      "137개 테스트 (Vitest 109 + Playwright 28) + GitHub Actions CI",
      "React Query 도입으로 서버 상태 분리 + memo/useMemo/useCallback 최적화",
      "ErrorBoundary + Skeleton UI + Web Vitals 모니터링 구축",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Tailwind",
      "Vitest",
    ],
    github: "https://github.com/neverleaveualong/PlayceV",
    demo: "https://playce-app.vercel.app",
    color: "#10b981",
  },
];

export const education = {
  university: {
    name: "강원대학교 (춘천)",
    major: "컴퓨터공학과 (주전공)",
    minor: "정밀의료융합 (부전공)",
    period: "2021.03 — 2026.02",
    status: "졸업",
  },
  certifications: [
    { name: "정보처리기사", org: "한국산업인력공단" },
    { name: "빅데이터분석기사", org: "한국산업인력공단" },
    { name: "SQLD", org: "데이터베이스진흥원" },
    { name: "ADsP", org: "데이터베이스진흥원" },
    { name: "DAsP", org: "데이터베이스진흥원" },
    { name: "TOEIC 860", org: "ETS" },
  ],
  activities: [
    {
      name: "AWS Solutions Architect Associate 과정",
      desc: "클라우드 아키텍처 설계 심화",
      period: "2025.11",
    },
    {
      name: "프로그래머스 데브코스 6기",
      desc: "실무형 풀스택 프로젝트 + 팀 협업",
      period: "2025.01 — 2025.07",
    },
    {
      name: "University of Waikato 어학연수",
      desc: "글로벌 커뮤니케이션 역량 강화",
      period: "2024.07",
    },
    {
      name: "Cloud Security (QueryPie)",
      desc: "클라우드 보안 및 접근 제어",
      period: "2024.08",
    },
    {
      name: "Naver Cloud Associate 교육",
      desc: "클라우드 서비스 아키텍처 기초",
      period: "2023.12",
    },
  ],
};
