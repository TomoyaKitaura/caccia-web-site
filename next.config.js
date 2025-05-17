/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 静的サイト配信のための設定
  images: {
    unoptimized: true, // 静的エクスポートのため画像最適化を無効化
  },
}

module.exports = nextConfig
