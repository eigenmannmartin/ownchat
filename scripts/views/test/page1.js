define([ 'backbone',
], function(
    Backbone
) {
    'use strict';
    var template = _.template( $('#page1').html() );

    var View = Backbone.View.extend({
        display:'',
        events : {},

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