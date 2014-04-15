define([
	'backbone',

	'views/welcome'

], function (
	Backbone,

	PWelcome
){
	'use strict';

	var Router = Backbone.Router.extend({
	routes:{
        "":"welcome"
    },


    welcome: function(){
    	this.changePage( PWelcome );
    },

 
    changePage:function ( page ) {
    	if( this.actualPage ){
    		this.actualPage.$el.remove;
    	}

    	this.actualPage = page;
    	this.main.html( page.$el );
    },

    start: function(){
        this.actualPage = false;
        this.main = $( 'body' );

    	Backbone.history.start();
    }

	});
	return new Router();
});