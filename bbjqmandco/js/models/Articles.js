define([
    'backbone',
    'models/Article'
], function(Backbone, Article){

  var Articles = Backbone.Collection.extend({
    model : Article,
    url : "data/articles.data.js"
  });

  return Articles
});