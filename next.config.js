/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.imgur.com',
      'catalog.cinema-api.com',
      'morbius.tthelostcity.com',
      'www.saltypopcorn.co.uk',
    ],
  },
};

module.exports = nextConfig;
