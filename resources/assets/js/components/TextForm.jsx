var React = require('react');

var TextForm = React.createClass({
    getDefaultProps: function () {
        return {
            title: '',
            body:''
        }
    },
    render: function () {

        return (

                <div className="panel-body">
                    <h2>{this.props.title}</h2>
                    <h5>{this.props.body}</h5>
                </div>

        );
    }
});

module.exports = TextForm;
