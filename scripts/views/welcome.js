define([ 
    'backbone',
    'text!templates/welcome.tpl'
], function(
    Backbone,
    Template
) {
    'use strict';
    var template = _.template( Template );

    var View = Backbone.View.extend({
        display:'',
        events : {
            'click #ok': 'ok',
            'click #cancel': 'cancel'
        },

        ok: function( event ){
            event.preventDefault();
            console.log( $( '#ServerURL' ).val() );
            window.app.navigate( 'chat', {trigger: true} )
        },

        cancel: function( event ){
            event.preventDefault();
            console.log("cancel")
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

        render: function(){
            this.$el.html( template() )
            this.$el.show();
            return this;
        },

    });

    return new View();
});