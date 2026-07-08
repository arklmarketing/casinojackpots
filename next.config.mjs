/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      // Hub convenience: /offers -> money page (301, passes equity)
      {
        source: '/offers',
        destination: '/offers/best-casino-offers',
        permanent: true,
      },
      // Example legacy-URL pattern (adjust when migrating an old site)
      {
        source: '/news/:slug',
        destination: '/jackpots/news/:slug',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
