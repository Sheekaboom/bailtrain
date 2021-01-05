
const markdownIt = require("markdown-it");
const md = new markdownIt({
  html: true
});

module.exports = {
    renderMarkdown: function(content){return md.render(content);},

    // get only the items with data['categoies'] given by cat
    where_cat_contains: function(array,cat){
        var cat_vals = array.filter(item=>{return item.data['categories']?item.data['categories'].includes(cat):false})
        return cat_vals
      }

}