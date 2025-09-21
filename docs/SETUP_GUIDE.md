# SuperClaude最強開発マシン 使い方ガイド

## 🚀 開発環境セットアップ

### 前提条件
- Node.js 18+ がインストール済み
- Git がインストール済み
- Firebase プロジェクトの作成権限
- Cloudinary アカウント (画像管理用)

### 1. プロジェクトクローン

```bash
git clone https://github.com/tsailink0611/jiichiro-test-site.git
cd jiichiro-test-site
```

### 2. 依存関係インストール

```bash
# 基本パッケージ
npm install

# Firebase関連 (今後追加予定)
npm install firebase react-firebase-hooks
npm install @types/firebase --save-dev
```

### 3. 環境変数設定

`.env.local` ファイルを作成:

```env
# Firebase設定
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# Cloudinary設定
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. 開発サーバー起動

```bash
npm run dev
```

http://localhost:3000 でアクセス可能

## 🛠️ SuperClaude Framework 活用法

### コマンド体系

#### 基本開発コマンド
```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# 本番環境プレビュー
npm start

# コード品質チェック
npm run lint
```

#### Claude Code 最適化フラグ

開発時にClaude Codeに以下のフラグを使用して効率化:

```bash
# 高速思考モード
--think-hard

# 並列処理最適化
--concurrency 10

# MCP サーバー活用
--magic --context7 --sequential

# 超圧縮出力
--uc

# 安全モード (本番環境)
--safe-mode
```

### フレームワーク活用パターン

#### 1. 機能開発時
```bash
# Claude Code コマンド例
"新しい商品管理機能を実装 --think-hard --magic --loop"
```

#### 2. バグ修正時
```bash
# Claude Code コマンド例
"認証エラーをデバッグ --ultrathink --validate --safe-mode"
```

#### 3. パフォーマンス最適化時
```bash
# Claude Code コマンド例
"バンドルサイズを最適化 --focus performance --iterations 3"
```

## 📁 プロジェクト構造ガイド

### 開発ワークフロー

```
1. 設計 → docs/ でドキュメント更新
2. 実装 → app/, components/, lib/ で開発
3. テスト → 手動テスト + ビルド確認
4. デプロイ → Vercel自動デプロイ
```

### ファイル配置ルール

#### 公開ページ
```
app/(public)/
├── page.tsx          # トップページ
├── about/page.tsx    # Aboutページ
├── products/page.tsx # 商品一覧
└── news/page.tsx     # お知らせ
```

#### 管理画面
```
app/admin/
├── page.tsx                    # 管理TOP
├── login/page.tsx             # ログイン
├── dashboard/page.tsx         # ダッシュボード
└── edit/[section]/page.tsx    # 各編集画面
```

#### コンポーネント
```
components/
├── public/           # 公開サイト用
│   ├── Hero.tsx
│   ├── ProductBlock.tsx
│   └── NewsSection.tsx
└── admin/            # 管理画面用
    ├── Dashboard.tsx
    ├── ContentEditor.tsx
    └── ImageUploader.tsx
```

#### ユーティリティ
```
lib/
├── firebase.ts       # Firebase設定
├── content-manager.ts # コンテンツ管理
├── auth.ts          # 認証ヘルパー
└── cloudinary.ts    # 画像管理
```

## 🔧 开発Tips

### Claude Code効率化

1. **並列処理活用**
   - 複数ファイル編集は MultiEdit ツール使用
   - 独立した作業は並列実行指示

2. **専門MCP活用**
   - UI作成: `--magic` フラグ
   - ドキュメント: `--context7` フラグ
   - 複雑分析: `--sequential` フラグ

3. **品質保証**
   - 重要変更前: `--validate` フラグ
   - 本番環境: `--safe-mode` フラグ

### パフォーマンス最適化

```typescript
// Content Manager使用例
import { ContentManager } from '@/lib/content-manager'

// 高速読み込み (LocalStorage優先)
const content = ContentManager.getContent()

// リアルタイム更新
useEffect(() => {
  const handleUpdate = (event: CustomEvent) => {
    setContent(event.detail)
  }
  window.addEventListener('content-updated', handleUpdate)
  return () => window.removeEventListener('content-updated', handleUpdate)
}, [])
```

### セキュリティベストプラクティス

1. **環境変数管理**
   - `.env.local` で機密情報
   - GitHub に `.env` ファイルcommitしない

2. **Firebase セキュリティ**
   - Firestore ルール設定必須
   - 認証必須エンドポイント保護

3. **入力検証**
   - XSS対策 (React標準で対応済み)
   - CSRFトークン検証

## 🚀 デプロイガイド

### Vercel デプロイ

1. **Vercel接続**
   ```bash
   npx vercel --prod
   ```

2. **環境変数設定**
   - Vercel Dashboard で環境変数登録
   - Production/Preview環境別設定

3. **ビルド設定**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "installCommand": "npm install"
   }
   ```

### 本番環境チェックリスト

- [ ] Firebase プロジェクト本番設定
- [ ] Cloudinary 本番アカウント
- [ ] 環境変数すべて設定済み
- [ ] セキュリティルール適用済み
- [ ] パフォーマンステスト完了
- [ ] SEO設定完了

---

**作成日**: 2024年9月21日
**Claude Code Version**: Opus 4.1
**SuperClaude Framework**: 最新版