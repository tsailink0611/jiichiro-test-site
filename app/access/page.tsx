'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="pt-24 pb-20 px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-extralight text-stone-800 tracking-wider">
            アクセス
          </h1>
          <div className="w-24 h-1 bg-stone-400 mx-auto"></div>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            都心の便利な立地でお待ちしております<br />
            お気軽にお越しください
          </p>
        </div>
      </section>

      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 左側：地図 */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-stone-800 mb-8">所在地</h2>
                {/* 地図プレースホルダー */}
                <div className="aspect-square bg-stone-100 rounded-lg border border-stone-200 flex items-center justify-center">
                  <div className="text-center text-stone-500">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-lg">Google Maps</p>
                    <p className="text-sm">東京都千代田区千代田1-1-1</p>
                  </div>
                </div>
              </div>

              {/* 交通手段詳細 */}
              <div className="bg-stone-50 rounded-lg p-8">
                <h3 className="text-2xl font-medium text-stone-800 mb-6">最寄駅からのルート</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-stone-800 mb-2 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full text-xs flex items-center justify-center mr-3">JR</span>
                      JR東京駅から
                    </h4>
                    <p className="text-stone-600 ml-9">
                      丸の内中央口より徒歩5分<br />
                      皇居方面へ向かい、内堀通りを直進
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800 mb-2 flex items-center">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded-full text-xs flex items-center justify-center mr-3">地</span>
                      地下鉄大手町駅から
                    </h4>
                    <p className="text-stone-600 ml-9">
                      A1出口より徒歩3分<br />
                      出口を出て右へ、最初の角を左折
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800 mb-2 flex items-center">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full text-xs flex items-center justify-center mr-3">地</span>
                      地下鉄二重橋前駅から
                    </h4>
                    <p className="text-stone-600 ml-9">
                      1番出口より徒歩7分<br />
                      皇居外苑方面へ向かって直進
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：詳細情報 */}
            <div className="space-y-12 lg:pl-8">
              {/* 基本情報 */}
              <div>
                <h2 className="text-3xl font-light text-stone-800 mb-8">オフィス情報</h2>
                <div className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <dt className="text-stone-500 text-sm font-medium mb-2">住所</dt>
                    <dd className="text-xl text-stone-800">
                      〒100-0001<br />
                      東京都千代田区千代田1-1-1<br />
                      CMSビル 5F
                    </dd>
                  </div>
                  <div className="border-b border-stone-200 pb-4">
                    <dt className="text-stone-500 text-sm font-medium mb-2">電話番号</dt>
                    <dd className="text-xl text-stone-800">03-1234-5678</dd>
                  </div>
                  <div className="border-b border-stone-200 pb-4">
                    <dt className="text-stone-500 text-sm font-medium mb-2">営業時間</dt>
                    <dd className="text-xl text-stone-800">
                      平日 9:00 - 18:00<br />
                      <span className="text-stone-500 text-base">土日祝日は休業</span>
                    </dd>
                  </div>
                  <div className="border-b border-stone-200 pb-4">
                    <dt className="text-stone-500 text-sm font-medium mb-2">受付</dt>
                    <dd className="text-xl text-stone-800">
                      5F エレベーター右手<br />
                      <span className="text-stone-500 text-base">事前にお電話でご連絡ください</span>
                    </dd>
                  </div>
                </div>
              </div>

              {/* 駐車場情報 */}
              <div className="bg-stone-50 rounded-lg p-8">
                <h3 className="text-2xl font-medium text-stone-800 mb-6">駐車場のご案内</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-stone-800 mb-2">提携駐車場</h4>
                    <p className="text-stone-600">
                      大手町パーキング（徒歩2分）<br />
                      料金：30分 300円<br />
                      営業時間：24時間
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800 mb-2">来客用駐車場</h4>
                    <p className="text-stone-600">
                      事前予約制（2台まで）<br />
                      ご来社前日までにお電話でご予約ください
                    </p>
                  </div>
                </div>
              </div>

              {/* 周辺施設 */}
              <div>
                <h3 className="text-2xl font-medium text-stone-800 mb-6">周辺施設</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border border-stone-200 rounded-lg">
                    <div className="text-2xl mb-2">🏛️</div>
                    <h4 className="font-medium text-stone-800 text-sm">皇居東御苑</h4>
                    <p className="text-stone-500 text-xs">徒歩5分</p>
                  </div>
                  <div className="text-center p-4 border border-stone-200 rounded-lg">
                    <div className="text-2xl mb-2">🏢</div>
                    <h4 className="font-medium text-stone-800 text-sm">東京駅</h4>
                    <p className="text-stone-500 text-xs">徒歩5分</p>
                  </div>
                  <div className="text-center p-4 border border-stone-200 rounded-lg">
                    <div className="text-2xl mb-2">🛍️</div>
                    <h4 className="font-medium text-stone-800 text-sm">丸の内仲通り</h4>
                    <p className="text-stone-500 text-xs">徒歩3分</p>
                  </div>
                  <div className="text-center p-4 border border-stone-200 rounded-lg">
                    <div className="text-2xl mb-2">☕</div>
                    <h4 className="font-medium text-stone-800 text-sm">カフェ・レストラン</h4>
                    <p className="text-stone-500 text-xs">多数</p>
                  </div>
                </div>
              </div>

              {/* ご来社について */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <h3 className="text-2xl font-medium text-stone-800 mb-4">ご来社について</h3>
                <div className="space-y-3 text-stone-700">
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    事前にお電話またはメールでご連絡ください
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    受付で「CMSサイトスタジオ」とお伝えください
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    お打ち合わせスペースをご用意しております
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Wi-Fi、電源、飲み物を無料でご利用いただけます
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}