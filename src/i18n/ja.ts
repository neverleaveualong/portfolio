import type { Translations } from "./ko";

const ja: Translations = {
  nav: {
    home: "紹介",
    career: "経歴",
    projects: "プロジェクト",
    skills: "スキル",
    education: "学歴",
    contact: "連絡先",
  },
  hero: {
    badge: "求職中",
    name: "シム・ウヒョン",
    title: "Frontend-focused Full-stack Developer",
    tagline: "Claude Codeを武器に、シニアのように考えるジュニア",
    description:
      "「なぜこう実装すべき？」「このコードの問題点は？」— 常に理由と根拠から考えます。Claude Code・Codexを活用して反復作業を自動化し、設計と意思決定に集中します。B2B SaaS、特許分析、RAGパイプラインまで — ビジネス価値を生むコードを書きます。",
    cta: "プロジェクトを見る",
    email: "メール",
    typingTexts: [
      "「なぜ？」を先に問い、コードを書きます",
      "Claude Codeで生産性を最大化します",
      "体系的にリファクタリングします",
      "RAGパイプラインを設計します",
    ],
  },
  highlights: [
    "Claude Code・Codex開発自動化",
    "「なぜ？」から始める設計",
    "29段階の体系的リファクタリング",
    "RAGパイプライン設計・実装",
  ],
  stats: [
    { label: "実務プロジェクト", value: "4+", unit: "件" },
    { label: "Reactコンポーネント", value: "97", unit: "個" },
    { label: "リファクタリング段階", value: "29", unit: "段階" },
    { label: "テストカバレッジ", value: "137", unit: "件" },
  ],
  career: {
    label: "Experience",
    title: "経歴",
    items: [
      {
        company: "HyperStar (KAISTスタートアップ)",
        role: "Full-stack Developer",
        period: "2025.12 — 現在",
        type: "正社員",
        description:
          "KAIST Global TIPS選定 AIインフルエンサーマーケティングB2B SaaS。QA → FEリファクタリング → BEデバッグ → Terraformインフラ分離まで急速に役割拡大。毎日最低22時まで没頭。",
        highlights: [
          "QA → FEリファクタリング → BEデバッグ → Terraformインフラ分離まで役割拡大",
          "SaaS訪問者向けランディングページ企画・制作・デプロイ",
          "RAG検索機能React Queryフロントエンド統合",
          "Playwright E2Eテスト自動化導入",
          "Claude Code活用の機能開発自動化PoC構築",
          "Instagramデータクローリングパイプライン開発",
          "AWS EC2/S3環境分離 + Vercel自動デプロイ",
        ],
      },
      {
        company: "Douzone Bizon (KeyCom開発本部)",
        role: "SWエンジニアインターン",
        period: "2025.10 — 2025.12",
        type: "インターン",
        description:
          "特許インテリジェンスB2Bウェブアプリ'TechLens'フルスタック単独開発。4週間で262コミット。",
        highlights: [
          "17個REST API設計・実装（認証、検索、プリセット、お気に入り、分析）",
          "JWTデュアルトークン認証 + サーバーサイドトークン失効",
          "KIPRIS APIバッチ処理（5件/200msスロットル）",
          "14段階リファクタリング — 59 PRマージ、7つのセキュリティ強化",
        ],
      },
      {
        company: "Programmers DevCourse 6th",
        role: "フルスタックプロジェクト",
        period: "2025.01 — 2025.07",
        type: "教育",
        description:
          "実務型フルスタック課程。チームプロジェクト'Playce'FEメイン開発者（52%コード貢献）+ 15段階ソロリファクタリング。",
        highlights: [
          "6人チームFEメイン開発 — 97/125ファイル（52%）直接作成",
          "Kakao Maps SDK + Geolocation APIベース位置インタラクション",
          "卒業後15段階・61 PRソロリファクタリング",
          "メインバンドル510KB → 295KB（−42%）最適化",
        ],
      },
      {
        company: "江原大学 教養教育院",
        role: "システム管理者",
        period: "2023.08 — 2025.01",
        type: "勤務",
        description: "学内サーバー管理、ネットワーク障害対応、実習室運営支援。",
        highlights: [
          "サーバーインフラおよびネットワーク機器管理",
          "システム障害モニタリングおよび一次対応・復旧",
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
          "KIPRIS公共データの特許検索・分析・可視化B2Bウェブアプリ。8ページフルスタック単独開発 + 14段階リファクタリング。",
        highlights: [
          "JWTデュアルトークン認証 + Zustandベースフルスタックアーキテクチャ",
          "KIPRIS API同時バッチ処理 + IPCプリキャッシング",
          "Chart.js 3種ダッシュボード（月別推移、IPC分布、登録状態）",
          "14段階リファクタリング — 7つのセキュリティ強化",
        ],
      },
      {
        title: "TechDocs",
        subtitle: "RAGベース特許AI検索プラットフォーム",
        type: "個人プロジェクト",
        status: "In Progress",
        description:
          "KIPRIS特許データをベクトルDBに埋め込み、ローカルLLMと組み合わせたRAGパイプライン。運用費$0。",
        highlights: [
          "RAG: KIPRIS → チャンキング → 埋め込み(384d) → Pinecone → LLM回答",
          "ハルシネーション防止プロンプト + 出典明示強制",
          "Ollama + HuggingFace → $0運用、OpenAI/Azureホットスワップ可能",
          "Dockerコンテナ化 + GitHub Actions CI",
        ],
      },
      {
        title: "PlayceV",
        subtitle: "カカオマップスポーツ中継レストラン推薦",
        type: "チーム + ソロリファクタリング",
        status: "Completed",
        description:
          "DevCourse 6人チーム → 15段階・61 PRソロリファクタリング。FEコード52%直接作成。",
        highlights: [
          "バンドル: メイン510→295KB(−42%)、Modal 311→31KB(−90%)",
          "137テスト (Vitest 109 + Playwright 28) + GitHub Actions CI",
          "React Queryサーバー状態分離 + memo最適化",
          "ErrorBoundary + Skeleton UI + Web Vitalsモニタリング",
        ],
      },
      {
        title: "HyperStar",
        subtitle: "KAIST Global TIPS選定 · AIインフルエンサーマーケティングB2B SaaS",
        type: "プロダクション",
        status: "Production",
        description:
          "KAISTスタートアップ、500M+インフルエンサーDB AIクリエイターマッチング。ランディング・RAG・テスト自動化・インフラ。",
        highlights: [
          "SaaS訪問者向けランディングページ企画・デプロイ",
          "Playwright E2Eテスト自動化 + Claude Code開発PoC",
          "Instagramクローリングパイプライン開発",
          "Terraformインフラ分離 + AWSマルチ環境構成",
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
      { name: "TOEIC 860", org: "ETS" },
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
