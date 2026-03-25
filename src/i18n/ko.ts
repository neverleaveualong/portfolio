const ko = {
  nav: {
    home: "소개",
    career: "경력",
    projects: "프로젝트",
    skills: "스킬",
    education: "학력",
    contact: "연락",
  },
  hero: {
    badge: "구직 중",
    name: "심우현",
    title: "Frontend-focused Full-stack Developer",
    tagline: "Claude Code를 무기로, 시니어처럼 사고하는 주니어",
    description:
      "\"왜 이렇게 구현해야 하지?\" \"이 코드의 문제점은 뭐지?\" — 항상 이유와 근거를 먼저 고민합니다. Claude Code · Codex를 적극 활용해 반복 작업을 자동화하고, 사람은 설계와 의사결정에 집중합니다. B2B SaaS, 특허 분석, RAG 파이프라인까지 — 비즈니스 가치를 만드는 개발을 합니다.",
    cta: "프로젝트 보기",
    email: "이메일",
    typingTexts: [
      "왜? 를 먼저 묻고, 코드를 작성합니다",
      "Claude Code로 생산성을 극대화합니다",
      "체계적으로 리팩토링합니다",
      "RAG 파이프라인을 설계합니다",
    ],
  },
  highlights: [
    "Claude Code · Codex 개발 자동화",
    "\"왜?\" 부터 시작하는 설계",
    "29단계 체계적 리팩토링",
    "RAG 파이프라인 설계·구현",
  ],
  stats: [
    { label: "실무급 프로젝트", value: "4+", unit: "개" },
    { label: "프로덕션 React 컴포넌트", value: "97", unit: "개" },
    { label: "체계적 리팩토링 단계", value: "29", unit: "단계" },
    { label: "테스트 커버리지", value: "189", unit: "건" },
  ],
  career: {
    label: "Experience",
    title: "경력",
    items: [
      {
        company: "하이퍼스타 (KAIST 스타트업)",
        role: "Full-stack Developer",
        period: "2025.12 — 현재",
        type: "정규직",
        description:
          "KAIST Global TIPS 선정 AI 인플루언서 마케팅 B2B SaaS. QA → FE 리팩토링 → BE 디버깅 → Terraform 인프라 분리까지 빠르게 역할 확장. 매일 최소 밤 10시까지 몰입하며 짧은 시간 내 성장.",
        highlights: [
          "QA → FE 리팩토링 → BE 디버깅 → Terraform 인프라 분리까지 역할 확장",
          "SaaS 방문 유저 대상 랜딩페이지 기획 · 제작 · 배포",
          "RAG 검색 기능 React Query 프론트엔드 연동",
          "Playwright 기반 E2E 테스트 자동화 도입",
          "Claude Code 활용 기능 개발 자동화 PoC 구축",
          "Instagram 데이터 크롤링 파이프라인 개발",
          "AWS EC2/S3 환경 분리(Demo/Dev) + Vercel 자동 배포",
        ],
      },
      {
        company: "더존비즈온 (키컴 개발본부)",
        role: "SW Developer Intern",
        period: "2025.10 — 2025.12",
        type: "인턴",
        description:
          "특허 인텔리전스 B2B 웹앱 'TechLens' 풀스택 단독 개발. 선임연구원 멘토링 하에 4주 262 커밋, 51 PR.",
        highlights: [
          "17개 REST API 설계·구현 (인증, 특허 검색, 프리셋, 즐겨찾기, 분석)",
          "JWT 이중 토큰(Access+Refresh) 인증 + 서버 사이드 토큰 폐기",
          "KIPRIS API 배치 처리 (5건/200ms 스로틀, Promise.allSettled 에러 내성)",
          "14단계 체계적 리팩토링 — TanStack Query·Zod·code splitting·보안 7건",
          "Vitest 52건 + MSW 테스트 인프라 구축 (커스텀 훅 단위 테스트)",
          "2026 B2B 랜딩페이지 — 타이핑 애니메이션·탭 switcher·Playwright 실사 스크린샷",
          "Web Vitals: Performance 98~100 · TBT ≤ 50ms · CLS 0 · SEO 82→92",
        ],
      },
      {
        company: "Programmers DevCourse 6th",
        role: "Full-stack Project",
        period: "2025.01 — 2025.07",
        type: "교육",
        description:
          "실무형 풀스택 과정. 팀 프로젝트 'Playce' FE 메인 개발자 (52% 코드 기여) + 이후 15단계 솔로 리팩토링.",
        highlights: [
          "6인 팀 프로젝트 FE 메인 개발 — 97/125 파일(52%) 직접 작성",
          "Kakao Maps SDK + Geolocation API 기반 위치 인터랙션",
          "졸업 후 15단계 · 61 PR 솔로 리팩토링 수행",
          "메인 번들 510KB → 295KB (−42%) 최적화",
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
        ],
      },
    ],
  },
  projects: {
    label: "Selected Works",
    title: "프로젝트",
    items: [
      {
        title: "TechLens",
        subtitle: "KIPRIS 특허 분석 · 시각화 대시보드",
        type: "더존비즈온 인턴십",
        status: "Completed",
        description:
          "KIPRIS 공공데이터 기반 특허 검색·분석·시각화 B2B 웹앱. 8개 페이지 풀스택 단독 개발 + 14단계 리팩토링 + 랜딩페이지.",
        highlights: [
          "JWT 이중 토큰 인증 + KIPRIS API 배치 처리 (5건/200ms, Promise.allSettled)",
          "14단계 리팩토링 — TanStack Query 도입, code splitting, 보안 7건 강화",
          "Vitest 52건 + MSW mock 서버 테스트 인프라 구축",
          "2026 B2B 랜딩페이지 — 인터랙티브 히어로 (타이핑 애니메이션 + 탭 switcher)",
          "Web Vitals 리팩토링 전후: Performance 100 유지 · TBT ≤50ms · SEO 82→92",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "RAG 기반 특허 문서 AI 검색 플랫폼",
        type: "개인 프로젝트",
        status: "In Progress",
        description:
          "KIPRIS 특허 데이터를 벡터 DB에 임베딩 후, 로컬 LLM과 결합한 RAG 파이프라인. 운영비 $0 아키텍처.",
        highlights: [
          "RAG: KIPRIS → 청킹(500자) → 임베딩(384d) → Pinecone → LLM 답변",
          "할루시네이션 방지 프롬프트 + 출처 명시 강제 설계",
          "Ollama + HuggingFace 임베딩 → $0 운영, OpenAI/Azure 핫스왑 가능",
          "Docker 컨테이너화 + GitHub Actions CI 자동화",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "카카오맵 기반 스포츠 중계 식당 추천",
        type: "팀 + 솔로 리팩토링",
        status: "Completed",
        description:
          "데브코스 6인 팀 프로젝트 → 15단계 · 61 PR 솔로 리팩토링. FE 코드 52% 직접 작성.",
        highlights: [
          "번들 최적화: 메인 510→295KB(−42%), Modal 311→31KB(−90%)",
          "137개 테스트 (Vitest 109 + Playwright 28) + GitHub Actions CI",
          "React Query 도입 서버 상태 분리 + memo/useMemo/useCallback 최적화",
          "ErrorBoundary + Skeleton UI + Web Vitals 모니터링 구축",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "KAIST Global TIPS 선정 · AI 인플루언서 마케팅 B2B SaaS",
        type: "실무 · 프로덕션",
        status: "Production",
        description:
          "KAIST 스타트업, 500M+ 인플루언서 DB 기반 AI 크리에이터 매칭 플랫폼. SaaS 랜딩 · RAG 연동 · 테스트 자동화 · 인프라.",
        highlights: [
          "SaaS 방문 유저 대상 랜딩페이지 기획·제작·배포",
          "Playwright E2E 테스트 자동화 + Claude Code 기능 개발 PoC",
          "Instagram 크롤링 파이프라인 개발",
          "Terraform 인프라 분리 + AWS EC2/S3 멀티 환경 구성",
        ],
      },
    ],
  },
  skills: {
    label: "Tech Stack",
    title: "기술 스택",
  },
  education: {
    label: "Background",
    title: "학력 · 자격 · 활동",
    universityLabel: "학력",
    certificationsLabel: "자격증",
    certCount: "개 보유",
    activitiesLabel: "교육 · 활동",
    majorLabel: "주전공",
    minorLabel: "부전공",
    universityName: "강원대학교 (춘천)",
    major: "컴퓨터공학과",
    minor: "정밀의료융합",
    period: "2021.03 — 2026.02",
    status: "졸업",
    certifications: [
      { name: "정보처리기사", org: "한국산업인력공단" },
      { name: "빅데이터분석기사", org: "한국산업인력공단" },
      { name: "SQLD", org: "데이터베이스진흥원" },
      { name: "ADsP", org: "데이터베이스진흥원" },
      { name: "DAsP", org: "데이터베이스진흥원" },
      { name: "TOEIC 860", org: "ETS" },
    ],
    activities: [
      { name: "AWS Solutions Architect Associate 과정", desc: "클라우드 아키텍처 설계 심화", period: "2025.11" },
      { name: "프로그래머스 데브코스 6기", desc: "실무형 풀스택 프로젝트 + 팀 협업", period: "2025.01 — 2025.07" },
      { name: "University of Waikato 어학연수", desc: "글로벌 커뮤니케이션 역량 강화", period: "2024.07" },
      { name: "Cloud Security (QueryPie)", desc: "클라우드 보안 및 접근 제어", period: "2024.08" },
      { name: "Naver Cloud Associate 교육", desc: "클라우드 서비스 아키텍처 기초", period: "2023.12" },
    ],
  },
  achievements: {
    label: "Achievements",
    title: "특이 사항",
    items: [
      {
        icon: "scholarship",
        title: "강원 LRS 공유대학 혁신인재 1기",
        description: "6학기간 약 1,200만원 장학금 수령",
      },
      {
        icon: "prize",
        title: "강원도 특화 인재 사업 장학금",
        description: "강원도가 인정한 인재 — 누적 1,000만원 이상 수령",
      },
      {
        icon: "global",
        title: "뉴질랜드 Waikato University 어학연수",
        description: "한국장학재단 전액 지원 (800만원+) · 4주 과정",
      },
      {
        icon: "cloud",
        title: "Naver Cloud Platform (NCP)",
        description: "NCA 교육 이수 — NCP 활용에 긍정적",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "함께 일할 기회를 찾고 있습니다",
    description: "새로운 도전과 성장의 기회를 환영합니다.",
    sub: "커피챗이나 가벼운 대화도 좋습니다.",
    emailBtn: "이메일 보내기",
    copied: "복사됨!",
  },
  footer: {
    built: "Built with Next.js + Tailwind",
  },
};

export default ko;

type DeepString<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepString<U>[]
    : T extends object
      ? { [K in keyof T]: DeepString<T[K]> }
      : T;

export type Translations = DeepString<typeof ko>;
