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
				url: uri
			});
			return promise;
		},

		getChat: function( url, SessionID ){
			var self = this;

			var promise = $.ajax({
				crossDomain: true,
				dataType: "json",
				type: 'GET',
				url: url + "?SessionID=" + SessionID
			});
			return promise;
		},

		submitMsg: function( url, msg, SessionID ){
			var self = this;

			var promise = $.ajax({
				crossDomain: true,
				dataType: "json",
				type: 'GET',
				url: url + '/?SessionID=' + SessionID + '&action=submit&content=' + msg
			});
			return promise;
		},


	});

	return new Api();
});

