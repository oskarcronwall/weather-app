angular.module('weatherApp.map')
.factory('mapModel', [function(){
	var init = function(){
		return {
			lat: 59.33,
        	lon: 18.11,
        	zoom: 5
        }
    }
    var center = function(coords){
     	return {
     		lat: Number(coords.lat),
     		lon: Number(coords.lon),
     		zoom:8
     	}
    }

	return{
		init:init,
		center:center,
		reset:init
	}

}])