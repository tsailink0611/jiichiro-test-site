'use client'

import { useEffect, useState } from 'react'

interface HeroLuxuryProps {
  title: string
  subtitle: string
}

export default function HeroLuxury({ title, subtitle }: HeroLuxuryProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  // CTA関連はstate削除してシンプル化

  useEffect(() => {
    // ゆったりとした上品なアニメーション
    const timer1 = setTimeout(() => setIsVisible(true), 500)
    const timer2 = setTimeout(() => setTitleVisible(true), 1000)
    const timer3 = setTimeout(() => setSubtitleVisible(true), 2500)
    // CTA関連timer削除

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      // timer4削除
    }
  }, [])

  const subtitleLines = subtitle.split('\\n')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 和風背景アニメーション */}
      <div className="absolute inset-0">
        {/* グラスモーフィズム背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 via-emerald-800/30 to-stone-800/40"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-slate-900/20"></div>

        {/* 和風パターン */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 border border-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-white rounded-full animate-pulse delay-2000"></div>
        </div>

        {/* 浮遊する和風エレメント */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-stone-300/30 rounded-full opacity-40 animate-float-${i % 3 + 1}`}
              style={{
                left: `${25 + i * 20}%`,
                top: `${35 + (i % 2) * 25}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + i % 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* 微細な光の粒子 */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-stone-300 rounded-full opacity-20 animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 6}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* タイトル - 超高級感演出 */}
        <h1 className="text-white mb-12">
          <span className="block text-6xl md:text-7xl lg:text-9xl font-extralight tracking-[0.3em] mb-6 leading-tight">
            {title.split('').map((char, index) => {
              if (char === ' ') {
                return <span key={index} className="inline-block w-12"></span>
              }
              return (
                <span
                  key={index}
                  className={`inline-block transition-all duration-1500 ease-out transform ${
                    titleVisible
                      ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                      : 'opacity-0 translate-y-12 scale-90 rotate-1'
                  }`}
                  style={{
                    transitionDelay: `${titleVisible ? index * 0.12 + 0.8 : 0}s`,
                    filter: titleVisible ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' : 'blur(3px)',
                    textShadow: titleVisible ? '0 0 20px rgba(255,255,255,0.1)' : 'none'
                  }}
                >
                  {char}
                </span>
              )
            })}
          </span>
          {/* 下のタグライン */}
          <div className={`text-center transition-all duration-1200 ease-out transform ${
            titleVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '2.5s' }}>
            <span className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.4em] text-stone-200/80">
              伝統の逸品
            </span>
          </div>
        </h1>

        {/* 装飾線 - より繊細で上品 */}
        <div className={`flex justify-center mb-16 transition-all duration-2500 ease-out ${
          titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`} style={{ transitionDelay: '3s' }}>
          <div className="relative">
            <div className="h-px bg-gradient-to-r from-transparent via-stone-300/40 to-transparent w-80"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-stone-300/60 rounded-full -mt-0.5"></div>
          </div>
        </div>

        {/* サブタイトル - 情緒あるメッセージ */}
        <div className="text-stone-100/70 mb-20">
          {subtitleLines.map((line, index) => (
            <p
              key={index}
              className={`text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] leading-relaxed mb-6 transition-all duration-2000 ease-out transform ${
                subtitleVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${subtitleVisible ? index * 0.6 + 3.5 : 0}s`,
                filter: subtitleVisible ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' : 'blur(2px)',
                textShadow: '0 1px 3px rgba(0,0,0,0.3)'
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTAボタン無し - 純粋な美しさを追求 */}
      </div>

      {/* スクロールインジケーター削除 - ミニマルな美しさ */}

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-15px) scale(1.1); opacity: 0.6; }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          33% { transform: translateY(-10px) translateX(8px) scale(1.05); opacity: 0.5; }
          66% { transform: translateY(-3px) translateX(-4px) scale(0.95); opacity: 0.4; }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
          50% { transform: translateY(-20px) scale(1.15); opacity: 0.3; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          25% { opacity: 0.4; transform: scale(1.2); }
          50% { opacity: 0.6; transform: scale(1); }
          75% { opacity: 0.3; transform: scale(1.1); }
        }

        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 12s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}