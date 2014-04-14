define([ 'underscore_lib' ], function( _ ) {

	var keyMap = {
	    backspace: 8,
	    tab: 9,
	    enter: 13,
	    shift: 16,
	    ctrl: 17,
	    alt: 28,
	    capslock: 20,
	    escape: 27,
	    pageup: 33,
	    pagedown: 34,
	    end: 35,
	    home: 36,
	    left: 37,
	    up: 38,
	    right: 39,
	    down: 40,
	    insert: 45,
	    'delete': 46
	  };

	  //| f1 to f12
	  for (var n = 1; n <= 12; n++) keyMap['f' + n] = 111 + n;

	_.keyMap = keyMap;

	return _;
});