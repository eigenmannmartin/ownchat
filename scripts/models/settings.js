define([
	'backbone',
	'objects/api'
],
function(
	Backbone,
	Api
){
	'use strict';

	var Setting = Backbone.Model.extend({
		defaults:{
			"ServerURL": '',
			"SessionID": '',
			"UserName": ''
		},

		saveSettings: function(){
			if( this.get( "ServerURL" ) !== window.localStorage.setItem( "ServerURL" , this.get( 'ServerURL' )) ){	
	    		window.localStorage.setItem( "SessionID" , "" );
	    		window.localStorage.setItem( "UserName" , "" );				
			}

	    	window.localStorage.setItem( "ServerURL" , this.get( 'ServerURL' ));
	    	window.localStorage.setItem( "SessionID" , this.get( 'SessionID' ));
	    	window.localStorage.setItem( "UserName" , this.get( 'UserName' ));

	    	Api.setUsername( this.get( "ServerURL" ), this.get( "SessionID" ), this.get( "UserName" ) );
	    },

	    loadSettings: function(){
	    	this.set( {'ServerURL' : window.localStorage.getItem( "ServerURL") } );
	    	this.set( {'SessionID' : window.localStorage.getItem( "SessionID") } );
	    	this.set( {'UserName' : window.localStorage.getItem( "UserName") } );
	    },

	});

	return new Setting;

});