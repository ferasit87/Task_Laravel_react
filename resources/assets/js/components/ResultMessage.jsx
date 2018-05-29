var React = require('react');

var TaskMessage = ({results, need}) => {
  return (
    <h3>It's it {results} in {need}.</h3>
  )
};

module.exports = TaskMessage;
