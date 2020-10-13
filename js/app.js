var app = angular.module('app', ['ngMaterial', 'pascalprecht.translate']);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('grey')
    .backgroundPalette('grey');
});
