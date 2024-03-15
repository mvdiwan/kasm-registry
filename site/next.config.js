/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Diwan Enterprise Consulting Custom KASM Registry',
    description: 'Customized DECLLC Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://mvdiwan.github.io/kasm-registry/',
    contactUrl: 'https://www.decllc.biz/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
