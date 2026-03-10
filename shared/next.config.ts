/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      root: "./", // Force correct root directory
    },
  },
};

module.exports = nextConfig;
