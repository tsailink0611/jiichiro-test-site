'use client'

import { useState, useEffect } from 'react'
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import { ProductBlock } from "@/components/ProductBlock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContentManager, type SiteContent } from '@/lib/content-manager'

export default function HomePage() {
  const [content, setContent] = useState<SiteContent | null>(null)

  useEffect(() => {
    // 初期コンテンツを読み込み
    setContent(ContentManager.getContent())

    // コンテンツ更新イベントをリッスン
    const handleContentUpdate = (event: CustomEvent) => {
      setContent(event.detail)
    }

    window.addEventListener('content-updated', handleContentUpdate as EventListener)

    return () => {
      window.removeEventListener('content-updated', handleContentUpdate as EventListener)
    }
  }, [])

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍰</div>
          <div className="text-xl text-gray-600">治一郎サイトを読み込み中...</div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />

      {/* Dynamic Hero Section */}
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.ctaText}
      />

      {/* News Section */}
      <NewsSection news={content.news} />

      {/* Dynamic Product Sections */}
      {content.products.map((product, index) => (
        <ProductBlock
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          cta={product.cta}
          reverse={product.reverse}
        />
      ))}

      <Footer />
    </>
  );
}
