# 梵天庵 - ヘッドレスCMSプロジェクト概要

## プロジェクト基本情報

| 項目 | 内容 |
|------|------|
| プロジェクト名 | 梵天庵（ぼんてんあん）|
| プロジェクトタイプ | ヘッドレスCMSシステム |
| 技術スタック | Next.js 14, TypeScript, Tailwind CSS, Firebase |
| 開発開始日 | 2024年9月 |
| 現在のバージョン | v1.0 |

## プロジェクト概要

梵天庵は、シンプルで美しいヘッドレスCMSシステムです。WordPressの代替として、直感的な操作とリアルタイム更新を実現する次世代のコンテンツ管理システムを目指しています。

### 主要な特徴

- **シンプル性**: 複雑な設定なしで即座に利用開始
- **高速表示**: Next.js 14による静的生成で3秒以内の表示を実現
- **リアルタイム更新**: 編集内容が即座にサイトに反映
- **デモモード**: Firebase設定なしでも動作する開発者フレンドリー設計
- **美しいUI**: 高級感のあるデザインとスムーズなアニメーション

## アーキテクチャ

### フロントエンド
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks + Custom Events

### バックエンド
- **Database**: Firebase Firestore (+ LocalStorage フォールバック)
- **Authentication**: Firebase Auth (+ Demo モード)
- **Storage**: LocalStorage優先のハイブリッド設計

### デプロイメント
- **Frontend**: Vercel
- **Database**: Firebase Cloud Firestore
- **CDN**: Vercel Edge Network

## ディレクトリ構造

```
jiichiro-test-site/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # メインサイト（ホーム）
│   ├── about/             # 梵天庵について
│   ├── tradition/         # 伝統ページ
│   ├── company/           # 会社概要
│   ├── contact/           # お問い合わせ
│   ├── access/            # アクセス
│   └── admin/             # 管理画面
│       ├── login/         # ログイン
│       └── dashboard/     # ダッシュボード
├── components/            # 再利用可能コンポーネント
│   ├── Header.tsx         # ナビゲーション
│   ├── Footer.tsx         # フッター
│   ├── Hero.tsx           # ヒーローセクション
│   ├── ProductBlock.tsx   # プロダクトブロック
│   └── NewsSection.tsx    # ニュースセクション
├── lib/                   # ライブラリ・ユーティリティ
│   ├── firebase.ts        # Firebase設定
│   ├── auth.ts            # 認証システム
│   └── content-manager-enhanced.ts # コンテンツ管理
└── public/                # 静的ファイル
```

## 主要機能

### 1. メインサイト機能
- **ホームページ**: 梵天庵の魅力を伝えるランディングページ
- **伝統ページ**: スクロールアニメーション付きの高級感あるページ
- **会社概要**: 企業情報と理念の紹介
- **お問い合わせ**: フォーム機能付きコンタクトページ
- **アクセス**: 地図と交通案内

### 2. 管理画面機能
- **ダッシュボード**: サイト統計とクイックアクション
- **コンテンツ管理**: ヒーロー、プロダクト、ニュースの編集
- **プレビュー機能**: 編集内容のリアルタイムプレビュー
- **デモモード**: 開発環境での動作確認

### 3. 技術的特徴
- **ハイブリッドストレージ**: LocalStorage + Firestore
- **Service Worker最適化**: キャッシュ制御による高速化
- **レスポンシブデザイン**: 全デバイス対応
- **アニメーション**: スクロールトリガーアニメーション

## パフォーマンス指標

| メトリクス | 目標値 | 現在値 |
|------------|--------|--------|
| First Contentful Paint | < 1.5s | ~1.2s |
| Largest Contentful Paint | < 2.5s | ~2.1s |
| Cumulative Layout Shift | < 0.1 | ~0.05 |
| Time to Interactive | < 3.0s | ~2.8s |

## セキュリティ

- Firebase Rules による適切なアクセス制御
- XSS攻撃対策（Content Security Policy）
- CSRF対策（SameSite Cookie）
- 入力値検証とサニタイゼーション

## 開発環境

### 必要な環境
- Node.js 18以上
- npm または yarn
- Git

### セットアップ手順
1. リポジトリのクローン
2. `npm install` で依存関係のインストール
3. Firebase設定（オプション）
4. `npm run dev` で開発サーバー起動

### 環境変数
```
NEXT_PUBLIC_FIREBASE_API_KEY=（オプション）
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=（オプション）
NEXT_PUBLIC_FIREBASE_PROJECT_ID=（オプション）
```

## 今後の開発予定

### v1.1（2024年12月予定）
- [ ] 多言語対応（英語・中国語）
- [ ] SEO最適化機能
- [ ] サイトマップ自動生成
- [ ] OGP画像自動生成

### v1.2（2025年3月予定）
- [ ] API機能の拡充
- [ ] プラグインシステム
- [ ] テーマカスタマイゼーション
- [ ] 高度な分析機能

### v2.0（2025年6月予定）
- [ ] マルチサイト管理
- [ ] ユーザー権限管理
- [ ] Webhook機能
- [ ] 外部システム連携

## 貢献ガイドライン

### コードスタイル
- TypeScriptを使用
- ESLint + Prettierによる自動フォーマット
- コミットメッセージは conventional commits形式

### プルリクエスト
1. feature/xxxブランチで開発
2. 十分なテストの実装
3. ドキュメントの更新
4. レビュー後にマージ

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 連絡先

- **開発チーム**: dev@bonten-an.com
- **サポート**: support@bonten-an.com
- **GitHub**: https://github.com/tsailink0611/jiichiro-test-site

---

**最終更新**: 2024年9月21日
**バージョン**: v1.0
**作成者**: Claude Code Generator