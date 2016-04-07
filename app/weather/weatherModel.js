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
				dates[date]['tempMax'] = max(filterByKey('t', dates[date]['data'])).toFixed(0);
				dates[date]['tempMin'] = min(filterByKey('t', dates[date]['data'])).toFixed(0);
				dates[date]['windSpeedMedian'] = median(filterByKey('ws', dates[date]['data'])).toFixed(1);
				dates[date]['windSpeedAverage'] = average(filterByKey('ws', dates[date]['data'])).toFixed(1);
				dates[date]['airPressureAverage'] = average(filterByKey('msl', dates[date]['data'])).toFixed(1);
				dates[date]['windDirectionAverage'] = direction(
					filterByKey('ws',dates[date]['data']),
					filterByKey('wd',dates[date]['data'])).toFixed(0);
			}

			data['dates'] = dates;
			console.log(data);
			return data;
		})
	};

	function filterByKey(key, a){
		return a.map(function(obj){
			return obj[key];
		});
	};

	function deg2rad(deg){
		return (deg * Math.PI) / 180;
	}

	function rad2deg(rad){
		return (rad * 180) / Math.PI;
	}

	function direction(speed, direction){
		var x = [];
		var y = [];
		direction.forEach(function(element, index){
			var rad = deg2rad(element)
			x.push(Math.cos(rad)*speed[index]);
			y.push(Math.sin(rad)*speed[index]);
		});

		var avgX = average(x);
		var avgY = average(y);

		var result = rad2deg(Math.atan2(avgY, avgX));
		if (result < 0){
			return result += 360;
		}
		else{
			return result;
		}
	}

	function weekDayInSwedish(date){
		var dateObj = new Date(date);
		return dateObj.toLocaleDateString('sv-SE', {weekday: 'long'});
	};

	function max(a){
		return Math.max(...a);
	};

	function min(a){
		return Math.min(...a);
	};

	function average(arr){
		var sum = arr.reduce(function(a, b){
			return a + b;
		});
		return sum / arr.length;
	}

	function median(arr){
		var m = arr.sort(function(a, b) {
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