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
    // 段階的なアニメーション
    const timer1 = setTimeout(() => setIsVisible(true), 300)
    const timer2 = setTimeout(() => setTitleVisible(true), 800)
    const timer3 = setTimeout(() => setSubtitleVisible(true), 1400)
    const timer4 = setTimeout(() => setCtaVisible(true), 2000)

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
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-900"></div>

        {/* 和風パターン */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 border border-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-white rounded-full animate-pulse delay-2000"></div>
        </div>

        {/* 浮遊する和風エレメント */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-emerald-300 rounded-full opacity-20 animate-float-${i % 3 + 1}`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i % 3}s`
              }}
            ></div>
          ))}
        </div>

        {/* 微細な雪のようなエフェクト */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-snowfall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* タイトル */}
        <h1 className={`text-white mb-8 transition-all duration-2000 transform ${
          titleVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}>
          <span className="block text-6xl md:text-7xl lg:text-8xl font-extralight tracking-widest mb-4 leading-tight">
            {title.split(' ').map((char, index) => (
              <span
                key={index}
                className="inline-block animate-titleFade"
                style={{
                  animationDelay: `${titleVisible ? index * 0.1 : 0}s`,
                  animationFillMode: 'both'
                }}
              >
                {char}
                {index < title.split(' ').length - 1 && <span className="inline-block w-8"></span>}
              </span>
            ))}
          </span>
        </h1>

        {/* 装飾線 */}
        <div className={`flex justify-center mb-12 transition-all duration-1500 delay-1000 ${
          titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}>
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-64"></div>
        </div>

        {/* サブタイトル */}
        <div className={`text-emerald-100 mb-16 transition-all duration-1500 transform ${
          subtitleVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          {subtitleLines.map((line, index) => (
            <p
              key={index}
              className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-wide leading-relaxed mb-4 animate-subtitleFade`}
              style={{
                animationDelay: `${subtitleVisible ? index * 0.3 + 0.5 : 0}s`,
                animationFillMode: 'both'
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className={`transition-all duration-1000 transform ${
            ctaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <a
              href="#products"
              className="group inline-flex items-center px-12 py-4 text-emerald-900 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full text-lg font-medium tracking-wide transition-all duration-700 hover:from-emerald-200 hover:to-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
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

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes titleFade {
          0% { opacity: 0; transform: translateY(30px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes subtitleFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(-5px) translateX(-5px); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }

        @keyframes snowfall {
          0% { transform: translateY(-10px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) translateX(50px); opacity: 0; }
        }

        .animate-titleFade {
          animation: titleFade 0.8s ease-out forwards;
        }

        .animate-subtitleFade {
          animation: subtitleFade 0.6s ease-out forwards;
        }

        .animate-float-1 {
          animation: float-1 4s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 5s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 6s ease-in-out infinite;
        }

        .animate-snowfall {
          animation: snowfall 8s linear infinite;
        }
      `}</style>
    </section>
  )
}