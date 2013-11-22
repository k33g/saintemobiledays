define([
  'jquery',
  'underscore',
  'backbone',
	'models/Edito',
	'models/Editos',
  'models/Article',
  'models/Articles',
	'views/EditoView',
  'views/ArticlesListView',
	'views/ArticlesContentView',
	'showdown', 'highlight' // ==> globals
], function(
		$, _, Backbone
	, Edito, Editos, Article, Articles
	, EditoView, ArticlesListView, ArticlesContentView)
{

  var Application = Backbone.Router.extend({ // application is a router

    routes : {
	    // select an article in the list
	    "page_:id" : "select" // #page_001 #page_002 etc ...
    },

    initialize : function() { //initialize models, collections and views ...

	    this.editos= new Editos(); // editos collection : size = 1

	    this.editoView = new EditoView({ collection : this.editos });

	    // get editos
	    this.editos.fetch()

      this.articles = new Articles(); // articles collection

	    this.articlesListView = new ArticlesListView({ collection : this.articles }); // articles list
	    this.articlesContentView = new ArticlesContentView({ collection : this.articles });

	    // get articles
      this.articles.fetch()

    },

	  select: function(pageId) {
			// get articles in collection
		  var selectedArticle = this.articles.get(pageId);

		  // Content already loaded ?
		  if(selectedArticle.get("content") == null) { // no, then load it

			  var mdFile = selectedArticle.get("fileContent");

			  var mdContent = $.get("data/contents/"+mdFile).done(function(content){

				  var converter = new Showdown.converter();
				  selectedArticle.set({content:converter.makeHtml(content)});

				  $("#article_"+pageId+"-content").html(selectedArticle.get("content"));
				  $('pre code').each(function(i, e) {hljs.highlightBlock(e)});

			  });
		  }

	  }
  });

    return Application;
});
