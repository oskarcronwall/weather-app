angular.module('weatherApp',[
	'ngRoute',
	'ngResource',
	'ui.bootstrap',
	'openlayers-directive',
	'weatherApp.home',
	'weatherApp.location',
	'weatherApp.weather'])

.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.otherwise({redirectTo: '/'});
	$locationProvider.html5Mode(true);
}]);