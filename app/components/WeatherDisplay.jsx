var React = require('react');

var WeatherDisplay = ({temp, location}) => {
  return (
      <div>
        <h3>It is {temp} degrees in {location}</h3>
      </div>
    );
}

module.exports = WeatherDisplay;