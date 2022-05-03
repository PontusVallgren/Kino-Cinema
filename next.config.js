/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.imgur.com",
      "catalog.cinema-api.com",
      "assets.cdn.moviepilot.de",
      "roxarmy.com",
      "cdn2.cinafilm.com",
      "static-koimoi.akamaized.net",
      "morbius.tthelostcity.com",
      "www.saltypopcorn.co.uk",
    ],
  },
  url: {
    domains: ["goo.gl", "statensmedierad.se", "riksdagen.se"],
  },
};

module.exports = nextConfig;
