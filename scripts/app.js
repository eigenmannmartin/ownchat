define([
	'backbone',
	'models/settings',

	'views/welcome',
	'views/chat'

], function (
	Backbone,

	Settings,

	VWelcome,
	VChat
){
	'use strict';

	var Router = Backbone.Router.extend({
	routes:{
        "": "welcome",
        "chat": "chat" 
    },


    welcome: function(){
    	this.changePage( VWelcome );
        window.$.mobile.changePage( "#welcome" , { reverse: false, changeHash: false } );
    },

    chat: function(){
        console.log('chat');
		this.changePage( VChat );
        window.$.mobile.changePage( "#chat" , { reverse: false, changeHash: false } );
    },

 
    changePage:function ( page ) {
    	if( this.actualPage ){
    		this.actualPage.$el.hide();
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