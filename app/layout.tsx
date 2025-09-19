import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '治一郎 公式オンラインショップ',
  description: '治一郎の美味しいバウムクーヘンをお届けします',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-white font-sans-jp">{children}</body>
    </html>
  )
}