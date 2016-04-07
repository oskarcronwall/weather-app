angular.module('weatherApp.location')
.factory('locationResource', ['$resource', function($resource){
	return $resource('/locations');
}])