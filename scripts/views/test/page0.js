define([ 'backbone',
], function(
    Backbone
) {
    'use strict';
    var template = _.template( $('#home').html() );

    var View = Backbone.View.extend({
        display:'',
        events : {
            'click': 'click'
        },


        click: function( args ){
            console.log( args );
        },

        initialize: function(){
            this.render();
        },

        render: function(){
            this.$el.html( template() )
            this.$el.show();
            return this;
        },

    });

    return View;
});