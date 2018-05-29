var React = require('react');

var TaskForm = React.createClass({
    onChange: function (e) {
        var need = this.refs.need.value;
        this.props.onSearch(need);
    },
    render: function () {
        return (
            <div>
                <div className="panel-heading">search article by title</div>
                <div className="panel-body">
                    <input type="text" ref="need" placeholder="title" onChange={this.onChange}/>
                </div>
            </div>
        );
    }
});

module.exports = TaskForm;
