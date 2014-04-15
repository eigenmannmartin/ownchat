define([ 
    'backbone',
    'models/settings',
    'objects/api',
    'text!templates/chat.tpl'
], function(
    Backbone,
    Settings,
    Api,
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
            console.log( Api.getChat( Settings.get( "ServerURL" ) ) );
            this.$el.html( template({
                content: Settings.get( "ServerURL" )
            }) );
            this.$el.show();
            return this;
        },

    });

    return new View();
});