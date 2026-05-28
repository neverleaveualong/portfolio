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
    title: "Front-End Engineer & AI Agent Engineer",
    tagline: "사용자 화면과 AI 검색 흐름을 함께 설계하는 개발자",
    description:
      "React 기반 사용자 화면을 설계하고, FastAPI와 RAG 파이프라인으로 AI 검색 서비스를 구현해왔습니다. AI 스타트업과 ICT 기업 인턴십에서 서비스 개발·QA·문서화·배포 흐름을 경험했고, 프로젝트에서는 문제를 재현하고 구조를 개선하는 방식으로 완성도를 높여왔습니다.",
    cta: "프로젝트 보기",
    email: "이메일",
    typingTexts: [
      "React 프론트엔드에서 FastAPI 백엔드까지 다룹니다",
      "RAG 기반 AI 검색 흐름을 설계합니다",
      "QA와 문서화로 협업 품질을 높입니다",
      "배포까지 고려해 서비스를 완성합니다",
    ],
  },
  highlights: [
    "CES2026 전 AI SaaS 개발·QA",
    "ICT 기업 인턴십 풀스택 개발",
    "React · FastAPI · RAG 검색",
    "재현 · 문서화 · 배포 고려",
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
        role: "Frontend / Backend / QA Intern",
        period: "2025.12 — 2026.03",
        type: "인턴",
        description:
          "KAIST Global TIPS 선정 AI 인플루언서 마케팅 B2B SaaS 스타트업에서 CES2026 출시 전 서비스 개발·QA 사이클을 경험했습니다.",
        highlights: [
          "CES2026 대비 랜딩페이지 도입 및 서비스 화면 개선 참여",
          "QA 체크리스트 작성, 오류 재현 경로·기대 결과 문서화",
          "RAG 기능 연결 이슈와 DB cascade 문제를 확인하고 원인 정리",
          "GitHub Actions·Claude Actions·Playwright 기반 검증 자동화 흐름 경험",
        ],
      },
      {
        company: "더존ICT그룹 / 키컴",
        role: "SW Developer Intern",
        period: "2025.10 — 2025.11",
        type: "인턴",
        description:
          "개발본부 인턴십에서 중소·중견기업의 경쟁사 특허 흐름 파악을 돕는 TechLens를 기획·개발·배포했습니다.",
        highlights: [
          "React, Express, PostgreSQL, KIPRIS API 기반 풀스택 단독 개발",
          "특허 검색·분석·즐겨찾기·메모·기업 비교 기능 구현",
          "KIPRIS 월 호출 제한을 고려한 캐싱과 호출 조건 제어 적용",
          "기업 인턴십 환경에서 보안 요구와 실무 멘토링을 반영해 개발",
        ],
      },
    ],
  },
  experience: {
    label: "Experience Plus",
    title: "교육 · 운영 경험",
    items: [
      {
        title: "프로그래머스 데브코스 6기",
        role: "웹 풀 사이클 개발 과정",
        period: "2025.01 — 2025.07",
        type: "교육",
        description:
          "TypeScript 기반 웹 풀 사이클 과정에서 REST API 설계, React 프론트엔드 개발, 팀 협업, 서비스 배포를 경험했습니다.",
        highlights: [
          "지도 기반 스포츠 중계 식당 검색 서비스 Playce 팀 프로젝트 수행",
          "프론트엔드 개발자로 React 화면 구현과 API 연동 담당",
          "백엔드 팀원과 REST API 스펙을 맞추며 협업",
          "프로젝트 종료 후 상태 관리와 구조 개선 필요성을 리팩토링으로 학습",
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
          "전산실습실 서버와 네트워크 장비 운영 지원",
          "실습 환경 장애 발생 시 1차 확인과 복구 지원",
          "학생·교직원 사용 환경에 맞춘 기술 지원 수행",
          "운영 업무를 통해 안정성과 사용자 관점의 중요성 체득",
        ],
      },
    ],
  },
  projects: {
    label: "Selected Works",
    title: "프로젝트",
    oneLinerLabel: "한 줄 소개",
    achievementsLabel: "핵심 성과",
    roleLabel: "내 역할",
    items: [
      {
        title: "TechLens",
        subtitle: "KIPRIS 특허 분석 · 시각화 대시보드",
        type: "더존비즈온 인턴십",
        status: "Completed",
        description:
          "B2B 사용자가 경쟁사의 기술 흐름을 빠르게 파악할 수 있도록, 특허 공공데이터를 검색·분석 대시보드로 제공한 풀스택 웹 서비스입니다.",
        achievements: [
          "검색, 상세조회, 즐겨찾기, 기업별 분석 등 17개 REST API 구현",
          "KIPRIS API 응답을 PostgreSQL 저장·조회 흐름으로 연결",
          "IPC 분포, 월별 출원 추이, 기술 분야 분석 대시보드 구현",
          "JWT 인증, Refresh Token Rotation, 입력 검증 등 보안 흐름 반영",
        ],
        role: [
          "서비스 주제 기획부터 프론트엔드, 백엔드, DB까지 단독 개발",
          "외부 API 응답 구조를 분석해 검색 조건과 저장 항목 설계",
          "인턴십 종료 후 14단계 리팩토링으로 유지보수성과 안정성 개선",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "RAG 기반 특허 문서 AI 검색 플랫폼",
        type: "개인 프로젝트",
        status: "In Progress",
        description:
          "TechLens에서 쌓은 특허 검색·분석 구조를 RAG 기반 AI 검색으로 확장해, 사용자가 자연어 질문으로 관련 특허와 근거 문서를 찾도록 만든 서비스입니다.",
        achievements: [
          "특허 문서 청킹·임베딩·벡터DB 저장 파이프라인 구현",
          "BM25 + Vector Search + RRF 순위 통합 구조 설계",
          "질문 기반 검색 결과를 근거 문서와 AI 답변으로 제공",
          "RAGAS 기반 평가 흐름으로 검색·답변 품질 점검",
        ],
        role: [
          "개인 프로젝트로 기획, 아키텍처, 프론트엔드, 백엔드 전체 구현",
          "검색 실패 원인을 청킹, 검색 방식, 답변 근거 단위로 분석",
          "특허 검색을 단순 목록 조회에서 질문 기반 정보 탐색으로 전환",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "카카오맵 기반 스포츠 중계 식당 추천",
        type: "팀 + 솔로 리팩토링",
        status: "Completed",
        description:
          "스포츠 중계 식당 정보를 지도, 종목, 리그, 날짜 기준으로 탐색할 수 있게 만든 위치 기반 서비스이며, 팀 프로젝트 이후 성능·테스트·구조를 단독 개선했습니다.",
        achievements: [
          "프론트엔드 전체 커밋 66% 기여, 지도·상세·즐겨찾기·마이페이지 구현",
          "팀 프로젝트 종료 후 15단계 61PR 단독 리팩토링 수행",
          "코드 스플리팅으로 초기 번들 크기 42% 감소",
          "Vitest·Playwright 기반 100개 이상 테스트와 GitHub Actions CI 구축",
        ],
        role: [
          "Kakao Maps 기반 마커, 위치 검색, 식당 상세 화면 개발",
          "React Query와 Zustand로 서버 상태와 UI 상태 분리",
          "죽은 코드 제거, 도메인 구조 재편, 에러 복구 흐름 개선",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "KAIST Global TIPS 선정 · AI 인플루언서 마케팅 B2B SaaS",
        type: "실무 · 프로덕션",
        status: "Production",
        description:
          "CES2026 공개를 앞둔 AI 인플루언서 마케팅 B2B SaaS에서 화면, API, 데이터 흐름, RAG 응답 결과를 점검하며 시연 안정화에 참여했습니다.",
        achievements: [
          "주요 화면 흐름과 예외 케이스 QA 체크리스트화",
          "API/RAG 연동 이슈 재현 및 수정 방향 문서화",
          "GitHub Actions·Claude Actions 기반 QA 자동화 개선 참여",
          "CES2026 대비 랜딩페이지와 SEO 개선 참여",
        ],
        role: [
          "QA에서 시작해 프론트엔드 수정과 오류 디버깅까지 역할 확장",
          "화면 표시, 서버 응답, 데이터 처리 과정을 나누어 원인 추적",
          "수정 내용과 남은 이슈를 문서화해 팀 공유 기준 마련",
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
