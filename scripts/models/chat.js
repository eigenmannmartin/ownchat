define([
	'backbone',
	'objects/api',
	'models/settings'
],
function(
	Backbone,
	Api,
	Settings
){
	'use strict';

	var Message = Backbone.Model.extend();

	var Chat = Backbone.Collection.extend({
		model : Message,
		url : '',

		fetch: function(){
			var self = this;
			Api.getChat( this.url, this.SessionID ).complete( function( arg ){
				self.reset();

                self.meta = arg.responseJSON['meta'];
                
                Settings.set( { "SessionID": self.meta[ 'clientID' ] } );
                Settings.saveSettings();

                self.add( arg.responseJSON['chat'] );
                self.trigger( "change" );
            });

            setInterval(function(){
				self.fetch();	
			}, 3000 );
		},

		submitMsg: function( msg ){
			var self = this;
			Api.submitMsg( this.url, msg, this.SessionID ).complete( function( arg ){
				self.reset();
                self.fetch();
            });

		}
	});

	return new Chat();

});