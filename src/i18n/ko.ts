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
    title: "AI & Full-Stack Developer",
    tagline: "프론트엔드에서 백엔드, RAG 기반 AI 기능까지 확장하는 개발자",
    description:
      "컴퓨터공학을 전공하며 React 프론트엔드, Express/FastAPI 백엔드, RAG 기반 AI 검색까지 개발 범위를 넓혀왔습니다. AI 스타트업과 더존ICT그룹 인턴십에서 서비스 개발·QA·문서화·배포 흐름을 경험했고, 프로젝트에서는 문제를 재현하고 구조를 개선하는 방식으로 완성도를 높여왔습니다.",
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
    "AI 스타트업 CES2026 출시 전 개발·QA 경험",
    "더존ICT그룹 / 키컴 인턴십 풀스택 개발",
    "React · FastAPI · RAG 기반 AI 검색",
    "문제 재현 · 문서화 · 배포까지 고려한 개발",
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
    items: [
      {
        title: "TechLens",
        subtitle: "KIPRIS 특허 분석 · 시각화 대시보드",
        type: "더존비즈온 인턴십",
        status: "Completed",
        description:
          "더존ICT그룹 인턴십에서 기획·개발·배포한 특허 인텔리전스 B2B 웹 애플리케이션입니다. 경쟁사의 특허 출원 흐름과 기술 분류를 날짜·IPC·등록 상태 기준으로 확인할 수 있도록 설계했습니다.",
        highlights: [
          "출원인명 기반 검색으로 기업별 특허 목록과 주요 기술 흐름 조회",
          "IPC 분포, 월별 출원 추이, 등록 상태를 차트로 시각화",
          "즐겨찾기와 메모 기능으로 관심 특허를 지속적으로 추적 가능하게 구현",
          "React + TypeScript 프론트엔드와 Express + PostgreSQL 백엔드 개발",
          "Zustand와 React Query를 활용해 사용자 상태와 서버 상태를 분리",
          "KIPRIS API 월 호출 제한을 경험하고 내부 DB 적재·주기 갱신 구조의 필요성 학습",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "RAG 기반 특허 문서 AI 검색 플랫폼",
        type: "개인 프로젝트",
        status: "In Progress",
        description:
          "TechLens의 조건 기반 특허 검색 한계를 자연어 질의 기반 AI 검색으로 고도화한 프로젝트입니다. 사용자가 아이디어나 알고 있는 특허 정보를 입력하면 관련 특허와 문서를 찾아 답변하도록 설계했습니다.",
        highlights: [
          "KIPRIS 특허 데이터 수집 후 LangChain 기반 RAG 파이프라인 구성",
          "특허 데이터 길이 특성을 분석해 800자 기준 청킹 전략 적용",
          "BM25 + Vector 검색과 RRF 결합으로 키워드·의미 기반 검색 보완",
          "FastAPI 백엔드와 Next.js 프론트엔드로 검색·답변 흐름 구현",
          "RAGAS와 사용자 피드백을 활용한 AI 답변 품질 확인 흐름 구축",
          "향후 AI Agent와 데이터 수집·갱신 파이프라인 고도화 계획 수립",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "카카오맵 기반 스포츠 중계 식당 추천",
        type: "팀 + 솔로 리팩토링",
        status: "Completed",
        description:
          "경기장에 가지 않아도 친구들과 식당에서 스포츠 중계를 즐기고 싶은 사용자를 위한 지도 기반 중계 식당 검색 서비스입니다. 데브코스 팀 프로젝트 이후 단독 리팩토링으로 구조를 개선했습니다.",
        highlights: [
          "Kakao Maps 기반 주변 스포츠 중계 식당 검색과 지도 인터랙션 구현",
          "종목·리그·날짜 필터로 오늘의 중계 일정을 위치 기반으로 확인",
          "React Query로 서버 상태를 관리하고 Zustand로 지도·검색 UI 상태 분리",
          "프론트엔드 개발자로 백엔드 팀과 API 스펙을 조율하며 협업",
          "팀 프로젝트 종료 후 구조·상태 관리·성능·테스트 중심 리팩토링 수행",
          "사장님 식당 관리와 중계 수정 플로우의 UX 개선 필요성을 후속 과제로 정리",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "KAIST Global TIPS 선정 · AI 인플루언서 마케팅 B2B SaaS",
        type: "실무 · 프로덕션",
        status: "Production",
        description:
          "AI 인플루언서 마케팅 B2B SaaS 스타트업에서 CES2026 출시를 앞두고 서비스 화면 개선, QA, 자동화 워크플로우, 랜딩페이지 작업에 참여했습니다.",
        highlights: [
          "CES2026 대비 서비스 소개 랜딩페이지 도입과 SEO 최적화 참여",
          "React/TypeScript 기반 크리에이터 검색·캠페인 관리 화면 개선",
          "FastAPI 기반 RAG 기능 연결 이슈와 DB cascade 문제 확인",
          "반복 QA와 바쁜 개발 사이클 사이에서 이슈 재현·문서화 수행",
          "GitHub Actions와 Claude Actions를 활용한 AI 기반 검증 워크플로우 경험",
          "Playwright 실행 로그와 스크린샷 기반으로 PR 검증 신뢰도를 높이는 흐름 참여",
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
