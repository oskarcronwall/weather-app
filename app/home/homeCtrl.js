angular.module('weatherApp.home')

.controller('HomeCtrl', ['$scope', 'locationResource', function($scope, locationResource){
	$scope.locations = locationResource.query();
}])