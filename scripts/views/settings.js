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

    var View = Backbone.View.extend({
        el: $('#settings [role="main"]'),
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

    return new View();
});