const Image = require("@11ty/eleventy-img");

module.exports = async function(src) {
    let metadata = await Image(src, {
        widths: [null],
        formats: ["webp"],
        urlPath: "/assets/img/",
        outputDir: "./dist/assets/img/"
    });

    let data = metadata.webp[metadata.webp.length - 1];
    return `${data.url}`;
}