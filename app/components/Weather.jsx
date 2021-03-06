var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherDisplay = require('WeatherDisplay');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('open-weather-map');

var Weather = React.createClass({

  componentDidMount: function () {
    console.log(this.props.location);
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  getInitialState: function () {
    return {isLoading: false, hasError: false}
  },

  handleSearch: function (location) {
    this.setState({isLoading: true, errorMessage: undefined, location: undefined, temp: undefined});
    var self = this;
    openWeatherMap
      .getTemp(location)
      .then(function (temp) {
        self.setState({location: location, temp: temp, isLoading: false});
      }, function (e) {
        self.setState({isLoading: false, errorMessage: e.message});
      });
  },

  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherDisplay temp={temp} location={location}></WeatherDisplay>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = Weather;