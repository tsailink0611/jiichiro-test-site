import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CMSサイトスタジオ - ヘッドレスCMS',
  description: 'シンプルで高速なヘッドレスCMSシステム',
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