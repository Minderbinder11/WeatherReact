var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=326992b550c23617e9261aefa9b3a9d1&units=imperial';
const OPEN_WEATHER_MAP_FIVE_DAY = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=326992b550c23617e9261aefa9b3a9d1&units=imperial';
/*  REMOVED A q=London& after the ? in forecast
 * */


module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            //  if (res.data.cod && res.data.message) {
            //      throw new Error(res.data.message);
            //  } else {
            return res.data.main.temp;
            //  }
        }, function (res) {
            throw new Error(res.data.message);
        });
    },

    /*
     * The five day query now works,  I just need to watch the ES2015 videos to figure out how to
     * do the easy iteration and print of boxes with the weather.
     * */

    getFiveDayForecast: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_FIVE_DAY}&q=${encodedLocation}`;

        console.log(requestUrl);

        return axios.get(requestUrl).then(function (res) {

            console.log(res.data);
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {

                return res.data.list;
            }
        }, function (res) {
            console.log('bad data');
            throw new Error(res.data.message);
        });

    }
}