module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("webgl-demo.js");
    eleventyConfig.addPassthroughCopy("index.js");
};