define([ 
    'backbone',
    'models/settings',
    'text!templates/settings.tpl',

], function(
    Backbone,
    Settings,
    Template
) {
    'use strict';

    var template = _.template( Template );

    var Main = Backbone.View.extend({
        el: $('#settings [data-role="main"]'),
        display:'',
        events : {
            'click #save': 'save'
        },

        

        initialize: function(){
            this.chat = false;
        },

        start: function(){
            this.render();
        },

        stop: function(){
        },

        save: function(){
            Settings.set({ 'UserName': $('#username').val() });
            Settings.saveSettings();
        },

        render: function(){
            this.$el.html(template({
                username: Settings.get("UserName")
            }));
            return this;
        },

    });

    var Head = Backbone.View.extend({
        el: $('#settings [data-role="header"]'),
        events: {
            'click #back': 'back',
        },

        back: function( event ){
            event.preventDefault();
            window.app.navigate( 'chat', {trigger: true} )
        }

    });

    return { 
        'header': new Head(),
        'main' : new Main()
    };
});