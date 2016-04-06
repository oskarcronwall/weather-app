angular.module('weatherApp.home')

.controller('HomeCtrl', ['$scope', 'locationResource', 'weatherModel', function($scope, locationResource, weatherModel){
	$scope.selected = undefined;
	$scope.weatherReport = undefined;
	$scope.locations = locationResource.query();

	$scope.selectLocation = function($item, $label){
		$scope.locationName = $label;
		$scope.weatherReport = weatherModel.getWeatherReport($item)
	}
	$scope.center = {
		lat: 59.33,
        lon: 18.11,
        zoom: 5} 
}])