angular.module('weatherApp.weather')
.factory('weatherModel',['weatherResource', function(weatherResource){
	function getWeatherReport(location){
		var lat = Number(location.lat).toFixed(6);
		var lon = Number(location.lon).toFixed(6);
		
		return weatherResource.get({lat:lat, lon:lon}, function(data){
			var dates={};
			data.timeseries.forEach(function(obj){
				var dateString = obj.validTime.slice(0, 10);
				if(!dates[dateString]){
					var date = new Date(dateString);
					var label = date.toLocaleDateString('sv-SE', {weekday:'long'});
					dates[dateString] = {label: label, data:[obj]};
				}
				else{
					dates[dateString].data.push(obj);
				}
			})
			data['dates'] = dates;
			return data;
		})
	}
	return {
			getWeatherReport:getWeatherReport
		}
}])