/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  env: {
    NO_PROXY: '*.armbusinessbank.local, localhost',
  },
  reactStrictMode: true,
  i18n: {
    // providing the locales supported by your application
    locales: ['en', 'ru', 'am'],
    //  default locale used when the non-locale paths are visited
    defaultLocale: 'am',
    localeDetection: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
