angular.module('weatherApp.home',[])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	})
}])