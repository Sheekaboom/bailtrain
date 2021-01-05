module.exports = function(config){
    config.addPassthroughCopy("site/css");
    config.addPassthroughCopy("site/js");
    config.addPassthroughCopy("site/img");
    config.addPassthroughCopy("site/assets");
    config.addPassthroughCopy("site/projects/**/downloads/*");
    config.addPassthroughCopy("site/projects/**/img/*");
    config.addPassthroughCopy("site/projects/**/js/*.js")
    config.addPassthroughCopy("site/blog/**/downloads/*");
    config.addPassthroughCopy("site/blog/**/img/*");
    config.addPassthroughCopy("site/blog/**/js/*.js")
    config.addPassthroughCopy("site/robots.txt");
}