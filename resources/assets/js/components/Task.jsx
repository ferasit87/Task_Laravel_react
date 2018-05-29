var React = require('react');
var TaskForm = require('TaskForm');
var ResultMessage = require('ResultMessage');
var searchData = require('searchData');
var TextForm = require('TextForm');

var Task = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
            results: [],
            need: '',
            title: '',
            body: '',
        }
    },
    handleSearch: function (need) {
        var that = this;

        this.setState({isLoading: true, need: need});
        if (need.length > 0) {
            searchData.search(need).then(function (results) {
                that.setState({
                    need: need,
                    results: results,
                    isLoading: false,
                    title: '',
                    body: '',
                });
            }, function (errorMessage) {
                that.setState({isLoading: false});

            });
        } else {
            that.setState({
                need: need,
                results: [],
                isLoading: false,
                title: '',
                body: '',
            });
        }
    },
    updateText: function (title, body) {
        var that = this;
        that.setState({
            results: [],
            isLoading: false,
            title: title,
            body: body,

        });
    },
    render: function () {
        var {need, results, isLoading, title, body} = this.state;
        var that = this;

        function renderMessage() {
            if (title === '' || title == 'undefined') {
                if (isLoading) {
                    return <div className="dropdown search">
                        Fetching data..
                    </div>;
                } else if (need) {
                    return <ResultMessage results={results} need={need} updateText={that.updateText}/>;
                }
            }
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <h3 className="panel-heading">Article search system</h3>
                                <TaskForm onSearch={this.handleSearch}/>
                                {renderMessage()}
                            </div>
                            <TextForm title={title} body={body}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Task;
