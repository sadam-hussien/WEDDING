/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: false,
      },
      {
        source: "/profile",
        destination: "/profile/personal-traits",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
