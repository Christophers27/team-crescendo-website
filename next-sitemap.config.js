module.exports = {
  siteUrl: "https://www.team-crescendo.com/",
  generateRobotsTxt: true,
  changeFreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/admin/*"],

  additionalPaths: async () => [
    { loc: "/", priority: 1.0, changefreq: "daily" },
    { loc: "/about", priority: 0.5, changefreq: "monthly" },
    { loc: "/memoria-wake", priority: 0.9, changefreq: "weekly" },
    { loc: "/blog", priority: 0.8, changefreq: "weekly" },
  ],

  transform: async (config, path) => {
    if (path.startsWith("/blog/")) {
      const { blogs } = await import("./lib/data.ts");
      const postSlug = path.replace("/blog/", "");

      const post = blogs.find((post) => post.slug === postSlug);

      if (post) {
        return {
          loc: path,
          lastmod: post.date,
          changefreq: "monthly",
          priority: 0.7,
        };
      }
    }
  },
};
