const CleanCSS = require("clean-css");

module.exports = {
     css: function(code) {return new CleanCSS({}).minify(code).styles;},
     json: function(json_str){return json_str.replace(/\s/g,'');}
}