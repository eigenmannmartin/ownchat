define([ 
    'backbone',
    'models/chat',
    'text!templates/message.tpl'
], function(
    Backbone,
    Chat,
    Template
) {
    'use strict';
    var template = _.template( Template );

    var View = Backbone.View.extend({
        display:'',
        initialize: function( options ){
            return this.render().$el;
        },

        render: function(){
            //console.log( this.model.get( 'clientID' ) )
            //console.log( Chat['meta']['clientID'])
            this.$el.html( template({
                message: this.model,
                self: ( this.model.get( 'clientID' ) === Chat['meta']['clientID'] )
            }) );
            this.$el.show();
            return this;
        },

    });

    return View;
});