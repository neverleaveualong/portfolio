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
    title: "AI & Full-Stack Developer",
    tagline: "フロントエンドからバックエンド、RAGベースAI機能まで拡張する開発者",
    description:
      "コンピュータ工学を専攻し、Reactフロントエンド、Express/FastAPIバックエンド、RAGベースAI検索まで開発範囲を広げてきました。AIスタートアップとDouzone ICTインターンで、サービス開発・QA・文書化・デプロイの流れを経験しました。",
    cta: "プロジェクトを見る",
    email: "メール",
    typingTexts: [
      "ReactフロントエンドからFastAPIバックエンドまで扱います",
      "RAGベースAI検索を設計します",
      "QAと文書化で協業品質を高めます",
      "デプロイまで考慮してサービスを作ります",
    ],
  },
  highlights: [
    "AIスタートアップCES2026前の開発・QA経験",
    "Douzone ICT / KeyCom インターンでのフルスタック開発",
    "React · FastAPI · RAGベースAI検索",
    "課題再現 · 文書化 · デプロイを考慮した開発",
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
    items: [
      {
        title: "TechLens",
        subtitle: "KIPRIS特許分析・可視化ダッシュボード",
        type: "Douzoneインターン",
        status: "Completed",
        description:
          "Douzone ICTインターンで企画・開発・デプロイした特許インテリジェンスB2Bウェブアプリです。競合企業の特許出願動向を日付・IPC・登録状態で確認できます。",
        highlights: [
          "出願人名ベース検索で企業別特許リストと技術動向を確認",
          "IPC分布、月別出願推移、登録状態をチャートで可視化",
          "お気に入りとメモ機能で関心特許を継続的に追跡",
          "React + TypeScriptフロントエンドとExpress + PostgreSQLバックエンド開発",
          "ZustandとReact Queryでユーザー状態とサーバー状態を分離",
          "KIPRIS API制限を経験し、内部DB保存・定期更新構造の必要性を学習",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "RAGベース特許AI検索プラットフォーム",
        type: "個人プロジェクト",
        status: "In Progress",
        description:
          "TechLensの条件検索の限界を自然語RAG検索に高度化したプロジェクトです。アイデアや既知の特許情報から関連特許と文書を探せるよう設計しました。",
        highlights: [
          "KIPRIS特許データを収集しLangChainベースRAGパイプラインを構成",
          "特許データの長さ特性を分析し800文字基準チャンクを適用",
          "BM25 + Vector検索とRRFでキーワード・意味検索を補完",
          "FastAPIバックエンドとNext.jsフロントエンドで検索・回答フローを実装",
          "RAGASとユーザーフィードバックでAI回答品質確認フローを構築",
          "今後AI Agentとデータ収集・更新パイプライン高度化を計画",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "カカオマップスポーツ中継レストラン推薦",
        type: "チーム + ソロリファクタリング",
        status: "Completed",
        description:
          "スタジアムに行かず友人と飲食店でスポーツ中継を楽しみたいユーザー向けの地図ベース検索サービスです。チーム開発後に単独で構造改善を行いました。",
        highlights: [
          "Kakao Mapsベースの周辺スポーツ中継飲食店検索を実装",
          "種目・リーグ・日付フィルタで今日の中継予定を位置ベースで確認",
          "React Queryでサーバー状態、Zustandで地図・検索UI状態を分離",
          "フロントエンド開発者としてバックエンドメンバーとAPI仕様を調整",
          "チーム開発後、構造・状態管理・性能・テスト中心にリファクタリング",
          "店舗管理と中継修正フローのUX改善を今後の課題として整理",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "KAIST Global TIPS選定 · AIインフルエンサーマーケティングB2B SaaS",
        type: "プロダクション",
        status: "Production",
        description:
          "AIインフルエンサーマーケティングB2B SaaSスタートアップで、CES2026前に画面改善、QA、自動化ワークフロー、ランディングページ作業に参加しました。",
        highlights: [
          "CES2026向けサービス紹介ランディングページ導入とSEO最適化に参加",
          "React/TypeScriptベースのクリエイター検索・キャンペーン管理画面を改善",
          "FastAPIベースRAG機能連携とDB cascade問題を確認",
          "反復QAと忙しい開発サイクルの中で再現・文書化を実施",
          "GitHub ActionsとClaude ActionsによるAIベース検証フローを経験",
          "PlaywrightログとスクリーンショットでPR検証信頼性を高める流れに参加",
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
