'use client'

import { useState } from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理（デモ用）
    alert('お問い合わせありがとうございます。担当者より3営業日以内にご連絡いたします。')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="pt-24 pb-20 px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-extralight text-stone-800 tracking-wider">
            お問い合わせ
          </h1>
          <div className="w-24 h-1 bg-stone-400 mx-auto"></div>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            ご質問・ご相談はお気軽にお寄せください<br />
            専門スタッフが丁寧にお答えいたします
          </p>
        </div>
      </section>

      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 左側：お問い合わせフォーム */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-stone-800 mb-8">お問い合わせフォーム</h2>
                <p className="text-stone-600 mb-8">
                  下記フォームよりお気軽にお問い合わせください。<br />
                  3営業日以内にご返信いたします。
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-stone-700 font-medium mb-3">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all"
                    placeholder="山田太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-stone-700 font-medium mb-3">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all"
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-stone-700 font-medium mb-3">
                    会社名・団体名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all"
                    placeholder="株式会社サンプル"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-stone-700 font-medium mb-3">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all resize-vertical"
                    placeholder="ご質問・ご相談内容をご記入ください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-800 text-white py-4 px-8 rounded-lg hover:bg-stone-700 transition-colors duration-300 font-medium text-lg"
                >
                  送信する
                </button>
              </form>
            </div>

            {/* 右側：連絡先情報 */}
            <div className="space-y-12 lg:pl-8">
              <div>
                <h2 className="text-3xl font-light text-stone-800 mb-8">その他のお問い合わせ方法</h2>

                <div className="space-y-8">
                  {/* 電話 */}
                  <div className="p-6 bg-stone-50 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">📞</span>
                      </div>
                      <h3 className="text-xl font-medium text-stone-800">お電話でのお問い合わせ</h3>
                    </div>
                    <p className="text-2xl font-medium text-stone-800 mb-2">03-1234-5678</p>
                    <p className="text-stone-600">受付時間：平日 9:00-18:00</p>
                  </div>

                  {/* メール */}
                  <div className="p-6 bg-stone-50 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <h3 className="text-xl font-medium text-stone-800">メールでのお問い合わせ</h3>
                    </div>
                    <p className="text-xl text-stone-800 mb-2">info@cms-site-studio.com</p>
                    <p className="text-stone-600">24時間受付（返信は営業時間内）</p>
                  </div>

                  {/* 住所 */}
                  <div className="p-6 bg-stone-50 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">📍</span>
                      </div>
                      <h3 className="text-xl font-medium text-stone-800">所在地</h3>
                    </div>
                    <p className="text-stone-800 mb-2">
                      〒100-0001<br />
                      東京都千代田区千代田1-1-1<br />
                      CMSビル 5F
                    </p>
                    <p className="text-stone-600">
                      最寄駅：JR東京駅 徒歩5分<br />
                      地下鉄大手町駅 徒歩3分
                    </p>
                  </div>
                </div>
              </div>

              {/* よくある質問 */}
              <div>
                <h3 className="text-2xl font-light text-stone-800 mb-6">よくある質問</h3>
                <div className="space-y-4">
                  <div className="border border-stone-200 rounded-lg p-4">
                    <h4 className="font-medium text-stone-800 mb-2">サポート体制について教えてください</h4>
                    <p className="text-stone-600 text-sm">専属カスタマーサクセスチームが導入から運用まで全面的にサポートいたします。</p>
                  </div>
                  <div className="border border-stone-200 rounded-lg p-4">
                    <h4 className="font-medium text-stone-800 mb-2">料金プランについて</h4>
                    <p className="text-stone-600 text-sm">用途に応じた柔軟な料金プランをご用意しています。詳細はお問い合わせください。</p>
                  </div>
                  <div className="border border-stone-200 rounded-lg p-4">
                    <h4 className="font-medium text-stone-800 mb-2">無料トライアルはありますか？</h4>
                    <p className="text-stone-600 text-sm">14日間の無料トライアルをご利用いただけます。クレジットカード登録は不要です。</p>
                  </div>
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