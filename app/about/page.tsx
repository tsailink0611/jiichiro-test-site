"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // より精密なロゴ表示制御 - ヘッダーとフッターで消える
      const headerHeight = 80;
      const footerElement = document.querySelector('footer');
      const footerTop = footerElement ? footerElement.offsetTop : document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // ヘッダーを過ぎてからフッターの手前まで表示
      if (currentScrollY > headerHeight + 400 && currentScrollY + windowHeight < footerTop - 200) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />

      {/* 固定サイドロゴ - より洗練されたアニメーション */}
      <div
        className={`fixed left-12 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-1000 ease-out ${
          showLogo
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 -translate-x-16 scale-90"
        }`}
      >
        <div
          className="text-6xl font-serif font-bold tracking-[0.5em] text-amber-800 drop-shadow-lg"
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
        >
          梵天庵
        </div>
      </div>

      {/* ヒーローセクション - 第1層 */}
      <section className="relative h-screen overflow-hidden">
        {/* 動画風背景パララックス */}
        <div
          className="absolute inset-0 w-full h-[130%]"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: `linear-gradient(45deg,
              #F5F2E8 0%,
              #EDE7D9 25%,
              #E8DFC9 50%,
              #DDD2BA 75%,
              #D2C5A8 100%)`,
          }}
        >
          {/* 動的な模様オーバーレイ */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circles' patternUnits='userSpaceOnUse' width='200' height='200'%3E%3Ccircle cx='100' cy='100' r='80' fill='none' stroke='%23B8860B' stroke-width='1' opacity='0.3'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='%23CD853F' stroke-width='1' opacity='0.2'/%3E%3Ccircle cx='100' cy='100' r='40' fill='none' stroke='%23DAA520' stroke-width='1' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23circles)'/%3E%3C/svg%3E")`,
              transform: `rotate(${scrollY * 0.02}deg)`,
            }}
          />
        </div>

        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />

        {/* ヒーローコンテンツ */}
        <div className="relative h-full flex items-center justify-center text-amber-900">
          <div className="text-center px-8 max-w-4xl">
            <div className="mb-12 text-lg tracking-[0.3em] opacity-70">
              ホーム ＞ 梵天庵について
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold tracking-[0.1em] leading-tight">
              梵天庵について
            </h1>
          </div>
        </div>
      </section>

      {/* 贅沢な余白 */}
      <div className="h-96 bg-gradient-to-b from-stone-50 to-white"></div>

      {/* 第2層 - メインコンテンツセクション */}
      <section className="relative bg-white">

        {/* 理念セクション - より贅沢なレイアウト */}
        <div className="py-48 md:py-64 lg:py-80">
          <div className="max-w-5xl mx-auto px-12 text-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-amber-800 mb-32 leading-tight tracking-wide">
              こだわりの
              <br className="block md:hidden" />
              品質
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
              <p className="text-2xl md:text-3xl lg:text-4xl leading-loose text-gray-700 tracking-[0.2em] font-light">
                素材ひとつ、製法ひとつにこだわり、
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl leading-loose text-gray-700 tracking-[0.2em] font-light">
                職人の技術と想いを込めて焼き上げる。
              </p>
            </div>
          </div>
        </div>

        {/* 贅沢な余白 */}
        <div className="h-96"></div>

        {/* パララックス画像セクション - 第3層（動画風） */}
        <div className="relative h-screen overflow-hidden">

          {/* 最下層 - 動画風背景 */}
          <div
            className="absolute inset-0 w-full h-[120%]"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              background: `
                linear-gradient(135deg,
                  #8B4513 0%,
                  #A0522D 20%,
                  #CD853F 40%,
                  #DEB887 60%,
                  #F5DEB3 80%,
                  #FFF8DC 100%
                )
              `,
            }}
          >
            {/* 動的テクスチャ */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='woodGrain' patternUnits='userSpaceOnUse' width='300' height='300'%3E%3Crect width='300' height='300' fill='%23654321'/%3E%3Cpath d='M0 150Q75 100 150 150T300 150' stroke='%238B4513' stroke-width='3' fill='none' opacity='0.6'/%3E%3Cpath d='M0 100Q75 50 150 100T300 100' stroke='%23A0522D' stroke-width='2' fill='none' opacity='0.4'/%3E%3Cpath d='M0 200Q75 150 150 200T300 200' stroke='%23CD853F' stroke-width='2' fill='none' opacity='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23woodGrain)'/%3E%3C/svg%3E")`,
                transform: `translateX(${scrollY * 0.05}px)`,
              }}
            />
          </div>

          {/* 中間層 - 装飾パターン */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='luxury' patternUnits='userSpaceOnUse' width='400' height='400'%3E%3Crect width='400' height='400' fill='none'/%3E%3Cg stroke='%23FFFFFF' stroke-width='2' fill='none' opacity='0.8'%3E%3Ccircle cx='200' cy='200' r='150'/%3E%3Ccircle cx='200' cy='200' r='100'/%3E%3Ccircle cx='200' cy='200' r='50'/%3E%3Cpath d='M200 50L350 200L200 350L50 200Z'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23luxury)'/%3E%3C/svg%3E")`,
                transform: `scale(${1 + scrollY * 0.0005}) rotate(${scrollY * 0.02}deg)`,
              }}
            />
          </div>

          {/* 最前層 - コンテンツ */}
          <div
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{
              transform: `translateY(${scrollY * 0.6}px)`,
            }}
          >
            <div className="max-w-6xl mx-auto px-12 text-center">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-16 md:p-20 lg:p-24 shadow-2xl border border-amber-200/50">

                <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-amber-800 mb-16 tracking-wide">
                  職人の技と心
                </h3>

                <div className="max-w-4xl mx-auto space-y-12 mb-20">
                  <p className="text-xl md:text-2xl lg:text-3xl leading-loose text-gray-700 tracking-[0.1em] font-light">
                    一層一層、時間をかけて丁寧に焼き上げる。
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl leading-loose text-gray-700 tracking-[0.1em] font-light">
                    それは単なる製法ではなく、
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl leading-loose text-gray-700 tracking-[0.1em] font-light">
                    お客様への想いを込めた、職人の祈りです。
                  </p>
                </div>

                {/* 商品特徴 - より贅沢なレイアウト */}
                <div className="grid md:grid-cols-2 gap-16 md:gap-20">
                  <div className="text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-4xl md:text-5xl">🌾</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-amber-800 mb-6 tracking-wide">
                      厳選素材
                    </h4>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-wide font-light">
                      最高品質の卵とバターのみを使用し、<br />
                      自然の恵みを大切にしています。
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-4xl md:text-5xl">⏰</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-amber-800 mb-6 tracking-wide">
                      伝統製法
                    </h4>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-wide font-light">
                      ドイツ伝来の技法を守りながら、<br />
                      日本人の味覚に合わせて進化。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 美しいグラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>

        {/* 贅沢な余白 */}
        <div className="h-96 bg-gradient-to-b from-stone-50 to-amber-50"></div>

        {/* ブランドストーリー - より洗練されたデザイン */}
        <div className="py-48 md:py-64 lg:py-80 bg-gradient-to-b from-amber-50 to-stone-100">
          <div className="max-w-5xl mx-auto px-12 text-center">
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-amber-800 mb-32 tracking-wide">
              ブランドの歩み
            </h3>
            <div className="space-y-20 md:space-y-24 lg:space-y-28">
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-loose text-gray-700 tracking-[0.1em] font-light">
                  2002年の創業以来、私たちは
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl leading-loose text-gray-700 tracking-[0.1em] font-light mt-4">
                  「本当に美味しいバウムクーヘン」を
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl leading-loose text-gray-700 tracking-[0.1em] font-light mt-4">
                  追求し続けてきました。
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-loose text-gray-700 tracking-[0.1em] font-light">
                  ドイツの伝統的な製法を基に、
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl leading-loose text-gray-700 tracking-[0.1em] font-light mt-4">
                  日本人の繊細な味覚に合わせて改良を重ね、
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl leading-loose text-gray-700 tracking-[0.1em] font-light mt-4">
                  独自の「しっとり感」と「ふんわり感」を実現しました。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 贅沢な余白 */}
        <div className="h-96"></div>

        {/* シンプルで力強いクロージング */}
        <div className="py-48 md:py-64 lg:py-80 bg-gradient-to-b from-white to-stone-50">
          <div className="max-w-5xl mx-auto px-12 text-center">
            <div className="space-y-16">
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-800 leading-relaxed tracking-[0.1em]">
                これからも、お客様の笑顔のために、
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-800 leading-relaxed tracking-[0.1em]">
                最高品質のバウムクーヘンを
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-800 leading-relaxed tracking-[0.1em]">
                お届けし続けます。
              </p>
            </div>
          </div>
        </div>

        {/* 最終的な贅沢な余白 */}
        <div className="h-96 bg-gradient-to-b from-stone-50 to-white"></div>

      </section>

      <Footer />
    </>
  );
}