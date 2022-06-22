/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // нужно для поддержки докера
    outputStandalone: true,
  },
  env: {},
  reactStrictMode: true,
  // i18n: {
  //   // локали, которые поддерживаются приложением
  //   locales: ['en', 'ru', 'am'],
  //   //  локаль по-умолчанию
  //   defaultLocale: 'am',
  //   localeDetection: true,
  // },
  webpack(config) {
    // Для того, чтобы можно было импортировать SVG в виде компонентов
    // TODO: сделать HOC для SVG чтобы можно было пробрасывать как минимум классы
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
