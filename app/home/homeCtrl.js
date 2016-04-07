angular.module('weatherApp.home')

.controller('HomeCtrl', [
	'$scope',
	'locationResource',
	'weatherModel',
	'mapModel', function($scope, locationResource, weatherModel, mapModel){
	$scope.selected = undefined;
	$scope.weatherReport = undefined;
	$scope.locations = locationResource.query();
	$scope.center = mapModel.init();

	$scope.selectLocation = function($item, $label){
		$scope.locationName = $label;
		$scope.weatherReport = weatherModel.getWeatherReport($item)
		$scope.center = mapModel.center($item);
	}
}])