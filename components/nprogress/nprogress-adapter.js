define([ '../components/nprogress/nprogress'], function ( NProgress ) {

	NProgress.configure({ trickle: true });
	NProgress.configure({ showSpinner: false });
	
	return NProgress;
});