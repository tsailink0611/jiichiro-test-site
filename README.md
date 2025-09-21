# CMSサイトスタジオ - ヘッドレスCMSシステム

**WordPressの代替となる、シンプルで高速なヘッドレスCMSシステム**

## ✨ 主な特徴

- 🚀 **高速表示**: Next.js 14 + 静的生成で3秒以内のページ表示
- 💡 **直感的操作**: 専門知識不要の管理画面
- 🔒 **セキュア**: Firebase Auth認証 + Firestore暗号化
- 📱 **レスポンシブ**: スマホ完全対応
- ⚡ **リアルタイム**: 編集内容の即時反映
- 🎯 **デモモード**: Firebase設定なしでも動作確認可能

## 🚀 クイックスタート

### 1. セットアップ

```bash
git clone https://github.com/tsailink0611/jiichiro-test-site.git
cd jiichiro-test-site
npm install
```

### 2. 開発サーバー起動

```bash
npm run dev
```

http://localhost:3000 でアクセス

### 3. 管理画面アクセス

- URL: http://localhost:3000/admin
- デモアカウント: `demo@cms-site-studio.com` / `demo123`

## 🛠️ 技術スタック

| カテゴリ | 技術 |
|---------|------|
| **フロントエンド** | Next.js 14, React 18, TypeScript |
| **スタイリング** | Tailwind CSS |
| **認証・DB** | Firebase Auth, Firestore |
| **ホスティング** | Vercel |
| **画像管理** | Cloudinary (予定) |

## 📁 プロジェクト構造

```
cms-site-studio/
├── app/
│   ├── (public)/           # 公開サイト
│   └── admin/              # 管理画面
│       ├── login/          # ログイン
│       └── dashboard/      # ダッシュボード
├── components/             # UIコンポーネント
├── lib/
│   ├── firebase.ts         # Firebase設定
│   ├── auth.ts            # 認証ヘルパー
│   └── content-manager-enhanced.ts # コンテンツ管理
└── docs/                  # プロジェクトドキュメント
```

## 🎯 機能一覧

### 公開サイト機能
- ✅ ヒーローセクション
- ✅ 商品・サービス紹介
- ✅ お知らせ表示
- ✅ レスポンシブデザイン
- ✅ パフォーマンス最適化

### 管理機能
- ✅ セキュアログイン (Firebase Auth)
- ✅ ダッシュボード
- ✅ コンテンツ編集
- ✅ リアルタイム更新
- ⏳ 画像管理 (Cloudinary統合予定)
- ⏳ SEO設定
- ⏳ アナリティクス

## 🔧 設定

### Firebase設定 (任意)

`.env.local` ファイルを作成:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
```

**注意**: 環境変数が設定されていない場合は自動的にデモモードで動作します。

## 📊 パフォーマンス

### ビルドサイズ
- **メインページ**: 224 kB (First Load JS)
- **管理画面**: 223 kB (First Load JS)
- **ログインページ**: 221 kB (First Load JS)

### 表示速度
- **静的生成**: ○ (すべてのページ)
- **初期表示**: ~1秒
- **コンテンツ更新**: リアルタイム

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: Blue 600 (#2563eb)
- **セカンダリ**: Gray 600 (#4b5563)
- **アクセント**: Green 600, Purple 600
- **背景**: Gray 50 (#f9fafb)

### コンポーネント
- レスポンシブヘッダー/フッター
- カードベースレイアウト
- モダンフォーム
- ローディング状態

## 📈 今後の予定

### Phase 3: 画像管理システム
- [ ] Cloudinary統合
- [ ] 画像アップロード機能
- [ ] 自動リサイズ・最適化

### Phase 4: 機能拡張
- [ ] SEO設定画面
- [ ] アナリティクス統合
- [ ] テンプレート切り替え機能
- [ ] 多言語対応

### Phase 5: エンタープライズ機能
- [ ] ユーザー権限管理
- [ ] ワークフロー機能
- [ ] API拡張
- [ ] プラグインシステム

## 🔗 関連リンク

- [プロジェクト概要](docs/PROJECT_OVERVIEW.md)
- [開発進捗](docs/DEVELOPMENT_PROGRESS.md)
- [セットアップガイド](docs/SETUP_GUIDE.md)

## 🤝 貢献

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

MIT License

## 🙋‍♂️ サポート

- **Issues**: [GitHub Issues](https://github.com/tsailink0611/jiichiro-test-site/issues)
- **Discussions**: [GitHub Discussions](https://github.com/tsailink0611/jiichiro-test-site/discussions)

---

**🤖 Generated with Claude Code & SuperClaude Framework**