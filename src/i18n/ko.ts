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
    badge: "입사 예정",
    name: "심우현 (Sim Woohyun)",
    title: "FullStack SW Developer",
    tagline: "시스템의 병목을 찾아 성능을 개선하고, 비즈니스 문제를 기술로 해결합니다",
    description:
      "단순한 기능 구현을 넘어 시스템의 성능 한계를 돌파하고 사용자 경험을 최적화하는 데 집중합니다. SSE 스트리밍으로 RAG 검색 Latency를 80% 단축하고, 프론트엔드 아키텍처 재설계로 초기 번들 크기를 42% 개선한 경험이 있습니다. 최근에는 자연어 분석 기반의 멀티 에이전트 시스템과 업무 자동화 워크플로우를 통해 실질적인 AX(AI 전환)를 주도하고 있습니다.",
    descriptionBullets: [
      "고객사가 필요로 하는 서비스를 주도적으로 기획하고, 기술력으로 해결해 온 경험이 두 번 있습니다.",
      "도메인의 문제를 먼저 파악한 뒤 React 프론트엔드부터 API·데이터 흐름까지 풀스택으로 연결합니다.",
      "AI Agent를 활용한 AX 프로젝트와 자동화 워크플로우까지 직접 설계하고 구현할 수 있습니다.",
    ],
    cta: "프로젝트 보기",
    quickLinksLabel: "주요 프로젝트 바로가기",
    email: "이메일",
    typingTexts: [
      "시스템 병목을 찾아 성능을 개선합니다",
      "SSE 스트리밍으로 UX를 극대화합니다",
      "멀티 에이전트 기반 AX를 주도합니다",
      "테스트 자동화로 개발 생산성을 높입니다",
    ],
  },
  highlights: [
    "Zustand + React Query로 서버 상태와 클라이언트 상태를 분리해 이해하기 쉬운 데이터 흐름을 설계했습니다.",
    "계층형 아키텍처를 바탕으로 백엔드 API와 데이터 접근 구조를 직접 구축할 수 있습니다.",
    "LangGraph 기반 멀티 에이전트 프로젝트를 통해 특허 분석 AX 역량을 쌓았습니다.",
    "AI를 적극 활용해 반복 업무를 자동화하는 개발 워크플로우를 도입할 수 있습니다.",
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
    overviewLabel: "개요",
    roleLabel: "역할",
    achievementLabel: "성과",
    items: [
      {
        company: "하이퍼스타",
        role: "B2B SaaS 개발·품질 개선",
        period: "2025.12 — 2026.03",
        type: "인턴",
        description:
          "KAIST Global TIPS 선정 AI 인플루언서 마케팅 B2B SaaS 스타트업에서 CES2026 출시 전 서비스 개발 및 QA 자동화 파이프라인 구축을 담당했습니다.",
        highlights: [
          "RAG 검색 기능의 연동 누락을 확인하여 직접 백엔드 연동 및 React Hook으로 추상화 구현",
          "Claude Actions 기반 자동화 워크플로우 POC 설계 및 도입으로 수동 QA 병목 획기적 개선",
          "React/TypeScript 기반 시스템 구축 및 25+ REST API 엔드포인트 연동 안정성 확보",
          "DB Cascade 설정 오류 등 시스템 설계 결함을 사전 발견하여 수정 제안 및 안정성 기여",
        ],
      },
      {
        company: "더존ICT그룹 / 키컴",
        role: "특허 분석 웹 솔루션 개발",
        period: "2025.10 — 2025.11",
        type: "인턴",
        description:
          "개발본부 인턴십에서 대량의 특허 데이터를 분석하는 B2B 인텔리전스 솔루션 TechLens를 기획·개발했으며, 기업용 보안 및 안정성 기준 확립에 기여했습니다.",
        highlights: [
          "외부 API(KIPRIS) 과부하 방지를 위해 Concurrency 제어 기반 배치 스로틀링 직접 구현",
          "Raw SQL 파라미터 바인딩을 적용하여 ORM N+1 문제 회피 및 대규모 집계 쿼리 최적화",
          "Axios Request Queueing을 통한 JWT 갱신 시 Race Condition 차단 및 인증 안정성 확보",
          "React Query와 Zustand의 역할 분리로 대시보드 리렌더링 최적화 및 17개 API 안정적 연동",
        ],
      },
      {
        company: "더존ICT그룹 / 키컴",
        role: "B2B · B2G 웹 솔루션 개발 및 관리",
        period: "2026.08 — 현재 (근무 예정)",
        type: "정규직",
        description:
          "기업과 공공기관이 사용하는 웹 솔루션의 개발과 운영을 담당할 예정입니다. 입사 후 담당 서비스와 업무 범위가 확정되면 실제 성과를 중심으로 업데이트합니다.",
        highlights: [
          "B2B·B2G 웹 솔루션 개발 및 서비스 운영 지원",
          "이해관계자 요구를 기술 과제로 구체화하고 협업 기준을 문서화할 예정",
          "실제 담당 업무와 성과는 근무 시작 후 검증 가능한 내용으로 기록",
        ],
      },
    ],
  },
  experience: {
    label: "Experience Plus",
    title: "교육 · 운영 경험",
    overviewLabel: "개요",
    roleLabel: "역할",
    achievementLabel: "성과",
    items: [
      {
        title: "SK AX AI Leader Academy (SKALA) 4기",
        role: "AI·데이터·풀스택 실무 교육",
        period: "2026.07 — 2026.08",
        type: "교육",
        description:
          "SK AX AI 인재 양성 과정에서 소프트웨어 개발과 데이터·생성형 AI를 연결하는 실무 중심 교육을 이수하고 있습니다.",
        highlights: [
          "Git과 HTML·CSS·JavaScript 기반 웹 개발 기초 학습",
          "Python을 활용한 데이터 분석과 기초통계 실습",
          "프롬프트·컨텍스트 설계 및 LLM·Transformer 아키텍처 학습",
          "Java·Spring Boot REST API부터 MSA·sLLM까지 이어지는 실무 커리큘럼 이수 중",
        ],
      },
      {
        title: "프로그래머스 데브코스 6기",
        role: "웹 풀 사이클 개발 과정 (TypeScript)",
        period: "2025.01 — 2025.07",
        type: "교육",
        description:
          "웹 풀 사이클 과정에서 팀 프로젝트를 수행했으며, 종료 후 시스템 한계를 극복하기 위해 61개의 PR을 통한 단독 아키텍처 고도화를 완수했습니다.",
        highlights: [
          "스포츠 중계 식당 검색 서비스 Playce의 프론트엔드 메인 개발 및 66% 커밋 기여",
          "Vite manualChunks 및 lazy() 도입으로 초기 번들 크기 42% 감소 및 로딩 속도 최적화",
          "Zustand와 TanStack Query의 책임 분리를 통한 지도 UI 리렌더링 병목 해결",
          "ErrorBoundary를 통한 부분 크래시 격리 및 Playwright 테스트 자동화 인프라 구축",
        ],
      },
      {
        title: "강원대 교양교육원",
        role: "System Administrator",
        period: "2023.08 — 2025.01",
        type: "근무",
        description:
          "교내 전산 실습 환경 운영을 지원하며 서버·네트워크 장애 대응과 사용자 지원 경험을 쌓았습니다.",
        highlights: [
          "전산실습실 서버와 네트워크 장비 운영 지원 및 장애 1차 복구",
          "학생·교직원 사용 환경에 맞춘 기술 지원을 통한 안정적인 실습 환경 유지",
          "운영 업무를 통해 시스템 안정성과 사용자 관점의 중요성 체득",
        ],
      },
    ],
  },
  projects: {
    label: "Selected Works",
    title: "프로젝트",
    oneLinerLabel: "개요",
    achievementsLabel: "주요 성과",
    roleLabel: "기대효과",
    overviewLabel: "개요",
    currentStateLabel: "현황",
    problemLabel: "문제 정의",
    solutionLabel: "해결방안",
    impactLabel: "기대효과",
    items: [
      {
        title: "TechLens",
        subtitle: "특허 빅데이터 분석 대시보드",
        type: "B2B 솔루션",
        status: "Completed",
        description:
          "기업이 경쟁사의 기술 흐름을 파악하고 다음 사업 방향을 검토할 수 있도록 특허 데이터를 검색·분석하는 B2B 플랫폼입니다.",
        achievements: [
          "특허 정보와 기업별 기술 동향을 한 화면에서 비교할 수 있는 분석 환경을 구축했습니다.",
          "데이터가 외부 API와 여러 분석 화면에 나뉘어 있어 빠른 의사결정으로 연결하기 어려웠습니다.",
          "기획부터 React 화면, 계층형 백엔드, DB, 외부 특허 API 연동까지 하나의 흐름으로 구현했습니다.",
        ],
        role: [
          "기업 사용자가 특허 검색 결과를 기술 비교와 시장 검토에 활용할 수 있는 기반을 마련했습니다.",
          "이후 자연어 검색과 AI Agent 분석으로 확장되는 TechDocs의 출발점이 되었습니다.",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "멀티 에이전트 기반 특허 분석 플랫폼",
        type: "AI Transformation",
        status: "In Progress",
        description:
          "특허 전문 검색 경험이 없어도 자연어로 질문하면 관련 특허와 근거를 찾고, AI Agent가 분석을 돕는 AX 플랫폼입니다.",
        achievements: [
          "기존의 조건·목록 중심 검색을 자연어 질문 중심의 탐색 경험으로 확장했습니다.",
          "특허 문서의 전문 용어와 방대한 결과 때문에 필요한 근거를 찾고 이해하는 데 시간이 걸렸습니다.",
          "LangGraph 멀티 에이전트와 자연어 검색 흐름을 연결하고, 답변에 근거 문서를 함께 제공하도록 설계했습니다.",
        ],
        role: [
          "검색과 분석에 걸리는 시간을 줄이고, 특허 검토를 비전문가도 시작할 수 있는 업무 흐름으로 바꿉니다.",
          "반복적인 자료 확인 업무를 AI Agent가 보조해 담당자는 판단과 의사결정에 집중할 수 있습니다.",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "스포츠 중계 식당 탐색 서비스",
        type: "Web Optimization",
        status: "Completed",
        description:
          "사용자가 원하는 스포츠 중계 식당을 지도에서 빠르게 찾고 방문까지 이어갈 수 있도록 만든 위치 기반 서비스입니다.",
        achievements: [
          "지도·검색·상세 정보·즐겨찾기를 한 흐름으로 연결해 매장 탐색 경험을 제공했습니다.",
          "지도 화면의 복잡한 상태와 무거운 초기 로딩으로 사용자가 정보를 확인하기까지 기다림이 발생했습니다.",
          "Zustand와 React Query로 상태를 나누고 코드 분할과 테스트 자동화를 적용했습니다.",
        ],
        role: [
          "초기 화면 로딩과 지도 상호작용을 개선해 사용자가 매장을 더 빠르게 비교할 수 있게 했습니다.",
          "상태와 기능의 책임이 분리되어 이후 기능 추가와 장애 원인 파악이 쉬운 구조를 만들었습니다.",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "글로벌 AI 인플루언서 마케팅 SaaS",
        type: "CES2026 KAIST 출시작",
        status: "Production",
        description:
          "기업이 글로벌 인플루언서를 찾고 캠페인을 관리할 수 있도록 돕는 B2B SaaS의 출시 준비와 품질 안정화에 참여했습니다.",
        achievements: [
          "출시 전 주요 화면과 데이터 흐름을 점검해 서비스가 실제 고객에게 전달될 수 있는 상태를 확인했습니다.",
          "수동 점검과 API·RAG 연동 이슈가 반복되어 출시 전 검증에 시간이 많이 필요했습니다.",
          "QA에서 프론트엔드·백엔드 연동까지 역할을 확장하고 AI 기반 자동화 워크플로우를 제안했습니다.",
        ],
        role: [
          "출시 준비 과정의 반복 검증을 줄이고 문제 재현과 공유를 빠르게 하는 기반을 만들었습니다.",
          "고객이 사용하는 화면과 내부 데이터 흐름을 함께 이해하며 실무형 풀스택 역량을 확장했습니다.",
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
      { name: "SKALA 4기", desc: "AI·데이터·풀스택 실무 집중 과정", period: "2026.07 — 2026.08" },
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
        description: "4학기 동안 약 650만원 장학금 수혜",
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
