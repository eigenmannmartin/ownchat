define([ 
    'backbone',
    'text!templates/chat.tpl'
], function(
    Backbone,
    Template
) {
    'use strict';
    var template = _.template( Template );

    var View = Backbone.View.extend({
        display:'',
        events : {
            'click #btn_back': 'back'
        },

        back: function(){
            window.app.navigate( '',  {trigger: true} )
        },

        initialize: function(){
            this.render();
            this.added = false;
        },

        render: function(){
            this.$el.html( template() )
            this.$el.show();
            return this;
        },

    });

    return new View();
});