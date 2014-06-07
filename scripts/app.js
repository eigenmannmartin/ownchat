define([
	'backbone',
	'models/settings',

	'views/welcome',
	'views/chat',
    'views/settings'

], function (
	Backbone,

	Settings,

	VWelcome,
	VChat,
    VSettings
){
	'use strict';

	var Router = Backbone.Router.extend({
	routes:{
        "": "welcome",
        "welcome": "welcome",
        "chat": "chat",
        "settings": "settings"
    },

    welcome: function(){
        console.log('welcome');
    	this.changePage( VWelcome );
        window.$.mobile.changePage( "#welcome" , { reverse: false, changeHash: false } );
    },

    chat: function(){
        console.log('chat');
		this.changePage( VChat );
        window.$.mobile.changePage( "#chat" , { reverse: false, changeHash: false } );
    },

    settings: function(){
        console.log( 'settings' );
        this.changePage( VSettings );
        window.$.mobile.changePage( "#settings" , { reverse: false, changeHash: false } );
    },

 
    changePage:function ( page ) {
        if( this.actualPage ){
            this.actualPage.stop();
        }
    	this.actualPage = page;
    	this.actualPage.start();
    },

    start: function(){
        this.actualPage = false;
        this.models = {
        	settings : Settings
        }   

        this.models.settings.loadSettings();
    	Backbone.history.start();
        $( 'body' ).show();
    }

	});
	return new Router();
});