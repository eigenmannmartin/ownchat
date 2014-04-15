define([
	'backbone'
],
function(
	Backbone
){
	'use strict';

	var Setting = Backbone.Model.extend({
		defaults:{
			"ServerURL": ''
		},

		saveSettings: function(){
	    	window.localStorage.setItem( "ServerURL" , this.get( 'ServerURL' ));
	    },

	    loadSettings: function(){
	    	this.set( {'ServerURL' : window.localStorage.getItem( "ServerURL") } );
	    },

	});

	return new Setting;

});