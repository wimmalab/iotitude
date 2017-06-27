// libs
var React = require('react');

class Query extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
        this.queryDay = this.queryDay.bind(this);
    }

    updateState(value) {
        this.setState({
            query: value
        });
        console.log(this.state);
        this.props.updateQueryType(value);
    }

    queryDay() {
        // get today in (YYYY-MM-DD)
        var rightNow = new Date();
        rightNow.setMinutes(rightNow.getMinutes() - rightNow.getTimezoneOffset());
        var today = rightNow.toISOString().slice(0,10);
        var query = ('/' + today);
        this.updateState(query);
    }

    updateQueryType(e) {
        var queryType = e.target.value;
        console.log(this);
        if (queryType === 'day') {
            this.queryDay();
        } else if (queryType === 'week') {
            console.log('query: week');
        } else console.log('Vittu');
        console.log(queryType);
    }

    componentDidMount() {
        this.queryDay();
    }

    render() {
        return(
            <form>
                <select name="queryType" onChange={this.updateQueryType.bind(this)}>
                    <option value="default">--</option>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                </select>
            </form>
        );
    }
}

module.exports = Query;
