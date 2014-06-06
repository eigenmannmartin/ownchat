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

			if( this.length < 1 ){
				this.latestID = 0;
			} else {
				this.latestID = this.max( function( model ){ return model.get( "id" ) }).get( "id" );
			}

			Api.getChat( this.url, this.SessionID, this.latestID ).complete( function( arg ){

                self.meta = arg.responseJSON['meta'];
                
                Settings.set( { "SessionID": self.meta[ 'clientID' ] } );
                Settings.saveSettings();

                if( arg.responseJSON['chat'].length > 0 ){
                	self.add( arg.responseJSON['chat'] );
                	self.trigger( "change" );
            	}
            });

            this.timer = setInterval(function(){
				self.fetch();	
			}, 3000 );
		},

		stop: function(){
			clearInterval( this.timer );
		},

		submitMsg: function( msg ){
			var self = this;
			Api.submitMsg( this.url, msg, this.SessionID ).complete( function( arg ){
				self.add( arg.responseJSON );
                self.trigger( "change" );
            });

		}
	});

	return new Chat();

});