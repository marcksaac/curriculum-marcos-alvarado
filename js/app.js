var app = angular.module('app', ['ngMaterial', 'pascalprecht.translate']);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('grey')
    .backgroundPalette('grey');
});

app.config(function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
	    prefix: '../js/i18n/',
	    suffix: '.json'
	  });
  	$translateProvider.preferredLanguage('es');
	$translateProvider.useSanitizeValueStrategy('sceParameters');
});
