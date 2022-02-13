/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  },
}
