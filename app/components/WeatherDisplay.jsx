var React = require('react');

var WeatherDisplay = ({temp, location}) => {
  return (
      <div>
        <h3 className="text-center">It is {temp}°F in {location}</h3>
      </div>
    );
}

module.exports = WeatherDisplay;