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
            this.added = false;
            this.chat = false;
        },

        start: function(){
            var self = this;
            Api.getChat( Settings.get( "ServerURL" ) ).complete( function( arg ){
                self.chat = arg.responseText;
                self.render();
            });

            this.render();
        },

        render: function(){
            this.$el.html( template({
                content: this.chat,
            }) );
            this.$el.show();
            return this;
        },

    });

    return new View();
});