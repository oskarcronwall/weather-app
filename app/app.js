angular.module('weatherApp',['ngRoute','ngResource', 'weatherApp.home', 'weatherApp.location'])

.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.otherwise({redirectTo: '/'});
	$locationProvider.html5Mode(true);
}]);