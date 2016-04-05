angular.module('weatherApp.home')

.controller('HomeCtrl', ['$scope', 'locationResource', function($scope, locationResource){
	$scope.selected = undefined;
	$scope.locations = locationResource.query();
}])