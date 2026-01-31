module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("forbidden-bg.gif");
  eleventyConfig.addPassthroughCopy("vercel.json");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  
  // Blog collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });
  
  // Library collection
  eleventyConfig.addCollection("books", function(collectionApi) {
    return collectionApi.getFilteredByGlob("library/*.md").sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
  });

  // Markdown config for better rendering
  let markdownIt = require("markdown-it");
  let md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
