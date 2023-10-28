/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever", // 이 url 로 접속시
        destination: "/products", // 이 url 로 이동
        permanent: true, // 영원히 이렇게된다
      },
    ];
  },
  // async rewrites() {},
};

module.exports = nextConfig;
