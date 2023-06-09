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
      "www.varmland.bio",
      "morbius.tthelostcity.com",
      "www.saltypopcorn.co.uk",
      "i.ytimg.com",
      "assets.mubicdn.net",
      "gogomagazine.it",
      "imgs.aftonbladet-cdn.se",
      "static.toiimg.com",
      "d2iltjk184xms5.cloudfront.net",
      "m.media-amazon.com",
    ],
  },
  url: {
    domains: ["goo.gl", "statensmedierad.se", "riksdagen.se"],
  },
};

module.exports = nextConfig;
