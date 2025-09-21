/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',               // xuất ra static site (thư mục out/)
  basePath: '/ux-design-principles', // tên repo của anh
  assetPrefix: '/ux-design-principles/', // để asset load đúng
  trailingSlash: true             // tránh 404 khi refresh
}

export default nextConfig
