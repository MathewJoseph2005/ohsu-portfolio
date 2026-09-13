/** @type {import('next').NextConfig} */
const repoName = 'ohsu-portfolio';
const isProd = process.env.NODE_ENV === 'production';
const isGHPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd && isGHPages ? `/${repoName}` : '',
  assetPrefix: isProd && isGHPages ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd && isGHPages ? `/${repoName}` : '',
  },
};

module.exports = nextConfig;
