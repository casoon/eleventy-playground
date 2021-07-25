const filters = require('./config/filters');

module.exports = function(eleventyConfig) {

    // Filters
    Object.keys(filters).forEach(name => {
        eleventyConfig.addFilter(name, filters[name]);
    });

    /*
        // SSL support localhost
        eleventyConfig.setBrowserSyncConfig({
            https: true
        });
    */

    eleventyConfig.addTransform('htmlmin', filters.htmlmin);

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