module.exports = function(config){
    config.addCollection("blog", function(collectionApi) {
        return collectionApi.getAllSorted().reverse().filter(function(item) {
          // Only return content that was originally a markdown file
          return item.data['categories']?item.data['categories'].includes('blog'):false;
        });
      });
      config.addCollection("projects", function(collectionApi) {
        return collectionApi.getAllSorted().reverse().filter(function(item) {
          // Only return content that was originally a markdown file
          return item.data['categories']?item.data['categories'].includes('projects'):false;
        });
      });
      config.addCollection("all_posts", function(collectionApi) {
        return collectionApi.getAllSorted().reverse().filter(function(item) {
          // Only return content that was originally a markdown file
          return item.data['categories']?(item.data['categories'].includes('blog')||item.data['categories'].includes('projects')):false;
        });
      });

}