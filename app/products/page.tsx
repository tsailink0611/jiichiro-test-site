'use client'

import { useEffect, useState } from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ContentManagerEnhanced, type SiteContent } from '@/lib/content-manager-enhanced'

export default function ProductsPage() {
  const [content, setContent] = useState<SiteContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      try {
        const siteContent = await ContentManagerEnhanced.getContent()
        setContent(siteContent)
      } catch (error) {
        console.error('商品ページコンテンツ読み込みエラー:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()

    // リアルタイム更新リスナー
    const handleContentUpdate = (event: CustomEvent) => {
      const updatedContent = event.detail
      setContent(updatedContent)
    }

    window.addEventListener('content-updated', handleContentUpdate as EventListener)
    return () => window.removeEventListener('content-updated', handleContentUpdate as EventListener)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-25 to-stone-50">
      <Header />

      {/* ヒーローセクション */}
      <section className="pt-24 pb-16 px-8">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-stone-800 tracking-wider leading-tight">
              商品紹介
            </h1>
            <div className="w-32 h-1 bg-stone-400 mx-auto"></div>
          </div>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            伝統の技と現代の感性が融合した<br />
            選りすぐりの逸品をご紹介いたします
          </p>
        </div>
      </section>

      {/* 商品グリッド */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-stone-200 aspect-square rounded-lg mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-stone-200 rounded w-3/4"></div>
                    <div className="h-3 bg-stone-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
              {content?.products?.slice(0, 12).map((product, index) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* 商品カード */}
                  <div className="relative overflow-hidden">
                    {/* 商品画像 */}
                    <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden mb-6 relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      />

                      {/* オーバーレイ効果 */}
                      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-all duration-500 ease-out"></div>

                      {/* 浮き上がる装飾要素 */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* 商品情報 */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-stone-800 leading-tight group-hover:text-stone-600 transition-colors duration-300">
                        {product.title}
                      </h3>

                      <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                        {product.description?.split('\n')[0]}
                      </p>

                      {/* 価格（将来の拡張用） */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-stone-500 text-sm font-light">
                          詳細を見る
                        </span>
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* 空のプレースホルダー（12個未満の場合） */}
              {content?.products && content.products.length < 12 && (
                [...Array(12 - content.products.length)].map((_, index) => (
                  <div
                    key={`placeholder-${index}`}
                    className="group opacity-30"
                    style={{
                      animationDelay: `${(content.products.length + index) * 100}ms`
                    }}
                  >
                    <div className="aspect-square bg-stone-100 rounded-lg mb-6 flex items-center justify-center border-2 border-dashed border-stone-300">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-stone-200 rounded-full mx-auto flex items-center justify-center">
                          <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <p className="text-xs text-stone-400">商品を追加</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-stone-200 rounded w-3/4"></div>
                      <div className="h-3 bg-stone-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* 詳細メッセージセクション */}
      <section className="py-20 px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 leading-tight">
            一期一会の美味しさを
          </h2>
          <div className="w-24 h-1 bg-stone-400 mx-auto"></div>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            季節ごとに変わる素材を活かし、<br />
            伝統の技法で仕上げた特別な逸品を<br />
            心を込めてお届けいたします
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}