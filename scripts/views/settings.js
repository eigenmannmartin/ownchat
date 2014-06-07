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
        events : {},

        

        initialize: function(){
            this.chat = false;
        },

        start: function(){
            this.render();
        },

        stop: function(){
        },

        render: function(){
            var self = this;
            this.$el.html(template());
            return this;
        },

    });

    return new View();
});