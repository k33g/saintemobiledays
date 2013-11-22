define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/edito.tpl.html'
], function($, _, Backbone, editoTpl){

  var EditoView = Backbone.View.extend({

	  initialize : function () {
		  this.$el = $("edito");
		  this.template = _.template(editoTpl);

		  this.listenTo(this.collection, "sync", this.render);
	  },
	  render : function () {
		  var renderedContent = this.template({editos:this.collection.toJSON()});
		  this.$el.html(renderedContent);
		  return this;
	  }
  });
  return EditoView;
});

