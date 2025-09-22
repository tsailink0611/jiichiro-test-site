'use client'

import { useEffect, useState } from 'react'

interface HeroLuxuryProps {
  title: string
  subtitle: string
}

export default function HeroLuxury({ title, subtitle }: HeroLuxuryProps) {
  const [mounted, setMounted] = useState(false)
  const [stage1, setStage1] = useState(false) // 背景登場
  const [stage2, setStage2] = useState(false) // タイトル登場
  const [stage3, setStage3] = useState(false) // サブタイトル登場

  useEffect(() => {
    setMounted(true)

    // 非常にゆっくりとした段階的アニメーション
    const timer1 = setTimeout(() => setStage1(true), 800)   // 背景：0.8秒後
    const timer2 = setTimeout(() => setStage2(true), 2500)  // タイトル：2.5秒後
    const timer3 = setTimeout(() => setStage3(true), 4500)  // サブタイトル：4.5秒後

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const subtitleLines = subtitle.split('\\n')

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 和風水墨画背景 */}
      <div className="absolute inset-0">
        {/* ベースグラデーション - 深い色合い */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-slate-800 to-stone-900"></div>

        {/* 水墨画エフェクト層1 - 大きな筆ストローク */}
        <div
          className={`absolute inset-0 transition-all duration-6000 ease-out ${
            stage1 ? 'opacity-40' : 'opacity-0'
          }`}
        >
          {/* 水平の大筆ストローク */}
          <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-stone-600/20 to-transparent transform -rotate-12 animate-inkBrush1"></div>
          <div className="absolute top-2/3 right-0 w-full h-24 bg-gradient-to-l from-transparent via-stone-500/15 to-transparent transform rotate-6 animate-inkBrush2"></div>

          {/* 垂直の筆ストローク */}
          <div className="absolute left-1/3 top-0 w-24 h-full bg-gradient-to-b from-transparent via-stone-400/10 to-transparent transform rotate-12 animate-inkBrush3"></div>
        </div>

        {/* 水墨画エフェクト層2 - 煙霞効果 */}
        <div
          className={`absolute inset-0 transition-all duration-8000 ease-out ${
            stage1 ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <div className="absolute top-20 right-32 w-96 h-96 bg-radial-gradient from-stone-300/8 to-transparent rounded-full animate-mistFlow1"></div>
          <div className="absolute bottom-32 left-20 w-80 h-80 bg-radial-gradient from-stone-400/6 to-transparent rounded-full animate-mistFlow2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-radial-gradient from-stone-200/4 to-transparent rounded-full animate-mistFlow3"></div>
        </div>

        {/* モダン幾何学要素 */}
        <div
          className={`absolute inset-0 transition-all duration-4000 ease-out ${
            stage1 ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <div className="absolute top-1/5 left-1/4 w-48 h-48 border border-stone-400/10 rounded-full animate-modernSpin1"></div>
          <div className="absolute bottom-1/4 right-1/3 w-32 h-32 border-2 border-stone-300/8 transform rotate-45 animate-modernSpin2"></div>
          <div className="absolute top-1/2 right-1/5 w-2 h-64 bg-gradient-to-b from-transparent via-stone-400/12 to-transparent animate-modernLine"></div>
        </div>

        {/* 微細な光の粒子 */}
        <div
          className={`absolute inset-0 transition-all duration-3000 ease-out ${
            stage1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-stone-300/40 rounded-full animate-particleFloat"
              style={{
                left: `${15 + (i % 4) * 20 + Math.random() * 10}%`,
                top: `${20 + Math.floor(i / 4) * 25 + Math.random() * 10}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        {/* タイトル - 真に有機的な登場 */}
        <div
          className={`mb-12 transition-all duration-3000 ease-out transform ${
            stage2
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[0.2em] leading-tight mb-6">
            {title}
          </h1>

          {/* タグライン */}
          <div
            className={`transition-all duration-2500 ease-out transform ${
              stage2
                ? 'opacity-70 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.25em] text-stone-200/80">
              伝統の逸品
            </span>
          </div>
        </div>

        {/* 装飾線 - ゆっくりと現れる */}
        <div
          className={`flex justify-center mb-16 transition-all duration-3000 ease-out ${
            stage2 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '1.5s' }}
        >
          <div className="relative">
            <div className="h-px bg-gradient-to-r from-transparent via-stone-300/40 to-transparent w-80"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-stone-300/60 rounded-full -mt-1"></div>
          </div>
        </div>

        {/* サブタイトル - 深い情緒で登場 */}
        <div
          className={`text-stone-100/70 transition-all duration-4000 ease-out transform ${
            stage3
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-98'
          }`}
        >
          {subtitleLines.map((line, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.1em] leading-relaxed mb-4"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }

        @keyframes inkBrush1 {
          0% { opacity: 0; transform: scaleX(0) translateX(-100%) rotate(-12deg); }
          50% { opacity: 1; transform: scaleX(1) translateX(0%) rotate(-12deg); }
          100% { opacity: 0.4; transform: scaleX(0.7) translateX(10%) rotate(-12deg); }
        }

        @keyframes inkBrush2 {
          0% { opacity: 0; transform: scaleX(0) translateX(100%) rotate(6deg); }
          60% { opacity: 1; transform: scaleX(1) translateX(0%) rotate(6deg); }
          100% { opacity: 0.3; transform: scaleX(0.8) translateX(-15%) rotate(6deg); }
        }

        @keyframes inkBrush3 {
          0% { opacity: 0; transform: scaleY(0) translateY(-100%) rotate(12deg); }
          70% { opacity: 1; transform: scaleY(1) translateY(0%) rotate(12deg); }
          100% { opacity: 0.2; transform: scaleY(0.6) translateY(20%) rotate(12deg); }
        }

        @keyframes mistFlow1 {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.08; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.12; }
        }

        @keyframes mistFlow2 {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.06; }
          50% { transform: scale(1.3) rotate(-120deg); opacity: 0.1; }
        }

        @keyframes mistFlow3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0.04; }
          50% { transform: translate(-50%, -50%) scale(1.1) rotate(90deg); opacity: 0.08; }
        }

        @keyframes modernSpin1 {
          0% { transform: rotate(0deg) scale(0.8); opacity: 0.1; }
          50% { transform: rotate(180deg) scale(1); opacity: 0.15; }
          100% { transform: rotate(360deg) scale(0.8); opacity: 0.1; }
        }

        @keyframes modernSpin2 {
          0% { transform: rotate(45deg) scale(1); opacity: 0.08; }
          50% { transform: rotate(225deg) scale(1.1); opacity: 0.12; }
          100% { transform: rotate(405deg) scale(1); opacity: 0.08; }
        }

        @keyframes modernLine {
          0%, 100% { opacity: 0.12; transform: scaleY(1); }
          50% { opacity: 0.2; transform: scaleY(1.1); }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          25% { transform: translateY(-15px) scale(1.2); opacity: 0.6; }
          50% { transform: translateY(-8px) scale(0.9); opacity: 0.3; }
          75% { transform: translateY(-20px) scale(1.1); opacity: 0.5; }
        }

        .animate-inkBrush1 {
          animation: inkBrush1 12s ease-in-out infinite;
        }

        .animate-inkBrush2 {
          animation: inkBrush2 15s ease-in-out infinite 2s;
        }

        .animate-inkBrush3 {
          animation: inkBrush3 18s ease-in-out infinite 4s;
        }

        .animate-mistFlow1 {
          animation: mistFlow1 20s ease-in-out infinite;
        }

        .animate-mistFlow2 {
          animation: mistFlow2 25s ease-in-out infinite 5s;
        }

        .animate-mistFlow3 {
          animation: mistFlow3 30s ease-in-out infinite 10s;
        }

        .animate-modernSpin1 {
          animation: modernSpin1 40s linear infinite;
        }

        .animate-modernSpin2 {
          animation: modernSpin2 35s linear infinite 8s;
        }

        .animate-modernLine {
          animation: modernLine 8s ease-in-out infinite;
        }

        .animate-particleFloat {
          animation: particleFloat 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}