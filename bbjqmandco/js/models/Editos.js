define([
    'backbone',
    'models/Edito'
], function(Backbone, Edito){

  var Editos = Backbone.Collection.extend({
    model : Edito,
    url : "data/editos.data.js"
  });

  return Editos
});