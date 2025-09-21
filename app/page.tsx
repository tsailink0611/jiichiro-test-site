'use client'

import { useState, useEffect } from 'react'
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import { ProductBlock } from "@/components/ProductBlock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContentManagerEnhanced, type SiteContent, defaultContent } from '@/lib/content-manager-enhanced'

export default function HomePage() {
  // 即座にデフォルトコンテンツで初期化 - 白画面を防ぐ
  const [content, setContent] = useState<SiteContent>(defaultContent)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // バックグラウンドでコンテンツを読み込み、あれば更新
    const loadContent = async () => {
      try {
        // デフォルトコンテンツを表示してから、保存されたコンテンツがあれば更新
        const loadedContent = await ContentManagerEnhanced.getContent()

        if (loadedContent && loadedContent.lastUpdated !== defaultContent.lastUpdated) {
          setContent(loadedContent)
        }
      } catch (error) {
        console.error("Content load error:", error)
        // エラーが発生してもデフォルトコンテンツを維持
      } finally {
        setIsInitialLoad(false)
      }
    }

    // 短い遅延でスムーズな遷移
    const timer = setTimeout(loadContent, 100)

    // コンテンツ更新イベントをリッスン
    const handleContentUpdate = (event: CustomEvent) => {
      setContent(event.detail)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('content-updated', handleContentUpdate as EventListener)
    }

    return () => {
      clearTimeout(timer)
      if (typeof window !== 'undefined') {
        window.removeEventListener('content-updated', handleContentUpdate as EventListener)
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      {/* Dynamic Hero Section */}
      <Hero
        title={content.hero?.title || "CMSサイトスタジオ"}
        subtitle={content.hero?.subtitle || "シンプルで高速なヘッドレスCMSシステム"}
        ctaText={content.hero?.ctaText || "管理画面を見る"}
      />

      {/* News Section */}
      {content.news && content.news.length > 0 && (
        <NewsSection news={content.news} />
      )}

      {/* Dynamic Product Sections */}
      {content.products && content.products.map((product, index) => (
        <ProductBlock
          key={product.id || index}
          title={product.title}
          description={product.description}
          image={product.image}
          cta={product.cta}
          reverse={product.reverse}
        />
      ))}

      <Footer />
    </div>
  );
}
