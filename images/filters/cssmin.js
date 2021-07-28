const CleanCSS = require('clean-css');

module.exports = function(code) {
    new CleanCSS({}).minify(code).styles;
}