# ヘッドレスCMSシステム プロジェクト概要

## プロジェクト基本情報
- **プロジェクト名**: 治一郎サイト - ヘッドレスCMSシステム
- **目的**: WordPressの代替として、シンプルで高速、管理が簡単なCMSシステム
- **開始日**: 2024年9月21日
- **開発者**: Claude Code with SuperClaude Framework

## 技術スタック

### フロントエンド
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

### バックエンド・認証
- **Firebase Auth** (メール/パスワード認証)
- **Firestore** (データ保存・バックアップ)

### ホスティング・配信
- **Vercel** (デプロイ・ホスティング)
- **Cloudinary** (画像管理・最適化)

## アーキテクチャ概要

### データ管理戦略
1. **LocalStorage優先**: 高速アクセスとオフライン対応
2. **Firestore バックアップ**: データ永続化とデバイス間同期
3. **リアルタイム更新**: カスタムイベントによる即座の反映

### セキュリティ層
- Firebase Auth による認証
- Firestore セキュリティルール
- Next.js 標準のXSS対策
- 環境変数による機密情報管理

## 主要機能

### 公開サイト機能
- 📱 **レスポンシブデザイン**: スマホ完全対応
- ⚡ **高速表示**: 静的生成とSWRキャッシュ
- 🎨 **和風デザイン**: 既存の治一郎サイトデザイン継承
- 🌟 **アニメーション**: パララックス・フェードイン効果

### 管理機能
- 🔐 **セキュアログイン**: Firebase Auth認証
- 📝 **コンテンツ編集**: 全ページのリアルタイム編集
- 🖼️ **画像管理**: Cloudinary統合でオート最適化
- 👀 **プレビュー**: 変更の即時反映
- 📊 **SEO管理**: メタタグとキーワード最適化

### 編集可能コンテンツ
- **ヒーローセクション**: タイトル、サブタイトル、背景画像
- **Aboutページ**: テキスト、画像ギャラリー
- **商品管理**: 追加、編集、削除、並び替え
- **お知らせ**: 投稿、編集、削除
- **スタッフ紹介**: プロフィール管理
- **お問い合わせ情報**: 連絡先・営業時間
- **SEOメタ情報**: 検索エンジン最適化

## ディレクトリ構造

```
jiichiro-test-site/
├── app/
│   ├── (public)/           # 公開サイト
│   │   ├── page.tsx        # トップページ
│   │   ├── about/page.tsx  # Aboutページ
│   │   ├── products/page.tsx # 商品一覧
│   │   └── news/page.tsx   # お知らせ
│   ├── admin/              # 管理画面
│   │   ├── login/page.tsx  # ログイン
│   │   ├── dashboard/page.tsx # ダッシュボード
│   │   └── edit/[section]/page.tsx # 編集画面
│   ├── api/                # API Routes
│   │   ├── auth/route.ts   # 認証API
│   │   └── content/route.ts # コンテンツAPI
│   ├── globals.css         # グローバルスタイル
│   └── layout.tsx          # ルートレイアウト
├── components/
│   ├── public/             # 公開サイト用
│   │   ├── Hero.tsx
│   │   ├── ProductBlock.tsx
│   │   ├── NewsSection.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── admin/              # 管理画面用
│       ├── Dashboard.tsx
│       ├── ContentEditor.tsx
│       └── ImageUploader.tsx
├── lib/
│   ├── firebase.ts         # Firebase設定
│   ├── content-manager.ts  # コンテンツ管理
│   ├── auth.ts            # 認証ヘルパー
│   └── cloudinary.ts      # 画像管理
├── types/
│   └── index.ts           # TypeScript型定義
└── docs/                  # プロジェクトドキュメント
    ├── PROJECT_OVERVIEW.md
    ├── DEVELOPMENT_PROGRESS.md
    └── SETUP_GUIDE.md
```

## 開発原則

### 1. シンプルさ最優先
- 過度な機能追加を避ける
- WordPressより簡単に使える
- 直感的な操作性

### 2. パフォーマンス重視
- ページ表示速度 3秒以内
- 軽量なバンドルサイズ
- 効率的なキャッシュ戦略

### 3. 拡張性の確保
- テンプレート切り替え機能
- 業種別カスタマイズ対応
- プラグインシステム準備

## 成功基準

✅ **機能性**
- 管理画面から全コンテンツが編集可能
- 変更が即座にサイトに反映

✅ **パフォーマンス**
- ページ表示速度3秒以内
- スマホでの完全動作

✅ **運用性**
- 1時間以内に新規サイト立ち上げ可能
- 非技術者でも簡単操作

## 次のステップ

1. Firebase 統合とセットアップ
2. 認証システムの実装
3. 管理画面の構築
4. 画像管理システムの統合
5. テスト・最適化・デプロイ

---

**最終更新**: 2024年9月21日
**ステータス**: 開発中 (Phase 1完了)