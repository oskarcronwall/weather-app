angular.module('weatherApp.location')
.factory('locationModel', ['locationResource', function(locationResource){
	function getLocations(){
		return locationResource.query();
	}
	return {
		getLocations: getLocations
	}
}])