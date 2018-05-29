var React = require('react');
var TaskForm = require('TaskForm');
var ResultMessage = require('ResultMessage');
var searchData = require('searchData');

var Task = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (need) {
        var that = this;

        this.setState({isLoading: true});

        searchData.search(need).then(function (results) {
            that.setState({
                need: need,
                results: results,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function () {
        var {need, results, isLoading} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching data...</h3>;
            } else if (results && need) {
                return <ResultMessage results={results} need={need}/>;
            }
        }

        return (
            <div>
                <h3>Task Component</h3>
                <TaskForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Task;
