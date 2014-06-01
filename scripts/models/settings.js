define([
	'backbone'
],
function(
	Backbone
){
	'use strict';

	var Setting = Backbone.Model.extend({
		defaults:{
			"ServerURL": '',
			"SessionID": ''
		},

		saveSettings: function(){
	    	window.localStorage.setItem( "ServerURL" , this.get( 'ServerURL' ));
	    	window.localStorage.setItem( "SessionID" , this.get( 'SessionID' ));
	    },

	    loadSettings: function(){
	    	this.set( {'ServerURL' : window.localStorage.getItem( "ServerURL") } );
	    	this.set( {'SessionID' : window.localStorage.getItem( "SessionID") } );
	    },

	});

	return new Setting;

});