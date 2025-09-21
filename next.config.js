/** @type {import('next').NextConfig} */
const nextConfig = {
  // 本番ビルド最適化設定
  reactStrictMode: true,
  swcMinify: true,
  
  // イメージ最適化
  images: {
    remotePatterns: [],
    formats: ['image/webp'],
  },
  
  // 実験的機能
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Webpack設定
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 本番ビルドでのminification問題を回避
    if (!dev && !isServer) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        minimizer => minimizer.constructor.name !== 'TerserPlugin'
      );
    }
    
    return config;
  },
  
  // TypeScript設定
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint設定
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
