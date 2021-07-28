const htmlmin = require('html-minifier');

module.exports = function(content, outputPath) {
    if (outputPath.indexOf('.html') > -1) {
        let minified = htmlmin.minify(content, {
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true,
            sortClassName: true,
            sortAttributes: true,
            html5: true,
            decodeEntities: true,
            removeOptionalTags: true,
        });
        return minified;
    }
    return content;
}