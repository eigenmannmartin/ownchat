define([ 
    'backbone',
    'models/settings',
    'models/chat',
    'text!templates/chat.tpl',

    'views/message'
], function(
    Backbone,
    Settings,
    Chat,
    Template,

    VMessage
) {
    'use strict';

    var template = _.template( Template );

    var View = Backbone.View.extend({
        el: $('#chat [role="main"]'),
        display:'',
        events : {},

        initialize: function(){
            this.added = false;
            this.chat = false;
        },

        start: function(){
            Chat.url = Settings.get( "ServerURL" );
            Chat.fetch();

            this.listenTo( Chat, "change", this.render );
            this.render();
        },

        render: function(){
            var self = this;

            this.$el.show();

            this.messagebox = $( '#message-box' );
            Chat.each( function( message ){
                self.messagebox.append( new VMessage({ model: message }).$el );
            });

            

            

            this.$el.html(template());
            return this;
        },

    });

    return new View();
});