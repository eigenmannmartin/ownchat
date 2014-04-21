define([
	'backbone',
	'objects/api'
],
function(
	Backbone,
	Api
){
	'use strict';

	var Message = Backbone.Model.extend();

	var Chat = Backbone.Collection.extend({
		model : Message,
		url : '',

		fetch: function(){
			var self = this;
			Api.getChat( this.url ).complete( function( arg ){
                self.meta = arg.responseJSON['meta'];
                self.add( arg.responseJSON['chat'] );
                self.trigger( "change" );
            });
		}
	});

	return new Chat();

});