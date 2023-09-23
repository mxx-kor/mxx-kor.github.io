/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mxx-kor.github.io",
  generateRobotsTxt: true,
  exclude: ["/about"],
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.5,
  outDir: "out",
};
