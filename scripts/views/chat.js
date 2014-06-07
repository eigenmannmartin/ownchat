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
        events : {
            'click #send': 'send'
        },

        send: function( event ){
            Chat.submitMsg( $( '#message-input' ).val() );
            $( '#message-input' ).val("");
            event.preventDefault();
        },

        initialize: function(){
            this.chat = false;
        },

        start: function(){
            Chat.url = Settings.get( "ServerURL" );
            Chat.SessionID = Settings.get( "SessionID" );
            Chat.start();
            this.listenTo( Chat, "change", this.update );
            this.render();
        },

        stop: function(){
            this.stopListening();
            Chat.stop();
        },

        update: function(){
            var self = this;
            this.messagebox = $( '#message-box' );
            this.messagebox.empty();
            Chat.each( function( message ){
                self.messagebox.append( new VMessage({ model: message }).$el );
            });
            $( "html, body" ).animate({ scrollTop: $(document).height()+200 }, "slow");
        },

        render: function(){
            var self = this;
            this.$el.html(template());
            this.update();
            return this;
        },

    });

    return new View();
});