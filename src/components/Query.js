// libs
var React = require('react');
var Moment = require('moment');

class Query extends React.Component {
    constructor(props) {
        super(props);
        this.queryDay = this.queryDay.bind(this);
        this.queryWeek = this.queryWeek.bind(this);
    }
    updateState(value) {
        this.props.updateQueryType(value);
    }
    queryMonth() {
        var today = Moment().format('YYYY-MM-DD');
        var monthAgo = Moment().subtract(30,'d').format('YYYY-MM-DD');
        var query = `/range?start=${monthAgo}&end=${today}`;
        this.updateState(query);
    }
    queryWeek() {
        var today = Moment().format('YYYY-MM-DD');
        var weekAgo = Moment().subtract(7,'d').format('YYYY-MM-DD');
        var query = `/range?start=${weekAgo}&end=${today}`;
        this.updateState(query);
    }
    queryDay() {
        var today = Moment().format('YYYY-MM-DD');
        var query = ('/' + today);
        this.updateState(query);
    }
    updateQueryType(e) {
        var queryType = e.target.value;
        switch(queryType) {
            case 'day':
                this.queryDay();
                break;
            case 'week':
                this.queryWeek();
                break;
            case 'month':
                this.queryMonth();
        }
    }
    componentDidMount() {

    }
    render() {
        return(
            <select name="queryType" onChange={this.updateQueryType.bind(this)}>
                <option value="default">--</option>
                <option value="day">1 day</option>
                <option value="week">7 days</option>
                <option value="month">30 days</option>
            </select>
        );
    }
}

module.exports = Query;
