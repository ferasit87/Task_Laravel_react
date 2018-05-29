var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router-dom');
var Task = require('Task');

ReactDOM.render(
    <Task/>,
    document.getElementById('root')
);