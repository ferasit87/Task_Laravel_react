var React = require('react');


var ResultMessage = React.createClass({
    getDefaultProps: function () {
        return {
            results: []
        }
    },
    handleText: function (title,body) {
        this.props.updateText(title, body);
    },
    render: function () {
        var {need, results} = this.props;
        var that = this;
        if (results.length > 0) {
            return (
                <div className="dropdown search">
                    <ul className="list-group">
                        {results.map((result, i) => <li className="list-group-item list-hover-arrow" key={i}  onClick={() => that.handleText(result.title,result.body)}>{result.title}</li>)}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="dropdown search">
                    <ul className="list-group">
                        <li className="list-group-item">No result founds for "{need}"</li>
                    </ul>
                </div>
            )
        }

    }
});

module.exports = ResultMessage;