define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/articles.list.tpl.html'
], function($, _, Backbone, articlesListTpl){

  var ArticlesListView = Backbone.View.extend({

	  initialize : function () {
		  this.$el = $("my-articles-list");
		  this.template = _.template(articlesListTpl);

		  this.listenTo(this.collection, "sync", this.render);
	  },

	  render : function () { /* articles list (front-page) */
		  var renderedContent = this.template({articles:this.collection.toJSON()});
		  this.$el.html(renderedContent);

		  $("my-articles-list").trigger("create"); // refresh UI

	  }

  });
  return ArticlesListView;
});

