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
					dates[dateString] = {
						label: weekDayInSwedish(dateString), 
						data:[obj]
					};
				}
				else{
					dates[dateString].data.push(obj);
				};
			})
			
			for (var date in dates){
				dates[date]['tempMax'] = maxValue('t', dates[date]['data']).toFixed(1);
				dates[date]['tempMin'] = minValue('t', dates[date]['data']).toFixed(1);
				dates[date]['windSpeedMedian'] = median('ws', dates[date]['data']).toFixed(1);
				dates[date]['windSpeedAverage'] = average('ws', dates[date]['data']).toFixed(1);
				dates[date]['airPressureAverage'] = average('msl', dates[date]['data']).toFixed(1);
			}

			data['dates'] = dates;
			console.log(data);
			return data;
		})
	};

	function weekDayInSwedish(date){
		var dateObj = new Date(date);
		return dateObj.toLocaleDateString('sv-SE', {weekday:'long'});
	};
	function filterOnKey(key, arr){
		return arr.map(function(obj){
			return obj[key];
		});
	};
	function maxValue(key, arr){
		var f = filterOnKey(key, arr);
		return Math.max(...f);
	};

	function minValue(key,arr){
		var f = filterOnKey(key, arr)
		return Math.min(...f);
	};

	function average(key, arr){
		var f = filterOnKey(key, arr);
		var sum = f.reduce(function(a, b){
			return a + b;
		})
		return sum / arr.length;
	};

	function median(key, arr){
		var f = filterOnKey(key, arr);
		var m = f.sort(function(a, b) {
	        return a - b;
	    });

	    var middle = Math.floor((m.length - 1) / 2);
	    if (m.length % 2) {
	        return m[middle];
	    } else {
	        return (m[middle] + m[middle + 1]) / 2.0;
	    };
	};

	return {
			getWeatherReport:getWeatherReport
		};
}])