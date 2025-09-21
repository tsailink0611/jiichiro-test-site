/** @type {import('next').NextConfig} */
const nextConfig = {
  // 最小限の設定でトラブルシューティング
  images: {
    remotePatterns: [],
  },
  // 開発時の問題を解決するための設定
  onDemandEntries: {
    // ページがメモリに保持される時間を延長
    maxInactiveAge: 25 * 1000,
    // 同時に保持されるページ数
    pagesBufferLength: 2,
  },
  // 厳密なモードを無効化（一時的）
  reactStrictMode: false,
  // SWCの最適化を無効化（一時的）
  swcMinify: false,
}

module.exports = nextConfig