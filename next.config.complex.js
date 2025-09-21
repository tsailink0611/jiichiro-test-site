/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['swiper']
  },
  webpack: (config, { dev, isServer }) => {
    // 開発時のホットリロード改善
    if (dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendor: false,
        },
      }
    }
    return config
  },
  // 開発時のファストリフレッシュを安定化
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig