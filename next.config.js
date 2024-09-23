/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath:
    process.env.GITHUB_REPOSITORY !== undefined
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
      : '',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // 画像最適化を無効化
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
