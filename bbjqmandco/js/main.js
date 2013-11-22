requirejs.config({
  baseUrl : "js/",
  paths   : {
    "domReady"      : "vendors/domReady",
	  "jquery"        : "vendors/jquery-1.9.1.min",
	  "jquerymobile"  : "vendors/jquery.mobile-1.3.2.min",
    "underscore"    : "vendors/underscore-min", /*This is amd version of underscore */
    "backbone"      : "vendors/backbone-min",   /*This is amd version of backbone   */
    "text"          : "vendors/text",
	  "showdown"      : "vendors/showdown",
	  "highlight"     : "vendors/highlight.min"
  },
	shim: {
		"showdown": {
			"exports": "Showdown"   //attaches "Showdown" to the window object
		},
		"highlight":{
			"exports": "hljs"       //attaches "hljs" to the window object
		}
	}
});

require([
  'domReady',
  'application/Application',
	'jquerymobile' // needed -> GUI JQM
], function (domReady,Application) {

	domReady(function () {

		$('body').css('visibility', 'visible');
		window.App = new Application();
		Backbone.history.start();

		/*
		  When all of your Routers have been created,
		  and all of the routes are set up properly,
		  call Backbone.history.start() to begin monitoring
		  hashchange events, and dispatching routes.
		 */


	});

});