const ko = {
  nav: {
    home: "소개",
    career: "경력",
    experience: "경험",
    projects: "프로젝트",
    skills: "스킬",
    education: "학력",
    contact: "연락",
  },
  hero: {
    badge: "구직 중",
    name: "심우현",
    title: "Software Engineer (Frontend & AI Agent)",
    tagline: "시스템의 병목을 찾아 성능을 개선하고, 비즈니스 문제를 기술로 해결합니다",
    description:
      "단순한 기능 구현을 넘어 시스템의 성능 한계를 돌파하고 사용자 경험을 최적화하는 데 집중합니다. SSE 스트리밍으로 RAG 검색 Latency를 80% 단축하고, 프론트엔드 아키텍처 재설계로 초기 번들 크기를 42% 개선한 경험이 있습니다. 최근에는 자연어 분석 기반의 멀티 에이전트 시스템과 업무 자동화 워크플로우를 통해 실질적인 AX(AI 전환)를 주도하고 있습니다.",
    cta: "프로젝트 보기",
    email: "이메일",
    typingTexts: [
      "시스템 병목을 찾아 성능을 개선합니다",
      "SSE 스트리밍으로 UX를 극대화합니다",
      "멀티 에이전트 기반 AX를 주도합니다",
      "테스트 자동화로 개발 생산성을 높입니다",
    ],
  },
  highlights: [
    "SSE 도입 체감 성능 80% 개선",
    "61개 PR로 단독 아키텍처 고도화",
    "멀티 에이전트 특허 분석 설계",
    "Claude Actions 업무 자동화 주도",
  ],
  stats: [
    { label: "인턴십", value: "2", unit: "회" },
    { label: "서비스 개발", value: "4", unit: "개" },
    { label: "리팩토링/고도화", value: "2", unit: "건" },
    { label: "배포 서비스", value: "3", unit: "개" },
  ],
  career: {
    label: "Experience",
    title: "경력",
    items: [
      {
        company: "하이퍼스타",
        role: "Frontend Engineer Intern",
        period: "2025.12 — 2026.03",
        type: "인턴",
        description:
          "AI 인플루언서 마케팅 B2B SaaS의 CES2026 출시작 개발에 참여하여, RAG 엔진 연동 및 QA 자동화 파이프라인 구축을 주도했습니다.",
        highlights: [
          "RAG 검색 기능의 연동 누락을 확인하여 직접 백엔드 연동 및 React Hook으로 추상화 구현",
          "Claude Actions 기반 자동화 워크플로우 POC 설계 및 도입으로 수동 QA 병목 획기적 개선",
          "React/TypeScript 기반 시스템 구축 및 25+ REST API 엔드포인트 연동 안정성 확보",
          "DB Cascade 설정 오류 등 시스템 설계 결함을 사전 발견하여 수정 제안 및 안정성 기여",
        ],
      },
      {
        company: "더존ICT그룹 / 키컴",
        role: "SW Developer Intern",
        period: "2025.10 — 2025.11",
        type: "인턴",
        description:
          "대량의 특허 데이터를 분석하는 B2B 인텔리전스 솔루션 TechLens를 기획·개발했으며, 기업용 보안 및 안정성 기준 확립에 기여했습니다.",
        highlights: [
          "외부 API(KIPRIS) 과부하 방지를 위해 Concurrency 제어 기반 배치 스로틀링 직접 구현",
          "Raw SQL 파라미터 바인딩을 적용하여 ORM N+1 문제 회피 및 대규모 집계 쿼리 최적화",
          "Axios Request Queueing을 통한 JWT 갱신 시 Race Condition 차단 및 인증 안정성 확보",
          "React Query와 Zustand의 역할 분리로 대시보드 리렌더링 최적화 및 17개 API 안정적 연동",
        ],
      },
    ],
  },
  experience: {
    label: "Experience Plus",
    title: "주요 기술 기여",
    items: [
      {
        title: "PlayceV 아키텍처 고도화",
        role: "Frontend Architecture Leader",
        period: "2025.08 — 2026.03",
        type: "단독 리팩토링",
        description:
          "팀 프로젝트 종료 후 시스템의 한계를 스스로 정의하고, 61개의 PR을 통해 프론트엔드 아키텍처를 단독으로 전면 재설계했습니다.",
        highlights: [
          "Vite manualChunks 및 lazy() 도입으로 초기 번들 크기 42% 감소 및 로딩 속도 최적화",
          "ErrorBoundary를 통한 부분 크래시 격리 및 Axios 401 자동 복구 흐름 구축",
          "Playwright와 Vitest를 이용한 테스트 자동화 인프라 구축으로 코드 안정성 확보",
          "컴포넌트 책임 분리 및 도메인 중심 폴더 구조 재편으로 유지보수 비용 대폭 절감",
        ],
      },
      {
        title: "RAG ➜ 멀티 에이전트 AX 전환",
        role: "AI Application Architect",
        period: "2026.03 — 현재",
        type: "개인 프로젝트",
        description:
          "단순 검색을 넘어 복잡한 법적 분석을 수행하는 지능형 에이전트 시스템으로의 AX(AI Transformation) 전 과정을 주도했습니다.",
        highlights: [
          "독립항 추출 및 구성요소 분해를 수행하는 특화 에이전트 간 협업 워크플로우 설계",
          "RAGAS 기반 답변 품질 평가 지표(Faithfulness 0.81) 도입 및 피드백 개선 루프 구축",
          "FastAPI Async Generator를 이용한 NDJSON 형식의 실시간 스트리밍 인프라 구축",
          "특허 도메인 분석을 통한 800자 청킹 최적화로 문맥 유지 및 답변 신뢰도 향상",
        ],
      },
    ],
  },
  projects: {
    label: "Selected Works",
    title: "프로젝트",
    oneLinerLabel: "기술적 가치 (Why)",
    achievementsLabel: "기술적 해결 및 성과 (How)",
    roleLabel: "엔지니어링 임팩트",
    items: [
      {
        title: "TechLens",
        subtitle: "특허 빅데이터 분석 대시보드",
        type: "B2B 솔루션",
        status: "Completed",
        description:
          "B2B 기업이 경쟁사의 R&D 흐름을 파악할 수 있도록 대량의 특허 데이터를 구조화하여 제공하는 지능형 분석 플랫폼입니다.",
        achievements: [
          "Concurrency 제어 기반 배치 스로틀링 구현으로 외부 API 의존성 병목 해결",
          "Raw SQL 기반 집계 쿼리 최적화로 대규모 통계 데이터 처리 성능 확보",
          "Axios 인터셉터 내 Request Queueing을 통한 인증 동기화 Race Condition 차단",
        ],
        role: [
          "기획부터 백엔드, DB까지 전체 파이프라인 단독 설계 및 구현",
          "이후 TechDocs로 계승되어 AI 에이전트 기반 AX 전환의 핵심 기반이 됨",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "멀티 에이전트 기반 특허 분석 플랫폼",
        type: "AI Transformation",
        status: "In Progress",
        description:
          "어려운 특허 용어를 몰라도 자연어 질문만으로 관련 특허를 찾고, AI 에이전트가 침해 여부까지 심층 분석하는 AX 플랫폼입니다.",
        achievements: [
          "SSE(Server-Sent Events) 스트리밍 도입으로 체감 대기 시간 80% 단축 (23s → 3s)",
          "특화 에이전트 간 협업 워크플로우 설계를 통한 보고서 자동 생성 구현",
          "RAGAS 기반 품질 평가를 통한 답변 신뢰도(Faithfulness) 0.81 확보",
        ],
        role: [
          "RAG 엔진 구축부터 에이전트 오케스트레이션까지 전체 아키텍처 설계",
          "FastAPI astream을 이용한 실시간 답변 생성 파이프라인 단독 개발",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "스포츠 중계 식당 탐색 서비스",
        type: "Web Optimization",
        status: "Completed",
        description:
          "복잡한 지도 인터랙션과 실시간 데이터를 결합한 서비스로, 주도적인 리팩토링을 통해 웹 성능과 안정성을 극한으로 끌어올렸습니다.",
        achievements: [
          "모달 지연 로딩과 Vite 청크 분리로 초기 로딩 번들 크기 42% 감소",
          "Zustand와 TanStack Query의 책임 분리를 통한 지도 UI 리렌더링 최적화",
          "Playwright E2E 테스트 자동화 구축 및 GitHub Actions CI 파이프라인 완성",
        ],
        role: [
          "프론트엔드 메인 개발 및 종료 후 61개의 PR을 통한 단독 아키텍처 고도화",
          "ErrorBoundary 장애 격리 및 401 에러 자동 복구 로직 구현",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "글로벌 AI 인플루언서 마케팅 SaaS",
        type: "CES2026 KAIST 출시작",
        status: "Production",
        description:
          "기업이 최적의 글로벌 인플루언서를 AI로 찾고 캠페인을 관리하는 솔루션으로, CES2026 전시를 위한 기술 안정화에 기여했습니다.",
        achievements: [
          "Claude Actions 기반 자동화 워크플로우 설계로 수동 QA 병목 획기적 개선",
          "누락된 RAG 기능을 발견하여 직접 백엔드 연동 및 Custom Hook으로 구현",
          "Next.js SEO 최적화 및 메타 정보 이전으로 글로벌 서비스 인지 기반 마련",
        ],
        role: [
          "QA 보조에서 시작하여 성능 디버깅 및 프론트엔드 엔지니어로 역할 주도적 확장",
          "비동기 응답 처리 로직 최적화 및 25+ API 엔드포인트 연동 완성",
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
      { name: "TOEIC 785", org: "ETS" },
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
        title: "Cloud Infrastructure",
        description: "AWS SAA 과정 및 NCP 교육 이수 — 클라우드 운영 역량 보유",
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
