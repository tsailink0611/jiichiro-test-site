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

      // ロゴの表示制御（200px以上スクロールで表示、フッター手前で非表示）
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerOffset = 200;

      if (currentScrollY > 200 && currentScrollY < documentHeight - windowHeight - footerOffset) {
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

      {/* 固定サイドロゴ */}
      <div
        className={`fixed left-8 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-700 ${
          showLogo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <div className="writing-vertical-rl text-5xl font-serif-jp font-bold text-brand tracking-wider">
          治一郎
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative h-screen overflow-hidden">
        {/* パララックス背景 */}
        <div
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23F5F5F0'/%3E%3Ctext x='50%25' y='50%25' font-size='72' fill='%23404B1520' text-anchor='middle' dy='0.3em'%3E治一郎について%3C/text%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />

        {/* ヒーローコンテンツ */}
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center px-4">
            <p className="text-lg md:text-xl mb-8 tracking-wider">ホーム ＞ 治一郎について</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif-jp font-bold">
              治一郎について
            </h1>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="relative bg-white">

        {/* 贅沢な余白 */}
        <div className="h-48 md:h-64 lg:h-80"></div>

        {/* 理念セクション */}
        <div className="py-32 md:py-48 lg:py-64">
          <div className="max-w-2xl mx-auto px-8 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-jp font-bold text-brand mb-24 md:mb-32 lg:mb-40 leading-tight">
              こだわりの品質
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl leading-loose text-gray-700 tracking-wide">
              素材ひとつ、製法ひとつにこだわり、<br className="hidden md:block" />
              職人の技術と想いを込めて焼き上げる。
            </p>
          </div>
        </div>

        {/* 贅沢な余白 */}
        <div className="h-48 md:h-64 lg:h-80"></div>

        {/* 画像セクション（パララックス） - 第3層 */}
        <div className="relative h-screen overflow-hidden">
          {/* 背景レイヤー（最も遅いパララックス） - ゴールド背景 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='goldGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E6B566;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23D4A574;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23C29653;stop-opacity:1' /%3E%3C/linearGradient%3E%3Cpattern id='goldTexture' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Crect width='60' height='60' fill='url(%23goldGrad)'/%3E%3Ccircle cx='30' cy='30' r='3' fill='%23B8864A' opacity='0.8'/%3E%3Ccircle cx='15' cy='15' r='2' fill='%23B8864A' opacity='0.6'/%3E%3Ccircle cx='45' cy='45' r='2.5' fill='%23B8864A' opacity='0.7'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23goldTexture)'/%3E%3C/svg%3E")`,
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          />

          {/* ミドルレイヤー（中間パララックス） - 格子パターン */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          >
            {/* 装飾的な日本的パターン - より濃く表示 */}
            <div className="absolute inset-0 opacity-60">
              <div
                className="w-full h-full bg-repeat"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' patternUnits='userSpaceOnUse' width='120' height='120'%3E%3Crect width='120' height='120' fill='none'/%3E%3Cg stroke='%23FFFFFF' stroke-width='2' opacity='0.8' fill='none'%3E%3Cpath d='M60 0L60 120M0 60L120 60'/%3E%3Ccircle cx='60' cy='60' r='25'/%3E%3Ccircle cx='60' cy='60' r='15'/%3E%3Cpath d='M45 45L75 75M75 45L45 75'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </div>

          {/* フロントレイヤー（コンテンツ） */}
          <div
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{
              transform: `translateY(${scrollY * 0.6}px)`,
            }}
          >
            <div className="max-w-4xl mx-auto px-8 text-center">
              {/* メインメッセージ */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 md:p-16 lg:p-20 shadow-2xl border border-brand/10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif-jp font-bold text-brand mb-8 md:mb-12 leading-tight">
                  職人の技と心
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl leading-loose text-gray-700 tracking-wide mb-8 md:mb-12">
                  一層一層、時間をかけて丁寧に焼き上げる。<br className="hidden md:block" />
                  それは単なる製法ではなく、<br className="hidden md:block" />
                  お客様への想いを込めた、職人の祈りです。
                </p>

                {/* 商品特徴 */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-brand/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl md:text-3xl">🌾</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-serif-jp font-bold text-brand mb-3">
                      厳選素材
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      最高品質の卵とバターのみを使用し、<br className="hidden lg:block" />
                      自然の恵みを大切にしています。
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-brand/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl md:text-3xl">⏰</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-serif-jp font-bold text-brand mb-3">
                      伝統製法
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      ドイツ伝来の技法を守りながら、<br className="hidden lg:block" />
                      日本人の味覚に合わせて進化。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* グラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        </div>

        {/* 贅沢な余白 */}
        <div className="h-48 md:h-64 lg:h-80"></div>

        {/* ブランドストーリー */}
        <div className="py-32 md:py-48 lg:py-64 bg-cream">
          <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif-jp font-bold text-brand mb-24 md:mb-32 lg:mb-40">
              ブランドの歩み
            </h3>
            <div className="space-y-16 md:space-y-20 lg:space-y-24">
              <p className="text-lg md:text-xl lg:text-2xl leading-loose text-gray-700 tracking-wide">
                2002年の創業以来、私たちは「本当に美味しいバウムクーヘン」を<br className="hidden lg:block" />
                追求し続けてきました。
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-loose text-gray-700 tracking-wide">
                ドイツの伝統的な製法を基に、日本人の繊細な味覚に合わせて<br className="hidden lg:block" />
                改良を重ね、独自の「しっとり感」と「ふんわり感」を実現しました。
              </p>
            </div>
          </div>
        </div>

        {/* 贅沢な余白 */}
        <div className="h-48 md:h-64 lg:h-80"></div>

        {/* シンプルなクロージング */}
        <div className="py-32 md:py-48 lg:py-64">
          <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif-jp font-bold text-brand leading-relaxed tracking-wide">
              これからも、お客様の笑顔のために、<br className="hidden md:block" />
              最高品質のバウムクーヘンを<br className="hidden md:block" />
              お届けし続けます。
            </p>
          </div>
        </div>

        {/* 贅沢な余白 */}
        <div className="h-48 md:h-64 lg:h-80"></div>

      </section>

      <Footer />
    </>
  );
}