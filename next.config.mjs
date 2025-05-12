/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ penting agar bisa static export
  trailingSlash: true, // ⬅️ biar semua URL jadi path folder (SEO + Netlify friendly)

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
