define([ 'backbone',
], function(
    Backbone
) {
    'use strict';
    var template = _.template( $('#page1').html() );

    var View = Backbone.View.extend({
        display:'',
        events : {
            'click .link': 'link'
        },


        link: function( args ){
            window.app.navigate( args.target.attributes['href'].value, {trigger: true}  );
            args.preventDefault();
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

    return new View();
});