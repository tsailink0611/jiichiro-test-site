'use client'

import { useState, useEffect } from 'react'
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import { ProductBlock } from "@/components/ProductBlock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContentManagerEnhanced, type SiteContent } from '@/lib/content-manager-enhanced'

export default function HomePage() {
  const [content, setContent] = useState<SiteContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        setError(null)

        // より安全な非同期読み込み
        const loadedContent = await ContentManagerEnhanced.getContent()

        if (loadedContent) {
          setContent(loadedContent)
        } else {
          // フォールバック用のデフォルトコンテンツ
          setContent({
            hero: {
              title: "CMSサイトスタジオ",
              subtitle: "シンプルで高速なヘッドレスCMSシステム",
              ctaText: "管理画面を見る"
            },
            products: [],
            news: [],
            lastUpdated: new Date().toISOString()
          })
        }
      } catch (error) {
        console.error("Content load error:", error)
        setError('コンテンツの読み込みに失敗しました')

        // エラー時のフォールバックコンテンツ
        setContent({
          hero: {
            title: "CMSサイトスタジオ",
            subtitle: "シンプルで高速なヘッドレスCMSシステム",
            ctaText: "管理画面を見る"
          },
          products: [],
          news: [],
          lastUpdated: new Date().toISOString()
        })
      } finally {
        setLoading(false)
      }
    }

    loadContent()

    // コンテンツ更新イベントをリッスン
    const handleContentUpdate = (event: CustomEvent) => {
      setContent(event.detail)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('content-updated', handleContentUpdate as EventListener)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('content-updated', handleContentUpdate as EventListener)
      }
    }
  }, [])

  // ローディング状態
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <div className="text-xl text-gray-600 font-medium">CMSサイトスタジオを読み込み中...</div>
          <div className="text-sm text-gray-500 mt-2">しばらくお待ちください</div>
        </div>
      </div>
    )
  }

  // エラー状態
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <div className="text-xl text-red-600 font-medium mb-2">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            再読み込み
          </button>
        </div>
      </div>
    )
  }

  // コンテンツが読み込めない場合の最終フォールバック
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🚧</div>
          <div className="text-xl text-gray-600">コンテンツの準備中...</div>
        </div>
      </div>
    )
  }

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