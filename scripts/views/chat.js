define([ 
    'backbone',
    'models/settings',
    'models/chat',
    //'objects/api',
    'text!templates/chat.tpl',

    'views/message'
], function(
    Backbone,
    Settings,
    Chat,
    //Api,
    Template,

    VMessage
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
            Chat.url = Settings.get( "ServerURL" );
            Chat.fetch();

            this.listenTo( Chat, "change", this.render );
            this.render();
        },

        render: function(){
            var self = this;

            this.$el.html( template() );

            this.messagebox = $( '#message-box' );
            Chat.each( function( message ){
                self.messagebox.append( new VMessage({ model: message }).$el );
            });

            

            

            this.$el.show();
            return this;
        },

    });

    return new View();
});