'use client'

import { useEffect, useState } from 'react'

interface HeroLuxuryProps {
  title: string
  subtitle: string
}

export default function HeroLuxury({ title, subtitle }: HeroLuxuryProps) {
  const [stage1, setStage1] = useState(false) // 背景アニメーション
  const [stage2, setStage2] = useState(false) // タイトル登場
  const [stage3, setStage3] = useState(false) // サブタイトル登場

  useEffect(() => {
    // 3段階のシンプルアニメーション
    const timer1 = setTimeout(() => setStage1(true), 300)  // 背景開始
    const timer2 = setTimeout(() => setStage2(true), 1200) // タイトル登場
    const timer3 = setTimeout(() => setStage3(true), 2000) // サブタイトル登場

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const subtitleLines = subtitle.split('\\n')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 水墨画×モダン背景アート */}
      <div className="absolute inset-0">
        {/* ベースグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-stone-700/50 to-slate-900/70"></div>

        {/* 水墨画風ストローク */}
        <div className={`absolute inset-0 transition-all duration-3000 ease-out ${
          stage1 ? 'opacity-30' : 'opacity-0'
        }`}>
          {/* 大きな筆ストローク */}
          <div className="absolute top-20 left-10 w-96 h-2 bg-gradient-to-r from-transparent via-stone-300/20 to-transparent transform -rotate-12 animate-inkFlow"></div>
          <div className="absolute top-1/3 right-20 w-64 h-1 bg-gradient-to-l from-transparent via-stone-400/15 to-transparent transform rotate-6 animate-inkFlow delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-1 bg-gradient-to-r from-transparent via-stone-200/25 to-transparent transform -rotate-3 animate-inkFlow delay-2000"></div>
        </div>

        {/* モダンな幾何学エレメント */}
        <div className={`absolute inset-0 transition-all duration-2000 ease-out ${
          stage1 ? 'opacity-20' : 'opacity-0'
        }`}>
          <div className="absolute top-1/4 left-1/3 w-32 h-32 border border-stone-300/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-stone-400/15 transform rotate-45 animate-slowSpin"></div>
        </div>

        {/* 煙雲のようなエフェクト */}
        <div className={`absolute inset-0 transition-all duration-4000 ease-out ${
          stage1 ? 'opacity-40' : 'opacity-0'
        }`}>
          <div className="absolute top-10 right-10 w-40 h-40 bg-radial-gradient from-stone-200/5 to-transparent rounded-full animate-breathe"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-radial-gradient from-stone-300/3 to-transparent rounded-full animate-breathe delay-3000"></div>
        </div>

        {/* 微細な光の粒子 */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          stage1 ? 'opacity-100' : 'opacity-0'
        }`}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-stone-200/30 rounded-full animate-twinkle"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* タイトル - シンプルな浮き上がり */}
        <h1 className={`text-white mb-12 transition-all duration-2000 ease-out transform ${
          stage2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="block text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[0.25em] mb-6 leading-tight">
            {title}
          </span>
          {/* 下のタグライン */}
          <div className={`text-center transition-all duration-1500 ease-out transform ${
            stage2 ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '0.5s' }}>
            <span className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] text-stone-200/70">
              伝統の逸品
            </span>
          </div>
        </h1>

        {/* 装飾線 - シンプルな登場 */}
        <div className={`flex justify-center mb-16 transition-all duration-1500 ease-out ${
          stage2 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`} style={{ transitionDelay: '1s' }}>
          <div className="relative">
            <div className="h-px bg-gradient-to-r from-transparent via-stone-300/30 to-transparent w-72"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-stone-300/50 rounded-full -mt-0.5"></div>
          </div>
        </div>

        {/* サブタイトル - シンプルな情緒 */}
        <div className={`text-stone-100/60 mb-20 transition-all duration-1800 ease-out transform ${
          stage3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {subtitleLines.map((line, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.15em] leading-relaxed mb-4"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
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
        @keyframes inkFlow {
          0% { opacity: 0; transform: scaleX(0) rotate(var(--rotation)); }
          50% { opacity: 1; transform: scaleX(1) rotate(var(--rotation)); }
          100% { opacity: 0.3; transform: scaleX(0.8) rotate(var(--rotation)); }
        }

        @keyframes slowSpin {
          0% { transform: rotate(45deg) scale(1); opacity: 0.1; }
          50% { transform: rotate(90deg) scale(1.05); opacity: 0.2; }
          100% { transform: rotate(135deg) scale(1); opacity: 0.1; }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          25% { opacity: 0.4; transform: scale(1.2); }
          50% { opacity: 0.6; transform: scale(1); }
          75% { opacity: 0.3; transform: scale(1.1); }
        }

        .animate-inkFlow {
          animation: inkFlow 8s ease-in-out infinite;
        }

        .animate-slowSpin {
          animation: slowSpin 20s linear infinite;
        }

        .animate-breathe {
          animation: breathe 6s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        .bg-radial-gradient {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </section>
  )
}