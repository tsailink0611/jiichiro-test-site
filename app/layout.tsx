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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Service Worker クリア
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for(let registration of registrations) {
                    registration.unregister();
                  }
                });
              }
              // キャッシュクリア
              if ('caches' in window) {
                caches.keys().then(function(cacheNames) {
                  cacheNames.forEach(function(cacheName) {
                    caches.delete(cacheName);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-dvh bg-white font-sans-jp">{children}</body>
    </html>
  )
}
