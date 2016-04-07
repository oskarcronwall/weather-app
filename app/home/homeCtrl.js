angular.module('weatherApp.home')

.controller('HomeCtrl', [
	'$scope',
	'locationModel',
	'weatherModel',
	'mapModel', function($scope, locationModel, weatherModel, mapModel){
	$scope.selected = undefined;
	$scope.weatherReport = undefined;
	$scope.locations = locationModel.getLocations();
	$scope.center = mapModel.init();

	$scope.selectLocation = function($item, $label){
		$scope.locationName = $label;
		$scope.weatherReport = weatherModel.getWeatherReport($item)
		$scope.center = mapModel.center($item);
	}
}])