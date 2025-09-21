'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="pt-24 pb-20 px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-extralight text-stone-800 tracking-wider">
            会社概要
          </h1>
          <div className="w-24 h-1 bg-stone-400 mx-auto"></div>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            私たちの歩みと理念、そして未来への想い
          </p>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* 左側：会社情報 */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-light text-stone-800 mb-8">会社情報</h2>
                <div className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <dt className="text-stone-500 text-sm font-medium mb-2">社名</dt>
                    <dd className="text-xl text-stone-800">CMSサイトスタジオ株式会社</dd>
                  </div>
                  <div className="border-b border-stone-200 pb-4">
                    <dt className="text-stone-500 text-sm font-medium mb-2">設立</dt>
                    <dd className="text-xl text-stone-800">2024年4月</dd>
                  </div>
                  <div className="border-b border-stone-200 pb-4">
                    <dt className="text-stone-500 text-sm font-medium mb-2">資本金</dt>
                    <dd className="text-xl text-stone-800">1,000万円</dd>
                  </div>
                  <div className="border-b border-stone-200 pb-4">
                    <dt className="text-stone-500 text-sm font-medium mb-2">従業員数</dt>
                    <dd className="text-xl text-stone-800">25名</dd>
                  </div>
                  <div className="border-b border-stone-200 pb-4">
                    <dt className="text-stone-500 text-sm font-medium mb-2">事業内容</dt>
                    <dd className="text-xl text-stone-800">ヘッドレスCMSシステム開発・運営</dd>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：企業理念 */}
            <div className="space-y-12 lg:pl-8">
              <div>
                <h2 className="text-4xl font-light text-stone-800 mb-8">企業理念</h2>
                <div className="space-y-8">
                  <div className="p-8 bg-stone-50 rounded-lg">
                    <h3 className="text-2xl font-medium text-stone-800 mb-4">Mission</h3>
                    <p className="text-stone-600 leading-relaxed">
                      シンプルで美しいコンテンツ管理体験を、
                      すべての人に届ける
                    </p>
                  </div>
                  <div className="p-8 bg-stone-50 rounded-lg">
                    <h3 className="text-2xl font-medium text-stone-800 mb-4">Vision</h3>
                    <p className="text-stone-600 leading-relaxed">
                      技術的複雑さを取り除き、
                      創造性に集中できる世界を実現する
                    </p>
                  </div>
                  <div className="p-8 bg-stone-50 rounded-lg">
                    <h3 className="text-2xl font-medium text-stone-800 mb-4">Values</h3>
                    <p className="text-stone-600 leading-relaxed">
                      シンプリシティ、ユーザビリティ、
                      そして継続的な革新
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革セクション */}
      <section className="py-20 px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-stone-800 text-center mb-16">沿革</h2>
          <div className="space-y-12">
            <div className="flex items-start space-x-8">
              <div className="text-2xl font-light text-stone-500 min-w-[120px]">2024.04</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-stone-800 mb-2">CMSサイトスタジオ株式会社設立</h3>
                <p className="text-stone-600">ヘッドレスCMS事業を開始</p>
              </div>
            </div>
            <div className="flex items-start space-x-8">
              <div className="text-2xl font-light text-stone-500 min-w-[120px]">2024.06</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-stone-800 mb-2">β版リリース</h3>
                <p className="text-stone-600">限定ユーザーによるテスト運用開始</p>
              </div>
            </div>
            <div className="flex items-start space-x-8">
              <div className="text-2xl font-light text-stone-500 min-w-[120px]">2024.09</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-stone-800 mb-2">v1.0正式リリース</h3>
                <p className="text-stone-600">一般向けサービス開始</p>
              </div>
            </div>
            <div className="flex items-start space-x-8">
              <div className="text-2xl font-light text-stone-500 min-w-[120px]">2024.12</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-stone-800 mb-2">多言語対応開始</h3>
                <p className="text-stone-600">グローバル展開に向けた機能拡充</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-stone-800 mb-8">代表メッセージ</h2>
            <div className="w-24 h-1 bg-stone-400 mx-auto"></div>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-12 shadow-sm">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-medium text-stone-800">代表取締役 山田太郎</h3>
              <p className="text-stone-500">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                私たちは「シンプルであること」を最も大切にしています。
                技術は複雑になりがちですが、ユーザーが触れる部分は
                可能な限りシンプルでなければならないと考えています。
              </p>
              <p>
                CMSサイトスタジオは、コンテンツ制作者が技術的な制約に
                悩まされることなく、創造性に集中できる環境を提供します。
                私たちの使命は、すべての人がデジタルコンテンツを
                美しく、効率的に管理できる世界を実現することです。
              </p>
              <p>
                これからも、ユーザーの声に耳を傾け、
                継続的な改善と革新を続けてまいります。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}