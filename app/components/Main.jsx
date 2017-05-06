var React = require('react');

var Nav = require('Nav');

var Main = props => {
    return (
      <div>
        <Nav></Nav>
        <h2>Main component</h2>
        {props.children}
      </div>
    );
  }

module.exports = Main;