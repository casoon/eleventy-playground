const { JSDOM } = require("jsdom");
const { promisify } = require("util");
const sizeOf = promisify(require("image-size"));
const path = require("path");

const setSizes = async(img, outputPath) => {
    let src = img.getAttribute("src");

    let dimensions;

    try {
        dimensions = await sizeOf("dist/" + src);
    } catch (e) {
        console.warn(e.message, src);
        return;
    }

    if (dimensions.type == "svg") {
        return;
    }

    if (!img.getAttribute("width")) {
        img.setAttribute("width", dimensions.width);
        img.setAttribute("height", dimensions.height);
    }
}

module.exports = async function(rawContent, outputPath) {
    let content = rawContent;
    if (outputPath && outputPath.endsWith(".html")) {
        const dom = new JSDOM(content);
        const images = [...dom.window.document.querySelectorAll("img")];

        if (images.length > 0) {
            await Promise.all(images.map((i) => setSizes(i, outputPath)));
            content = dom.serialize();
        }
    }

    return content;
}