var React = require('react');

var About = props => {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to the React Weather App!</p>
      <p>This was created following&nbsp; 
        <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content">
          The Complete React Web App Developer Course
        </a> on Udemy. You can view the source code on my <a href="https://github.com/third774/react-weather-app">
          GitHub page
        </a>.
      </p>
    </div>
  );
}

module.exports = About;