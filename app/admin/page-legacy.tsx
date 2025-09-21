'use client'

import { useState, useEffect } from 'react'
import { ContentManager, type SiteContent, type HeroContent, type ProductContent } from '@/lib/content-manager'

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [content, setContent] = useState<SiteContent | null>(null)
  const [saving, setSaving] = useState(false)

  // コンテンツを読み込み
  useEffect(() => {
    if (isLoggedIn) {
      setContent(ContentManager.getContent())
    }
  }, [isLoggedIn])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'jiichiro2024') {
      setIsLoggedIn(true)
    } else {
      alert('ユーザー名またはパスワードが正しくありません')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCredentials({ username: '', password: '' })
    setActiveSection('dashboard')
    setContent(null)
  }

  const saveContent = async () => {
    if (!content) return
    setSaving(true)

    try {
      ContentManager.saveContent(content)
      alert('✅ コンテンツを保存しました！サイトに即座に反映されます。')
    } catch (error) {
      alert('❌ 保存に失敗しました')
    } finally {
      setSaving(false)
    }
  }

  const previewSite = () => {
    window.open('/', '_blank')
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #8B4513, #CD853F)'
      }}>
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#8B4513', fontFamily: 'serif' }}>
              治一郎
            </h1>
            <div style={{ color: '#DAA520', fontSize: '1.2rem', letterSpacing: '2px' }}>
              管理画面
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <label className="block mb-2 font-medium text-gray-700">
                ユーザー名
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-all"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">
                パスワード
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-4 text-white font-medium rounded-lg transition-all hover:transform hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #8B4513, #CD853F)'
              }}
            >
              ログイン
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
            <p className="text-sm text-gray-600 font-medium mb-2">テストアカウント：</p>
            <p className="text-sm text-gray-700">ユーザー名: <span className="font-mono bg-gray-200 px-2 py-1 rounded">admin</span></p>
            <p className="text-sm text-gray-700">パスワード: <span className="font-mono bg-gray-200 px-2 py-1 rounded">jiichiro2024</span></p>
          </div>
        </div>
      </div>
    )
  }

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center">読み込み中...</div>
  }

  return (
    <div className="min-h-screen flex">
      {/* サイドバー */}
      <div className="w-72 text-white fixed h-full overflow-y-auto" style={{
        background: 'linear-gradient(180deg, #8B4513, #654321)'
      }}>
        <div className="p-8 text-center border-b border-amber-600">
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'serif' }}>
            治一郎
          </h2>
          <div style={{ color: '#DAA520', fontSize: '0.9rem', letterSpacing: '1px' }}>
            管理システム
          </div>
        </div>

        <nav className="p-5">
          <ul className="space-y-2">
            {[
              { id: 'dashboard', label: 'ダッシュボード', icon: '📊' },
              { id: 'page-editor', label: 'ページ管理', icon: '📝' },
              { id: 'hero-editor', label: 'ヒーロー編集', icon: '🏠' },
              { id: 'products', label: '商品管理', icon: '🍰' },
              { id: 'content', label: 'コンテンツ管理', icon: '📄' },
              { id: 'analytics', label: '分析レポート', icon: '📈' },
              { id: 'settings', label: '設定', icon: '⚙️' }
            ].map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all flex items-center space-x-3 ${
                    activeSection === item.id
                      ? 'bg-white bg-opacity-20 border-l-4 border-yellow-400'
                      : 'hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-5 left-5 right-5 space-y-3">
          <button
            onClick={previewSite}
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
          >
            📱 サイトプレビュー
          </button>
          <button
            onClick={handleLogout}
            className="w-full p-3 bg-red-600 hover:bg-red-700 rounded-lg transition-all"
          >
            ログアウト
          </button>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="ml-72 flex-1 p-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold" style={{ color: '#8B4513', fontFamily: 'serif' }}>
            {activeSection === 'dashboard' && 'ダッシュボード'}
            {activeSection === 'page-editor' && 'ページ管理'}
            {activeSection === 'hero-editor' && 'ヒーロー編集'}
            {activeSection === 'products' && '商品管理'}
            {activeSection === 'content' && 'コンテンツ管理'}
            {activeSection === 'analytics' && '分析レポート'}
            {activeSection === 'settings' && '設定'}
          </h1>

          {(activeSection === 'hero-editor' || activeSection === 'products' || activeSection === 'page-editor') && (
            <button
              onClick={saveContent}
              disabled={saving}
              className={`px-6 py-3 text-white font-medium rounded-lg transition-all ${
                saving
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 hover:transform hover:-translate-y-1'
              }`}
            >
              {saving ? '保存中...' : '💾 変更を保存'}
            </button>
          )}
        </div>

        {/* ダッシュボード */}
        {activeSection === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'ページビュー', value: '1,234', icon: '👁️', color: 'bg-blue-500' },
                { title: '管理画面ログイン', value: '12', icon: '🔐', color: 'bg-green-500' },
                { title: 'コンテンツ更新', value: '8', icon: '✏️', color: 'bg-yellow-500' },
                { title: 'システム稼働率', value: '99.9%', icon: '⚡', color: 'bg-purple-500' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                    <div className={`${stat.color} text-white p-3 rounded-full text-xl`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">🚀 ビジネスパートナー向けデモ</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">📝 リアルタイム編集</h4>
                  <p className="text-sm text-blue-700">
                    管理画面でテキストや画像を編集すると、即座にサイトに反映されます。
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🎯 直感的な操作</h4>
                  <p className="text-sm text-green-700">
                    専門知識不要。フォーム入力だけで本格的なサイト管理が可能です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ヒーロー編集 */}
        {activeSection === 'hero-editor' && (
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-6">🏠 トップページヒーロー編集</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メインタイトル
                </label>
                <input
                  type="text"
                  value={content.hero.title}
                  onChange={(e) => setContent({
                    ...content,
                    hero: { ...content.hero, title: e.target.value }
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="例: 治一郎 - 極上のバウムクーヘン"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  サブタイトル
                </label>
                <textarea
                  value={content.hero.subtitle}
                  onChange={(e) => setContent({
                    ...content,
                    hero: { ...content.hero, subtitle: e.target.value }
                  })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="例: 職人の技が生み出す、しっとりとした極上の味わい"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ボタンテキスト
                </label>
                <input
                  type="text"
                  value={content.hero.ctaText}
                  onChange={(e) => setContent({
                    ...content,
                    hero: { ...content.hero, ctaText: e.target.value }
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="例: 商品を見る"
                />
              </div>

              <div className="p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">💡 プレビュー</h4>
                <div className="text-sm text-amber-700">
                  <p><strong>タイトル:</strong> {content.hero.title}</p>
                  <p><strong>サブタイトル:</strong> {content.hero.subtitle}</p>
                  <p><strong>ボタン:</strong> {content.hero.ctaText}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 商品管理 */}
        {activeSection === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">🍰 商品情報編集</h3>
              <div className="text-sm text-gray-600">
                編集後「変更を保存」をクリックしてください
              </div>
            </div>

            {content.products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold mb-4">商品 {index + 1}: {product.title}</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        商品名
                      </label>
                      <input
                        type="text"
                        value={product.title}
                        onChange={(e) => {
                          const newProducts = [...content.products]
                          newProducts[index] = { ...product, title: e.target.value }
                          setContent({ ...content, products: newProducts })
                        }}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ボタンテキスト
                      </label>
                      <input
                        type="text"
                        value={product.cta}
                        onChange={(e) => {
                          const newProducts = [...content.products]
                          newProducts[index] = { ...product, cta: e.target.value }
                          setContent({ ...content, products: newProducts })
                        }}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      商品説明
                    </label>
                    <textarea
                      value={product.description}
                      onChange={(e) => {
                        const newProducts = [...content.products]
                        newProducts[index] = { ...product, description: e.target.value }
                        setContent({ ...content, products: newProducts })
                      }}
                      rows={6}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* その他のセクション */}
        {(['page-editor', 'content', 'analytics', 'settings'].includes(activeSection)) && (
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {activeSection === 'page-editor' && 'ページ管理機能'}
                {activeSection === 'content' && 'コンテンツ管理機能'}
                {activeSection === 'analytics' && '分析レポート機能'}
                {activeSection === 'settings' && '設定機能'}
              </h3>
              <p className="text-gray-500">
                この機能は現在開発中です。<br />
                近日中に実装予定です。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}