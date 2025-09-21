'use client'

import { useEffect, useRef, useState } from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ContentManagerEnhanced, type TraditionContent } from '@/lib/content-manager-enhanced'

export default function TraditionPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const bentoRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const [traditionContent, setTraditionContent] = useState<TraditionContent | null>(null)

  useEffect(() => {
    // コンテンツロード
    const loadContent = async () => {
      try {
        const siteContent = await ContentManagerEnhanced.getContent()
        setTraditionContent(siteContent.tradition)
      } catch (error) {
        console.error('伝統ページコンテンツ読み込みエラー:', error)
      }
    }

    loadContent()

    // リアルタイム更新リスナー
    const handleContentUpdate = (event: CustomEvent) => {
      const updatedContent = event.detail
      setTraditionContent(updatedContent.tradition)
    }

    window.addEventListener('content-updated', handleContentUpdate as EventListener)
    return () => window.removeEventListener('content-updated', handleContentUpdate as EventListener)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // ロゴ浮き上がりアニメーション
      if (logoRef.current) {
        const translateY = Math.max(0, 100 - scrollY * 0.1)
        const opacity = Math.min(1, scrollY * 0.005)
        logoRef.current.style.transform = `translateY(${translateY}px)`
        logoRef.current.style.opacity = opacity.toString()
      }

      // 洗練された浮遊要素アニメーション
      if (bentoRef.current) {
        const translateY = Math.max(0, 120 - scrollY * 0.12)
        const translateX = Math.sin(scrollY * 0.01) * 8
        const opacity = Math.min(1, (scrollY - 100) * 0.003)
        const scale = Math.min(1, 0.8 + (scrollY * 0.0005))
        bentoRef.current.style.transform = `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`
        bentoRef.current.style.opacity = opacity.toString()
      }

      // 横スクロールセクション制御
      if (horizontalRef.current) {
        const rect = horizontalRef.current.getBoundingClientRect()
        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
          const progress = Math.abs(rect.top) / (rect.height - window.innerHeight)
          const translateX = progress * (horizontalRef.current.scrollWidth - window.innerWidth)
          horizontalRef.current.style.transform = `translateX(-${translateX}px)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <Header />

      {/* ヒーローセクション */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/20 to-transparent"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='1920' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f5f5f4'/%3E%3Cpath d='M0,300 Q480,200 960,300 T1920,300 L1920,1080 L0,1080 Z' fill='%23e7e5e4'/%3E%3C/svg%3E')"
          }}
        ></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <h1 className="text-7xl md:text-9xl font-extralight text-stone-800 mb-8 tracking-wider">
            {traditionContent?.heroTitle || '伝統'}
          </h1>
          <p className="text-2xl md:text-3xl text-stone-600 font-light leading-relaxed">
            {traditionContent?.heroSubtitle?.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < (traditionContent?.heroSubtitle?.split('\n').length || 1) - 1 && <br />}
              </span>
            )) || (
              <>
                受け継がれる技と心<br />
                時を超えて愛される味わい
              </>
            )}
          </p>
        </div>

        {/* 浮き上がるロゴ要素 */}
        <div
          ref={logoRef}
          className="absolute bottom-20 right-20 opacity-0 pointer-events-none"
        >
          <div className="text-8xl font-bold text-stone-300/30 select-none">
            梵天庵
          </div>
        </div>
      </div>

      {/* コンテンツセクション1 */}
      <section className="py-40 md:py-48 lg:py-56 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-40 items-center">
            <div className="space-y-12 lg:space-y-16">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-stone-800 leading-tight tracking-wider">
                {traditionContent?.sectionTitle?.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < (traditionContent?.sectionTitle?.split('\n').length || 1) - 1 && <br />}
                  </span>
                )) || (
                  <>
                    四季を纏う<br />
                    職人の技
                  </>
                )}
              </h2>
              <div className="w-32 h-1 bg-stone-400"></div>
              <p className="text-2xl md:text-3xl text-stone-600 leading-relaxed font-light max-w-2xl">
                創業以来変わらぬ製法で、一つひとつ丁寧に仕上げる和菓子。
                季節の移ろいを表現し、素材の持つ本来の美味しさを大切にしています。
              </p>
              <p className="text-xl md:text-2xl text-stone-500 leading-relaxed font-extralight max-w-xl">
                熟練の職人が長年培った技術と感性により、
                伝統の味を現代に受け継いでいます。
              </p>
            </div>
            <div className="relative">
              <div
                className="aspect-square bg-stone-200 rounded-lg shadow-2xl"
                style={{
                  backgroundImage: "url('data:image/svg+xml,%3Csvg width='600' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f5f5f4'/%3E%3Ccircle cx='300' cy='300' r='150' fill='%23d6d3d1'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%23a8a29e' text-anchor='middle' dy='0.3em'%3E職人の技%3C/text%3E%3C/svg%3E')",
                  backgroundSize: 'cover'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* 洗練された浮遊要素 */}
      <div
        ref={bentoRef}
        className="fixed left-10 top-1/2 opacity-0 pointer-events-none z-10"
      >
        <div className="relative">
          {/* メイン要素 - 和の美学 */}
          <div className="text-4xl font-extralight text-stone-400/30 select-none tracking-[0.3em] writing-mode-vertical-rl">
            和の心
          </div>

          {/* 装飾要素1 - 微細な粒子効果 */}
          <div className="absolute -top-8 -left-4 w-2 h-2 bg-stone-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-12 -right-2 w-1 h-1 bg-stone-400/25 rounded-full" style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-6 left-2 w-1.5 h-1.5 bg-stone-200/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

          {/* 装飾要素2 - 繊細なライン */}
          <div className="absolute top-0 -right-8 w-12 h-px bg-gradient-to-r from-transparent via-stone-300/20 to-transparent"></div>
          <div className="absolute bottom-0 -left-8 w-10 h-px bg-gradient-to-r from-stone-200/15 via-transparent to-stone-300/20"></div>
        </div>
      </div>

      {/* 横スクロールセクション */}
      <section className="h-screen overflow-hidden relative bg-stone-900">
        <div
          ref={horizontalRef}
          className="flex h-full"
          style={{ width: '400vw' }}
        >
          {/* スライド1 */}
          <div className="w-screen h-full flex items-center justify-center relative">
            <div className="text-center text-white px-8">
              <h3 className="text-6xl font-light mb-8">匠の心</h3>
              <p className="text-2xl font-light max-w-2xl leading-relaxed">
                一つひとつの作品に込められた<br />
                職人の想いと技術
              </p>
            </div>
          </div>

          {/* スライド2 */}
          <div className="w-screen h-full flex items-center justify-center relative bg-stone-800">
            <div className="text-center text-white px-8">
              <h3 className="text-6xl font-light mb-8">季節の恵み</h3>
              <p className="text-2xl font-light max-w-2xl leading-relaxed">
                厳選された素材で表現する<br />
                四季の美しさ
              </p>
            </div>
          </div>

          {/* スライド3 */}
          <div className="w-screen h-full flex items-center justify-center relative bg-stone-700">
            <div className="text-center text-white px-8">
              <h3 className="text-6xl font-light mb-8">伝承の味</h3>
              <p className="text-2xl font-light max-w-2xl leading-relaxed">
                代々受け継がれる<br />
                変わらぬ美味しさ
              </p>
            </div>
          </div>

          {/* スライド4 */}
          <div className="w-screen h-full flex items-center justify-center relative bg-stone-600">
            <div className="text-center text-white px-8">
              <h3 className="text-6xl font-light mb-8">未来への約束</h3>
              <p className="text-2xl font-light max-w-2xl leading-relaxed">
                伝統を守りながら<br />
                新しい価値を創造
              </p>
            </div>
          </div>
        </div>

        {/* スクロール指示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
          ← 横スクロールでご覧ください →
        </div>
      </section>

      {/* 最終セクション */}
      <section className="py-48 md:py-56 lg:py-64 px-8 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-6xl mx-auto text-center space-y-20 lg:space-y-24">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-stone-800 leading-tight tracking-wider">
            {traditionContent?.finalTitle || '伝統は、未来への贈り物'}
          </h2>
          <div className="w-40 h-1 bg-stone-400 mx-auto"></div>
          <p className="text-2xl md:text-3xl lg:text-4xl text-stone-600 leading-relaxed font-extralight max-w-5xl mx-auto">
            {traditionContent?.finalMessage?.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < (traditionContent?.finalMessage?.split('\n').length || 1) - 1 && <br />}
              </span>
            )) || (
              <>
                私たちは、先人から受け継いだ技術と心を大切にしながら、<br />
                次世代に向けて新しい価値を創造し続けます。<br />
                伝統とは、過去の遺産ではなく、未来への約束なのです。
              </>
            )}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}