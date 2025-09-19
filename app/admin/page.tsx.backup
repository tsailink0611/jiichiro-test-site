'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // 簡単な認証（実際のプロジェクトではより安全な方法を使用）
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
        </div>
      </div>
    )
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
              { id: 'products', label: '商品管理', icon: '🍰' },
              { id: 'content', label: 'コンテンツ管理', icon: '📝' },
              { id: 'orders', label: '注文管理', icon: '📋' },
              { id: 'customers', label: '顧客管理', icon: '👥' },
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

        <div className="absolute bottom-5 left-5 right-5">
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#8B4513', fontFamily: 'serif' }}>
            {activeSection === 'dashboard' && 'ダッシュボード'}
            {activeSection === 'products' && '商品管理'}
            {activeSection === 'content' && 'コンテンツ管理'}
            {activeSection === 'orders' && '注文管理'}
            {activeSection === 'customers' && '顧客管理'}
            {activeSection === 'analytics' && '分析レポート'}
            {activeSection === 'settings' && '設定'}
          </h1>
        </div>

        {/* ダッシュボード */}
        {activeSection === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: '今日の売上', value: '¥45,280', icon: '💰', color: 'bg-green-500' },
                { title: '新規注文', value: '12', icon: '📦', color: 'bg-blue-500' },
                { title: '在庫アラート', value: '3', icon: '⚠️', color: 'bg-yellow-500' },
                { title: '顧客数', value: '1,234', icon: '👥', color: 'bg-purple-500' }
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
              <h3 className="text-xl font-semibold mb-4">最近の注文</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">注文番号</th>
                      <th className="text-left p-3">顧客名</th>
                      <th className="text-left p-3">商品</th>
                      <th className="text-left p-3">金額</th>
                      <th className="text-left p-3">ステータス</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: '#JR001', customer: '田中様', product: '治一郎のバウムクーヘン', amount: '¥1,620', status: '処理中' },
                      { id: '#JR002', customer: '佐藤様', product: 'カットバウム×3', amount: '¥2,592', status: '発送済み' },
                      { id: '#JR003', customer: '山田様', product: 'ミニバウム×5', amount: '¥2,700', status: '完了' }
                    ].map((order, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{order.id}</td>
                        <td className="p-3">{order.customer}</td>
                        <td className="p-3">{order.product}</td>
                        <td className="p-3 font-semibold">{order.amount}</td>
                        <td className="p-3">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            order.status === '完了' ? 'bg-green-100 text-green-800' :
                            order.status === '発送済み' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* その他のセクション */}
        {activeSection !== 'dashboard' && (
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {activeSection === 'products' && '商品管理機能'}
                {activeSection === 'content' && 'コンテンツ管理機能'}
                {activeSection === 'orders' && '注文管理機能'}
                {activeSection === 'customers' && '顧客管理機能'}
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