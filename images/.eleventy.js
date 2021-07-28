module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter("cssmin", require("./filters/cssmin.js"));
    eleventyConfig.addFilter("htmlDateString", require("./filters/htmlDateString.js"));
    eleventyConfig.addFilter("jsmin", require("./filters/jsmin.js"));
    eleventyConfig.addTransform('htmlmin', require("./filters/htmlmin.js"));
    eleventyConfig.addTransform('imagesizes', require("./filters/imgsizes.js"));

    eleventyConfig.addNunjucksAsyncShortcode("convert2webp", require("./filters/convert2webp.js"));

    /*
        // SSL support localhost
        eleventyConfig.setBrowserSyncConfig({
            https: true
        });
    */



    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        templateFormats: ['njk', 'md', 'html'],
        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data',
            output: 'dist'
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        passthroughFileCopy: true
    };
};