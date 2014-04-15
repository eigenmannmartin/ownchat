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
    },

    chat: function(){
		this.changePage( VChat );
    },

 
    changePage:function ( page ) {
    	if( this.actualPage ){
    		this.actualPage.$el.hide();
    	}

    	this.actualPage = page;
    	this.actualPage.render();
    	this.actualPage.$el.show();
    	this.main.append( page.$el );
    },

    start: function(){
        this.actualPage = false;
        this.main = $( 'body' );

        this.models = {
        	settings : Settings
        }   


        this.models.settings.loadSettings();

    	Backbone.history.start();
    }

	});
	return new Router();
});