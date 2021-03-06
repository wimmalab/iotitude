// libs
import React from 'react';
import Moment from 'moment';
// components
import { MenuItem, SelectField } from 'material-ui';

export default class QueryType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'week'
        }
        this.queryDay = this.queryDay.bind(this);
        this.queryWeek = this.queryWeek.bind(this);
        this.queryMonth = this.queryMonth.bind(this);
        // !!! *4 bind this
    }
    updateState(value) {
        this.props.updateQueryType(value);
    }
    // !!! 1. add new method (examples below) if adding new types of time span queries
    queryMonth() {
        var today = Moment().format('YYYY-MM-DD');
        var monthAgo = Moment().subtract(30,'d').format('YYYY-MM-DD');
        var query = `start=${monthAgo}&end=${today}`;
        this.updateState(query);
    }
    queryWeek() {
        var today = Moment().format('YYYY-MM-DD');
        var weekAgo = Moment().subtract(7,'d').format('YYYY-MM-DD');
        var query = `start=${weekAgo}&end=${today}`;
        this.updateState(query);
    }
    queryDay() {
        var today = Moment().format('YYYY-MM-DD');
        var query = `start=${today}&end=${today}`;
        this.updateState(query);
    }
    // !!! 2. then add new case with method call
    updateQueryType(e, index, value) {
        this.setState({value});
        switch(value) {
            case 'default':
                this.updateState('?');
                break;
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
    // !!! 3. then add <MenuItem/> with corresponding values
    render() {
        return(
            <SelectField
                floatingLabelText="Time span"
                value={this.state.value}
                style={{maxWidth: '200px', marginLeft: '30px', marginRight: '30px'}}
                onChange={this.updateQueryType.bind(this)}>
                <MenuItem value={'week'} primaryText="Last 7 days" />
                <MenuItem value={'day'} primaryText="Today" />
                <MenuItem value={'month'} primaryText="Last 30 days" />
            </SelectField>
        );
    }
}
