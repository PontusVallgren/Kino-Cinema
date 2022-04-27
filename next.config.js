/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.imgur.com",
      "catalog.cinema-api.com",
      "assets.cdn.moviepilot.de",
      "roxarmy.com",
      "image.tmdb.org",
      "www.looper.com",
    ],
  },
};

module.exports = nextConfig;
