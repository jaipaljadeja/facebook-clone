/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'platform-lookaside-fbsfx.com',
      'firebasestorage.googleapis.com',
    ],
  },
};

module.exports = nextConfig;
