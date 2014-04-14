define([
	'backbone',

	'views/test/page0',
	'views/test/page1',
	'views/test/page2'

], function (
	Backbone,

	Page0,
	Page1,
	Page2
){
	'use strict';

	var Router = Backbone.Router.extend({
	routes:{
        "":"home",
        "page1":"page1",
        "page2":"page2"
    },
 
    home:function () {
    	console.log("home");
        this.changePage(new Page0());
    },
 
    page1:function () {
    	console.log("page1");
        this.changePage(new Page1());
    },
 
    page2:function () {
    	console.log("page2");
        this.changePage(new Page2());
    },
 
    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        $.mobile.changePage($(page.el), {changeHash:false});
    },

    start: function(){
    	Backbone.history.start();
    }

	});
	return new Router();
});