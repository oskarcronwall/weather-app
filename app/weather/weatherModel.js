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
					var label = weekDayInSwedish(dateString);
					dates[dateString] = {label: label, data:[obj]};
				}
				else{
					dates[dateString].data.push(obj);
				}
			})
			
			for (var date in dates){
				dates[date]['tempMax'] = maxValue('t', dates[date]['data']);
				dates[date]['tempMin'] = minValue('t', dates[date]['data']);
			}

			data['dates'] = dates;
			console.log(data);
			return data;
		})
	}

	function weekDayInSwedish(date){
		var dateObj = new Date(date);
		return dateObj.toLocaleDateString('sv-SE', {weekday:'long'});
	}
	function filterOnKey(key, arr){
		var filter = arr.map(function(obj){
			return obj[key];
		})
		return filter;
	}
	function maxValue(key, arr){
		return Math.max(...filterOnKey(key, arr));
	}

	function minValue(key,arr){
		return Math.min(...filterOnKey(key, arr));
	}

	function average(key, arr){
		var sum = arr.reduce(function(a,b){
			return a[key] + b[key]
		});
		return sum / arr.length;

	}

	return {
			getWeatherReport:getWeatherReport
		}
}])