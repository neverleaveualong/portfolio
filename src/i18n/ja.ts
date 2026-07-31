import type { Translations } from "./ko";

const ja: Translations = {
  nav: {
    home: "紹介",
    career: "経歴",
    experience: "経験",
    projects: "プロジェクト",
    skills: "スキル",
    education: "学歴",
    contact: "連絡先",
  },
  hero: {
    badge: "求職中",
    name: "シム・ウヒョン",
    title: "FullStack SW Developer",
    tagline: "ユーザー画面とAI検索フローを設計する開発者",
    description:
      "Reactベースのユーザー画面を設計し、FastAPIとRAGパイプラインでAI検索サービスを実装してきました。AIスタートアップとICTインターンで、サービス開発・QA・文書化・デプロイの流れを経験しました。",
    descriptionBullets: [
      "ユーザーの課題を先に定義し、企画からデプロイまでつなげます。",
      "React画面とAPI・データフローを一緒に設計し、サービスを完成させます。",
      "性能・テスト・文書化を重視し、保守しやすいソフトウェアを作ります。",
    ],
    cta: "プロジェクトを見る",
    quickLinksLabel: "主なプロジェクト",
    email: "メール",
    typingTexts: [
      "ReactフロントエンドからFastAPIバックエンドまで扱います",
      "RAGベースAI検索を設計します",
      "QAと文書化で協業品質を高めます",
      "デプロイまで考慮してサービスを作ります",
    ],
  },
  highlights: [
    "CES2026前AI SaaS開発・QA",
    "ICTインターン フルスタック開発",
    "React · FastAPI · RAG検索",
    "再現 · 文書化 · デプロイ",
  ],
  stats: [
    { label: "インターン", value: "2", unit: "回" },
    { label: "サービス開発", value: "4", unit: "件" },
    { label: "リファクタリング/高度化", value: "2", unit: "件" },
    { label: "デプロイサービス", value: "3", unit: "件" },
  ],
  career: {
    label: "Experience",
    title: "経歴",
    overviewLabel: "概要",
    roleLabel: "役割",
    achievementLabel: "成果",
    items: [
      {
        company: "HyperStar (KAISTスタートアップ)",
        role: "Frontend / Backend / QA Intern",
        period: "2025.12 — 2026.03",
        type: "インターン",
        description:
          "KAIST Global TIPS選定AIインフルエンサーマーケティングB2B SaaSスタートアップで、CES2026前のサービス開発・QAサイクルを経験しました。",
        highlights: [
          "CES2026向けランディングページ導入とサービス画面改善に参加",
          "QAチェックリスト、再現手順、期待結果を文書化",
          "RAG連携とDB cascade問題の原因確認",
          "GitHub Actions・Claude Actions・Playwrightベースの検証フローを経験",
        ],
      },
      {
        company: "Douzone ICT Group / KeyCom",
        role: "SWエンジニアインターン",
        period: "2025.10 — 2025.11",
        type: "インターン",
        description:
          "競合企業の特許技術動向を把握できるTechLensを企画・開発・デプロイしました。",
        highlights: [
          "React, Express, PostgreSQL, KIPRIS APIベースでフルスタック開発",
          "特許検索・分析・お気に入り・メモ・企業比較機能を実装",
          "KIPRIS月間呼び出し制限を考慮したキャッシュと呼び出し条件制御",
          "企業インターン環境でのセキュリティ要求とメンタリングを反映",
        ],
      },
    ],
  },
  experience: {
    label: "Experience Plus",
    title: "教育・運用経験",
    overviewLabel: "概要",
    roleLabel: "役割",
    achievementLabel: "成果",
    items: [
      {
        title: "Programmers DevCourse 6th",
        role: "Webフルサイクル開発課程",
        period: "2025.01 — 2025.07",
        type: "教育",
        description:
          "TypeScriptベースのWebフルサイクル課程で、REST API設計、Reactフロントエンド開発、チーム協業、デプロイを経験しました。",
        highlights: [
          "地図ベースのスポーツ中継レストラン検索サービスPlayceを開発",
          "フロントエンド開発者としてReact画面実装とAPI連携を担当",
          "バックエンドメンバーとREST API仕様を調整",
          "リファクタリングを通じて状態分離と初期設計の重要性を学習",
        ],
      },
      {
        title: "江原大学 教養教育院",
        role: "システム管理者",
        period: "2023.08 — 2025.01",
        type: "勤務",
        description:
          "学内実習環境の運用を支援し、サーバー・ネットワーク障害対応とユーザー支援を経験しました。",
        highlights: [
          "実習室サーバーとネットワーク機器の運用支援",
          "実習環境の障害発生時に一次確認と復旧支援",
          "学生・教職員向け技術サポートを実施",
          "運用業務を通じて安定性とユーザー視点の重要性を体得",
        ],
      },
    ],
  },
  projects: {
    label: "Selected Works",
    title: "プロジェクト",
    oneLinerLabel: "一行紹介",
    achievementsLabel: "主な成果",
    roleLabel: "担当役割",
    overviewLabel: "概要",
    currentStateLabel: "現状",
    problemLabel: "問題定義",
    solutionLabel: "解決策",
    impactLabel: "期待効果",
    items: [
      {
        title: "TechLens",
        subtitle: "KIPRIS特許分析・可視化ダッシュボード",
        type: "Douzoneインターン",
        status: "Completed",
        description:
          "B2Bユーザーが競合企業の技術動向を素早く把握できるよう、公開特許データを検索・分析ダッシュボードとして提供したフルスタックサービスです。",
        achievements: [
          "検索、詳細表示、お気に入り、企業別分析など17個のREST APIを実装",
          "KIPRIS APIレスポンスをPostgreSQL保存・照会フローに接続",
          "IPC分布、月別出願推移、技術分野分析ダッシュボードを実装",
          "JWT認証、Refresh Token Rotation、入力検証などのセキュリティフローを反映",
        ],
        role: [
          "サービス企画からフロントエンド、バックエンド、DBまで単独開発",
          "外部APIレスポンス構造を分析し検索条件と保存項目を設計",
          "インターン終了後、14段階のリファクタリングで保守性と安定性を改善",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "RAGベース特許AI検索プラットフォーム",
        type: "個人プロジェクト",
        status: "In Progress",
        description:
          "TechLensで構築した特許検索・分析構造をRAGベースAI検索へ拡張し、自然語質問から関連特許と根拠文書を探せるようにしたサービスです。",
        achievements: [
          "特許文書のチャンク化、埋め込み、ベクトルDB保存パイプラインを実装",
          "BM25 + Vector Search + RRFによるハイブリッド検索構造を設計",
          "質問ベースの検索結果を根拠文書とAI回答として提供",
          "RAGASベース評価フローで検索・回答品質を点検",
        ],
        role: [
          "個人プロジェクトとして企画、アーキテクチャ、フロントエンド、バックエンドを全体実装",
          "検索失敗原因をチャンク、検索方式、回答根拠単位で分析",
          "特許検索を単純な一覧照会から質問ベースの情報探索へ転換",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "カカオマップスポーツ中継レストラン推薦",
        type: "チーム + ソロリファクタリング",
        status: "Completed",
        description:
          "スポーツ中継を行う飲食店を地図、種目、リーグ、日付で探せる位置情報サービスで、チーム開発後に性能・テスト・構造を単独改善しました。",
        achievements: [
          "フロントエンド全体コミット66%に貢献し、地図・詳細・お気に入り・マイページを実装",
          "チーム開発後、15段階61PRの単独リファクタリングを実施",
          "コード分割で初期バンドルサイズを42%削減",
          "Vitest・Playwrightベースの100件以上のテストとGitHub Actions CIを構築",
        ],
        role: [
          "Kakao Mapsベースのマーカー、位置検索、店舗詳細画面を開発",
          "React QueryとZustandでサーバー状態とUI状態を分離",
          "不要コード削除、ドメイン構造再編、エラー復旧フローを改善",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "KAIST Global TIPS選定 · AIインフルエンサーマーケティングB2B SaaS",
        type: "プロダクション",
        status: "Production",
        description:
          "CES2026公開を控えたAIインフルエンサーマーケティングB2B SaaSで、画面、API、データフロー、RAG回答結果を点検し、デモ安定化に参加しました。",
        achievements: [
          "主要画面フローと例外ケースをQAチェックリスト化",
          "API/RAG連携イシューを再現し修正方向を文書化",
          "GitHub Actions・Claude ActionsベースのQA自動化改善に参加",
          "CES2026向けランディングページとSEO改善に参加",
        ],
        role: [
          "QAからフロントエンド修正、デバッグ支援まで役割を拡張",
          "画面表示、サーバーレスポンス、データ処理過程を分けて原因を追跡",
          "修正内容と残課題を文書化し、チームの共有基準を整備",
        ],
      },
    ],
  },
  skills: {
    label: "Tech Stack",
    title: "技術スタック",
  },
  education: {
    label: "Background",
    title: "学歴・資格・活動",
    universityLabel: "学歴",
    certificationsLabel: "資格",
    certCount: "件取得",
    activitiesLabel: "教育・活動",
    majorLabel: "主専攻",
    minorLabel: "副専攻",
    universityName: "江原大学校 (春川)",
    major: "コンピュータ工学科",
    minor: "精密医療融合",
    period: "2021.03 — 2026.02",
    status: "卒業",
    certifications: [
      { name: "情報処理技師", org: "韓国産業人力公団" },
      { name: "ビッグデータ分析技師", org: "韓国産業人力公団" },
      { name: "SQLD", org: "データベース振興院" },
      { name: "ADsP", org: "データベース振興院" },
      { name: "DAsP", org: "データベース振興院" },
      { name: "TOEIC 785", org: "ETS" },
    ],
    activities: [
      { name: "AWS Solutions Architect Associate", desc: "クラウドアーキテクチャ設計", period: "2025.11" },
      { name: "Programmers DevCourse 6th", desc: "実務型フルスタックプロジェクト", period: "2025.01 — 2025.07" },
      { name: "University of Waikato 語学研修", desc: "グローバルコミュニケーション", period: "2024.07" },
      { name: "Cloud Security (QueryPie)", desc: "クラウドセキュリティ", period: "2024.08" },
      { name: "Naver Cloud Associate", desc: "クラウドサービス基礎", period: "2023.12" },
    ],
  },
  achievements: {
    label: "Achievements",
    title: "特記事項",
    items: [
      {
        icon: "scholarship",
        title: "江原LRS共有大学 革新人材1期",
        description: "6学期間 約1,200万ウォン奨学金受給",
      },
      {
        icon: "prize",
        title: "江原道特化人材事業奨学金",
        description: "江原道認定人材 — 累計1,000万ウォン以上受給",
      },
      {
        icon: "global",
        title: "ニュージーランド Waikato University 語学研修",
        description: "韓国奨学財団全額支援 (800万ウォン+) · 4週間",
      },
      {
        icon: "cloud",
        title: "Naver Cloud Platform (NCP)",
        description: "NCA教育修了 — NCP活用に前向き",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "一緒に成長する機会を探しています",
    description: "新しい挑戦と成長の機会を歓迎します。",
    sub: "カジュアルなコーヒーチャットも大歓迎です。",
    emailBtn: "メールを送る",
    copied: "コピーしました！",
  },
  footer: {
    built: "Built with Next.js + Tailwind",
  },
};

export default ja;
