define([ 'backbone_lib', 'backbone_tasty', 'backbone_relational' ], function ( Backbone ) {

	getCookie = function(){
		var name = 'csrftoken';

		// read https://docs.djangoproject.com/en/dev/ref/contrib/csrf/#ajax for more informations
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		Backbone.Tastypie.csrfToken = cookieValue
		return cookieValue;
	};


	Backbone.Tastypie.getCsrfToken = getCookie;
	Backbone.Tastypie.getCsrfToken();	
	
	return Backbone;
});