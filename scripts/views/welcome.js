define([ 
    'backbone',
    'models/settings',
    'text!templates/welcome.tpl'
], function(
    Backbone,
    Settings,
    Template
) {
    'use strict';
    var template = _.template( Template );

    var Main = Backbone.View.extend({
        el: $('#welcome [data-role="main"]'),
        display:'',
        events : {
            'click #ok': 'ok',
            'click #cancel': 'cancel'
        },

        ok: function( event ){
            event.preventDefault();
            Settings.set( {'ServerURL': $( '#ServerURL' ).val()} );
            Settings.saveSettings();
            window.app.navigate( 'chat', {trigger: true} )
        },

        cancel: function( event ){
            event.preventDefault();
            $( '#ServerURL' ).val('');
        },

        initialize: function(){
            this.render();
            this.added = false;
        },

        start: function(){
            this.render();
        },
        
        stop: function(){

        },

        render: function(){
            this.$el.html( template({
                ServerURL: Settings.get( "ServerURL" )
            }) )
            return this;
        },

    });

    return { 
        'main' : new Main()
    };
});