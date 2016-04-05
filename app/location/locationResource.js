angular.module('weatherApp.location')
.factory('locationResource', ['$resource', function($resource){
	return $resource('/locations');
	/*var Locations = $resource('/locations');
	var locations = Locations.query(function(){
		//console.log(locations)
	})

	return {
		list: function(){
			return locations;
		}
	}*/


}])