define([
	'backbone',
],
function(
	Backbone
){
	'use strict';

	var Api = Backbone.Model.extend({

		ajaxCall: function( uri, type, data ){
			var promise = $.ajax({
				type: type,
				data: data,
				url: uri,
				cache: false,
			});
			return promise;
		},

		getChat: function( url ){
			var self = this;

			var promise = $.ajax({
				type: 'GET',
				url: url
			});
			return promise;
		},


	});

	return new Api();
});

