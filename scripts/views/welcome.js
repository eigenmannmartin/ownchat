define([ 'backbone',
], function(
    Backbone
) {
    'use strict';
    var template = _.template( $('#welcome').html() );

    var View = Backbone.View.extend({
        display:'',
        events : {
            'click #ok': 'ok',
            'click #cancel': 'cancel'
        },

        ok: function( args ){
            console.log( 'ok' );
        },

        cancel: function( args ){
            console.log( 'cancel' );
        },


        link: function( args ){
            window.app.navigate( args.target.attributes['href'].value, {trigger: true}  );
            args.preventDefault();
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