var axios = require('axios');

const OPEN_WEATHER_API_KEY = "19d825972266c0a7957ec1e246a60fb3";

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_API_KEY}&units=imperial`;

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error("Unable to fetch data for that location.");
    })
  }
};