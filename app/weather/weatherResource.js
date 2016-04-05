angular.module('weatherApp.weather')
.factory('weatherResource', ['$resource', function($resource){
	return $resource(
		'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/:lat/lon/:lon/data.json',
		{
			lat:"@lat",
			lon:"@lon"
		});
}])