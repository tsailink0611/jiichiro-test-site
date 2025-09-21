'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthState } from '@/lib/auth'
import { auth } from '@/lib/firebase'
import { logout } from '@/lib/auth'
import { ContentManagerEnhanced, type SiteContent } from '@/lib/content-manager-enhanced'

export default function DashboardPage() {
  const { user, loading } = useAuthState()
  const [content, setContent] = useState<SiteContent | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login')
      return
    }

    if (user) {
      loadContent()
    }
  }, [user, loading, router])

  const loadContent = async () => {
    try {
      const siteContent = await ContentManagerEnhanced.getContent()
      setContent(siteContent)
      setLastUpdated(new Date(siteContent.lastUpdated).toLocaleString('ja-JP'))
    } catch (error) {
      console.error('コンテンツ読み込みエラー:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      router.push('/admin/login')
    } catch (error) {
      console.error('ログアウトエラー:', error)
    }
  }

  const handleResetContent = async () => {
    if (confirm('コンテンツをデフォルトにリセットしますか？')) {
      try {
        await ContentManagerEnhanced.resetToDefault()
        await loadContent()
        alert('コンテンツをリセットしました')
      } catch (error) {
        console.error('リセットエラー:', error)
        alert('リセットに失敗しました')
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CMSサイトスタジオ</h1>
              <p className="text-sm text-gray-600">管理ダッシュボード</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                ログアウト
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* 概要カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">総コンテンツ</h3>
            <p className="text-3xl font-bold text-blue-600">
              {content ? content.products.length + content.news.length + 1 : 0}
            </p>
            <p className="text-sm text-gray-600">ページ・コンテンツ</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">商品・サービス</h3>
            <p className="text-3xl font-bold text-green-600">
              {content ? content.products.length : 0}
            </p>
            <p className="text-sm text-gray-600">アイテム</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">お知らせ</h3>
            <p className="text-3xl font-bold text-purple-600">
              {content ? content.news.length : 0}
            </p>
            <p className="text-sm text-gray-600">投稿</p>
          </div>
        </div>

        {/* 管理メニュー */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-3">ヒーローセクション</h3>
            <p className="text-gray-600 mb-4">メインビジュアルとキャッチコピーを編集</p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              編集する
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-3">商品・サービス</h3>
            <p className="text-gray-600 mb-4">商品情報の追加・編集・削除</p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              管理する
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-3">お知らせ</h3>
            <p className="text-gray-600 mb-4">ニュースとお知らせの管理</p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              管理する
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-3">画像管理</h3>
            <p className="text-gray-600 mb-4">画像のアップロードと最適化</p>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
              管理する
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-3">SEO設定</h3>
            <p className="text-gray-600 mb-4">メタタグとSEO最適化</p>
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
              設定する
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-3">サイトプレビュー</h3>
            <p className="text-gray-600 mb-4">公開サイトをプレビュー</p>
            <button
              onClick={() => window.open('/', '_blank')}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              確認する
            </button>
          </div>
        </div>

        {/* 最新活動 */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">システム情報</h3>
            <button
              onClick={handleResetContent}
              className="text-red-600 hover:text-red-700 text-sm underline"
            >
              コンテンツをリセット
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">最終更新</span>
              <span className="text-gray-900 font-medium">{lastUpdated}</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">データ保存先</span>
              <span className="text-gray-900 font-medium">LocalStorage + Firestore</span>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600">システムバージョン</span>
              <span className="text-gray-900 font-medium">v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}