require.config({
    paths : {
        backbone : '../components/backbone/backbone',
        underscore : '../components/underscore/underscore',

        jquery : '../components/jquery/jquery-2.1.1',
        jqm: '../components/jquery/jquery.mobile-1.4.2.min',

        text : '../components/requirejs/text',
    },
    shim : {
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
    'jquery'
],
function (
    Backbone
){
    'use strict';
    
    $( document ).on( "mobileinit",
        // Set up the "mobileinit" handler before requiring jQuery Mobile's module
        function () {
            // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
            $.mobile.linkBindingEnabled = false;
            // Disabling this will prevent jQuery Mobile from handling hash changes
            $.mobile.hashListeningEnabled = false;
        }
    )


    require( [ 'app', 'jqm' ], function (App) {

        var Main = Backbone.Model.extend({
            initialize: function(){
                window.app = App;
                App.start();
            },
        });
        var main = new Main();
    });


});
