require.config({
    paths : {
        backbone : '../components/backbone/backbone',
        //backbone_shortcut: '../components/backbone/backbone-shortcuts',
        //backbone_autocomplete: '../components/backbone/backbone-autocomplete',
        underscore : '../components/underscore/underscore',

        jquery : '../components/jquery/jquery',
        jqm: '../components/jquery/jquery.mobile-1.4.2.min',

        text : '../components/requirejs/text',

        logger : 'objects/logger',

    },
    shim : {
        jquery : {
            exports : '$'
        },
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['underscore'],
            exports : 'Backbone'
        },
        logger : {
            exports : 'L'
        }
    }
});

require([
    'backbone',
    'app',
    'jquery',
    'jqm'
],
function (
    Backbone,
    App
){
    'use strict';

    var Main = Backbone.Model.extend({
        initialize: function(){
            //console.log("hi!");
            //console.log( window.localStorage.getItem( 'config__server_name' ) );
            window.app = App;
            App.start();
        },


    });
    var main = new Main();
});
