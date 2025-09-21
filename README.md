# 梵天庵 - ヘッドレスCMSシステム

![梵天庵](https://via.placeholder.com/800x200/2C2C2C/FFFFFF?text=梵天庵+HeadlessCMS)

> シンプルで美しいヘッドレスCMSシステム - WordPressの代替として設計された次世代コンテンツ管理システム

## 🚀 特徴

- ⚡ **高速表示** - Next.js 14による静的生成で3秒以内の表示
- 🎨 **美しいUI** - 高級感のあるデザインとスムーズなアニメーション
- 📱 **レスポンシブ** - 全デバイス対応の完璧なレスポンシブデザイン
- 🔄 **リアルタイム更新** - 編集内容が即座にサイトに反映
- 🛠️ **開発者フレンドリー** - Firebase設定なしでも動作するデモモード
- 🌐 **ハイブリッドストレージ** - LocalStorage + Firestore の柔軟な設計

## 📋 技術スタック

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Firebase (Firestore + Auth)
- **Storage**: ハイブリッド設計（LocalStorage + Firestore）
- **Deployment**: Vercel
- **Animation**: スクロールトリガーアニメーション

## 🚀 クイックスタート

### 前提条件
- Node.js 18以上
- Git

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/tsailink0611/jiichiro-test-site.git
cd jiichiro-test-site

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーが起動したら、[http://localhost:3000](http://localhost:3000) でアクセスできます。

### 🎮 デモモード

Firebase設定なしでも動作します：

```bash
# そのまま起動するだけ！
npm run dev

# デモアカウント
Email: demo@bonten-an.com
Password: demo123
```

## 📝 使用方法

### メインサイト
- **ホーム**: 梵天庵の魅力を伝えるランディングページ
- **伝統**: 和の美学を表現した高級感あふれるページ
- **会社概要**: 企業情報と代表メッセージ
- **お問い合わせ**: 機能的なコンタクトフォーム
- **アクセス**: 詳細な交通案内

### 管理画面
1. `/admin` でログインページにアクセス
2. デモアカウントまたはFirebaseアカウントでログイン
3. ダッシュボードでコンテンツを管理
4. リアルタイムでプレビュー確認

## 🤝 貢献

1. このリポジトリをフォーク
2. feature/your-feature-nameブランチを作成
3. 変更をコミット
4. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT License の下で公開されています。

---

🤖 **Generated with [Claude Code](https://claude.ai/code)**
