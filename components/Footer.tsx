export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="font-serif-jp text-xl font-bold mb-4">治一郎</h3>
            <p className="text-sm leading-relaxed text-white/80">
              職人の技と心を込めて<br />
              一層一層丁寧に焼き上げる<br />
              こだわりのバウムクーヘン
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">商品・サービス</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">バウムクーヘン</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">ギフトセット</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">季節限定商品</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">オンライン限定</a></li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="font-bold mb-4">店舗・サポート</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">店舗一覧</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">よくある質問</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">配送について</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">企業理念</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">採用情報</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 治一郎. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}