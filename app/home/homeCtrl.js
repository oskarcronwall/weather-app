angular.module('weatherApp.home')

.controller('HomeCtrl', ['$scope', 'locationResource', 'weatherModel', function($scope, locationResource, weatherModel){
	$scope.selected = undefined;
	$scope.weatherReport = undefined;
	$scope.locations = locationResource.query();
	$scope.getWeather = function($item){
		var location = $item;
		$scope.weatherReport = weatherModel.getWeatherReport(location)
	}
	$scope.center = {
		lat: 59.33,
        lon: 18.11,
        zoom: 5} 
}])