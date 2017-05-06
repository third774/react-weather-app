var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherDisplay = require('WeatherDisplay');

var openWeatherMap = require('open-weather-map');

var Weather = React.createClass({

  getInitialState: function () {
    return {isLoading: false}
  },

  handleSearch: function (location) {
    this.setState({isLoading: true});
    var self = this;
    openWeatherMap
      .getTemp(location)
      .then(function (temp) {
        self.setState({location: location, temp: temp, isLoading: false});
      }, function (errorMessage) {
        self.setState({isLoading: false});
        alert(errorMessage);
      });
  },

  render: function () {
    var {isLoading, temp, location} = this.state;


    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
      return <WeatherDisplay temp={temp} location={location}></WeatherDisplay>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
      </div>
    );
  }
})

module.exports = Weather;