define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/articles.content.tpl.html'
], function($, _, Backbone, articlesContentTpl){

  var ArticlesContentView = Backbone.View.extend({

	  initialize : function () {
		  this.template = _.template(articlesContentTpl);
		  this.listenTo(this.collection, "sync", this.render);
	  },

	  render : function () { /* generate pages (articles) */
		  var renderedContent = this.template({articles:this.collection.toJSON()});
		   $("body").append(renderedContent) // (1)
	  }
  });
  return ArticlesContentView;

	// (1) : JQM can't find pages if nested in a tag

});