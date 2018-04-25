module.exports = {
  cache: {
    cacheId: "swagger ui",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "swagger ui",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
