'use client'

import { useEffect, useState } from 'react'

interface HeroLuxuryProps {
  title: string
  subtitle: string
  ctaText?: string
}

export default function HeroLuxury({ title, subtitle, ctaText }: HeroLuxuryProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    // ゆったりとした上品なアニメーション
    const timer1 = setTimeout(() => setIsVisible(true), 500)
    const timer2 = setTimeout(() => setTitleVisible(true), 1000)
    const timer3 = setTimeout(() => setSubtitleVisible(true), 2500)
    const timer4 = setTimeout(() => setCtaVisible(true), 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
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
        {/* タイトル */}
        <h1 className="text-white mb-8">
          <span className="block text-6xl md:text-7xl lg:text-8xl font-extralight tracking-widest mb-4 leading-tight">
            {title.split('').map((char, index) => {
              if (char === ' ') {
                return <span key={index} className="inline-block w-8"></span>
              }
              return (
                <span
                  key={index}
                  className={`inline-block transition-all duration-1000 ease-out transform ${
                    titleVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{
                    transitionDelay: `${titleVisible ? index * 0.08 + 0.5 : 0}s`,
                    filter: titleVisible ? 'none' : 'blur(2px)'
                  }}
                >
                  {char}
                </span>
              )
            })}
          </span>
        </h1>

        {/* 装飾線 */}
        <div className={`flex justify-center mb-12 transition-all duration-2000 ease-out ${
          titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`} style={{ transitionDelay: '1.5s' }}>
          <div className="h-px bg-gradient-to-r from-transparent via-stone-400/60 to-transparent w-64"></div>
        </div>

        {/* サブタイトル */}
        <div className="text-stone-200/90 mb-16">
          {subtitleLines.map((line, index) => (
            <p
              key={index}
              className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-wide leading-relaxed mb-4 transition-all duration-1500 ease-out transform ${
                subtitleVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: `${subtitleVisible ? index * 0.4 + 2 : 0}s`,
                filter: subtitleVisible ? 'none' : 'blur(1px)'
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTA */}
        {ctaText && ctaText.trim() !== "" && (
          <div
            className={`transition-all duration-1200 ease-out transform ${
              ctaVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '3s' }}
          >
            <a
              href="#products"
              className="group inline-flex items-center px-12 py-4 text-stone-800 bg-stone-200/80 backdrop-blur-sm rounded-full text-lg font-medium tracking-wide transition-all duration-700 hover:bg-stone-100/90 hover:shadow-xl hover:shadow-stone-500/10 transform hover:-translate-y-1 border border-stone-300/30"
            >
              {ctaText}
              <svg
                className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* スクロールインジケーター - CTAがない場合のみ表示 */}
      {(!ctaText || ctaText.trim() === "") && (
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          subtitleVisible ? 'opacity-40' : 'opacity-0'
        }`} style={{ transitionDelay: '4s' }}>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-stone-400/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-stone-400/40 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

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