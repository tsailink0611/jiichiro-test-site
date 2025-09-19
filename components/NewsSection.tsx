import Image from 'next/image';

export default function NewsSection() {
  const newsItems = [
    {
      date: "2025/09/17",
      category: "重要なお知らせ",
      title: "カスタマーサポート体制に関するお知らせ"
    },
    {
      date: "2025/09/02",
      category: "重要なお知らせ",
      title: "商品表示変更アソートについて"
    },
    {
      date: "2025/08/15",
      category: "新商品",
      title: "季節限定抹茶バウムクーヘンの販売開始"
    },
    {
      date: "2025/08/01",
      category: "キャンペーン",
      title: "夏のギフトセット特別価格のご案内"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        <div className="grid gap-12 md:gap-16 lg:gap-20 md:grid-cols-3">
          {/* News List */}
          <div className="md:col-span-2">
            <h2 className="font-serif-jp text-3xl md:text-4xl font-bold text-brand mb-12 md:mb-16 border-b-2 border-brand pb-4">
              お知らせ
            </h2>
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <div key={index} className="group flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 pb-6 border-b border-gray-200 hover:border-brand/30 transition-colors duration-300">
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-mono text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded group-hover:bg-brand/10 transition-colors duration-300">
                      {item.date}
                    </span>
                    <span className="text-xs bg-brand text-white px-3 py-1 rounded-full group-hover:bg-brand/90 group-hover:shadow-md transition-all duration-300">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-gray-800 group-hover:text-brand transition-colors duration-300 cursor-pointer leading-relaxed">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-12 md:mt-16">
              <a
                href="#"
                className="group inline-flex items-center text-brand hover:text-brand/80 transition-all duration-300 font-medium hover:underline underline-offset-4"
              >
                お知らせ一覧を見る
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Side Banner */}
          <div className="md:col-span-1">
            <div className="group bg-cream rounded-xl p-8 md:p-10 text-center hover:bg-cream/80 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-4 overflow-hidden rounded">
                <div className="w-full h-32 rounded bg-brand group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-serif-jp font-bold">ギフトセット</span>
                </div>
              </div>
              <h3 className="font-serif-jp text-xl font-bold text-brand mb-2 group-hover:text-brand/80 transition-colors duration-300">
                ギフトセット
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                大切な方への贈り物に<br />
                上質なバウムクーヘンセット
              </p>
              <a
                href="#"
                className="inline-block bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand/90 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
              >
                詳しく見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}