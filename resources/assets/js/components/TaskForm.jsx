var React = require('react');

var TaskForm = React.createClass({
    onChange: function (e) {
    var need = this.refs.need.value;

        if (need.length > 0) {
            this.props.onSearch(need);
        }
  },
  render: function () {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-heading">Task Form Component</div>

                <div className="panel-body">

                      <input type="text" ref="need" onChange={this.onChange}/>

                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
});

module.exports = TaskForm;
