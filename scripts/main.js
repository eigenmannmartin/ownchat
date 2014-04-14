require.config({
    paths : {
        // better try this: http://stackoverflow.com/questions/13331484/requirejs-shim-want-to-register-backbone-plugins-directly-into-core-backbone
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
    'jqm',
    'jquery',
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
            this.setup_jqm();
            App.start();
        },


        setup_jqm: function(){
             $(document).bind("mobileinit", function () {
                $.mobile.ajaxEnabled = false;
                $.mobile.linkBindingEnabled = false;
                $.mobile.hashListeningEnabled = false;
                $.mobile.pushStateEnabled = false;

                // Remove page from DOM when it's being replaced
                $('div[data-role="page"]').live('pagehide', function (event, ui) {
                    $(event.currentTarget).remove();
                });
            });
        },

    });
    var main = new Main();
});
