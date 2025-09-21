'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 簡単な初期化
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">CMSサイトスタジオ</h1>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">CMSサイトスタジオ</h1>
            <nav className="space-x-4">
              <a href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                管理画面
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            シンプルで高速なヘッドレスCMSシステム
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            WordPressの代替として、直感的な操作とリアルタイム更新を実現する
            次世代CMSシステムです。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">高速表示</h3>
              <p className="text-gray-600">Next.js 14による静的生成で3秒以内の表示を実現</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">直感的操作</h3>
              <p className="text-gray-600">専門知識不要の管理画面でコンテンツ編集</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">リアルタイム</h3>
              <p className="text-gray-600">編集内容が即座にサイトに反映</p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/admin"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              管理画面を開く
            </a>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>CMSサイトスタジオ - ヘッドレスCMSシステム</p>
            <p className="mt-2 text-sm">🤖 Generated with Claude Code</p>
          </div>
        </div>
      </footer>
    </div>
  )
}