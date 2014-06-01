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

    var View = Backbone.View.extend({
        el: $('#welcome [role="main"]'),
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


        link: function( event ){
            event.preventDefault()
            window.app.navigate( event.target.attributes['href'].value, {trigger: true}  );
        },

        initialize: function(){
            this.render();
            this.added = false;
        },

        start: function(){
            this.render();
        },

        render: function(){
            this.$el.html( template({
                ServerURL: Settings.get( "ServerURL" )
            }) )
            return this;
        },

    });

    return new View();
});